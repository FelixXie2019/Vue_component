let express=require('express');
let app=express();
let axios=require('axios')

app.use(express.urlencoded())
app.use(express.json())

app.get('/search/users',(req,res)=>{
    const q=req.query.q
    axios.get('https://api.github.com/search/users',{
        params:{q}
    }).then(response=>{
        const result=response.data;
        res.send(result)
    }).catch(err=>console.log(err))
})

app.listen(3000,(err)=>{
if(!err) console.log('服务器搭建成功');
else console.log(err);
})