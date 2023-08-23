import { useState } from "react"
import { getLocalstorage } from "../../data/localStorage";
import { savePost } from "../../utils/posts";

function NewPostForm({data,setData}){
    const [imp,setImp] = useState('')

    function handleInput(evt){
        setImp(evt.target.value)
        console.log(evt.target.value);
    }

    async function setPost(){
        const localstorage = getLocalstorage()
        const body = {
            userid: localstorage.user,
            data: imp
        }
        await savePost(localstorage.token,body).then((res)=>{
            console.log('este es el res del setpost', res);
            const fecha = Date()
            const newBody={id:res.postid,user_id:body.userid,body:body.data,fecha:fecha,username:res.username}
            const newArr = [...data,newBody]
            console.log('este es el new arr',newArr);
            setData(newArr)
        })
        
    }

    return(<div className={`grid h- w-full p-6  items-center gap-y-6 border-b-[1px] border-black`}>
        <input className={`rounded-md h-20 w-full border-[1px] border-black placeholder-transparent`} onChange={handleInput} placeholder="Post content"></input>
        <button className={`text-center w-28 h-10 p-1 font-semibold rounded-md bg-black hover:bg-slate-700 text-white`} onClick={setPost} >Create post</button>
    </div>)
}

export { NewPostForm }