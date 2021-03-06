import React from 'react';
import PropTypes from 'prop-types'; // ES6
import { VictoryStack } from 'victory';

const ChartStack = (props) => {
  return (
    // Stuff here
    <VictoryStack>
      {props.children}
    </VictoryStack>
  );
};

ChartStack.propTypes = {
  children: PropTypes.node.isRequired
};

export default ChartStack;
