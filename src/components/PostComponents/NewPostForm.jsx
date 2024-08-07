import { useState } from "react"
import { getLocalstorage } from "../../data/localStorage";
import { savePost } from "../../utils/posts";

function NewPostForm({data,setData}){
    const [imp,setImp] = useState('')
    const [isDisabled,setIsDisabled] = useState(true)

    function handleInput(evt){
        setImp(evt.target.value)
        console.log(evt.target.value.length);
        if(evt.target.value.length<=9){
            setIsDisabled(true)
        }else{
            setIsDisabled(false)
        }
    }

    async function setPost(){
        const localstorage = getLocalstorage()
        const body = {
            userid: localstorage.user,
            data: imp
        }
        await savePost(localstorage.token,body).then((res)=>{
            const fecha = Date()
            const newBody={id:res.postid,user_id:body.userid,body:body.data,fecha:fecha,username:localstorage.username}
            const newArr = [newBody,...data]
            setData(newArr)
            setImp('')
            setIsDisabled(true)
        })
        
    }

    return(<div className={`grid h-max w-full p-6 items-center gap-y-6 border-b-[1px] border-black`}>
        <textarea className={`resize-none rounded-md h-20 w-full border-[1px] border-black placeholder-transparent whitespace-pre-wrap`} onChange={handleInput} placeholder="Post content" value={imp}></textarea>
        <button disabled={isDisabled} className={`text-center w-28 h-10 p-1 font-semibold ${(imp.length <= 9) ? 'bg-slate-400':'hover:bg-slate-700'} rounded-md bg-black text-white`} onClick={setPost} >Create post</button>
    </div>)
}

export { NewPostForm }