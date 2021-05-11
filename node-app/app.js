const express = require("express");
const exphbs  = require('express-handlebars');

const bodyParser = require('body-parser')
// const  methodOverride = require('method-override')
const methodOverride = require('method-override')
// const http = require('http');
// const url = require('url');
// const items = [];

const app = express(); //实例化

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test',{ useNewUrlParser: true ,useUnifiedTopology: true})
.then(() => {
    console.log('mongodb connected....');
}).catch(err => {
    console.log(err)
})

require('./models/Idea');
const Idea = mongoose.model('ideas');

// handlebars middleware 模板引擎
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

// body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
app.use(methodOverride('_method'))
// body-parser middleware
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
// 配置路由
 app.get("/", (req,res)=>{
    const title = '大家好'
     console.log(req)
    res.render("index",{
        title:title
    });
 })

// 配置路由
 app.get("/about",(req,res)=>{
    res.render("about");
 })
 // 配置路由
 app.get("/ideas",(req,res)=>{
  // res.render("add");
  Idea.find({})
    .sort({date:"desc"})
    .then(ideas => {
      const contesxt = {
        usersDocuments: ideas.map(document => {
          return {
            title : document.title,
            details: document.details,
            id: document._id
          }
        })
      }
      res.render("ideas/index",{
        data: contesxt.usersDocuments
      })
    })
})
 // 配置路由
 app.get("/ideas/add",(req,res)=>{
    // res.render("add");
    res.render("ideas/add");
 })

  // 配置路由
  app.get("/ideas/edit/:id",(req,res)=>{
    // res.render("add");
    Idea.findOne({
      _id: req.params.id
    })
    .then( ideas => {

    res.render("ideas/edit",{
      data:{
        ...ideas.toJSON(),
        id: ideas._id
      }
    })
    })
 })
 // 配置路由
 app.put("/ideas/edit/:id",(req,res)=>{
  // res.send("add");
  // res.render("ideas/add");
  Idea.findOne({
    _id:req.params.id
  }).then(data => {
    data.title = req.body.title;
    data.details = req.body.details
    data.save()
    .then(idea=>{
      res.redirect('/ideas')
    })
  })
})
 app.post("/ideas",urlencodedParser,(req,res) => {
    // console.log(req.body);
    let errors = [];
  
    if(!req.body.title){
      errors.push({text:"请输入标题!"});
    }
  
    if(!req.body.details){
      errors.push({text:"请输入详情!"});
    }
  
    if(errors.length > 0){
      res.render("ideas/add",{
        errors:errors,
        title:req.body.title,
        details:req.body.details
      })
    }else{
      const newUser = {
        title:req.body.title,
        details:req.body.details,
        // user:req.user.id
      }
      new Idea(newUser)
          .save()
          .then(idea => {
            console.log(idea,'111')
            // req.flash("success_msg","数据添加成功!");
            res.redirect('/ideas')
          }).catch((err)=>{
            console.log(err,'111')
          })
    }
  
  })
  

 // 接口
app.get('/api/get', async (req,res)=>{
    res.send('hellow node.js')
})


const prot = 3000;


app.listen(prot, () => {
    console.log(`Server started on ${prot}`)
})
// const server = http.createServer(function(req, res){
//     switch (req.method) {
//       case 'POST':
//         var item = '';
//         req.setEncoding('utf8');
//         req.on('data', function(chunk){
//           item += chunk;
//         });
//         req.on('end', function(){
//           items.push(item);
//           res.end('OK\n');
//         });
//         break;
//     }
//   })