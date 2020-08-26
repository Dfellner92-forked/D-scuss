import React from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Typography from  "@material-ui/core/Typography";
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles';
import API from "../../utils/API"

// This file exports both the List and ListItem components



class BlogPost extends React.Component {

  constructor() {
    super()
    this.state = {
      blogPosts : []
    }
  }
  
  handleDelete = id => {
    console.log(id)
    API.deletePost(id)
    //API.getFindLogEmail(_id);
  }

  

  render() {
    
  const { classes } = this.props;

  

  return (
    <div>
      <CssBaseline />
      <main className={classes.main}>
        <Paper className={classes.paper}>
            <Typography variant="h4">
              {this.props.title}
            </Typography>
            <Typography variant="subtitle2">
              {this.props.date}
            </Typography>
            <Typography variant="subtitle1">
              {this.props.description}
            </Typography>
            <Typography>
              {this.props.blogId}
            </Typography>
            <div>
            <Button
                variant="contained"
                color="default"
                //onClick={handleEdit}
                className={classes.button}
                startIcon={<EditIcon />}>
            </Button>

            <Button
                variant="contained"
                color="secondary"
                onClick={() => this.props.handleDelete(this.props.blogId)}
                className={classes.button}
                startIcon={<DeleteIcon />}>
            </Button>
            </div>
        </Paper>
      </main>
    </div>
  )
 }
}

export default withStyles(styles)(BlogPost);