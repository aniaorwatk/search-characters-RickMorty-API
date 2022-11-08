import { useEffect, useState } from "react";
import { Link, Outlet } from 'react-router-dom';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Avatar, ListItemAvatar } from "@mui/material";
import Pagination from "./Pagination";
import "../style.css";

export interface Character {
    id: number,
    name: string,
    image: string,
    pages: number,
    status: string,
    species: string,
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
        };
        apiUser()
    }, [numberPage]);

    return (
        <div className="list">
            <div>
                <h2>Read more about your favorite character!!!!!</h2>
                {dataList.map(characters => {
                    return (
                        <Link to={`/${characters.id}`} key={characters.id}  >
                            <ListItemButton id="item">
                                <ListItemAvatar>
                                    <Avatar
                                        alt={characters.name}
                                        src={characters.image}
                                    />
                                </ListItemAvatar>
                                <ListItemText primary={characters.name} />
                            </ListItemButton>
                        </Link>
                    )
                })}
                 <Pagination
                    setNumberPage={setNumberPage}
                    numberPage={numberPage}
                    totalPages={totalPages}
                />               
            </div>
            <Outlet />
        </div>
    )
}

export default List
