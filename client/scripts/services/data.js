app.service('commonData', function() {
    this.courses = [
        {
        	"courseId" : 1,
        	"name" : "course1",
        	"image": "../assets/images/course/1.jpg",
        	"therapistId" : 1 
        },
        {
        	"courseId" : 2,
        	"name" : "course2",
        	"image": "../assets/images/course/2.jpg",
        	"therapistId" : 2 
        },
        {
        	"courseId" : 3,
        	"name" : "course3",
        	image: "../assets/images/course/3.jpg",
        	"therapistId" : 3
        },
        {
        	"courseId" : 4,
        	"name" : "course4",
        	"image": "../assets/images/course/4.jpg",
        	"therapistId" : 1 
        },
        {
        	"courseId" : 5,
        	"name" : "course5",
        	"image": "../assets/images/course/5.jpg",
        	"therapistId" : 3 
        },
        {
        	"courseId" : 6,
        	"name" : "course6",
        	"image": "../assets/images/course/6.jpg",
        	"therapistId" : 2
        }
    ],
    this.therapists = [
    	{
    		"id" : 1,
    		"name" : "Henry",
    		"reg.no": "11/2093004"
    	},
    	{
    		"id" : 2,
    		"name" : "Mathews",
    		"reg.no": "124/24573004"
    	},
    	{
    		"id" : 3,
    		"name" : "Thomas",
    		"reg.no": "88/6898004"
    	}    	
    ],
    this.sessions = [
        {
            "id" : 1,
            "courseId" : 1,
            "slide" : "../assets/images/session/1.jpg",
            "therapistId" : 1,
            "feedbackNeeded" : false
        },
        {
            "id" : 2,
            "courseId" : 1,
            "slide" : "../assets/images/session/2.jpg",
            "therapistId" : 1,
            "feedbackNeeded" : false
        },
        {
            "id" : 3,
            "courseId" : 1,
            "slide" : "../assets/images/session/3.jpg",
            "therapistId" : 1,
            "feedbackNeeded" : true
        },
        {
            "id" : 4,
            "courseId" : 1,
            "slide" : "../assets/images/session/4.jpg",
            "therapistId" : 1,
            "feedbackNeeded" : false
        },
        {
            "id" : 5,
            "courseId" : 1,
            "slide" : "../assets/images/session/5.jpg",
            "therapistId" : 1,
            "feedbackNeeded" : true
        },
        {
            "id" : 6,
            "courseId" : 1,
            "slide" : "../assets/images/session/6.jpg",
            "therapistId" : 1,
            "feedbackNeeded" : false
        }
    ],
    this.customers = [
        {
            "id" : 1,
            "username" : "john",
            "password" : "john",
            "email"    : "john@live.com",
            "patientId": "NV00234",
            "physioId" : 1  
        },
        {
            "id" : 2,
            "username" : "mathews",
            "password" : "mathews",
            "email"    : "mathews@outlook.com",
            "patientId": "NV002789",
            "physioId" : 1
        },
        {
            "id" : 3,
            "username" : "james",
            "password" : "james",
            "email"    : "james@outlook.com",
            "patientId": "NV002589",
            "physioId" : 1
        },
        {
            "id" : 4,
            "username" : "jacob",
            "password" : "jacob",
            "email"    : "jacob@outlook.com",
            "patientId": "NV0027789",
            "physioId" : 1
        },
        {
            "id" : 5,
            "username" : "francis",
            "password" : "francis",
            "email"    : "francis@outlook.com",
            "patientId": "NV003789",
            "physioId" : 1
        },
        {
            "id" : 6,
            "username" : "bran",
            "password" : "bran",
            "email"    : "bran@gmail.com",
            "patientId": "NV002189",
            "physioId" : 1
        },
        {
            "id" : 7,
            "username" : "catherine",
            "password" : "catherine",
            "email"    : "catherine@outlook.com",
            "patientId": "NV001789",
            "physioId" : 1
        },
        {
            "id" : 8,
            "username" : "maria",
            "password" : "maria",
            "email"    : "maria@outlook.com",
            "patientId": "NV002788",
            "physioId" : 1
        },
        {
            "id" : 9,
            "username" : "richa",
            "password" : "richa",
            "email"    : "richa@live.com",
            "patientId": "NV001889",
            "physioId" : 1
        },
        {
            "id" : 10,
            "username" : "nithesh",
            "password" : "nithesh",
            "email"    : "nithesh@outlook.com",
            "patientId": "NV001789",
            "physioId" : 1
        },
        {
            "id" : 11,
            "username" : "rima",
            "password" : "rima",
            "email"    : "rima@outlook.com",
            "patientId": "NV002489",
            "physioId" : 1
        },
        {
            "id" : 12,
            "username" : "reenu",
            "password" : "reenu",
            "email"    : "reenu@gmail.com",
            "patientId": "NV002389",
            "physioId" : 1
        },
        {
            "id" : 13,
            "username" : "swara",
            "password" : "swara",
            "email"    : "swara@outlook.com",
            "patientId": "NV002789",
            "physioId" : 1
        }
    ];
});