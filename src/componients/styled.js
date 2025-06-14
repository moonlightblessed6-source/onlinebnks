import styled from "styled-components";



export const Navbar = styled.nav`
 font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: whitesmoke;

  .menuw{
    display: none;
  }

  .bottonline{
    border-bottom: 1px solid #007cba;
    padding: 0.3rem 0rem;
    background-color: #007cba;
  }

.navwrapper{
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    
}

.leftLogo{
    /* width: 70px; */
    vertical-align: middle;
}

img{
    width: 100%;
}

.rightItems{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
}

.atag{
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.6rem;
    margin-right: 3rem;
    }
    a{
        text-decoration: none;
        color: whitesmoke;
    }

     a:hover{
        border-bottom: 2px solid #300942;
     }
button{
    border:none;
    padding: 0.4rem 2rem;
    color:  black;
    background-color: #f4cf53;
    border-radius: 30px;
    cursor: pointer;
     font-family: "Lato", sans-serif;
    font-weight: 700;
    font-size: 15px;

  
}

button:hover{
    background-color: whitesmoke;
}

.bottonwrapper{
 box-shadow: 4px 4px 8px;
 padding: 1.5rem 0rem;
}
.downnav{
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.right{
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
}

@media screen and (max-width: 1000px){
    .bottonline{
        display: none;
    }

    .right{
        display: none;
    }
    .menuw{
        display: block;
    }

    .left{
        width: 50%;
    }

    img{
        width: 100%;
    }
}
`


export const AboutUs = styled.main`


 font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 15px;

.backhom{
    display: flex;
     color: whitesmoke;
     gap: 0.5rem;
width: 90%;
margin: auto;
}

a{
           text-decoration: none;
        color: #000;
        opacity: .8;
}

.banner{
display: flex;
 flex-direction: column;
 gap: 2rem;
color: whitesmoke;
width: 90%;
margin: auto;
}

.bannerwaper{
 display: flex;
 width: 90%;
 margin: auto;
}

.buttom{
 background-color: #007cba;
 padding: 3rem 0rem;

}

h4{
    font-size: 30px;
}
.tops{
background-color: #f2f2f2;
padding: 1rem 0rem;

}


.mydiv{
    width: 90%;
    margin: auto;
    padding: 3rem 0rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}


.Social{
    background-color: #007cba; ;
    color: whitesmoke;
    padding: 3rem 0rem;
}

.Socials{
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.Socials>div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 2rem 0rem;
    
}


.Socials>div>p{
    text-align: center;
}

.flex{
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
}

.flex>div{
    width: 90%;
    margin: auto;
    padding: 2rem 1rem;
    background-color: #ffff;
    flex: 1;
    /* height: 270px; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    color: #000;
}

.Careerss{
    width: 90%;
    margin: auto;
    padding: 2rem 0rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.imgimage{
    width: 90%;
    margin: auto;
    margin-top: 2rem;
}

.Investors{
background-color: #007cba;;
padding: 3rem 0rem;
color: whitesmoke;
display: flex;
}

.Investor{
    display: flex;
    flex-direction: column;
    gap: 1rem;

}
.imgdib{
    width: 40%;
}
img{
    width: 100%;
}

.divinvets{
    display: flex;
    width: 90%;
    margin: auto;
    justify-content: center;
    align-items: center;
}



.FEWTHINGS{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    margin: auto;
    flex-direction: column;
    gap: 1rem;
    font-weight: 500;
    margin-top: 3rem;
}


@media screen and (max-width: 1000px) {
    .flex {
        display: flex;
        flex-direction: column;
    }

    .mydiv{
    width: 90%;
    /* margin: auto; */
    padding: 2rem 0rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.divinvets{
    flex-direction: column;
    display: flex;
    gap: 1rem;
}

.imgdib{
    width: 100%;
}
img{
width: 100%;
}

.bannerwaper{
    flex-direction: column;
    display: flex;
    gap: 1rem;;
}

}

`


export const ContactUs = styled.main`

 font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 15px;

a{
    text-decoration: none;
    color: #000;
}



.nav{
background-color: #f2f2f2;
display: flex;
justify-content: start;
align-items: center;
gap: 1rem;
 

}

.nav>div{
width: 90%;
margin: auto;
padding: 0.8rem 0rem;
}
.form{
    width: 90%;
    margin: auto;
    margin-block: 2rem;
}
.contactwrapers{
    display: flex;
    gap: 7rem;
    margin-block: 2rem;

}

.contactwrapers>div{
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.cals{
display: flex;
gap: 0.5rem;
align-items: center;
    
}

`



export const Homepagemain = styled.section`
 font-family: "Lato", sans-serif;

.carouselwrappeer{
    width: 90%;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;
}

.securelogin{
 border: 3px solid #fdd756;
 width: 500px;
 background-color: whitesmoke;
 padding: 1rem;
 border-radius: 20px;
 color: #007cba;
 font-weight: 900;
}

.loginform{
    gap: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}

.btn{
    padding: 0.5rem 2rem;
    border-radius: 20px;
    border: none;
 background-color:#007cba;
 color: whitesmoke;
 font-weight: 600;
}


.apply{
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0rem;
}

.btnn{
       padding: 0.5rem 7rem;
    border-radius: 30px;
    border: none;
 background-color:#007cba;
 color: whitesmoke;
 font-weight: 600; 
}


.loanwraper{
    display: flex;
    width: 90%;
    margin: auto;
    align-items: center;
    justify-content: space-between;
    margin-block: 2rem;
}

.loanwraper>div{
    border: 1px solid lightgray;
    width: 100%;
    padding: 2rem 1rem;
}

h5{
    color: #007cba;
    font-size: 20px;
    font-weight: 800;
}

p{
    font-size: 30px;
    font-weight: 700;
}

a:hover{
 color: #fdd756;
}


.Bankings{
  margin-block: 2rem;

}

ul{
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

h5{
    font-size: 30px;
    font-weight: 700;
    text-align: center;
    margin-top: 2rem;
}
h6{
    text-align: center;
    margin-block: 1rem;
    font-size: 18px;
}
.Bankingwrapprs{
    border-top: 1px solid lightgray;
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.EasyVest{
 margin-block: 3rem;
}
.EasyVestwraper{
    width: 90%;
    margin: auto;
    display: flex;
    gap: 2rem;
    border: 2px solid  #fdd756;
   border-radius: 11px;
   margin-top: 1rem;
}
image{
   width: 1000px;
}


.toolswrpper{
    width: 90%;
    margin: auto;
    display: flex;
    overflow: auto;
    gap: 2rem;
    margin-top: 1rem;

}
.wrap{
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 20px;
    /* border: 1px solid #007cba; */
    gap: 1rem;
    width: 80%;
    background-color: #fdd756;
}



.imgdiv{
    width: 550px;
    height: 400px;
    border-bottom-left-radius: 20px;
    border-top-left-radius: 20px;

}

.wrote{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex: 1;
    width: 400px;
    
}
.wrote>h4{
    font-size: 20px;
}


@media screen and (max-width: 1000px) {

    .securelogin{
        width: 90%;
        margin-block:1rem;
    }

    .carouselwrappeer{
        flex-direction: column-reverse;
        gap: 0rem;
        width: 100%;
    }

    .apply{
        width: 100%;
        flex-direction: column;
        gap: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
       
    }

    button{
        font-size: 14px;
    }

    .loanwraper{
        display: flex;
        flex-direction: column;
    }

    h5{
        width: 90%;
        margin: auto;
        font-size: 23px;
    }

    ul{
         font-family: "Lato", sans-serif;
    }

    .EasyVestwraper{
        display: flex;
        flex-direction: column;
        width: 90%;
           border: none;
    }

    .EasyVestwraper>div{
        width: 100%;
    }
    .EasyVestwraper > div > img {
  width: 100% !important;
  border-top-left-radius: 10px!important;
  border-top-right-radius: 10px!important;
  border-bottom-left-radius: 0px !important;

}

.EasyVest>h1{
    font-size: 21px !important;
}

 h4, h3{
    font-size: 19px !important;
}





    .wrap {
        flex-direction: column;
        align-items: flex-start;
        min-width: 90%;
    }

    .imgdiv {
        width: 100%;
        border-radius: 20px 20px 0 0;
    }

    .imgdiv>img{
        border-bottom-left-radius: 0px !important;
        height: 200px !important;
        border-top-right-radius: 20px;
    }

    .wrote {
        width: 100%;
        padding: 1rem 2rem;
        margin-top: -12rem;
       
    }
}
`







export const Accountpage = styled.main`
font-family: "Lato", sans-serif;
background-color: #eff7ff;

.accounwrapper{
    width: 80%;
    border: 1px solid #eff7ff;
    margin: auto;
    
}

.accountname>span{
    margin-top: 2rem;

}

.accountname{
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.AcctInsured{
    display: flex;
    justify-content: center;
    background-color: white;
    padding: 3rem 2rem;
    gap: 1rem;
    border-left: 2px solid #007cba;
    box-shadow: 2px 2px 4px;
    align-items: center;
    margin-bottom: 3rem;
}
.AcctInsured>div>h1{
    font-size: 21px;
    
}
.AcctInsured>div>p{
    font-size: 16px;
}

.checking{
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    padding: 1rem 2rem;
    background-color: white;
    box-shadow: 2px 2px 4px;
     border: 1px solid #007cba;
    justify-content: start;
    align-items: start;
}

button{
    border: none;
    background-color: #007cba;
    padding: 0.3rem 1rem;
    color: whitesmoke;
    border-radius: 30px;

}
.checking>span{
    font-size: 17px;
}


.cds{
    display: flex;
    margin-top: 3rem;
    gap: 1rem;
    justify-content: space-evenly;
    box-sizing: 2px 2px 4px;
}

.cds>div{
    padding: 1rem;
    background-color: white;
    flex: 1;
    

}


.cds>div>p{
    font-size: 18px;
}

.botton{
    font-size: 13px;
    margin-top: 8rem;
    margin-bottom: 2rem;
}


@media screen and (max-width: 1000px) {
  .accounwrapper {
    width: 95%;
    margin: auto;
  }

  .accountname {
    gap: 0.5rem;

  }

  .accountname > span {
    margin-top: 1rem;
  }

  .bar{
    display: none;
  }

  .AcctInsured {
    flex-direction: column;
    padding: 1rem;
    text-align: center;
  }

  .AcctInsured > div > h1 {
    font-size: 18px;
  }

  .AcctInsured > div > p {
    font-size: 14px;
  }

  .checking {
    padding: 1rem;
  }

  .checking > span {
    font-size: 16px;
  }

  .cds {
    flex-direction: column;
    gap: 1rem;
  }

  .cds > div {
    width: 100%;
  }

  .cds > div > p {
    font-size: 16px;
  }

  .botton {
    margin-top: 4rem;
    font-size: 12px;
  }
}


`





export const AccountProfile = styled.main`
font-family: "Lato", sans-serif;
background-color: #eff7ff;


 .profilewrapper{
  border: 0.2px solid #eff7ff;
    
 }

.AcctInsured{
    margin: 3rem auto;
    width: 80%;
    display: flex;
    justify-content: center;
    background-color: white;
    padding: 2rem 0rem;
    gap: 1rem;
    border-left: 2px solid #007cba;
    box-shadow: 2px 2px 4px;
    align-items: center;
    margin-bottom: 3rem;
}

h1{
 font-size: 20px;
 text-align: center;
}
.basicinfo>span{
    display: flex;
    justify-content: center;
}

.basicinfo{
padding: 0.4rem 0rem;
font-weight: 900;


}

.table{
    width: 40%;
    margin: auto;
    margin-block: 3rem;
}

.table>div{
    border-bottom: 1px solid lightgray;
    display: flex;
    margin-block: 1rem;
    justify-content: space-between;
    font-size: 16px;
    font-weight: 600;
}
button{
    width: 100%;
    padding: 0.4rem 2rem;
    border: 1px solid #007cba;;
    background-color: #007cba;
    color: whitesmoke;
}








@media screen and (max-width: 1000px) {


  .AcctInsured {
    flex-direction: column;
    padding: 1rem;
    text-align: center;
  }
  .bar{
    display: none;
  }

   .table {
    width: 90%;
    margin: auto;
    margin-block: 1rem;
  }

  .table > div {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  button {
    width: 100%;
    padding: 0.6rem 1rem;
    font-size: 14px;
  }


}




`



export const Accountnavbar = styled.main`
padding: 1rem 2rem;

.navv{
    
}

.left{
    width: 100%;
}

.left>img{
    width: 300px;
}

.accountNavWrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    margin: auto;

}

.rigt{
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
}

a{
    text-decoration: none;
    color: black;
    opacity: .8;
}

`


export const TransferAccount = styled.main`

font-family: "Lato", sans-serif;
background-color: #eff7ff;


 .profilewrapper{
  border: 0.2px solid #eff7ff;
    
 }

.AcctInsured{
    margin: auto;
    width: 80%;
    display: flex;
    justify-content: center;
    background-color: white;
    padding: 2rem 0rem;
    gap: 1rem;
    border-left: 2px solid #007cba;
    box-shadow: 2px 2px 4px;
    align-items: center;
    margin-bottom: 3rem;
}


h3{
    width: 80%;
    margin: 2rem auto;
}

form{
    width: 60%;
    margin: 1rem auto;
    padding: 1rem;
    box-shadow: 4px 4px 8px;
    border-radius: 10px;
}




form>div{
    display: flex;
    flex-direction: column;
    width: 35%;
    margin: 1rem auto;
}

input{
    padding: 0.3rem 1rem;
    outline: none;
    border-radius: 8px;
}

button{
    padding: 0.3rem 1rem;
    color: whitesmoke;
    background-color: #007cba;
    border: 2px solid #007cba;
}



.bottonwrite{
    width: 80%;
    margin: auto;
    margin-top: 5rem;
    margin-bottom: 2rem;
}

.bottonwrite> p, span{
    font-size: 13px;
}


.amounr{
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}







@media screen and (max-width: 1000px) {

    form{
        width: 95%;
    }

    form>div{
        width: 80%;
    }


  .AcctInsured {
    flex-direction: column;
    padding: 1rem;
    text-align: center;
    width: 95%;
    
  }

  .AcctInsured>h1{
    margin-top: 0rem;
  }

  .bar{
    display: none;
  }


  .bottonwrite {
    width: 95%;
    margin-top: 3rem;
    margin-bottom: 1.5rem;
  }

  .bottonwrite > p,
  .bottonwrite > span {
    font-size: 12px;
  }

  

  }

`





export const Loginaccount = styled.main`
font-family: "Lato", sans-serif;
font-size: 18px;

form{
    margin: 3rem auto;
    width: 50%;
    box-shadow: 4px 4px 8px;
    border-radius: 8px;
    padding: 4rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

}

input{
    padding: 0.3rem 1rem;
    border-radius: 8px;
    outline: none;
}

button{
    padding: 0.3rem 1rem;
    border-radius: 8px;
    background-color:#007cba;
    color: whitesmoke;
    border: 1px solid #007cba;;
}
form>div{
    width: 40%;
    margin: auto;
    display: flex;
    flex-direction: column;

}

`





export const Footers = styled.footer`
 font-family: "Lato", sans-serif;
  font-size: 17px;


  .footerwrapper{
background-color: #007cba;
color: whitesmoke;
padding: 2rem;
  }

.temss{
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: auto;
      
}

p{
    font-weight: 700;
}
a{
    text-decoration: none;
    color: #000;
    /* opacity: .7; */
}
li{
    cursor: pointer;
}
.temss>div{
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    /* border-bottom: 2px solid lightgray; */
}

ul{
list-style-type: none;
display: flex;
flex-direction: column;
gap: 0.5rem;
margin-bottom: 2rem;
}

.bottonlast{
    width: 90%;
    margin: auto;
    /* margin-block:1rem; */
    background-color: #007cba;
color: whitesmoke;

}

.wedobsiness{
    display: flex;
    gap: 1rem;
    width: 90%;
    margin: auto;
    justify-content: end;
    margin-top: 2rem;
}

.mrp{
    width: 90%;
    margin: auto;  
    text-align: end;
}

@media screen and (max-width: 1000px) {
   .temss{
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
   }
   .temss>div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   }

   ul{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   }


}
`