import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Custmoer from './components/Customer';

const custmoer = [
{
  'id': 777,
  'image': 'https://placeimg.com/64/64/1',
  'name': '권현성',
  'birthday': '940105',
  'gender': '남자',
  'job': '라인 프론트엔드 개발자'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '김승식',
  'birthday': '950108',
  'gender': '남자',
  'job': '축구선수'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/3',
  'name': '장선영',
  'birthday': '891125',
  'gender': '여자',
  'job': '모델'
}
]

class App extends Component {
  render () {
  return (
      <div>
        {
        /* <Custmoer
          id={custmoer[0].id}
          imgage={custmoer[0].image}
          name={custmoer[0].name}
          birthday={custmoer[0].birthday}
          gender={custmoer[0].gender}
          job={custmoer[0].job}
        />
        <Custmoer
          id={custmoer[1].id}
          imgage={custmoer[1].image}
          name={custmoer[1].name}
          birthday={custmoer[1].birthday}
          gender={custmoer[1].gender}
          job={custmoer[1].job}
        />
        <Custmoer
          id={custmoer[2].id}
          imgage={custmoer[2].image}
          name={custmoer[2].name}
          birthday={custmoer[2].birthday}
          gender={custmoer[2].gender}
          job={custmoer[2].job}
        /> */
         custmoer.map (c => {
           return <Custmoer
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
           />
         })
        }
      </div>
    );
  }
}

export default App;
