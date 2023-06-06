import { useState } from "react";
import Resident from "./Resident";
import { paginationLogic } from "../util/pagination";

const ResidentList = ({residents}) => {
    const [currentPage, setCurrentPage] = useState(1)

    const {pages, residentsInPage} = paginationLogic(currentPage, residents)
    
    return (
        <section className='bg-[url(/images/page.png)] bg-cover bg-center  ' >
        
        
        
        {/* lista de residentes */}
        <section className="grid gap-8 grid-cols-[repeat(auto-fill,_280px)] justify-center max-w-[1024px] mx-auto py-10">
            
        {residentsInPage?.map((resident) => (
        <Resident key={resident} residentUrl={resident}/>
        ))}
        </section>

        {/* paginacion */}
            <section className="flex justify-center gap-4 flex-wrap p-8 border border-spacing-1 border-lime-600">
                {
                    pages.map(page => 
                    <button 
                        key={page}
                        onClick={() => setCurrentPage(page)} 
                        className="bg-green-700 p-2 px-3 rounded-md"
                        >
                        {page}
                    </button>)
                }
            </section>
        </section>
);
};

export default ResidentList
