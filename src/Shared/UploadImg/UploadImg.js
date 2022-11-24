import { useState } from "react"

const UploadImg = file =>{
    const [img,setImg]= useState("")
    const imgHostKey = process.env.REACT_APP_imgbb_key
    const formData = new FormData()
    formData.append("image",file)
    const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`
        fetch(url,{
            method:"POST",
            body:formData
        })
        .then(res => res.json())
        .then(imgData =>{
            if(imgData.success){
                setImg(imgData.data.url)
            }
        }) 
        return img
}
export default UploadImg;