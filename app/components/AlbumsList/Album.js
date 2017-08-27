import styled from 'styled-components';

const AlbumThumb = styled.div`
  display: inline-block;
  width: calc(25% - 20px);
  height: 0;
  padding-bottom: 23%;
  margin: 10px;
  background: url(${(props) => props.image}) no-repeat #333;
  background-size: cover;
  background-position: 50% 50%;
  position: relative;
  overflow: hidden;
    
  &:hover {
    &::before {
      transition: .2s 0s ease-in-out;
      top: 0;
    }
    &::after {
      transition: .2s .2s ease-out;
      right: 0;
    }
  }
  
  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: -100%;
    left: 0;
    background-color: rgba(0,0,0,.7);
    
    transition: .2s .4s ease-in-out;
  }
  
  &::after {
    content: '${(props) => props.name}';
    font-size: 20px;
    line-height: 1.2em;
    color: #fff;
    text-align: center;
    overflow: hidden;
    display: block;
    padding: 20px;
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    right: -100%;
    
    transition: .2s .2s ease-out;
  }
`;

export default AlbumThumb;
