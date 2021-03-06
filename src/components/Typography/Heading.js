import React from 'react';
import PropTypes from 'prop-types'; // ES6
import styled from 'styled-components';
import theme from '../Theme/theme';

const XLarge = styled.h1`
  font-family: ${props => props.theme.fonts.heading || 'sans-serif'};
  color:${props => props.color ? props.color : props.theme.colors.heading || '#000'};
  padding:0;
  margin:0;
  font-weight:${props => props.weight || 'bold'};
  letter-spacing: 0.7px;
  font-size: 4.3em;
  line-height: 1;
`;

const H1 = styled.h1`
  font-family: ${props => props.theme.fonts.heading || 'sans-serif'};
  color:${props => props.color ? props.color : props.theme.colors.heading || '#000'};
  padding:0;
  margin:0;
  font-weight:${props => props.weight || 'bold'};
  letter-spacing: 0.7px;
  font-size: 3.750em;
  line-height: 1;
`;
const H2 = styled.h2`
  font-family: ${props => props.theme.fonts.heading || 'sans-serif'};
  color:${props => props.color ? props.color : props.theme.colors.heading || '#000'};
  padding:0;
  margin:0;
  font-weight:${props => props.weight || 'bold'};
  letter-spacing: 0.7px;
  font-size: 3.125em;
  line-height: 1.1;
`;
const H3 = styled.h3`
  font-family: ${props => props.theme.fonts.heading || 'sans-serif'};
  color:${props => props.color ? props.color : props.theme.colors.heading || '#000'};
  padding:0;
  margin:0;
  font-weight:${props => props.weight || 'bold'};
  letter-spacing: 0.7px;
  font-size: 2.125em;
  line-height: 1.1;
`;
const H4 = styled.h4`
  font-family: ${props => props.theme.fonts.heading || 'sans-serif'};
  color:${props => props.color ? props.color : props.theme.colors.heading || '#000'};
  padding:0;
  margin:0;
  font-weight:${props => props.weight || 'bold'};
  letter-spacing: 0.7px;
  font-size: 1.625em;
  line-height: 1.2;
`;
const H5 = styled.h5`
  font-family: ${props => props.theme.fonts.heading || 'sans-serif'};
  color:${props => props.color ? props.color : props.theme.colors.heading || '#000'};
  padding:0;
  margin:0;
  font-weight:${props => props.weight || 'bold'};
  letter-spacing: 0.7px;
  font-size: 1.375em;
  line-height: 1.5;
`;
const H6 = styled.h6`
  font-family: ${props => props.theme.fonts.paragraph || 'sans-serif'};
  color:${props => props.color ? props.color : props.theme.colors.heading || '#000'};
  padding:0;
  margin:0;
  font-weight:${props => props.weight || 'bold'};
  letter-spacing: 0.7px;
  font-size: 1.150em;
  line-height: 1.4;
`;

const Heading = (props) => {

  if (props.type === 'x-large') {
    return (
      <XLarge {...props}>{props.children}</XLarge>
    );
  }

  if (props.type === 'h1') {
    return (
      <H1 {...props}>{props.children}</H1>
    );
  }

  if (props.type === 'h2') {
    return (
      <H2 {...props}>{props.children}</H2>
    );
  }

  if (props.type === 'h3') {
    return (
      <H3 {...props}>{props.children}</H3>
    );
  }

  if (props.type === 'h4') {
    return (
      <H4 {...props}>{props.children}</H4>
    );
  }

  if (props.type === 'h5') {
    return (
      <H5 {...props}>{props.children}</H5>
    );
  }

  if (props.type === 'h6') {
    return (
      <H6 {...props}>{props.children}</H6>
    );
  }

  return (
    <H1 {...props}>{props.children}</H1>
  );
};

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string
};

Heading.defaultProps = {
  theme: theme
}

export default Heading;
