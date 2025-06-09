import styled from "styled-components";



export const Navbar = styled.nav`
 font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: whitesmoke;

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
 background-color:#300942 ;
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
    background-color: #300942 ;
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
background-color: #650360;
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


@media screen and (max-width: 800px) {
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
    border-radius: 17px;
    border: none;
 background-color:#007cba;
 color: whitesmoke;
 font-weight: 600;
}



@media screen and (max-width: 800px) {

    .carouselwrappeer{
        flex-direction: column-reverse;
        gap: 0rem;
        width: 100%;
    }

}
`














export const Footers = styled.footer`
 font-family: "Lato", sans-serif;
  font-size: 15px;

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
    margin-block:1rem;
}

@media screen and (max-width: 800px) {
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