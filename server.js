const http=require("http")
const fs=require("fs")
// const JSON=require("json")
const server=http.createServer((req,res)=>{
  console.log(req)
  res.statusCode=200;
  if(req.url.includes("image")){
    // s = fs.createReadStream(file);
    res.setHeader("Content-Type","image/gif")
    res.end(fs.readFileSync("./pages"+req.url.split("image")[1]))
    return
  }

  res.setHeader("Content-Type",'text/html')
  switch (req.url) {
    case "/":
      res.end(fs.readFileSync("./pages/index.html"))
      break;
  
    case "/about":
      res.end(fs.readFileSync("./pages/about.html"))
      break;
  
    case "/contact":
      res.end(fs.readFileSync("./pages/contact.html"))
      break;
    default:
      res.end(fs.readFileSync("./pages/404.html"))
      break;
  }
})
server.listen(9969,()=>{})