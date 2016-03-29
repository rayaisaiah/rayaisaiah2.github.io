$(function () {
    var APPLICATION_ID = "D124128E-C118-695A-FF7D-9D55700D0B00",
        SECRET_KEY = "EFEBCA59-7F7D-ABEF-FFEC-21122F1B4A00",
        VERSION = "v1";
        
        Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);
     
        
        var loginScript = $("#login-template").html();
        var loginTemplate = Handlebars.compile(loginScript);
        
        
        $('.main-container').html(loginTemplate);
        
});

function Posts(args){
    args = args || {};
    this.title = args.title || "";
    this.content = args.content || "";
    this.authorEmail = args.authorEmail || "";
}





