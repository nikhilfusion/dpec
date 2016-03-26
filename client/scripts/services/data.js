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
            "therapistId" : 1 
        },
        {
            "id" : 2,
            "courseId" : 1,
            "slide" : "../assets/images/session/2.jpg",
            "therapistId" : 1 
        },
        {
            "id" : 3,
            "courseId" : 1,
            "slide" : "../assets/images/session/3.jpg",
            "therapistId" : 1 
        },
        {
            "id" : 4,
            "courseId" : 1,
            "slide" : "../assets/images/session/4.jpg",
            "therapistId" : 1 
        },
        {
            "id" : 5,
            "courseId" : 1,
            "slide" : "../assets/images/session/5.jpg",
            "therapistId" : 1 
        },
        {
            "id" : 6,
            "courseId" : 1,
            "slide" : "../assets/images/session/6.jpg",
            "therapistId" : 1 
        }
    ];
});