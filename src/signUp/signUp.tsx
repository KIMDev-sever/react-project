import { Container, Paper, TextField } from '@material-ui/core';
import React, { Component } from 'react';
import './signUp.scss';
/*
할것
 1.퍼블리싱 작업
 2.발리데이션 체크
 3.회원가입기능 작성
*/
class SignUp extends Component {

  render() {
    return <Container maxWidth="sm">
      <div className="contents">
        <Paper elevation={0} className="sign-up-box">
          <div className="box-title"><span><h2>SIGN UP</h2></span></div>
          <div className="input-box">
            <form noValidate autoComplete="on">

              <span>
              <br></br>
              아이디
              <br></br>
              <TextField id="outlined-basic" variant="outlined" required/>
              </span>
              <br></br>
              <span>
              비밀번호
              <br></br>
              <TextField id="outlined-basic" variant="outlined" type="password" required/>
              </span>
              <br></br>
              <span>
              비밀번호 확인 
              <br></br>
              <TextField id="outlined-basic" variant="outlined" type="password" required/>
              </span>
              <br></br>
              <span>
              이름<br></br>
              <TextField id="outlined-basic" variant="outlined" required/>
              </span>
              <br></br>
              <span>
              이메일
              <br></br>
              <TextField id="outlined-basic" variant="outlined" required/>
              </span>
              <br></br>
              <span>
              전화번호 
              <br></br>
              <TextField id="outlined-basic" variant="outlined" required/>
              </span>
              <br></br>
              <span>
              주소
              <br></br>
              <TextField id="outlined-basic" variant="outlined" required/>
              </span>
            </form>
          </div>
        </Paper>
      </div>
    </Container>
  }
}


export default SignUp;
