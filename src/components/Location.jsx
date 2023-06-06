import axios from "axios"


const Location = ({location, setLocation}) => {

const handleSubmit = (e) => {
    e.preventDefault()
    const newLocation = e.target.newLocation.value

    const URL = `https://rickandmortyapi.com/api/location/${newLocation}`

    axios.get(URL)
    .then(({data}) => setLocation(data))
    .catch((err) => console.log(err))
}


    return (
    <section className=" bg-[url(/images/header.png)] bg-cover min-h-[200px] bg-center w-[100%] ">
        <div className='bg-[url(/images/imah.png)] bg-cover bg-center h-[250px] flex sm:h-[490px]' >
        
        </div>
        
        {/* Input de busqueda */}
        <form onSubmit={handleSubmit} className="items-center justify-center flex mx-auto px-8 p-4">
            <input id="newLocation" autoComplete="off" className="bg-black text-lime-400 outline-none border border-spacing-1 border-lime-600 py-1 gap-4 text-center" placeholder="Type alocation Id..." type="text" />
            <button className="bg-lime-800"> <i className='bx bx-search-alt  p-2 gap2 border border-spacing-1 border-green-600'></i> </button>
        </form>
    
        {/* Info location */}
        <div className="max-auto ">
        <section className=" mx-10 flex flex-col items-center justify-items-center p-10 gap-8 border border-spacing-1 border-lime-600 text-lime-400">
            <h2>{location?.name}</h2>
            <ul className="flex flex-wrap gap-8">
                <li>Type: {location?.type}</li>
                <li>Dimension: {location?.dimension}</li>
                <li>Population: {location?.residents.length}</li>
            </ul>
        </section>   
        </div>
        
    </section>
)
}

export default Location
