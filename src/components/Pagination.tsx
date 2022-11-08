import React from "react";
import { Button } from "@mui/material";

interface IPaginationTyp {
    setNumberPage: React.Dispatch<React.SetStateAction<number>>,
    numberPage: number,
    totalPages: number,
}

const Pagination = ({ setNumberPage, numberPage, totalPages }: IPaginationTyp) => {
    const upPage = () => {
        setNumberPage((prevNumberPage: number) => prevNumberPage + 1)
    }
    const downPage = () => {
        setNumberPage((prevNumberPage: number) => prevNumberPage - 1)
    }

    const up = () => { 
        if(numberPage < totalPages){
            upPage()
        }
     }

    const down = () => {
        if(numberPage > 1){
            downPage()
        }
     }

    return (
        <div>
            <p>Change characters</p>
            <p>Page {numberPage}/{totalPages}</p>
            <Button variant="outlined" onClick={down}>down</Button>
            <Button variant="outlined" onClick={up}> up </Button>
        </div>
    )
}

export default Pagination
