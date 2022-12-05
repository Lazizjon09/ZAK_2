import { Box } from '@chakra-ui/react'
import React from 'react'
import { defStyle } from '../Layout/MainLayout'
import MedicineTablets from './MedicineTablets'



interface Props {
    d: string,  
    arr: Array<number>
    cols?: number
}
    const Mtablets = ({d, arr, cols = 4}: Props) => {
        const row = {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
        }
        const col = {
            display:"flex",
            flexDirection:"column",
            gridTemplateColumns: `repeat(${cols},1fr)`,
            gap: "20px",
        }
        const displayStyle = d === "row" ? row : col
  return (

     <Box sx={{ ...defStyle, ...displayStyle}}>
    {arr.map((item) =>(
        <MedicineTablets key={item}/>
    )
    
    )}
</Box> 
  )
}

export default Mtablets