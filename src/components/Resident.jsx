import axios from "axios"
import { useEffect, useState } from "react"

const Resident = ({residentUrl}) => {
    const [residentInfo, setResidentInfo] = useState(null)

    useEffect(() => {    
        axios.get(residentUrl)
            .then(({data}) => setResidentInfo(data))
            .catch(err => console.log(err))
    },[])

    return  (
    <article className="border border-spacing-1 border-lime-400 ">
        <div className="relative border border-spacing-4 border-lime-400">
            <img src={residentInfo?.image} alt="" />
            <div className="flex items-center gap-2 absolute bottom-3 left-1/2 -translate-x-1/2">
                <div className="h-4 aspect-square bg-green-400 rounded-full"></div>
                dead
            </div>
        </div>
        <section className="p-4 gap-3 text-lime-400">
            <h4>{residentInfo?.name}</h4>
    
            <ul className=" ">
                <li>Species: <span>{residentInfo?.species}</span></li>
                <li>Origin: <span>{residentInfo?.origin.name}</span></li>
                <li>Times apper: <span>{residentInfo?.episode.length}</span></li>
            </ul>
        </section>
    </article>
)
}

export default Resident
