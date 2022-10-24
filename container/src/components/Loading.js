import React from "react"
import {
    makeStyles, createStyles
} from '@material-ui/core/styles'
import { LinearProgress } from "@material-ui/core"

const useStyles = makeStyles((theme) => {
    return createStyles({
        bar: {
            width: '100%',
            // '& > * + *': {
            //     marginTop: theme.spacing(2)
            // }
        }
    })
})

export default function Loading() {
    const styles = useStyles()

    return (
    <div className={ styles.bar }>
        <LinearProgress/>
    </div>
    )
}