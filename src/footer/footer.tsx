import React, { Component } from 'react';
import './footer.scss';
import footerData from '../shared/sampleDatas/footer.data';
import {FooterModel } from '../shared/model/footer.model';
class Footer extends Component {
  footerData:FooterModel | undefined
  public render() {
    this.footerData=footerData;
    
    return <div className="footer-container">
        <div className="footer-box">
            <div className="sns-box">
                {this.footerData.snsList.map((sns)=>{
                  return <img src={sns.icon} alt={sns.key}></img>
                })}
               
   
            </div>
            <div className="list-box">
              
               {this.footerData.footerMenuList.map((menu,index)=>{
                
                    return <span>{menu.name}</span>
                })}
                 <br></br>
                 <br></br>
                 <span>{this.footerData.copyRight}</span>
            </div>
        </div>
    </div>;
  }
}

export default Footer;