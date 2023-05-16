// Using Node.js `require()`
const mongoose = require('mongoose');

const url='mongodb://localhost/mongodb_sincro'
mongoose.connect(url,{

})
.then(()=> console.log('conectado a mongo'))
.catch((e)=> console.log('el error de conexion es : '+e))

const brandschema= mongoose.Schema({
id:Number,
name:String,
age:Number
})

const brandmodel=mongoose.model('brand',brandschema)

//mostrar

const mostrar=async()=>{
    console.log('sss')
  const brands=  await brandmodel.find()
  console.log(brands)
}

const crear=async()=>{
const brands=new brandmodel({
  id:3,
name:'aseee',
age:223
})
const resultado=await brands.save()
console.log(resultado)
}

//crear()
mostrar()