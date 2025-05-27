import styled from "styled-components";
import { primaryColor, secondaryColor,smallFontSize,middleFontSize,largeFontSize} from "./style/variable";
export const AppWarpper=styled.div`
.section{
    border:1px solid #ccc;

    .title{
    color:${props => props.color || 'blue'};
    font-size:20px;
     &:hover{
     background-color:orange;
      }
    }
}
.footer{
font-size:${smallFontSize};
color:${primaryColor};
    border:1px solid orange;
 }
`