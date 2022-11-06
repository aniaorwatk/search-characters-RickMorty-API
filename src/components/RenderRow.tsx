import React from "react";
// import Box from '@mui/material/Box';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import { FixedSizeList, ListChildComponentProps } from 'react-window';


// interface Character {
//     results: any;
//     id:number,
//     name:string,
// }






// function RenderRow() {
 

//   const[dataList, setDataList]=useState<Character[]>([])
//   const apiUser = async () => {
//       const URL = `https://rickandmortyapi.com/api/character`;
//       const res = await fetch(URL)
//       const json = await res.json()
//       const data = json.results

//       if (!(res.status === 200)) {
//         const msg = `Users not found: ${res.status}`
//         throw alert(msg)
//       }

      

//       // setDataList(data.info.count)
// setDataList(data)
//       console.log(dataList)

   
//     //   setTotalPages(json.total_pages)
//     //   setNumberPage(json.page)
//     };
//     apiUser()



//   return (
//     <ListItem style={style} key={dataList.map{}} component="div" disablePadding>
//       <ListItemButton>
//         <ListItemText primary={dataList.name} />
//       </ListItemButton>
//     </ListItem>
//   );
// }

// export default RenderRow