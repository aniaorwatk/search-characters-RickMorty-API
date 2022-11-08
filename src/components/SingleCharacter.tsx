import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Character } from "./List";

// interface ISinglePageType {
//     id: number,
//     name: string,
//     image: string,
//     pages: number,
//     status: string,
//     species: string,
// }

const SinglePage = () => {
    const para = useParams()
    const [dataCharacter, setDataCharacter] = useState<Character>()

    useEffect(() => {
        const apiUser = async () => {
            const URL = `https://rickandmortyapi.com/api/character/${para.id}`;
            const res = await fetch(URL)
            const json = await res.json()
            const data = json

            if (!(res.status === 200)) {
                const msg = `Character not found: ${res.status}`
                throw alert(msg)
            }
            setDataCharacter(data)
        };
        apiUser()
    }, [para]);

    return (
        <Card sx={{ maxWidth: 345 }} className="card">
            <CardMedia
                component="img"
                height="300"
                image={dataCharacter?.image}
                alt={dataCharacter?.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {dataCharacter?.name}
                </Typography>
                <p>Status: {dataCharacter?.status}</p>
                <p>Species: {dataCharacter?.species}</p>
            </CardContent>
        </Card>
    )
}

export default SinglePage
