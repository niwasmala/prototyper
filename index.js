var express = require("express"),
    app = express(),
    port = process.env.PORT || 8080;

// Set static folder
app.use(express.static("./"));

app.listen(port, function(){
    console.log("Running server on port " + port + ", press ctrl + c to stop.");
});
