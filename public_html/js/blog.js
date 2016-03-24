$(function () {
    var APPLICATION_ID = "D124128E-C118-695A-FF7D-9D55700D0B00",
        SECRET_KEY = "EFEBCA59-7F7D-ABEF-FFEC-21122F1B4A00",
        VERSION = "v1";
        
        Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);
        
        var dataStore = Backendless.Persistence.of(Posts);
        var post = new Post({title: "MY First Blog Post", content:"My First Blog Post Content", email:"email@email.com"});
        dataStore.save(post);
       
});

function Post(args){
    args = args || {};
    this.title = args.title || "";
    this.content = args.content || "";
    this.authorEmail = args.emailEmail || "";
}


