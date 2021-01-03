import React, { Component } from 'react';
import './gridPicture.scss';
import { GridList, withStyles, GridListTileBar, IconButton, GridListTile } from '@material-ui/core';
import { CategoryModel } from '../../shared/model/category.model'
import { Link } from 'react-router-dom';
const useStyles = (theme: { palette: { background: { paper: any; }; primary: { light: any; }; }; }) => {
  ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },

    title: {
      color: theme.palette.primary.light,
    },
    titleBar: {
      background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
 
  }) as React.CSSProperties;
};
class GridPicture extends Component<{ data: CategoryModel[]}> {
  tileData: CategoryModel[] | undefined;
  urlParams='';
  goPage(key: string){
    this.urlParams=key;
    
  }
  render() {
    const { classes }: any = this.props;
    this.tileData = this.props.data;
    
    return <div className="grid-box">
      <div className="box-title"><span><h2>CATEGORY</h2></span></div>
      <div className={classes.root}>
      
        <GridList cellHeight={300} className={classes.gridList} cols={3}>
          {this.tileData.map((tile) => (
 
            <GridListTile key={tile.img} cols={tile.cols || 1}>
                         <Link to={`/product/${tile.key}`}>
              <img src={tile.img} alt={tile.title}  className="imgSize"/>
              <GridListTileBar
                title={tile.title}
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
                actionIcon={
                  <IconButton aria-label={`star ${tile.title}`}>

                  </IconButton>
                }
              />
              </Link>
            </GridListTile>
          ))}
          </GridList>
    
      </div>
    </div>
  }
}
export default withStyles(useStyles)(GridPicture);