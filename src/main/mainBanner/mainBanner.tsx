import { Button } from '@material-ui/core';
import React, { Component } from 'react';
import { BannerModel } from '../../shared/model/banner.model';
import './mainBanner.scss';


class MainBanner extends Component<{data:BannerModel}> {
  bannerModel: BannerModel | undefined;
  public render() {
    this.bannerModel=this.props.data;
    return  <div className="contents-box">
    <p className="title-area">{this.bannerModel?.title}</p>
    <p className="description-area">{this.bannerModel?.description}</p>
    <p className="buttom-area">
      <Button variant="contained" color="secondary">
        자세히보기
      </Button>
    </p>
  </div>
  }
}

export default MainBanner;