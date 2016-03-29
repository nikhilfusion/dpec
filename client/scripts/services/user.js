app.service('userService', function() {
    this.user = [
        {
            id   : 1,   
            user : 'nikhil',
            role : 'user',
            password : 'nikhil'
        },
        {
            id : 2,
            user : 'sajeesh',
            role : 'admin',
            password : 'admin'
        },
        {
            id : 3,
            user : 'jaison',
            role : 'user',
            password : 'jaison'
        },
        {
            id : 4,
            user : 'madhuri',
            role : 'physio',
            password : 'madhuri'
        }
    ];
})