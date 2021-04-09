import { makeStyles, withStyles } from '@material-ui/core'
import React from 'react'

const styles = ({sidemenu:{
    left: '0px',
    width: '320px',
    backgroundColor: 'blue',
    height:'100%',
    display:'flex',
    flexDirection: 'column',
    position: 'absolute'
  }
})

function Sidemenu(props) {

const {classes} = props 
console.log(props)

    return (
        <div className={classes.sidemenu}>
            hii
        </div>
    )
}

export default withStyles (styles) (Sidemenu)
