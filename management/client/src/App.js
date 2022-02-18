import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Paper from '@material-ui/core/Table';
import Custmoer from './components/Customer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})

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
    const { classes } = this.props;
     
    return (
      <Paper className={classes.root}>
      
        <Table className={classes.table}>
          
          <TableHead>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>상별</TableCell>
            <TableCell>직업</TableCell>
          </TableHead>
          <TableBody>
            {custmoer.map (c => {
            return ( <Custmoer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
            );
            })}
          </TableBody>
        </Table>
        
  
      </Paper>
    );
  }
}

export default withStyles(styles)(App);

