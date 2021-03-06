import React from 'react';
import styled from 'styled-components';
import theme from '../Theme/theme';

const Wrapper = styled.div`
  min-height: 100vh;
`;

const Sidebar = styled.div`
  background: ${props => props.background || '#FFF'};
  min-width: 64px;
  width: ${props => props.width +'px' || '200px'};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 50;
  min-height: 100vh;
  overflow: auto;
  box-shadow: ${props => props.shadow ? '0 2px 20px rgba(0,0,0,0.1)' : 'none'};
`;

const Header = styled.div`
  background: ${props => props.background || '#FFF'};
  width:100%;
  min-height: 50px;
  height: ${props => props.sticky ? props.shrinkHeight+'px' : props.height +'px' || '70px'};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  box-shadow: ${props => props.shadow ? '0 2px 20px rgba(0,0,0,0.1)' : 'none'};
  transition: height ease ${props => props.theme.animations.medium || '500ms'};
`;

const Content = styled.div`
  background-color: ${props => props.bg || '#fff' };
  min-height: 100vh;
  padding-left: ${props => props.sidebar ? props.sidebarWidth+'px' : '0px' || '0px' };
  padding-top: ${props => props.header ? props.headerHeight+'px' : '0px' || '0px' };
`;


class LayoutWrapper extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sticky: false
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentWillMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillReceiveProps(newProps) {
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;

    console.log('scrolling' + scrollTop);
    if (scrollTop > 100) {
      this.setState({
        sticky: true
      });

    } else {
      this.setState({
        sticky: false
      });
    }
  }




  render() {
    return (
      <Wrapper>

        {this.props.sidebarComponent ? (
          <Sidebar
            background={this.props.sidebarBg ? this.props.sidebarBg : '#fff'}
            width={this.props.sidebarWidth ? this.props.sidebarWidth : 270}
            shadow={this.props.sidebarShadow || false}
          >
            {this.props.sidebarComponent}
          </Sidebar>
        ) : this.props.headerComponent ? (
          <Header
            background={this.props.headerBg ? this.props.headerBg : '#FFF'}
            height={this.props.headerHeight ? this.props.headerHeight : 90}
            shrinkHeight={this.props.shrinkHeight ? this.props.shrinkHeight : 70}
            shadow={this.props.headerShadow || false}
            sticky={this.state.sticky}
          >
            {this.props.headerComponent}
          </Header>
        ) : null }
        {this.props.children ? (
          <Content
            sidebarWidth={(this.props.sidebarComponent && this.props.sidebarWidth) ? this.props.sidebarWidth : 270}
            headerHeight={(this.props.sidebarheaderComponentComponent && this.props.headerHeight) ? this.props.headerHeight : 70}
            sidebar={this.props.sidebarComponent ? true : false}
            header={this.props.headerComponent ? true : false}
            bg={this.props.contentBg}
          >
              {this.props.children}
          </Content>
        ) : null }
      </Wrapper>
    )
  }


};

LayoutWrapper.defaultProps = {
  theme: theme
};

Header.defaultProps = {
  theme: theme
};


export default LayoutWrapper;
