import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Avatar, ListItemAvatar } from "@mui/material";
import Pagination from "./Pagination";
import "../style.css";

interface Character {
    results: any;
    id: number,
    name: string,
    image: string,
    pages: number,
}

const List = () => {

    const [dataList, setDataList] = useState<Character[]>([])
    const [numberPage, setNumberPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)

    useEffect(() => {
        const apiUser = async () => {
            const URL = `https://rickandmortyapi.com/api/character/?page=${numberPage}`;
            const res = await fetch(URL)
            const json = await res.json()
            const data = json.results;
            const dataTotal = json;

            if (!(res.status === 200)) {
                const msg = `Characters not found: ${res.status}`
                throw alert(msg)
            }

            setDataList(data)
            setTotalPages(dataTotal.info.pages)
            console.log(dataTotal.info.pages)

        };
        apiUser()
    }, [numberPage]);

    return (
        <Box
            sx={{ width: '100%', height: 400, maxWidth: 360, bgcolor: 'background.paper' }}
        >
            <h2>Read more about your favorite character!!!!!</h2>

            {dataList.map(characters => {
                return (
                    <ListItem
                    className="listItem xx"
                        key={characters.id}
                    >
                        <ListItemButton>
                            <ListItemAvatar>
                                <Avatar
                                    alt={characters.name}
                                    src={characters.image}
                                />
                            </ListItemAvatar>
                            <ListItemText primary={characters.name} />
                        </ListItemButton>
                    </ListItem>)
            })}
           <Pagination 
           setNumberPage={setNumberPage}
           numberPage={numberPage}
           totalPages={totalPages}
           />
        </Box>
    )
}

export default List
