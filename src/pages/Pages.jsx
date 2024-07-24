import { HomePage } from "./HomePage"
import { LeftSlide } from "../components/HomeComponents/LeftSlide";

function Pages(){  
    return <div className={`h-max grid grid-cols-12`}>
        <LeftSlide />
        <HomePage />
    </div>
}

export { Pages }