const baseUrl = "http://localhost:4000/api/v1/uat/"
export const api_data_json = [
    {
        api_no: "Dev_api_",
        title: "POST - User Registration",
        desc: "api to Register User",
        method: "POST",
        url: baseUrl + "users/register",
        url_parmas: [],
        headers: [
            {
                "Content-Type": "application/json",
            },
            {
                Authorization: "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImFm...",
            },
        ],
        request_body: {
            "firstname": "Shubham",
            "lastname": "Vaidya ",
            "username": "b@gmail.com",
            "password": "123456",
            "email_id": "b@gmail",
            "mobilenumber": "8888888888"
        },
        response_body: {
            status: true,
            code: 200,
            message: "User Registered Successfully!"
        },
        response_error: {
            code: 500,
            error: "INTERNAL_ERROR",
            message: "internal server error",
        },
    },
    {
        api_no: "Dev_api_",
        title: "POST - User Login",
        desc: "api to Login User",
        method: "POST",
        url: baseUrl + "users/login",
        url_parmas: [],
        headers: [
            {
                "Content-Type": "application/json",
            },
            {
                Authorization: "",
            },
        ],
        request_body: {
            "username": "b@gmail.com",
            "password": "123456",
        },
        response_body: {
            "status": true,
            "code": 200,
            "message": "User Login Successfully!",
            "data": {
                "id": 37,
                "firstname": "Shubham",
                "lastname": "Vaidya",
                "username": "Shubh",
                "email_id": "a@gmail.com",
                "mobilenumber": "8958658458",
                "uuid": "fff1952d-e108-4759-a9ae-8d6c15ae610f",
                "createdAt": "2023-05-22T10:37:47.129Z",
                "updatedAt": "2023-05-22T10:37:47.129Z"
            },
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjM3LCJpYXQiOjE2ODUwMTA3MTIsImV4cCI6MTY4NTA5NzExMn0.9MaHCZvGqOPb_IDnth0FBxhRqoUniMZPjqqgGUG8gHY"
        },
        response_error: {
            code: 500,
            error: "INTERNAL_ERROR",
            message: "internal server error",
        },
    },
    {
        api_no: "Dev_api_",
        title: "GET - Get User Details",
        desc: "api to get User Details",
        method: "GET",
        url: baseUrl + "users/1",
        url_parmas: [],
        headers: [
            {
                "Content-Type": "application/json",
            },
            {
                Authorization: "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImFm...",
            },
        ],
        request_body: {},
        response_body: {
            "status": true,
            "code": 200,
            "message": "",
            "data": {
                "id": 37,
                "firstname": "Shubham",
                "lastname": "Vaidya",
                "username": "Shubh",
                "email_id": "a@gmail.com",
                "mobilenumber": "8958658458",
                "uuid": "fff1952d-e108-4759-a9ae-8d6c15ae610f",
                "createdAt": "2023-05-22T10:37:47.129Z",
                "updatedAt": "2023-05-22T10:37:47.129Z"
            }
        },
        response_error: {
            code: 500,
            error: "INTERNAL_ERROR",
            message: "internal server error",
        },
    },
    {
        api_no: "Dev_api_",
        title: "PUT - Update User Details",
        desc: "api to Update User Details",
        method: "PUT",
        url: baseUrl + "users/1",
        url_parmas: [],
        headers: [
            {
                "Content-Type": "application/json",
            },
            {
                Authorization: "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImFm...",
            },
        ],
        request_body: {
            "firstname": "Shubham",
            "lastname": "Vaidya ",
            "username": "b@gmail.com",
            "password": "123456",
            "email_id": "b@gmail",
            "mobilenumber": "8888888888"
        },
        response_body: {
            "status": true,
            "code": 200,
            "message": "User Update Successfully!",
            "data": {
                "id": 37,
                "firstname": "Shubham",
                "lastname": "Vaidya",
                "username": "Shubh",
                "email_id": "a@gmail.com",
                "mobilenumber": "8958658458",
                "uuid": "fff1952d-e108-4759-a9ae-8d6c15ae610f",
                "createdAt": "2023-05-22T10:37:47.129Z",
                "updatedAt": "2023-05-22T10:37:47.129Z"
            }
        },
        response_error: {
            code: 500,
            error: "INTERNAL_ERROR",
            message: "internal server error",
        },
    },
    {
        api_no: "Dev_api_",
        title: "DELETE - Delete User",
        desc: "api to Delete User",
        method: "DELETE",
        url: baseUrl + "users/1",
        url_parmas: [],
        headers: [
            {
                "Content-Type": "application/json",
            },
            {
                Authorization: "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImFm...",
            },
        ],
        request_body: {},
        response_body: {
            "status": true,
            "code": 200,
            "message": "User Removed Successfully!",
            "data": {}
        },
        response_error: {
            code: 500,
            error: "INTERNAL_ERROR",
            message: "internal server error",
        },
    },

]