import styled from 'styled-components';

const MainPanel = styled.div`
  margin-left: ${props => props.theme.sidebar.width +'px' || '200px'};
  background-color: ${props => props.backgroundColor || '#fff' };
  min-height: 100vh;
`;

/* Responsive Bit (based on SideBar)

@media (max-width: 768px) {
  margin-left: 64px;
}

*/

export default MainPanel;
