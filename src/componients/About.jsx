import React from 'react'
import {AboutUs} from './styled'
import { Link, Links } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import kids from '../assets/about/kids.avif'
import employed from '../assets/about/employed.webp'
import ally from '../assets/about/ally.webp'
import Investor from '../assets/about/Investor.avif'
import cares from '../assets/about/Careers.avif'
import kidssss from '../assets/about/kidssss.avif'


const About = () => {
  return (
    <AboutUs>
     <div className='tops'>
    <div className="backhom">
    <Link to='/'>Home</Link>
    <IoIosArrowForward style={{color: 'black', verticalAlign: 'middle'}}/>
    <Link to='#'>About</Link>
    </div>
    </div>
    <div className="buttom">
     <div className="bannerwaper">
          <div className="banner">
        <h3>About Us</h3>
        <h4>Committed beyond banking.</h4>
      </div>
      <div>
        <img src={kidssss} alt="kidssss" />
      </div>
     </div>
    </div>
    <div className="headline">
       <div className="mydiv">
         <h4>Our Company</h4>
        <p> We’re making banking smarter and simpler while serving our communities. We value and encourage the mantra of working better together. Our commitment to our customers has been at the core of who we are for 100 years, this includes connecting with our communities.</p>
        <Link>Learn more about our company</Link>
       </div>
    </div>

    <div className="Social">
        <div className="Socials">
            <h4>Social Impact</h4>
            <div>
            <h3>Spark positive change.</h3>
            <p>We firmly believe it’s our responsibility as corporate citizens to make a positive social impact on the world around us. This belief is embedded in the very fabric of our business and culture. We’re focused on environmental, social, and governance (ESG) issues that differentiate us from our peers, provide a positive social impact and help our stakeholders understand what’s important to us.</p>
            <Link style={{color: 'whitesmoke'}}>Learn more about social impact</Link>
            </div>
        </div>

        <div className="flex">
            <div>
              <div><img src={kids} alt="kids"  style={{width: '100%'}}/></div>
                <h4>Economic Mobility</h4>
                <p>We support economic mobility for all. It’s about connecting, collaborating, and working within the community. Providing greater access to financial education and resources not only enriches people’s lives, it helps empower them to improve their economic circumstances.</p>
              <Link>Find out more about our unique approach</Link>
            </div>
            <div>
              <div><img src={employed} alt="employed"  style={{width: '100%'}}/></div>
                <h4>Employee Giving</h4>
                <p>Our employees believe in the power of connecting with the communities they live and work in. They roll up their sleeves and dedicate their time and energy to making a difference. We share our employees’ passion for giving back by matching their contributions and encouraging them to volunteer.</p>
              <Link>See what we’re doing in the community</Link>
            </div>
            <div>
              <div><img src={ally} alt="ally"  style={{width: '100%'}}/></div>
                <h4>Diversity and Inclusion</h4>
                <p>We are united by our differences. The best ideas come from a collective mixture of different perspectives and voices. When we welcome and support one another, we open the door to new ideas that help us build better relationships and experiences for our customers, employees and the communities we serve.</p>
              <Link>Learn more about our inclusive culture</Link>
            </div>
        </div>
    </div>

    <div className="Careers">
         <div className="careswrapper">
          <div className='imgimage'><img src={cares} alt="cares" /></div>
        <div className="Careerss">
            <h4>Careers at JETSTREAM</h4>
            <p>Come for the opportunity and grow from the experience.</p>
            <p>Our teammates are committed to developing award-winning technology services and products that make your life easier. They are diverse thinkers that create new ideas and encourage innovation.</p>
            <Link>Find out how we’re building together</Link>
        </div>
         </div>


    </div>


    <div className="Investors">
     <div className="divinvets">
          <div className="Investor">
            <h4>Investor Relations</h4>
            <p>Our 2024 10-K Annual Report (PDF 15.1 MB) provides extensive information about our latest financial results.</p>
           <Link style={{color: 'whitesmoke'}}>Get more information on our financial results</Link>

           <h4>Investor Toolkit</h4>
           <p>Find everything you need in a one-stop spot.</p>
           <h3>Resources</h3>
           <Link style={{color: 'whitesmoke'}}>Fact Sheet (PDF) 2023 Corporate Social Responsibility Report (PDF) Q1 Earnings Presentation (PDF)</Link>
        </div>
        <div className='imgdib'>
          <img src={Investor} alt="Investor" />
        </div>
     </div>
    </div>

    <div className="FEWTHINGS">
    <h3>A FEW THINGS YOU SHOULD KNOW</h3>
    <p>JETSTREAM Financial Inc. (NYSE: JETSTREAM) is a leading digital financial services company, NMLS ID 3015 . JETSTREAM Bank, the company's direct banking subsidiary, offers an array of deposit products and services. JETSTREAM Bank is a Member FDIC and Equal Housing Lender   , NMLS ID 181005 . Credit products are subject to approval and additional terms and conditions apply. Programs, rates and terms and conditions are subject to change at any time without notice.</p>
    <p>JETSTREAM Servicing LLC, NMLS ID 212403  is an affiliate of JETSTREAM Financial Inc.</p>
    <p>Options involve risk and are not suitable for all investors. Review the Characteristics and Risks of Standardized Options brochure   before you begin trading options. Options investors may lose the entire amount of their investment or more in a relatively short period of time. </p>
    <p>Trading on margin involves risk. You can lose more funds than you deposit in a margin account. Please review Margin Account Agreement and Disclosure  for more information regarding margin trading.</p>
    <p>Securities products and services are offered through JETSTREAM Invest Securities LLC, member FINRA / SIPC . For background on JETSTREAM Invest Securities go to FINRA’s BrokerCheck .  Advisory services offered through JETSTREAM Invest Advisors Inc., a registered investment adviser.  View Invest Disclosures . JETSTREAM Invest Advisors and JETSTREAM Invest Securities  are wholly owned subsidiaries of JETSTREAM Financial Inc.  Securities products are NOT FDIC INSURED, NOT BANK GUARANTEED, and MAY LOSE VALUE. </p>
    <p>Before you invest, you should carefully review and consider the investment objectives, risks, charges, and expenses of any mutual fund or exchange-traded fund (ETF) you are considering. ETF trading prices may not necessarily reflect the net asset value of the underlying securities. A mutual fund/ETF prospectus contains this and other information and can be obtained by emailing support@invest.JETSTREAM.com .</p>
    <p>Ladder Insurance Services, LLC (CA license # OK22568; AR license # 3000140372) offers term life insurance products issued by multiple insurers. For details go to ladderlife.com . All insurance product terms are set and governed by the individual insurance policy. Each insurer has financial responsibility for its own products. </p>
    <p>JETSTREAM credit cards are issued by JETSTREAM Bank, Member FDIC. Mastercard and the circles design are registered trademarks, and Mastercard ID Theft Protection is a trademark, of Mastercard International Incorporated. ©2025 Mastercard. All rights reserved. Certain terms, conditions, and exclusions apply. Cardholders need to register for this service. This service is provided by Iris® Powered by Generali.</p>
    <p>FICO® is a registered trademark of the Fair Isaac Corporation in the United States and other countries.</p>
    <p>JETSTREAM and Do It Right are registered service marks of JETSTREAM Financial Inc.</p>
    <p>App Store is a service mark of Apple Inc. Google Play is a trademark of Google Inc. </p>
    <p>Zelle and the Zelle related marks are wholly owned by Early Warning Services, LLC and are used herein under license.</p>
    <p>From NerdWallet. © 2017-2025 and TM, NerdWallet, Inc. All rights reserved. </p>
    <p>From Fortune. ©2025 Fortune Media IP Limited. All rights reserved. FORTUNE and Fortune 100 Best Companies to Work For® are registered trademarks of Fortune Media IP Limited and are used under license. FORTUNE and Fortune Media IP Limited are not affiliated with, and do not endorse products or services of JETSTREAM Financial.  </p>
    <p>PEOPLE’s Companies That Care Logo® is a registered trademark of TI Gotham, Inc., a Dotdash Meredith company. Used under license.</p>
    </div>

      <hr style={{marginBlock: '2rem'}}/>

     
    </AboutUs>
  )
}

export default About
