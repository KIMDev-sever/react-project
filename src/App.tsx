import React, { Component   } from 'react'; //useState  hook(함수형컴포넌트에서 할수없었던 다양한 작업을 해주는 것) 호출 
                                                        //useState 함수영 컴포넌트일떄 가변적인 상태를지닐수있게 해주는 상태관리
import './App.scss';
import Main from './main/main'
import Footer from './footer/footer';
import ProductList from './productList/productList'
import { AppBar, Toolbar, IconButton, Typography, Button, withStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { BrowserRouter, Route } from 'react-router-dom'; // 리엑트 루팅용 라이브러리
//props ===@input
//sate 
//defaultProps props 정의 안할떄
//클래스형이 과거 함수형이 최근
//클래스형은 라이플 사이클로 제어
//함수형은 hook

function useStyles(theme: { spacing: (arg0: number) => any; }) {
  return ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  });
}
class App extends Component {

  // 라이플사이클
  // constructor
  // render
  // componentDidMount
  
  constructor(props: {} | Readonly<{}>) {
    console.log('constructor');
    super(props);
  }
  componentDidUpdate(){
  }
  componentDidMount() {
    //afterviewinit?
  
    console.log('componentDidMount');
  }
  public render() {
    console.log(this.props) //컴포넌트 재활용?
    const { classes }:any = this.props;
    return <div className="wrap">
      <header>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
    
          </Typography>
          <Button className="buttomColor" color="inherit">SIGN IN</Button>
          <Button className="buttomColor signUp">SIGN UP</Button>
        </Toolbar>
      </AppBar>
      </header>
      <section className="body">
         <BrowserRouter>
           <Route exact path="/" component={Main}></Route>
           <Route path="/product/:key" component={ProductList}></Route>
        </BrowserRouter>
      </section>
   
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  }

}

export default withStyles(useStyles)(App); 
//withStyles hoc :  HOC란 컴포넌트를 인자로 받아 새로운 컴포넌트를 반환하는 디자인 패턴으로 작성한 컴포넌트를 말한다. 인자로 받은 컴포넌트의 props를 그대로 유지하고 새로운 값을 추가해준다는 특징

