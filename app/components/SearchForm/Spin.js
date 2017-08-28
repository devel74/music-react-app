import styled from 'styled-components';

const Spin = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${(props) => props.img}) center no-repeat #fff;
  background-size: cover;
  opacity: ${(props) => props.isDisplay ? 1 : 0};
`;

export default Spin;
