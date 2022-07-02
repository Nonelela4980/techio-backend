const Product = require('../models/product')
const express=require('express')
const router=express.Router()
const data= [
    {
        id:"TIO0000001",
        title:"ASUS X515",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing commodo elit at imperdiet dui accumsan sit. Urna molestie at elementum eu. Bibendum enim facilisis gravida neque convallis a. Gravida cum sociis natoque penatibus et magnis. Ac placerat vestibulum lectus mauris ultrices eros in cursus. Nibh sed pulvinar proin gravida hendrerit. Ut enim blandit volutpat maecenas volutpat. Aliquam vestibulum morbi blandit cursus risus. Habitant morbi tristique senectus et netus.",
        category:"laptops",
        price:8900,
        imageUrl:"asux_x515.png",
    },    {
        id:"TIO0000006",
        title:"Apple iPhone 11",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing commodo elit at imperdiet dui accumsan sit. Urna molestie at elementum eu. Bibendum enim facilisis gravida neque convallis a. Gravida cum sociis natoque penatibus et magnis. Ac placerat vestibulum lectus mauris ultrices eros in cursus. Nibh sed pulvinar proin gravida hendrerit. Ut enim blandit volutpat maecenas volutpat. Aliquam vestibulum morbi blandit cursus risus. Habitant morbi tristique senectus et netus.",
        category:"smartphones",
        price:8900,
        imageUrl:"iphone11.png",
    }
    ,
    {
        id:"TIO0000002",
        title:"Acer Aspire 1",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing commodo elit at imperdiet dui accumsan sit. Urna molestie at elementum eu. Bibendum enim facilisis gravida neque convallis a. Gravida cum sociis natoque penatibus et magnis. Ac placerat vestibulum lectus mauris ultrices eros in cursus. Nibh sed pulvinar proin gravida hendrerit. Ut enim blandit volutpat maecenas volutpat. Aliquam vestibulum morbi blandit cursus risus. Habitant morbi tristique senectus et netus.",
        category:"laptops",
        price:5400,
        imageUrl:"aspire1.png",
    },
    
      {
        id:"TIO0000005",
        title:"HP 255",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing commodo elit at imperdiet dui accumsan sit. Urna molestie at elementum eu. Bibendum enim facilisis gravida neque convallis a. Gravida cum sociis natoque penatibus et magnis. Ac placerat vestibulum lectus mauris ultrices eros in cursus. Nibh sed pulvinar proin gravida hendrerit. Ut enim blandit volutpat maecenas volutpat. Aliquam vestibulum morbi blandit cursus risus. Habitant morbi tristique senectus et netus.",
        category:"laptops",
        price:6999,
        imageUrl:"hp215.png",
    },
    {
        id:"TIO0000007",
        title:"Samsung Galaxy Z",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing commodo elit at imperdiet dui accumsan sit. Urna molestie at elementum eu. Bibendum enim facilisis gravida neque convallis a. Gravida cum sociis natoque penatibus et magnis. Ac placerat vestibulum lectus mauris ultrices eros in cursus. Nibh sed pulvinar proin gravida hendrerit. Ut enim blandit volutpat maecenas volutpat. Aliquam vestibulum morbi blandit cursus risus. Habitant morbi tristique senectus et netus.",
        category:"smartphones",
        price:14000,
        imageUrl:"samsung_galaxy_z.png",
    },
    {
        id:"TIO0000010",
        title:"Canon XA - 15",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing commodo elit at imperdiet dui accumsan sit. Urna molestie at elementum eu. Bibendum enim facilisis gravida neque convallis a. Gravida cum sociis natoque penatibus et magnis. Ac placerat vestibulum lectus mauris ultrices eros in cursus. Nibh sed pulvinar proin gravida hendrerit. Ut enim blandit volutpat maecenas volutpat. Aliquam vestibulum morbi blandit cursus risus. Habitant morbi tristique senectus et netus.",
        category:"cameras",
        price:27000,
        imageUrl:"canon_x_a.png",
    },
    {
        id:"TIO0000008",
        title:"Xiaomi Redmi 1",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing commodo elit at imperdiet dui accumsan sit. Urna molestie at elementum eu. Bibendum enim facilisis gravida neque convallis a. Gravida cum sociis natoque penatibus et magnis. Ac placerat vestibulum lectus mauris ultrices eros in cursus. Nibh sed pulvinar proin gravida hendrerit. Ut enim blandit volutpat maecenas volutpat. Aliquam vestibulum morbi blandit cursus risus. Habitant morbi tristique senectus et netus.",
        category:"smartphones",
        price:3999,
        imageUrl:"xiomi_rem10.png",
    } ,{
        id:"TIO0000004",
        title:"Asus X415",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing commodo elit at imperdiet dui accumsan sit. Urna molestie at elementum eu. Bibendum enim facilisis gravida neque convallis a. Gravida cum sociis natoque penatibus et magnis. Ac placerat vestibulum lectus mauris ultrices eros in cursus. Nibh sed pulvinar proin gravida hendrerit. Ut enim blandit volutpat maecenas volutpat. Aliquam vestibulum morbi blandit cursus risus. Habitant morbi tristique senectus et netus.",
        category:"laptops",
        price:5499,
        imageUrl:"asux_x415.png",
    }, 
    
    {
        id:"TIO0000009",
        title:"Huawei P Smart 2021",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing commodo elit at imperdiet dui accumsan sit. Urna molestie at elementum eu. Bibendum enim facilisis gravida neque convallis a. Gravida cum sociis natoque penatibus et magnis. Ac placerat vestibulum lectus mauris ultrices eros in cursus. Nibh sed pulvinar proin gravida hendrerit. Ut enim blandit volutpat maecenas volutpat. Aliquam vestibulum morbi blandit cursus risus. Habitant morbi tristique senectus et netus.",
        category:"smartphones",
        price:4899,
        imageUrl:"huaweip2021.png",
    },
    {
        id:"TIO0000011",
        title:"Canon XA - 15",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing commodo elit at imperdiet dui accumsan sit. Urna molestie at elementum eu. Bibendum enim facilisis gravida neque convallis a. Gravida cum sociis natoque penatibus et magnis. Ac placerat vestibulum lectus mauris ultrices eros in cursus. Nibh sed pulvinar proin gravida hendrerit. Ut enim blandit volutpat maecenas volutpat. Aliquam vestibulum morbi blandit cursus risus. Habitant morbi tristique senectus et netus.",
        category:"cameras",
        price:18999,
        imageUrl:"canon_eos.png",
    },{
        id:"TIO0000003",
        title:"HP 15 Core i5",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing commodo elit at imperdiet dui accumsan sit. Urna molestie at elementum eu. Bibendum enim facilisis gravida neque convallis a. Gravida cum sociis natoque penatibus et magnis. Ac placerat vestibulum lectus mauris ultrices eros in cursus. Nibh sed pulvinar proin gravida hendrerit. Ut enim blandit volutpat maecenas volutpat. Aliquam vestibulum morbi blandit cursus risus. Habitant morbi tristique senectus et netus.",
        category:"laptops",
        price:9999,
        imageUrl:"hp15.png",
    }
]

const dataUpload = async (req,res)=>{

    try{
        for(let i=0;i<data.length;i++){
            await Product.create({
                id:data[i].id,
                title:data[i].title,
                description:data[i].description,
                category:data[i].category,
                price:data[i].price,
                imageUrl:data[i].imageUrl,
            })

        }
        res.status(200).json({"messaage":"data upload success"})

    }catch(err){
        res.status(400).json({"messaage":"data upload fail"})
    }
}

router.route('/upload').post(dataUpload)

module.exports = router