import { Box, Stack } from "@mui/material";
import { useEffect } from "react";
import { useSelector} from 'react-redux';


const Results = ()=>{
    // STATE GLOBAL REDUX
    const data = useSelector((state)=> state.texts);

    
    return(
        <Box width="70%" minWidth="750px" padding="15px" borderRadius="10px" color="black" alignItems="center" display="flex" flexDirection="column" marginTop="50px" backgroundColor="white">
            <Box fontSize="25px" fontWeight="600"  alignSelf="flex-start">Results: </Box>
            <Stack spacing={2}>
            {
                data.texts.map((obj,i) =>(
                    <Box border="2px solid gray" textAlign="start" padding="10px" borderRadius="5px" width="700px" key={i}>{obj.text}</Box>
                ))
            }
            </Stack>
        </Box>
    )
}

export default Results;