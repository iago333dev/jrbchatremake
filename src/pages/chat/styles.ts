import styled, { createGlobalStyle } from 'styled-components';

const root = {
  white: "#fff",
  black: "#000",
  bg: "#f8f8f8",
  grey: "#999",
  dark: "#1a1a1a",
  light: "#e6e6e6", //"#e6e6e6"
  wrapper: "1000px",
  blue: "#00b0ff",
  secondary: "#eceff1" //
}

interface GlobalProps{
  state: string;
}

export const Bubble = styled.div<GlobalProps>`

    ${props => props.state === 'you' && `
          float: leftt;
          padding: 13px 14px;
          border-radius: 5px;
          background-color: ${root.light};
          color: ${root.white};
          width: 50%;
          margin: 3px 0px;
          padding-top: 2%;
    `}


  ${props => props.state === 'me' && `
          float: right;
          padding: 13px 14px;
          border-radius: 5px;
          background-color: ${root.grey};
          color: ${root.white};
          width: 50%;
          margin: 3px 0px;
          padding-top: 2%;


    `}


`
export const MsgInput = styled.input`
font-size: 16px;
    float: left;
    width: 347px;
    height: 40px;
    padding: 0 10px;
    color: ${root.dark};
    border: 0;
    outline: none;
    background-color: #eceff1;
    font-family: "Source Sans Pro", sans-serif;
    font-weight: 400;
`
export const Write = styled.a`
    float: left;
    position: absolute;
    bottom: 29px;
    left: 30px;
    height: 42px;
    padding-left: 8px;
    border: 1px solid ${root.light};
    background-color: ${root.secondary};
    width: calc(100% - 58px);
    border-radius: 5px;
`
export const WriteSmiley = styled.a`
float: left;
  display: inline-block;
  width: 20px;
  height: 42px;
  content: "";
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/smiley.png");
  background-repeat: no-repeat;
  background-position: center;
`
export const WriteSend = styled.a`
  display: inline-block;
  float: left;
  
  width: 20px;
  height: 42px;
  margin-left: 11px;
  content: "";
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/send.png");
  background-repeat: no-repeat;
  background-position: center;
`

export const WriteLink = styled.a`
  display: inline-block;
  float: left;
  width: 20px;
  height: 42px;
  content: "";
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/attachment.png");
  background-repeat: no-repeat;
  background-position: center;

`


export const People = styled.ul`
  width: calc(100% + 2px);
  overflow: auto;
`

export const Span = styled.span<GlobalProps>`

${props => props.state === 'name_active' && `
        font-size: 14px;
        line-height: 22px;
        color: ${root.white};
        font-family: "Source Sans Pro", sans-serif;
        font-weight: 600px;
    `}

${props => props.state === 'name' && `
        font-size: 14px;
        line-height: 22px;
        color: ${root.grey};
        font-family: "Source Sans Pro", sans-serif;
        font-weight: 600px;
    `}
    ${props => props.state === 'time' && `
    font-size: 14px;
    position: absolute;
    top: 44%;
    right: 10%;
    padding: 0 0 5px 5px;
    color: ${root.grey};
    background-color: ${root.white};
    `}
    ${props => props.state === 'time_active' && `
    font-size: 14px;
    position: absolute;
    top: 44%;
    right: 10%;
    padding: 0 0 5px 5px;
    color: ${root.white};
    `}
    ${props => props.state === 'preview' && `
      font-size: 14px;      
      overflow: hidden !important;
      width: 70%;
      white-space: nowrap;
      text-overflow: ellipsis;      
      color: ${root.grey}; 
    `}
    ${props => props.state === 'preview_active' && `
      font-size: 14px;      
      overflow: hidden !important;
      width: 70%;
      white-space: nowrap;
      text-overflow: ellipsis;      
      color: ${root.white}; 
    `}
    ${props => props.state === 'convstart' && `
      font-size: 14px;
      display: inline-block;          
      color: ${root.grey};

    `}
`

export const PersonList = styled.li<GlobalProps>`
position: relative;
width: 100%;
padding: 1px 0% 6%;
cursor: pointer;


${props => props.state === '_active' && `
    background-color: ${root.grey}
  `}
  ${props => props.state === '' && `
    background-color: ${root.white}
  `}
`

export const Wrapper = styled.div`
  position: relative;
  left: 50%;
  width: 799px;
  height: 800px;
  transform: translate(-50%, 0);
`
export const Container = styled.div`
    position: absolute;
    top: 37%;
    left: 50%;
    width: 100%;
    height: 75%;
  background-color: ${root.white};
  transform: translate(-50%, -50%);
`
export const Left = styled.div`
  float: left;
  width: 36%;
  height: 88%;
  overflow-y: auto;
  overflow-x: hidden;  
`
export const ConvStart = styled.div`
  position: relative;  
  width: 100%;
  margin-bottom: 27px;
  margin-top: 27px;
  text-align: center;
`

export const Top = styled.div`
  width: 100%;
  height: 16%;
  background-color: ${root.white};
  
  text-align: center;
`
export const LeftInput = styled.input`
float: left;
    width: 213px;
    height: 39px;
    padding: 15px 15px 5px;
    border-color: ${root.secondary};
    background-color: ${root.secondary};
    border-radius: 21px;
    font-family: "Source Sans Pro",sans-serif;
    font-weight: 400;
    margin: 8% 2% 8%;
    outline: 0;
`

export const Search = styled.a`
margin-top: 7%;
display: block;
float: left;
width: 42px;
height: 42px;
margin-left: 10px;
border: 1px solid ${root.light};
background-color: ${root.grey};
background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/name-type.png");
background-repeat: no-repeat;
background-position: top 12px left 14px;
border-radius: 50%;
`
export const Profimg = styled.img`
  float: left;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 2% 4% 1%;
  src: ${props => props.src};
  
`

export const Right = styled.div`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    position: relative;
    float: left;
    width: 64%;
    height: 88%;
    border: 1px solid ${root.light};

`
export const RightTop = styled.div`
    width: 100%;
    height: 47px;
    padding: 15px 29px;
    background-color: ${root.secondary};
`
/*
export const Status = styled.div`	
    border-radius:50%;
    width:9px;
    height:9px;
    position:absolute;
    top:25%;
    right:17px;

		${props => props.className === 'avaible' && `
        background:#26c281;
    `}
    ${props => props.className === 'away' && `
        background:#ffce54;
    `}
    ${props => props.className === 'inactive' && `
        background:#eaeef0;
    `}
`






/*

export const Span = styled.span`


  ${props => props.className === 'SubName' && `
    font-size:13px;
    font-weight:400;
    color:#aab8c2;
    margin-left: 4%;
    `
  }
`

export const Friendimg = styled.img`
    width:40px;
    border-radius:50%;
    margin-left: 10px;
		margin-top: 0.8%;
    float:left;
    src: ${props => props.src};
`

export const Profile = styled.div`
	height:153px;
	overflow:hidden;
	text-align:center;	
	background: ${props => `#fff url(${props.className}) 0 0 no-repeat`};

`


export const SendMsgBt = styled.input`
    width: 30px;
    height: 30px;
    position: absolute;
    right: 15px;
    top: 23px;
    border: none;		
		background: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/send.png") 0 -41px no-repeat;
`
*/