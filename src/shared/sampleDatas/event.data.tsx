import { EventModel } from '../model/event.model'
import Apple from '../../assets/images/apple.jpg'

import Coffee from '../../assets/images/coffee.jpg'
import Dish from '../../assets/images/dish.jpg'
import Bread from '../../assets/images/bread.jpg'
import Bookshelf from '../../assets/images/bookshelf.jpg'
const EventData:EventModel={
    key:'sale',
    title:'ON SALE',
    eventList:[
        {
           description:'제수용 맛있는사과',
           img:Apple,
           key:'sale',
           category:'food',
           price:6000,
           sale:10,
           title:'사과 350g 이상크기1개',
           id:'213dafds'
        },
        {
            description:'콜롬비아 산타로사 수프리모 스페셜티',
            img:Coffee,
            key:'sale',
            category:'food',
            price:11000,
            sale:5,
            title:'스페셜티',
            id:'dsdsdaqwes'
         },
         {
            description:'북유럽접시, 수입접시, 명품접시, 에르타입접시, 디저트 플레이트, 예쁜접시',
            img:Dish,
            key:'sale',
            category:'stuff',
            price:39800,
            sale:10,
            title:'수입접시',
            id:'13vdsavr2312'
         },
         {
            description:'우유, 버터, 계란 NO! 속이 편한 천연발효 통밀빵!',
            img:Bread,
            key:'sale',
            category:'food',
            price:2500,
            sale:5,
            title:'천연발효빵 통밀당 11종',
            id:'jlksd23i1'
         },
         {
            description:'',
            img:Bookshelf,
            key:'sale',
            category:'furniture',
            price:660000,
            sale:50,
            title:'메이플 5단 철제책장',
            id:'cvnklbvhsdklus'
         },
         {
            description:'제수용 맛있는사과',
            img:Apple,
            key:'sale',
            category:'food',
            price:6000,
            sale:10,
            title:'사과 350g 이상크기1개',
            id:'213dafds'
         },
         {
             description:'콜롬비아 산타로사 수프리모 스페셜티',
             img:Coffee,
             key:'sale',
             category:'food',
             price:11000,
             sale:5,
             title:'스페셜티',
             id:'dsdsdaqwes'
          },
          {
             description:'북유럽접시, 수입접시, 명품접시, 에르타입접시, 디저트 플레이트, 예쁜접시',
             img:Dish,
             key:'sale',
             category:'stuff',
             price:39800,
             sale:10,
             title:'수입접시',
             id:'13vdsavr2312'
          },
          {
             description:'우유, 버터, 계란 NO! 속이 편한 천연발효 통밀빵!',
             img:Bread,
             key:'sale',
             category:'food',
             price:2500,
             sale:5,
             title:'천연발효빵 통밀당 11종',
             id:'jlksd23i1'
          },
          {
             description:'',
             img:Bookshelf,
             key:'sale',
             category:'furniture',
             price:660000,
             sale:50,
             title:'메이플 5단 철제책장',
             id:'cvnklbvhsdklus'
          },
    ]
}
  
export default EventData;