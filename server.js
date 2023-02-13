const express = require('express');
const app = express();
const port = process.env.PORT || 5010;

app.get("/", function(req, res){
	//res.send("Iam GOD");
<<<<<<< HEAD
	res.sendFile(__dirname+"/mann.html");
=======
	res.sendFile(__dirname+"/index.html");
>>>>>>> ec4e5f325ed64346659dd92485b0a8c8bf71be38
});

app.listen(port, function(){
	console.log("Server running on http://localhost:"+port);
	console.log(`Server running on http://localhost:${port}`);
});
