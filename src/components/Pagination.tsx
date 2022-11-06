import { Button } from "@mui/material";
import React from "react";


interface IPaginationTyp{ 
    setNumberPage: React.Dispatch<React.SetStateAction<number>>,
    numberPage: number,
    totalPages:number,
}

const Pagination =({setNumberPage,numberPage,totalPages }: IPaginationTyp)=>{

    const upPage = () => {
        setNumberPage((prevNumberPage: number) => { return (prevNumberPage + 1) })
    }

    const downPage = () => {
        setNumberPage((prevNumberPage: number)=> { return (prevNumberPage - 1) })
    }

    console.log(numberPage)

    const up = () => { numberPage === totalPages ? numberPage === totalPages ||downPage() : upPage() }
    const down = () => { numberPage === 1 ? numberPage === 1 || upPage():  downPage()}

    return(
        <div>
            <p>Change characters</p>
            <p>Page {numberPage}/{totalPages}</p>
            <Button variant="outlined" onClick={down}>down</Button>
            <Button variant="outlined" onClick={up}> up </Button>
        </div>
    )
}

export default Pagination
