Gửi yêu cầu đăng nhập:
Tạo một POST request trên Postman đến endpoint đăng nhập của Firebase:
https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDQpLXtrIWE2rrG9s9yDnQC58iJGq-lXbE


{
"email": "duongthu@fpt.edu.vn",
"password": "thu123",
"returnSecureToken": true
}


"kind": "identitytoolkit#VerifyPasswordResponse",
"localId": "4v3ux3uqbKTJCDDyMs2IPZRpqAp1",
"email": "duongthu@fpt.edu.vn",
"displayName": "",
"idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImNjNWU0MTg0M2M1ZDUyZTY4ZWY1M2UyYmVjOTgxNDNkYTE0NDkwNWUiLCJ0eXAiOiJKV1QifQ.eyJyb2xlIjoiYWRtaW4iLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcWxraC1lMzA1ZSIsImF1ZCI6InFsa2gtZTMwNWUiLCJhdXRoX3RpbWUiOjE3MjU4NzA4MjQsInVzZXJfaWQiOiI0djN1eDN1cWJLVEpDRER5TXMySVBaUnBxQXAxIiwic3ViIjoiNHYzdXgzdXFiS1RKQ0REeU1zMklQWlJwcUFwMSIsImlhdCI6MTcyNTg3MDgyNCwiZXhwIjoxNzI1ODc0NDI0LCJlbWFpbCI6ImR1b25ndGh1QGZwdC5lZHUudm4iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZHVvbmd0aHVAZnB0LmVkdS52biJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.tguOc_rKx6w2aU0aR3-DVZ9kM_CYj9UdPQMRO47Crn2tJLl8y9cPrHQ7A0sNZ_3o7ZnAATRv6hRIA8rZpOGzuCL41jLRvAMRZN3ZtyaPdsaFgpEO01EUbqrmIwna233Cn48YdY6yz5aprMNUB-gLeQGxVpkBZL3RMpxAXz43rVIM1dPUQB6YBBBKamoi8XmOcx3ciJymV9SH3wO7s_hp4OYZy7YIaJORzcAGXefUzG-z_GKLfUZABJwnEbEIAIahaLUmEenCARBf71KmPsHpthY2DqfFbEDOwi2jiPzvExLpsJLDyvtwBCrzycwIL6DV_dzQpySJ4LbLelnw5tJmAg",
"registered": true,
"refreshToken": "AMf-vBz4XasmLH7n02HoZNRXF5G7hSIPgbu6fYWEahTwSLtBsU1908IOfrCQqrfrOnWdti829TOVKpRnUA_c-54wllVcdwKmPIU9OVBkKRsLCABbbosIFbyZLrg5kOw_RmI3mVZatEdnqXixW7chtbanGh5MhPWQrtQGw2WZc3UvKl_alqpmPkH_eN5hjrXfEgkl9w4hRevA",
"expiresIn": "3600"

Method: POST
URL: http://localhost:3000/courses

Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImNjNWU0MTg0M2M1ZDUyZTY4ZWY1M2UyYmVjOTgxNDNkYTE0NDkwNWUiLCJ0eXAiOiJKV1QifQ.eyJyb2xlIjoiYWRtaW4iLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcWxraC1lMzA1ZSIsImF1ZCI6InFsa2gtZTMwNWUiLCJhdXRoX3RpbWUiOjE3MjU4NzA4MjQsInVzZXJfaWQiOiI0djN1eDN1cWJLVEpDRER5TXMySVBaUnBxQXAxIiwic3ViIjoiNHYzdXgzdXFiS1RKQ0REeU1zMklQWlJwcUFwMSIsImlhdCI6MTcyNTg3MDgyNCwiZXhwIjoxNzI1ODc0NDI0LCJlbWFpbCI6ImR1b25ndGh1QGZwdC5lZHUudm4iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZHVvbmd0aHVAZnB0LmVkdS52biJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.tguOc_rKx6w2aU0aR3-DVZ9kM_CYj9UdPQMRO47Crn2tJLl8y9cPrHQ7A0sNZ_3o7ZnAATRv6hRIA8rZpOGzuCL41jLRvAMRZN3ZtyaPdsaFgpEO01EUbqrmIwna233Cn48YdY6yz5aprMNUB-gLeQGxVpkBZL3RMpxAXz43rVIM1dPUQB6YBBBKamoi8XmOcx3ciJymV9SH3wO7s_hp4OYZy7YIaJORzcAGXefUzG-z_GKLfUZABJwnEbEIAIahaLUmEenCARBf71KmPsHpthY2DqfFbEDOwi2jiPzvExLpsJLDyvtwBCrzycwIL6DV_dzQpySJ4LbLelnw5tJmAg
1. Đăng ký người dùng (Sign up)
   Phương thức: POST
   URL: http://localhost:3000/signup

Request Body:

json
Sao chép mã
{
"email": "example@gmail.com",
"password": "password123",
"role": "user"  // hoặc "admin" để tạo tài khoản admin
}
Mô tả: API này được dùng để tạo người dùng mới trong hệ thống với vai trò "user" hoặc "admin". Sau khi đăng ký, thông tin người dùng được lưu vào Firebase Authentication và Firestore.

2. Đăng nhập người dùng (Login)
   Phương thức: POST
   URL: https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=<API_KEY>

Request Body:

json
Sao chép mã
{
"email": "example@gmail.com",
"password": "password123",
"returnSecureToken": true
}
Mô tả: Đây là API của Firebase Authentication dùng để đăng nhập người dùng. Sau khi đăng nhập, bạn sẽ nhận được token (idToken) để thực hiện các yêu cầu tiếp theo.

3. Lấy danh sách khóa học (Get courses)
   Phương thức: GET
   URL: http://localhost:3000/courses

Headers:

json
Sao chép mã
{
"Authorization": "Bearer <idToken>"
}
Mô tả: API này trả về danh sách tất cả các khóa học. Yêu cầu phải có token xác thực và người dùng phải đăng nhập thành công.

4. Thêm khóa học (Add course) (Dành cho admin)
   Phương thức: POST
   URL: http://localhost:3000/courses

Headers:

json
Sao chép mã
{
"Authorization": "Bearer <idToken>"
}
Request Body:

json
Sao chép mã
{
"name": "Lập trình Java",
"description": "Khóa học lập trình Java cơ bản",
"teacher": "Nguyễn Văn A",
"startDate": "2024-09-10",
"endDate": "2024-12-10",
"price": 1000000
}
Mô tả: Chỉ admin mới có quyền thêm khóa học. API này thêm một khóa học mới vào Firestore.

5. Đăng ký khóa học (Register for course)
   Phương thức: POST
   URL: http://localhost:3000/courses/:courseId/register

Headers:

json
Sao chép mã
{
"Authorization": "Bearer <idToken>"
}
Mô tả: User có thể đăng ký vào một khóa học dựa trên courseId.

6. Thêm bài giảng vào khóa học (Add lecture) (Dành cho admin)
   Phương thức: POST
   URL: http://localhost:3000/courses/:courseId/lectures

Headers:

json
Sao chép mã
{
"Authorization": "Bearer <idToken>"
}
Request Body:

json
Sao chép mã
{
"title": "Bài giảng 1: Giới thiệu Java",
"description": "Bài giảng đầu tiên của khóa học Java",
"videoUrl": "http://example.com/video"
}
Mô tả: API này thêm bài giảng mới vào một khóa học. Chỉ admin mới có quyền thực hiện API này.

7. Lấy danh sách bài giảng (Get lectures)
   Phương thức: GET
   URL: http://localhost:3000/courses/:courseId/lectures

Headers:

json
Sao chép mã
{
"Authorization": "Bearer <idToken>"
}
Mô tả: API này trả về danh sách các bài giảng của một khóa học cụ thể. Người dùng phải đăng ký khóa học trước đó mới có thể xem bài giảng.

Cách sử dụng file work với Postman
Đăng ký tài khoản (Sign up):

Gửi yêu cầu POST tới http://localhost:3000/signup với dữ liệu đăng ký.
Đăng nhập (Login):

Gửi yêu cầu POST tới Firebase Auth để nhận idToken.
Sử dụng token:

Lấy token từ phản hồi của API đăng nhập, rồi dùng nó làm Authorization cho các yêu cầu khác (ví dụ: lấy danh sách khóa học, đăng ký khóa học,...).