import styled from "styled-components";



export const Navbar = styled.nav`
 font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: whitesmoke;

  .menuwdropdown{
    display: none;
  }

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
    .bottonwrapper{
        position: relative;
    }
        .menuw{
        display: block;

    }

    a{
        color: black;
        text-decoration: none;
        font-size: 20px;
    }
    .topdrop{
       display: flex;
       flex-direction: column;
       margin-top: -7rem;
       gap: 1.3rem;
       align-items: center;
       justify-content: center;
    }

    .topdropOne{
        display: flex;
       flex-direction: column;
       margin-top: -17rem;
       gap: 1.3rem;
       align-items: center;
       justify-content: center;
    }

    .closedrop{
       color: red;
       font-size: 30px;
       
    }
    
      .menuwdropdown{
        z-index: 100;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 200px;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 100%;
    height: 100vh;
    background-color: white;
    color: black;

  }
    .bottonline{
        display: none;
    }

    .right{
        display: none;
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












export const Accountnavbar = styled.main`
padding: 1rem 2rem;
background-color: #121a27;

  

.left{
    width: 100%;
}

.left>img{
    width: 200px;
}

.accountNavWrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
  
}
.menubardrop{
    display: none;
}

a{
    display: flex;
    justify-content: end;
    align-items: end;
    width: 320px;
    text-align: end;
    vertical-align: middle;
}

.rigt{
    cursor: pointer;
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
}

a{
    text-decoration: none;
    color: white;
    opacity: .8;
}

@media screen and (max-width: 1000px) {
    .left{
        display: none;
    }
    .menubardrop{
    display: block;
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

@media screen and (max-width: 1000px) {
    form{
     width: 90%;
    }
    form>div{
        width: 90%;
    }

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







export const Personalpr = styled.main`
font-family: "Lato", sans-serif;
  font-size: 17px;

  .bann{
    width: 100%;

  }
  img{
    width: 100%;
  }

.sectionOne{
    
    width: 90%;
    margin: 2rem auto;
}

.save{
    display: flex;
    color: #007cba;
    margin-block: 2rem;
    font-size: 37px;
    font-weight: 700;
    justify-content: space-between;
}

.linebutton{
    border-bottom: 3px solid #007cba;
    /* padding: 1rem; */
    width: 98%;
}
.cards{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 70%;
    margin-left: auto;
    /* border: 3px solid; */
    gap: 2rem;
}

.cards>div{
    background-color: #fdd756;
    padding: 2px 2px;
    border-radius: 15px;
}

.heading{
    padding: 1rem 0.6rem;
    color: #007cba;
    
}

h3{
font-size: 19px;
font-weight: 600;
}
p{
font-size: 17px;
font-weight: 350;
}


.writeup{
    background-color: white;
    color: black;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    padding: 0.7rem;
}

button{
    border: none;
    padding: 0.3rem 1rem;
    border-radius: 20px;
    background-color:  #007cba;
    

}
a{
    color: whitesmoke;
    text-decoration: none;
}


@media screen and (max-width: 1000px) {

    .bann{
    max-width: 100%;
    }
    img{
        width: 100%;
    }
    .sectionOne {
        width: 95%;
        margin: 1rem auto;
    }

    .save {
        flex-direction: column;
        align-items: flex-start;
        font-size: 30px;
        width: 90%;
    }
    

    .cards {
        grid-template-columns: repeat(1, 1fr);
        width: 100%;
        gap: 1.5rem;
    }

    h3 {
        font-size: 17px;
    }

    p {
        font-size: 15px;
    }

    button {
        padding: 0.4rem 0.8rem;
        font-size: 14px;
    }
}


`



export const Businessnav = styled.main`
font-family: "Lato", sans-serif;
  font-size: 17px;

img{
    width: 100%;
}
.busineserapper{
 background-color: #f9f8f6;
}


.business{
    width: 90%;
    margin: auto;
    border: 1px solid #f9f8f6;;
}

.save{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin-block: 1rem;
}

.save>span{
    font-size: 35px;
    font-weight: 900;
    color: #007cba;
}

.line{
    border-bottom: 3px solid yellow;
    width: 97%;
}

.cards{
    width: 70%;
    margin-left: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
}

.cards>div{
    margin-block: 1rem;
 background-color: #007cba;
 padding: 4px 4px;
 border-radius: 15px;
}

.bodies{
    background-color: white;
    padding: 0.9rem;
    border-bottom-right-radius: 15px ;
    border-bottom-left-radius: 15px ;
}
p{
    font-size: 23px;
}
.bodies>span{
    font-size: 18px;
    font-weight: 350;
}

button{
    border-radius: 15px;
    background-color: #007cba;
    border: none;
    padding: 0.5rem 1rem;
    color: whitesmoke;
    
}

.heading{
    padding: 1rem;
    color: whitesmoke;
    font-weight: 600;
}

.heading>span{
    font-size: 25px;
}




@media screen and (max-width: 1000px) {
  .business {
    width: 95%;
  }

  .save {
    flex-direction: column;
    align-items: flex-start;
  }

  .save > span {
    font-size: 28px;
  }

  .cards {
    width: 100%;
    grid-template-columns: 1fr; /* Stack cards vertically */
    gap: 1rem;
  }

  p {
    font-size: 20px;
  }

  .bodies > span {
    font-size: 16px;
  }

  .heading > span {
    font-size: 22px;
  }

  button {
    width: 100%; /* Make buttons full width on smaller screens */
    text-align: center;
  }
}


`






export const Resoucesss = styled.main`
font-family: "Lato", sans-serif;
  font-size: 17px;

  .bann{
    width: 100%;

  }
  img{
    width: 100%;
  }

.sectionOne{
    
    width: 90%;
    margin: 2rem auto;
}

.save{
    display: flex;
    color:#695070;
    margin-block: 2rem;
    font-size: 37px;
    font-weight: 700;
    justify-content: space-between;
    align-items: center;
}

.linebutton{
    border-bottom: 3px solid  #695070;
    width: 90%;
}
.cards{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 70%;
    margin-left: auto;
    /* border: 3px solid; */
    gap: 2rem;
}

.cards>div{
    background-color: #a57db0;
    padding: 2px 2px;
    border-radius: 15px;
}

.heading{
    padding: 1rem 0.6rem;
    color: white;
    
}

h3{
font-size: 19px;
font-weight: 600;
}
p{
font-size: 17px;
font-weight: 350;
}


.writeup{
    background-color: white;
    color: black;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    padding: 0.7rem;
}

button{
    border: none;
    padding: 0.3rem 1rem;
    border-radius: 20px;
    background-color: #695070;
    

}
a{
    color: whitesmoke;
    text-decoration: none;
}


@media screen and (max-width: 1000px) {

    .bann{
    max-width: 100%;
    }
    img{
        width: 100%;
    }
    .sectionOne {
        width: 95%;
        margin: 1rem auto;
    }

    .save {
        flex-direction: column;
        align-items: flex-start;
        font-size: 30px;
        width: 90%;
    }
    

    .cards {
        grid-template-columns: repeat(1, 1fr);
        width: 100%;
        gap: 1.5rem;
    }

    h3 {
        font-size: 17px;
    }

    p {
        font-size: 15px;
    }

    button {
        padding: 0.4rem 0.8rem;
        font-size: 14px;
    }
}


`


















export const DashbaordAcccount = styled.main`
font-family: "Lato", sans-serif;


.dashboardwrapper{
    display: flex;
    background-color: #121a27;
}
.leftSideBar{
    padding: 0.4rem 1rem;
    height: 100%;
    color: white;
    width: 25%;
    gap: 2rem;
    display: flex;
    flex-direction: column;
    /* border-right: 1px solid lightgrey; */
    border-top: 1px solid lightgrey;
}


.linkbtn{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
}

.linkbtn>a>button{
    padding: 0.5rem 2rem;
    color: whitesmoke;
    background-color: #192436;
    border: none;
    width: 200px;
    border-radius: 20px;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
}

.menus{
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
    gap: 2.3rem;
}

.balance{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
    
}
.btndv{
    margin-block: 1.5rem;
    display: flex;
    gap: 0.5rem;
    
}


.btndv>a>button{
    padding: 0.5rem 0.5rem;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    color: white;
    font-weight: 500;
    font-size: 13px;
    border-radius: 7px;
}

a{
    text-decoration: none;
    color: white;

}


.rightInof{
    color: white;
    /* background-color: green; */
    border-left: 2px solid lightgray;
    border-top: 1px solid lightgray;
    padding: 1rem;
    width: 100%;
}








/* profile */


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
    width: 70%;
    margin: auto;
  
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
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










.tractionhistoty {
  width: 100%;
  height: 100%;  /* or use 100vh if you want full viewport height */
  padding: 10px;
  box-sizing: border-box;
  overflow-x: auto; /* allow horizontal scroll if needed */
  background: whitesmoke;
  border-radius: 6px;
  box-shadow: 0 0 8px rgba(0,0,0,0.1);
  font-family: Arial, sans-serif;
}

.tractionhistoty h2 {
  margin-bottom: 15px;
  font-weight: 600;
  color: #333;
}

.tractionhistoty table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
  table-layout: fixed;
}

.tractionhistoty table thead tr {
  background-color: #f4f6f8;
  border-bottom: 2px solid #ddd;
  /* color: whitesmoke; */
}

.tractionhistoty table th,
.tractionhistoty table td {
  padding: 10px 8px;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border-bottom: 1px solid #eee;
}

.tractionhistoty table th {
  font-weight: 600;
  color: #555;
}

.tractionhistoty table tbody tr:hover {
  background-color: #f0f8ff;
  cursor: pointer;
}

.tractionhistoty table td:first-child {
  font-weight: 700;
}

/* Colors for credit and debit */
.tractionhistoty table td {
  color: #444;
}

.tractionhistoty table td[style*="green"] {
  color: green;
}

.tractionhistoty table td[style*="red"] {
  color: red;
}

/* Responsive for smaller screens */
@media (max-width: 1000px) {
  .tractionhistoty table,
  .tractionhistoty table thead,
  .tractionhistoty table tbody,
  .tractionhistoty table th,
  .tractionhistoty table td,
  .tractionhistoty table tr {
    display: block;
  }

  .tractionhistoty table thead tr {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }

  .tractionhistoty table tr {
    margin-bottom: 1rem;
    border-bottom: 2px solid #ddd;
  }

  .tractionhistoty table td {
    border: none;
    position: relative;
    padding-left: 50%;
    white-space: normal;
    text-align: right;
  }

  .tractionhistoty table td::before {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 45%;
    padding-right: 10px;
    white-space: nowrap;
    font-weight: 600;
    text-align: left;
    content: attr(data-label);
  }
}



/* ======================================================================================== */
/* transfer form */



.AcctInsured{
    margin: auto;
    width: 80%;
    display: flex;
    justify-content: center;
    background-color: white;
    padding: 2rem 0rem;
    /* gap: 1rem; */
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
    width: 80%;
    margin: 1rem auto;
    padding: 1rem;
    box-shadow: 4px 4px 8px;
    border-radius: 10px;
}




form>div{
    display: flex;
    flex-direction: column;
    width: 60%;
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




.amounr{
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}








@media screen and (max-width: 1000px) {

    .otp-modal{
        width: 90% !important;
    }

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


  .Dashboard{
    width: 90%;
    margin: auto;
  }

.headerss{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1rem;
    /* border: 0.3px solid lightgray; */
    border-radius: 4px;
    box-shadow: 3px 3px 6px;
    font-size: 20px;
}

.welcomname{
    display: flex;
    flex-direction: column;
}

.atag>a{
   margin-left: 1rem;
   padding: 0.4rem 1rem;
   border-radius: 4px;
}


.overviewaccoun{
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    margin-top: 4rem;
  
}

.secondboxcheck{
    display: flex;
    flex-direction: column;
    flex: 1;
}

.trs{
    display: flex;
    justify-content: space-between;
}

.na{
    border-radius: 100%;
    height: 90px;
    width: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0b131d;
    font-size: 30px;
    margin-bottom: 3.6rem;
}

.boxsz{
    flex: 1;
    display: flex;
    border-radius: 8px;
    margin-top: 1rem;
    gap: 4rem;
    background-color: #0a3071;
    width: 400px;
    padding: 1rem 1rem;

}

.seconbox{
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    /* padding: 2rem 2rem; */
}

.checkingbox{
    display: flex;
    flex-direction: column;
    padding: 1.7rem 1rem;
    gap: 10px;
    margin-block: 1rem;
    border-radius: 14px;
    background-color: #0d141e;
}

.loadns{
  display: flex;
  gap: 1rem;
}

.loadns>div{
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 1.8rem 1rem;
    gap: 10px;
    border-radius: 14px;
    background-color: #0d141e;
}


.bittons {
    display: flex;
    width: 500px;
    margin: 3rem auto;
    box-shadow: 4px 4px 8px;
    padding: 2rem;
}

.bittons > div {
    height: 150px;
    width: 150px;
    border-radius: 50%;
   background: linear-gradient(59deg, green 50%, red 50%);
    margin: 3rem auto;
}




@media screen and (max-width: 1000px) {

    .dashboardwrapper{
        position: relative;
    }
    .leftSideBar{
        position: absolute;
        width: 75%;
        background-color: #252c38;
        height: 100%;
        z-index: 500;
    }


  .overviewaccoun {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-top: 2rem;
  }

  .secondboxcheck {
      flex: 1;
      flex-direction: column;
  }

  .trs {
      flex-direction: column;
      gap: 1rem;
  }

  .na {
      height: 70px;
      width: 70px;
      font-size: 24px;
      margin-bottom: 2rem;
      margin-bottom: 0rem;
  }

  .boxsz {
      flex-direction: column;
      width: 100%;
      gap: 1rem;
  }

  .seconbox {
      gap: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      font-size: 20px;
  }

  .checkingbox {
      padding: 1rem;
      gap: 8px;
      margin-block: 1rem;
  }

  .loadns {
      flex-direction: column;
      gap: 1rem;
  }

  .loadns > div {
      padding: 1.2rem;
  }

  .bittons {
      flex-direction: column;
      width: 100%;
      padding: 1rem;
      box-shadow: none;
      align-items: center;
  }

  .bittons > div {
      height: 120px;
      width: 120px;
      margin: 1rem 0;
      background: linear-gradient(59deg, green 50%, red 50%);
  }

  .headerss{
    flex-direction: column;
    width: 100%;
  }

  .atag{
    font-size: 14px;
    margin-top: 2rem;
  }
}



`