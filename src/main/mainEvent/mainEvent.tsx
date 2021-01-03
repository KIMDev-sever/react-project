import React, { Component } from 'react';
import './mainEvent.scss';
import { EventModel } from '../../shared/model/event.model'
import { Button, Icon } from '@material-ui/core';
import { Link } from 'react-router-dom';

type MainEventProps = {
  data: EventModel;
  children: React.ReactNode;
};
class MainEvent extends Component<MainEventProps> { //프롭스타입 정의

  event: EventModel | undefined;
  listTag: void[] | undefined;
  listboxRef: React.RefObject<HTMLDivElement>; //돔 취득
  btnSW:boolean=true;
  constructor(props: MainEventProps | Readonly<MainEventProps>) {
    super(props);
    this.listboxRef = React.createRef();
  }
  moveScroll(width: number) {
    if (!!this.listboxRef && !!this.listboxRef.current) {
      this.listboxRef.current?.scrollBy({  top: 0,
        left: width,
        behavior: 'smooth'});
    }
  }

  render() {
    this.event = this.props.data;
    const listTag = this.event.eventList.map((data) =>
    (<Link to={`/product/detail/${data.id}`}><div className="event">
      <img src={data.img} alt={data.key}></img> {/*리엑트에서 이미지 태그 는 alt를 정의해줘야됨 */}
      <h5>{data.title}</h5>
      <span className="price-box"><span className="price">{data.price}원</span><span className="sale">{data.price-(data.price*data.sale/100)}원</span></span>
    </div>
    </Link>)
    )
    return <div className="content-box">
      <div className="box-title"><span><h2>{this.event.title}</h2></span></div>
      <div className="list-box">
          { !!this.btnSW &&
            <Button variant="contained" className="btn left" onClick={() => { this.moveScroll(-200) }}><Icon>keyboard_arrow_left</Icon></Button>
          }
          { !!this.btnSW &&
          <Button variant="contained" className="btn right" onClick={() => { this.moveScroll(200) }}><Icon>keyboard_arrow_right</Icon></Button>
          }
         
        <div  className="list" ref={this.listboxRef}>
          {listTag}
        </div>
      </div>
    </div>

  }
}
export default MainEvent; //다중 HOC recompose
