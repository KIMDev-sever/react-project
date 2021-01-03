import { Button } from '@material-ui/core';
import React, { Component } from 'react';
import './help.scss';

class Help extends Component{
  render(){
    return <div className="help-box">
      <div className="title-box">
          <span className="title">도움이 필요하신가요?</span>
          <br></br>
          <br></br>
          <span className="description">저희가 도와 드리겠습니다. 연락하세요!</span>
          <br></br>
          <br></br>
          <Button variant="contained" color="secondary">
                 문의하기
          </Button>
      </div>
    </div>
  }
}

export default Help;
