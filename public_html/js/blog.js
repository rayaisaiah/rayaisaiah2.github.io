$(function () {
    var APPLICATION_ID = "D124128E-C118-695A-FF7D-9D55700D0B00",
        SECRET_KEY = "EFEBCA59-7F7D-ABEF-FFEC-21122F1B4A00",
        VERSION = "vl";
        
        Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);
        
        var user = new Backendless.User();
        user.email = "rayaisaiah@gmail.com";
        user.password ="Mittens12345";
        Backendless.UserService.register(user);
    
});


