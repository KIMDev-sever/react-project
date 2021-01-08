import React, { Component } from 'react';
import './main.scss';
import { BannerModel } from '../shared/model/banner.model'
import { CategoryModel } from '../shared/model/category.model'
import { EventModel } from '../shared/model/event.model'
import MainBanner from './mainBanner/mainBanner'
import GridPicture from './gridPicture/gridPicture'
import MainEvent from './mainEvent/mainEvent'
import categoryData from '../shared/sampleDatas/category.data';
import mainbannerData from '../shared/sampleDatas/mainbanner.data';
import eventData from '../shared/sampleDatas/event.data';
import Help from './help/help';


class Main extends Component {


  bannerModel: BannerModel; //state
  categoryList: CategoryModel[] = [];
  eventData:EventModel;
  constructor(props: {} | Readonly<{}>) {
    super(props);
    // 샘플 데이터
    this.bannerModel = mainbannerData;
    this.categoryList=[...categoryData];
    this.eventData=eventData;
  }

  public render() {
    return <div className="container">
      <div className="event-banner-box" style={
        {
          backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ),url(${this.bannerModel?.backgroundImg})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 700px'
        }
      }>
        <div className="contents-box">
          {/* undfinded 주의 */}
          <MainBanner data={this.bannerModel}></MainBanner>
        </div>
      </div>
      <div className="picture-box">
        <GridPicture data={this.categoryList}></GridPicture>
      </div>
      <div className="event-box">
          <MainEvent data={this.eventData} children={this.props.children} ></MainEvent>  {/* props 타입정의 */}
      </div>
      <div className="help-box">
          <Help></Help>
      </div>
    </div>;
  }
}

export default Main;
