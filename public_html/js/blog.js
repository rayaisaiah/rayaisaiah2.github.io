$(function () {
    var APPLICATION_ID = "D124128E-C118-695A-FF7D-9D55700D0B00",
        SECRET_KEY = "DDBBDCD1-AD79-A758-FF1B-F8A67286BD00",
        VERSION = "vl";
        
        Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);
        
        var user = new Backendless.user();
        user.email = "rayaisaiah@gmail.com";
        user.password="Mittens12345";
        Backendless.userService.register(user);
    
});


