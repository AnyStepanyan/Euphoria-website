import { useState } from "react"
import { createUseStyles } from 'react-jss';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const useStyles = createUseStyles({
    incrementDecrementWrapper: {
        display: 'flex',
        columnGap: 10,
        fontSize: 12,
        width: 80,
        height: 30,
        border: '1px solid #807D7E',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F9F9F9',
    },
    buttons: {
       cursor: 'pointer',
       '&:hover': {
        transform: 'scale(1.2)'
       }
    }
})

function IncrementDecrement() {
    const classes = useStyles()

    const [count, setCount] = useState(1)
    return (
         
        <div className={classes.incrementDecrementWrapper}>
            
        <RemoveIcon className={classes.buttons} sx={{ fontSize: 15 }}
        onClick={() => setCount(count === 1 ? count: count -1)} />
         <div>{count} </div>
        <AddIcon className={classes.buttons}onClick={() => setCount( count + 1)}
        sx={{ fontSize: 15 }} />
        </div>
    )
}

export default  IncrementDecrement