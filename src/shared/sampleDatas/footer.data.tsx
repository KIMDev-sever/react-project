import { FooterModel } from '../model/footer.model'
import Instar from '../../assets/images/instar.png'
import Facebook from '../../assets/images/facebook.jpg'
import Twitter from '../../assets/images/twitter.png'
const FooterData:FooterModel={
    copyRight:'© kim-dev Website 2021.',
    snsList:[
        {icon:Facebook,key:'facebook',name:'페이스북',url:''},
        {icon:Twitter,key:'twitter',name:'트위터',url:''},
        {icon:Instar ,key:'instargram',name:'인스타',url:''}
    ],
    footerMenuList:[
        {
            key:'notice',
            name:'공지사항',
            target:'_self',
            url:'/notice'
        },
        {
            key:'Privacy',
            name:'개인정보정책',
            target:'_self',
            url:'/privacy'
        },
        {
            key:'terms_of_service',
            name:'이용약관',
            target:'_self',
            url:'/terms_of_service'
        }
    ]
}
  
export default FooterData;