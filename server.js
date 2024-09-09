import express from 'express';
import bodyParser from 'body-parser';
import admin from 'firebase-admin';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

// Load environment variables
dotenv.config();

// Initialize Firebase Admin SDK
admin.initializeApp({
    credential: admin.credential.cert({
        private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
        client_email: process.env.FIREBASE_CLIENT_EMAIL,
        project_id: process.env.FIREBASE_PROJECT_ID,
    }),
});

const app = express();
app.use(bodyParser.json());

const db = admin.firestore();
const auth = admin.auth(); // Firebase Authentication

// Middleware for checking authentication and admin role
async function checkAuth(req, res, next) {
    const token = req.headers.authorization?.split(' ')[1]; // Bearer <token>
    try {
        const decodedToken = await auth.verifyIdToken(token);
        req.user = decodedToken;
        next();
    } catch (error) {
        res.status(401).send('Unauthorized');
    }
}

async function checkAdmin(req, res, next) {
    if (req.user && req.user.role === 'admin') {
        next();
    } else {
        res.status(403).send('Forbidden: Admins only');
    }
}

// Nodemailer configuration for email notifications
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
});

// Route to sign up new users
// Route để đăng ký người dùng mới
app.post('/signup', async (req, res) => {
    const { email, password, role } = req.body;
    try {
        // Tạo một người dùng mới trong Firebase Authentication
        const userRecord = await auth.createUser({
            email,
            password,
            emailVerified: false,
            disabled: false,
        });

        // Thiết lập quyền tùy chỉnh (custom claims) cho người dùng
        await auth.setCustomUserClaims(userRecord.uid, { role });

        // Lưu thông tin người dùng vào Firestore
        const userRef = db.collection('users').doc(userRecord.uid);
        await userRef.set({
            email,
            role,
            createdAt: new Date(), // Thời gian tạo người dùng
        });

        res.status(201).send('Tạo người dùng thành công và đã lưu vào Firestore');
    } catch (error) {
        res.status(400).send(error.message);
    }
});


// Route to log in users (Firebase Authentication)
app.post('/login', async (req, res) => {
    res.send('Login handled on frontend using Firebase Auth');
});

// Admin: Add a new course
app.post('/courses', checkAuth, checkAdmin, async (req, res) => {
    const { name, description, teacher, startDate, endDate, price } = req.body;
    try {
        const courseRef = await db.collection('courses').add({
            name,
            description,
            teacher,
            startDate,
            endDate,
            price,
        });
        res.status(201).send(`Course added with ID: ${courseRef.id}`);
    } catch (error) {
        res.status(500).send('Error adding course: ' + error.message);
    }
});

// Get list of courses for users
app.get('/courses', checkAuth, async (req, res) => {
    const snapshot = await db.collection('courses').get();
    const courses = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.status(200).send(courses);
});

// Register for a course (User)
app.post('/courses/:courseId/register', checkAuth, async (req, res) => {
    const courseId = req.params.courseId;
    try {
        await db.collection('courseRegistrations').add({
            userId: req.user.uid,
            courseId,
            registeredAt: new Date(),
        });

        // Send email notification
        const user = await auth.getUser(req.user.uid);
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: user.email,
            subject: 'Course Registration Confirmation',
            text: `You have successfully registered for the course with ID: ${courseId}`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return res.status(500).send('Error sending email: ' + error.message);
            }
            res.status(200).send('Registration successful and email sent');
        });
    } catch (error) {
        res.status(500).send('Error registering for course: ' + error.message);
    }
});

// Admin: Add a lecture to a course
app.post('/courses/:courseId/lectures', checkAuth, checkAdmin, async (req, res) => {
    const courseId = req.params.courseId;
    const { title, description, videoUrl } = req.body;
    try {
        await db.collection('courses').doc(courseId).collection('lectures').add({
            title,
            description,
            videoUrl,
        });
        res.status(201).send('Lecture added successfully');
    } catch (error) {
        res.status(500).send('Error adding lecture: ' + error.message);
    }
});

// Get lectures for a course (User must be registered)
app.get('/courses/:courseId/lectures', checkAuth, async (req, res) => {
    const courseId = req.params.courseId;
    try {
        const registrations = await db.collection('courseRegistrations')
            .where('userId', '==', req.user.uid)
            .where('courseId', '==', courseId)
            .get();

        if (registrations.empty) {
            return res.status(403).send('You are not registered for this course');
        }

        const lecturesSnapshot = await db.collection('courses').doc(courseId).collection('lectures').get();
        const lectures = lecturesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.status(200).send(lectures);
    } catch (error) {
        res.status(500).send('Error retrieving lectures: ' + error.message);
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
