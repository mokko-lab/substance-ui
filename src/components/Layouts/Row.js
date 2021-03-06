import React from 'react';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  position: relative;
  margin: ${(props)=>props.gutter ? (-props.gutter+'px 0 0 ' + -props.gutter+'px') : 0};

  &>div {
    box-sizing: border-box;
    position: relative;
    flex: ${(props)=>props.columnsCount ? '0 0 '+(100/props.columnsCount)+'%' : '0 0 100%'};
    padding: ${(props)=>props.gutter ? (props.gutter+'px 0 0 ' + props.gutter+'px') : 0};

    @media (max-width: 1200px) {
      flex: ${(props)=>props.columnsCount ? '0 0 100%'  : 1};
    }
  }
`;

const ColumnBase = styled.div`
  display: ${(props)=>props.matchHeight ? 'flex' : 'block'};
`;


/* Responsive Bit (based on SideBar)

@media (max-width: 768px) {
  margin-left: 64px;
}
*/

class Column extends React.Component {

  constructor() {
    super();
    this.state = {
      loading: false
    };
  }

  render() {
    return (
      <ColumnBase matchHeight={this.props.matchHeight}>
          {this.props.children}
      </ColumnBase>
    )
  }
}



export {
  Row,
  Column
};
