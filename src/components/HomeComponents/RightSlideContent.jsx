import { API_BASE_URL } from '../../../api/config.js'
import { useTags } from '../../hooks/useTags.jsx'

const RightSlideContent = () => {

  const { tags, setTags } = useTags(API_BASE_URL+ 'tags')

  // useEffect(()=>{
  //   //setTags([{tag:'almi'},{tag:'coso'}])
  // },[])

  return (
    <div className='grid bg-orange-200 h-[520px] w-full rounded-lg'>
      <div className='h-full'>
        <p className='p-5'>Tags</p>
        <ul className='p-0 list-none w-full'>
        {tags.map((tag, index)=>(
          <li className='p-5 bg-orange-300 w-full' key={index}>
            <h2>{tag.tag}</h2>
          </li>
        ))}
        </ul>
      </div>
    </div>
  )
}

export default RightSlideContent