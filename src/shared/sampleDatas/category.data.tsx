import { CategoryModel } from '../model/category.model'
import Food from '../../assets/images/food.jpg'
import Stuff from '../../assets/images/stuff.jpg'
import Furniture from '../../assets/images/furniture.jpg'
import Eletronic from '../../assets/images/eletronic.jpg'
import Dress from '../../assets/images/dress.jpg'
import Outdoor from '../../assets/images/outdoor.jpg'
import Hobby from '../../assets/images/hobby.jpg'
const categoryData:CategoryModel[] = [
    {
      img: Stuff,
      title: '잡화',
      author: 'jill111',
      featured: true,
      key: 'Stuff'
    },
    {
      img: Hobby,
      title: '취미',
      author: 'director90',
      cols: 2,
      featured: true,
      key: 'Hobby'
    },
    {
      img: Eletronic,
      title: '가전',
      author: 'Danson67',
      key: 'Eletronic'
    },
    {
      img: Furniture,
      title: '가구',
      author: 'fancycrave1',
      featured: true,
      key: 'Furniture'
    },
    {
      img: Dress,
      title: '패션',
      author: 'Hans',
      key: 'Dress'
    },
    {
      img: Outdoor,
      title: '아웃도어',
      author: 'fancycravel',
      cols: 2,
      key: 'Outdoor'
    },
    {
      img: Food,
      title: '식품',
      author: '',
      key: 'Food'
    }
  ];
  
  export default categoryData;