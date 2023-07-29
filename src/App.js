//import 'bootstrap/dist/css/bootstrap.css';
import './custom.scss';
import React, { Component } from 'react';
import { Header } from './components/header';


import logo from './assets/img/primary-80ada38261b1c4f4.svg';

import img1 from './assets/img/bitmart.svg';
import img2 from './assets/img/consulting-partners.svg';
import img3 from './assets/img/chainlink.svg';
import img4 from './assets/img/luna-capital.png';
import img5 from './assets/img/binance.svg';
import img6 from './assets/img/accubits.svg';
import img7 from './assets/img/wave-up.svg';
import img8 from './assets/img/chainlab.svg';
import img9 from './assets/img/bros.svg';
import img10 from './assets/img/m3.svg';
import img11 from './assets/img/kairon.svg';
import img12 from './assets/img/solid-proof.png';
import img13 from './assets/img/certik1.svg';
import img14 from './assets/img/bnb-chain.png';

import team1 from './assets/img/team/radek-opt-1920.WEBP';
import team2 from './assets/img/team/radovan-opt-1920.WEBP';
import team3 from './assets/img/team/michael-opt-1920.WEBP';
import team4 from './assets/img/team/jamie-opt-1920.WEBP';
import team5 from './assets/img/team/rahul-opt-1920.WEBP';
import team6 from './assets/img/team/tomas-opt-1920.WEBP';
import team7 from './assets/img/team/luis-opt-1920.WEBP';
import team8 from './assets/img/team/ihor-opt-1920.WEBP';
import team9 from './assets/img/team/bohdan-opt-1920.WEBP';

import advisor1 from './assets/img/advisors/arthur-opt-1920.WEBP';
import advisor2 from './assets/img/advisors/blaine-opt-1920.WEBP';
import advisor3 from './assets/img/advisors/steve-opt-1920.WEBP';
import advisor4 from './assets/img/advisors/riccardo-opt-1920.WEBP';
import advisor5 from './assets/img/advisors/giacomo-opt-1920.WEBP';



import imageside from './assets/img/banners/ipad-pro-1.png';
import bg1 from './assets/img/banners/bg-figure.svg';
import bg2 from './assets/img/banners/5781083.jpg';

import social1 from './assets/img/social/linkedin+square+icon-1320168278649782468.png';

import ImageSlider from './components/imageslider';
import ChartGoogle from './components/chartgoogle';
import bootstrap from 'bootstrap/dist/js/bootstrap.min.js';
import TeamSection from './components/teamsection1';


//<img src="https://billionair.com/images/ido/bg-figure.svg" class="bg-image"  />
function App() {

  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    // Add more image URLs here
  ];
  const slidesToShow = 5; // Number of images to show at once
  const autoplaySpeed = 3000; // Auto-scrolling speed in milliseconds


  const data = [
    ["Task", "Hours per Day"],
    ["Liqudity", 24.9],
    ["Presale", 31.1],
    ["Team Vesting", 7.3],
    ["Locked", 24.3],
    ["Treasury", 12.4],
  ];

  const options = {
    //title: "My Daily Activities",
    legend: { position: 'left', alignment: 'center' },
    //colors: ['black', 'blue', 'red', 'green', 'yellow', 'gray'],
    colors: ["rgb(0, 143, 251)", "rgb(0, 227, 150)", "rgb(254, 176, 25)", "rgb(255, 69, 96)", "rgb(119, 93, 208)"],
    //width: 520,
    //height: 350

  };


  return (

    <div className="App bg " >
      <link rel="preload" as="image" imageSrcSet="https://billionair.com/images/team/nextImageExportOptimizer/radek-opt-640.WEBP 640w, https://billionair.com/images/team/nextImageExportOptimizer/radek-opt-750.WEBP 750w, https://billionair.com/images/team/nextImageExportOptimizer/radek-opt-828.WEBP 828w, https://billionair.com/images/team/nextImageExportOptimizer/radek-opt-1080.WEBP 1080w, https://billionair.com/images/team/nextImageExportOptimizer/radek-opt-1200.WEBP 1200w, https://billionair.com/images/team/nextImageExportOptimizer/radek-opt-1920.WEBP 1920w, https://billionair.com/images/team/nextImageExportOptimizer/radek-opt-2048.WEBP 2048w, https://billionair.com/images/team/nextImageExportOptimizer/radek-opt-3840.WEBP 3840w" imageSizes="100vw" />

      <Header />
    
      <div class="container col-xxl-8 px-4 py-5 bg-transparent" 
      //style={{"background-image": "url( https://billionair.com/images/hero/bg-figure.svg)"}}
      >
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <div class="styles_video__Xe9Bm h-[unset] w-[100%] md:h-[350px] md:w-[48%] lg:h-[400px] lg:w-[48%]"><iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" class="styles_youtube__rdAxS" frameborder="0" height="315" src="https://www.youtube.com/embed/IPwFQpSU3I4?autoplay=1&amp;mute=1" title="YouTube video player" width="560"></iframe></div>
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold  lh-1 mb-3 text-white">
              The Ultimate Web3 Raffle &    Earn Hub
            </h1>
            <p class="lead text-white">
              Join the official $ICOPAD token Pre-Sale and start earning now. Engage, experience, enjoy and win with an honest, fun and rewarding entertainment platform.
            </p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" class="btn btn-primary btn-lg px-4 me-md-2 b-secondary " style={{ background: "#414141", border: "none" }}>
                Whitepaper
              </button>
              <button type="button" class="btn btn-outline-secondary b-primary btn-lg px-4">
                Buy $ICOPAD Now
              </button>
            </div>
           
            <svg aria-hidden="true" class="inline-flex shrink-0 fill-current" focusable="false" role="presentation" style={{ width: "30px", height: "30px", fill: "rgb(255, 209, 120)" }}>
              <use xlinkHref={social1}></use>
            </svg>

          </div>
        </div>
      </div>
      <img alt="BillionAir"
       class=" -top-[260px] right-[-210px] -z-10 aspect-[0.94] h-[500px] min-w-full 
       scale-[1.5] sm:-top-[219px] sm:-right-[386px] sm:h-[749px] sm:scale-100 md:-top-[355px] 
       md:-right-[359px] md:h-[942px] lg:-top-[488px] lg:-right-[629px] 
       lg:h-[1267px] xl:-top-[678px] xl:-right-[639px] xl:h-[1547px]" 
       src="https://billionair.com/images/hero/bg-figure.svg" style={{
        "position":"absolute",
        "top":"-400px",
        "right":"-929px",
        "height":"-1267px",
        "z-index":" -10"
        }}></img>




      <div class="container py-4 shadow bg-color rounded-4">

        <header class="pb-3 mb-4 fw-bold text-white p-3 ">
          <div class="d-flex align-items-center gap-4">
            <h1 class="display-6 fw-bold">$ICOPAD=$0.030</h1>
            <div class="p-2">
              <div>
                <span>Raised:</span>
                <span class="c-lightblue"> $72,797 / $1,200,000</span>
              </div>
              <div>
                <span>Sold:</span>
                <span class=" c-lightblue"> 2,426,582 / 40,000,000</span>
              </div>
            </div>
            <h3 class="display-6 fw-bold  ">Phase 1</h3>
            <div class="p-2">
              <div>
                <span>Next phase:</span>
                <span> $0.033</span>
              </div>
              <div>
                <span>Final phase:</span>
                <span> $0.057</span>
              </div>
            </div>
          </div>
        </header>

        <div class="progress" role="progressbar" aria-label="Basic example"
          aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ height: "30px" }}>
          <div class="progress-bar w-75 c-p"></div>
        </div>

        <div class="p-5 mb-4  rounded-3 ">
          <div class="container-fluid d-flex align-items-center gap-4">

            <button class="btn btn-secdondary btn-lg text-white b-secondary" style={{ background: "#414141", border: "none" }}type="button">
              New to crypto?
            </button>
            <button class="btn btn-secdondary btn-lg text-white b-secondary" style={{ background: "#414141", border: "none" }} type="button">
              New to crypto?
            </button>
            <button class="btn btn-secdondary btn-lg text-white b-secondary" style={{ background: "#414141", border: "none" }} type="button">
              New to crypto?
            </button>
            <button class="btn btn-primary btn-lg text-white b-primary px-5 py-2" type="button">
              Buy $ICOPAD Now
            </button>
          </div>
        </div>

        <div class="container text-center text-white">
          You have <span class="c-lightblue">0</span> $ICOPAD
        </div>

      </div>

      <div class="container-fluid py-4 ">
        <h1 class="display-5 fw-bold  lh-1 mb-3 text-white text-center">
          Backers and Partners
        </h1>
        <ImageSlider images={images} slidesToShow={slidesToShow} autoplaySpeed={autoplaySpeed} />
      </div>


      <div class="container-fluid">
        <div class="row  align-items-center  py-5">
          <div class="col-10 col-sm-8 col-lg-5 bg-black">
            <div >
              <img src={imageside} class="img-fluid w-100%" />
            </div>
          </div>
          <div class="col-lg-7 align-items-center p-5">
            <h3 class="display-8 fw-bold  lh-1 mb-3 text-white">
              The BillionAir $ICOPAD token and NFT ticket create an economy filled with opportunities.
            </h3>
            <p class="lead text-white ">
              Offering the next generation of raffles and games, we provide opportunities to stake, burn, earn rewards, connect communities and win a variety of life-changing prizes.
            </p>
            <div class="text-center">
              <h3 class="display-9 fw-bold  lh-1 mb-3 text-white">
                Audit and KYC by
              </h3>
              <img class="pt-1 img-fluid" src={img12} />
              <br />
              <button type="button" class="pt-3 btn btn-outline-secondary b-primary btn-lg px-5">
                Buy $ICOPAD
              </button>
            </div>


          </div>
        </div>
      </div>

      <div class="container-fluid py-4 ">
        <h3 class="text-center display-6 fw-bold  lh-1 mb-3 text-white">
          BillionAir featured in
        </h3>
        <ImageSlider images={images} slidesToShow={slidesToShow} autoplaySpeed={autoplaySpeed} />
      </div>

      ---bg
      <div class="text-white pt-5" style={{"background-image":"url(https://res.cloudinary.com/practicaldev/image/fetch/s--_MCEk7P6--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/vm957e5dm3hxnwc94dd7.jpg)"}}>
        <div class="container py-4 shadow rounded-4"
         style={{"background-color": "rgb(28 29 35/1)"}}>
          <header class="pb-3 mb-4 fw-bold text-white px-5 ">

            <div class="d-flex align-items-center gap-4">
              <div class="items-left">
                <h1 class="display-5 fw-bold"
                  style={{
                    //"color": "linear-gradient(90deg, #FF93FF 8.89%, #FFADC7 49.36%, #FFBE9F 86.58%)",
                    "-webkit-background-clip": "text",
                    "background-clip": "text",
                    //"color": "transparent"
                  }}
                >BillionAir </h1>
                <h1 class="display-5 fw-bold">Ecosystem</h1>
                <p class="lead">
                  BillionAir is a revolutionary entertainment platform connecting both true gamers and existing web3 users. Combined with blockchain tech, we provide a provably fair ecosystem bringing value and entertainment to a global audience.
                </p>
              </div>

              <div>
                <div class="text-black rounded-4 p-4" style={{ "background-color": "hsla(0,0%,100%,.8)" }}>
                  <h3 class="display-7 fw-bold">$ICOPAD Token</h3>
                  <p class="lead">Platform-wide currency utilized for every transaction, including purchases, staking, and earning multipliers with built-in deflation.</p>
                </div>
                <br />
                <div class="text-black rounded-4 p-4" style={{ "background-color": "hsla(0,0%,100%,.8)" }}>
                  <h3 class="display-7 fw-bold">$ICOPAD Token</h3>
                  <p class="lead">Platform-wide currency utilized for every transaction, including purchases, staking, and earning multipliers with built-in deflation.</p>
                </div>
              </div>
            </div>
          </header>

          <div class="pt-5 relative w-full overflow-hidden mt-10 hidden !h-auto rounded-2xl !bg-transparent sm:block md:mt-5">
            <video class="h-full w-full scale-[1.002] transform transition-opacity opacity-100 absolute top-0 left-0"
              loop="" playsinline="" preload="auto" poster="https://billionair.com/video/blockchain-poster.webp">
              <source src="https://billionair.com/_next/static/videos/ecosystem-c7e34f0086c353f7539efa646502c415.mp4" type="video/mp4" />
              <source src="https://billionair.com/_next/static/videos/blockchain-2a17f546fa40fb2c62cc7d299a356840.webm" type="video/webm" />
            </video>
          </div>

        </div>


        <div class="container pt-5" >

          <div class="row ">
            <div class="col-sm-5">
              <div class="card card-black text-white rounded-5 py-4 px-3">
                <div class="card-body">
                  <h2 class="card-title fw-bold">Staking</h2>
                  <p class="card-text">
                    The BillionAir ecosystem provides a variety of safe and secure staking opportunities, with rewards up to <span class="c-yellow">240% APY</span>. Maximising the benefits of the available earnings can make your raffles, games and entertainment experience essentially free, and even profitable!
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-7">
              <div class="card card-black text-white rounded-5 py-4 px-3">
                <div class="card-body">
                  <h2 class="card-title fw-bold">Raffles</h2>
                  <p class="card-text">
                    ream cars, skydives, bucket list experiences and much, much more! You can <span class="c-yellow">make your dreams come true</span> with our next-generation raffles to win and priceless time for you and your loved ones. Walk away with digital assets such as tokens or NFTs, physical goods including cars, watches, and electronics, and even once-in-a-lifetime trips and activities.
                  </p>
                </div>
              </div>

            </div>

          </div>
          <br />

          <div class="row">

            <div class="col-sm-5 ">
              <div class="card mb-3 card-black text-white rounded-5 py-4 px-3">
                <div class="card-body">
                  <h2 class="card-title fw-bold">Tier system</h2>
                  <p class="card-text">
                    Everything counts! Play games, enter raffles, invite friends, or actively participate in the community to level up on our built-in tier system. Earn the opportunity to gain <span class="c-yellow">higher APY </span>and greater odds of winning the main raffle prizes with invaluable ticket multipliers.
                  </p>
                </div>
              </div>
              <div class="card card-black text-white rounded-5 py-4 px-3">
                <div class="card-body">
                  <h2 class="card-title fw-bold">Transparency</h2>
                  <p class="card-text">
                    Blockchain technology, and therefore BillionAir, is decentralised, immutable, and unalterable. This creates a level playing field, making every game and raffle <span class="c-yellow">provably fair</span> for everyone, without any edge over other players.
                  </p>
                </div>
              </div>

            </div>
            <div class="col-sm-7">
              <div class="row gx-3">
                <div class="col-6  ">
                  <div class="card card-black text-white rounded-5 py-4 px-3">
                    <div class="card-body">
                      <h2 class="card-title fw-bold">Games</h2>
                      <p class="card-text">
                        Play games with the community, challenge your friends or take a shot at someone across the globe! Our entertainment ecosystem offers a <span class="c-yellow">great selection</span> of thrilling games to satisfy even the most demanding players, ranging from chance-based and arcade games to cutting-edge VR-based options. As we develop and expand, we aim to bridge chains and expand communities, creating and introducing games in collaboration with not-yet-gamified projects.
                      </p>
                    </div>
                  </div>

                </div>
                <div class="col-6 ">
                  <div class="card card-black text-white rounded-5 py-4 px-3">
                    <div class="card-body">
                      <h2 class="card-title fw-bold">Buybacks</h2>
                      <p class="card-text">
                        Long-term sustainability and value are key focus areas within our vision, and this is assisted through several value creation mechanisms. We achieve both sustainability and constant growth with a built-in <span class="c-yellow">deflationary mechanism</span> powered by a systematic token-burning process. Additionally, the token buyback program controls the circulating supply of $ICOPAD tokens, supports staking and increases token value.
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>

        </div>


        <div class="container-fluid text-white  p-5 card  mt-5" style={{"background":"rgb(28 29 35/1)"}}>
          <h1 class="display-8 fw-bold text-center " style={{ "padding-top": "120px" }}> BillionAir platform to be released after Pre-Sale </h1>
          <div class=" gs-container container " style={{
            "background":"url('https://billionair.com/images/info/device.webp')",
             "background-size": "100% 100%",
             "padding": "2rem"
          }}>
            <div class="container mx-2 md:mx-5">
    <div class="position-relative overflow-hidden rounded-2xl">
        <video class="w-100 scale-[1.002] transform transition-opacity opacity-100 cursor-pointer"
                loop="" playsinline="" preload="auto">
                <source src="https://billionair.com/_next/static/videos/billionair-5e4fc4301286b398fac69a6304bcb1af.mp4" type="video/mp4" />
                <source src="https://billionair.com//_next/static/videos/billionair-5345ccd9e0321bb4deafd3ac61c93fa8.webm" type="video/webm" />
              </video>

              </div>
            </div>
          </div>


        <br />
        <br />

        <div class="py-5">
        <div class="container py-4   rounded-4 text-white " style={{
          "background": "hsla(0,0%,100%,.02)",
          "box-shadow": "inset 1px 1px 5px hsla(0,0%,100%,.1)"}}>
          <header class="pb-3 mb-4 fw-bold text-white p-5 ">
            <div class="d-flex align-items-center gap-4">
              <h1 class="display-7 fw-bold">$ICOPAD Tokenomics</h1>
            </div>
            <div class="container">
              <div class="row">
                <div class="col-4 pt-5">
                  <ul class="flex w-[100%] flex-col gap-[120px]">
                    <li class="flex items-center justify-end">
                      <span class="styles_tit__d7cHI">Public Sale</span>
                      <span class="styles_per__SDr2Q ml-[10px] mr-[16px]">41%</span>
                      <span class="h-[10px] w-[10px]" style={{ "background": "rgb(82, 105, 239)", "border-radius": "s50%" }} ></span>
                    </li>
                    <li class="flex items-center justify-end">
                      <span class="styles_tit__d7cHI">Staking</span>
                      <span class="styles_per__SDr2Q ml-[10px] mr-[16px]">12%</span>
                      <span class="h-[10px] w-[10px]" style={{ "background": "rgb(78, 154, 236)", "border-radius": "s50%" }} ></span>
                    </li>
                    <li class="flex items-center justify-end">
                      <span class="styles_tit__d7cHI">Community</span>
                      <span class="styles_per__SDr2Q ml-[10px] mr-[16px]">10%</span>
                      <span class="h-[10px] w-[10px]" style={{ "background": "rgb(255, 139, 240)", "border-radius": "s50%" }} ></span>
                    </li>
                    <li class="flex items-center justify-end">
                      <span class="styles_tit__d7cHI">Marketing</span>
                      <span class="styles_per__SDr2Q ml-[10px] mr-[16px]">8%</span>
                      <span class="h-[10px] w-[10px]" style={{ "background": "rgb(255, 149, 125)", "border-radius": "s50%" }} ></span>
                    </li>
                    <li class="flex items-center justify-end">
                      <span class="styles_tit__d7cHI">Operations &amp; Dev</span>
                      <span class="styles_per__SDr2Q ml-[10px] mr-[16px]">8%</span>
                      <span class="h-[10px] w-[10px]" style={{ "background": "rgb(99, 143, 255)", "border-radius": "s50%" }} ></span>
                    </li>
                  </ul>
                </div>
                <div class="col-4">
                  <img alt="Chart" src="https://billionair.com/images/partners/chart.svg" />
                </div>
                <div class="col-4 pt-5">
                  <ul class="flex w-[100%] flex-col gap-[12px]">
                    <li class="flex items-center">
                      <span class="h-[10px] w-[10px]" style={{ "background": "rgb(234, 140, 140)", "border-radius": "s50%" }} ></span>
                      <span class="styles_per__SDr2Q ml-[16px] mr-[10px]">5%</span>
                      <span class="styles_tit__d7cHI">Treasury</span>
                    </li>
                    <li class="flex items-center">
                      <span class="h-[10px] w-[10px]" style={{ "background": "rgb(172, 126, 255)", "border-radius": "s50%" }} ></span>
                      <span class="styles_per__SDr2Q ml-[16px] mr-[10px]">1%</span>
                      <span class="styles_tit__d7cHI">Airdrop</span>
                    </li>
                    <li class="flex items-center">
                      <span class="h-[10px] w-[10px]" style={{ "background": "rgb(255, 203, 111)", "border-radius": "s50%" }} ></span>
                      <span class="styles_per__SDr2Q ml-[16px] mr-[10px]">5%</span>
                      <span class="styles_tit__d7cHI">Exchange &amp; Liquidity</span>
                    </li>
                    <li class="flex items-center">
                      <span class="h-[10px] w-[10px]" style={{ "background": "rgb(255, 122, 122)", "border-radius": "s50%" }} ></span>
                      <span class="styles_per__SDr2Q ml-[16px] mr-[10px]">5%</span>
                      <span class="styles_tit__d7cHI">Team</span>
                    </li>
                    <li class="flex items-center">
                      <span class="h-[10px] w-[10px]" style={{ "background": "rgb(100, 195, 194)", "border-radius": "s50%" }} ></span>
                      <span class="styles_per__SDr2Q ml-[16px] mr-[10px]">5%</span>
                      <span class="styles_tit__d7cHI">Advisors</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <h1 class="display-7 fw-bold">Pre-Sale Progress</h1>
            <div class="d-flex justify-content-between bg-red">
              <div >
                $227,771
              </div>
              <div >
                $17,550,000
              </div>
            </div>
          </header>
          <div class="progress" role="progressbar" aria-label="Basic example"
            aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ height: "30px" }}>
            <div class="progress-bar w-75 c-p"></div>
          </div>
          <header class="pb-3 mb-4 fw-bold text-white p-5 ">
            <div class="d-flex align-items-center gap-4">
              <h4 class="display-9 fw-bold">We accept</h4>
              <div class="p-2">
                <div>
                  <span>Fixed Limit:</span>
                  <span class="c-lightblue"> 1,000,000,000 $ICOPAD</span>
                </div>
                <div>
                  <span>Exchange:</span>
                  <span class=" c-lightblue"> 1 $ICOPAD = $0,03 - $0,057</span>
                </div>
                <div>
                  <span>Currency:</span>
                  <span class=" c-lightblue"> ETH, BNB, USDT, BUSD, USDC</span>
                </div>
              </div>
              <div class="p-2">
                <button class="btn btn-primary btn-lg text-white b-primary" type="button">
                  Buy $ICOPAD Now
                </button>
              </div>
            </div>
          </header>

        </div>
</div>

          <TeamSection //style={{"opacity": "0","transform": "translateY(100px) translateZ(0px)"}} 
          />
        <div class="container text-white p-5">
          <div class="row p-5">
            <div class="col-6 p-5">
              <h1 class="display-5 fw-bold  ">Roadmap</h1>
              <p>Detailed action plan making us excited for the future of earntertainment.</p>
            </div>
            <div class="col-6 p-5">
              <div class="row gy-4">

                <div classs="col-12">
                  <div class="card  shadow bg-color rounded-5" style={{ background: "rgba(0, 0, 0, 0.5)" }}>
                    <div class="card-body">
                      <h5 class="card-title fw-bold  c-yellow">Q3 - 2022</h5>
                      <p class="card-text text-white">
                        BillionAir official website launch
                        Whitepaper and project documentation release
                      </p>
                    </div>
                  </div>
                </div>
                <div classs="col-12">
                  <div class="card shadow bg-color rounded-5" style={{ background: "rgba(0, 0, 0, 0.5)" }}>
                    <div class="card-body">
                      <h5 class="card-title fw-bold  c-yellow">Q4 - 2022</h5>
                      <p class="card-text text-white">
                        Start of $ICOPAD private sale
                        Establishing partnerships
                        Smart contract audit
                      </p>
                    </div>
                  </div>
                </div>
                <div classs="col-12">
                  <div class="card shadow bg-color rounded-5" style={{ background: "rgba(0, 0, 0, 0.5)" }}>
                    <div class="card-body">
                      <h5 class="card-title fw-bold  c-yellow">Q1 - 2023</h5>
                      <p class="card-text text-white">
                        Deployment of the raffle smart contracts
                        Pilot platform launch
                        Beta testing
                        Airdrop
                      </p>
                    </div>
                  </div>
                </div>
                <div classs="col-12">
                  <div class="card shadow bg-color rounded-5" style={{ background: "rgba(0, 0, 0, 0.5)" }}>
                    <div class="card-body">
                      <h5 class="card-title fw-bold  c-yellow">Q3 - 2022</h5>
                      <p class="card-text text-white">
                        Ambassador Influencers Marketing Campaign
                        $ICOPAD public pre-sale
                        Token generation event for $ICOPAD
                      </p>
                    </div>
                  </div>
                </div>
                <div classs="col-12">
                  <div class="card shadow bg-color rounded-5" style={{ background: "rgba(0, 0, 0, 0.5)" }}>
                    <div class="card-body">
                      <h5 class="card-title fw-bold  c-yellow">Q3 - 2023</h5>
                      <p class="card-text text-white">
                        DEX & CEX listing
                        Official BillionAIR platform launch
                        Staking platform launch
                        Phase 1 and 2 raffles launch
                      </p>
                    </div>
                  </div>
                </div>
                <div classs="col-12">
                  <div class="card shadow bg-color rounded-5" style={{ background: "rgba(0, 0, 0, 0.5)" }}>
                    <div class="card-body">
                      <h5 class="card-title fw-bold  c-yellow">Q4 - 2023</h5>
                      <p class="card-text text-white">
                        Phase 3 raffles launch
                        Expanding partnerships for raffles and branded games
                        Becoming a raffle provider for other projects
                        Cross-chain gaming and raffles
                        New BillionAir games each month
                        Mobile app development
                        Improving UX/UI
                      </p>
                    </div>
                  </div>
                </div>
                <div classs="col-12">
                  <div class="card shadow bg-color rounded-5" style={{ background: "rgba(0, 0, 0, 0.5)" }}>
                    <div class="card-body">
                      <h5 class="card-title fw-bold  c-yellow">Q1 - 2024</h5>
                      <p class="card-text text-white">
                        Adding new payment options for users
                        Expanding to new geographic regions
                        Enhanced security features implementation
                        DAO governance forming
                      </p>
                    </div>
                  </div>
                </div>
                <div classs="col-12">
                  <div class="card shadow bg-color rounded-5" style={{ background: "rgba(0, 0, 0, 0.5)" }}>
                    <div class="card-body">
                      <h5 class="card-title fw-bold  c-yellow">Q2 - 2024</h5>
                      <p class="card-text text-white">
                        Building of Metaverse environment
                        Integrate Metaverse and VR games
                        Migrate to a fully DAO ecosystem
                      </p>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>


        <div class="container p-5">
          <div class="containenr p-5">
            <div class="containenr p-5">
              <div class="  shadow bg-color rounded-4">
                <header class="pb-3 mb-2 fw-bold text-white p-5 ">
                  <div class="d-flex align-items-center gap-4">
                    <h1 class="display-5 fw-bold">Deepen the knowledge</h1>
                  </div>
                  <p>
                    See for yourself that BillionAir is People-centered and Trustworthy. Understand how our system works. Transparent and Safe.
                  </p>
                </header>

                <div class="px-5 mb-4  rounded-3 ">
                  <div class="container-fluid d-flex align-items-center gap-4">

                    <button class="btn btn-primary btn-lg text-white px-5"
                      style={{ background: "linear-gradient(90deg, #54BDCB 17.63%, #3484FD 85.65%)" }} type="button">
                      OnePager
                    </button>
                    <button class="btn btn-primary btn-lg text-white px-5"
                      style={{ background: "linear-gradient(90deg, #3458FD 10.45%, #AB83FF 88.14%);" }} type="button">
                      Tokenomics
                    </button>
                    <button class="btn btn-primary btn-lg text-white px-5"
                      style={{ background: "linear-gradient(90deg, #FF93FF 8.89%, #FFADC7 49.36%, #FFBE9F 86.58%)" }} type="button">
                      WhitePaper
                    </button>
                  </div>
                </div>
                <header class="pb-1 mb-1 fw-bold text-white p-5 bg-white" style={{
                  "background-image": "url(https://billionair.com/images/partners/bg.png)",
                  "background-repeat": "no-repeat",
                  "background-size": "cover"
                }}>
                  <div class="d-flex align-items-center gap-4">
                    <p class="display-5 fw-bold">Audit and KYC by </p>
                    <img src={img12} />
                  </div>
                </header>

              </div>
            </div>
          </div>
        </div>
        </div>
</div>

        <div class="container text-center">
          <div class="container p-5">
            <header class="align-items-center  pb-3 mb-2 fw-bold text-white p-5 ">
              <h1 class="display-5 fw-bold">A team you can trust</h1>
              <p class="lead">
                It's not just about the people behind the project, it's about the people in front.
              </p>
            </header>
            <div class="row p-5">

              <div class="col-3 p-4">
                <a target="_blank" href="https://www.linkedin.com/in/radekpleha/" >
                  <div class=" card" >
                    <img src={team1}
                      class="card-img-top img-fluid p-4" alt="..." />
                    <div class="card-body text-center">
                      <h5 class="card-title">Radek Pléha</h5>
                      <p class="">Co-Founder</p>
                      <img src={social1} height={22} />
                    </div>

                  </div>
                </a>
              </div>
              <div class="col-3 p-4">
                <a target="_blank" href="https://www.linkedin.com/in/radovan-voda/" >
                  <div class=" card" >
                    <img src={team2}
                      class="card-img-top img-fluid p-4" alt="..." />
                    <div class="card-body text-center">
                      <h5 class="card-title">Radovan Voda</h5>
                      <p class="">Co-Founder</p>
                      <img src={social1} height={22} />
                    </div>

                  </div>
                </a>
              </div>
              <div class="col-3 p-4">
                <a target="_blank" href="https://www.linkedin.com/in/michaellaurens/" >
                  <div class=" card" >
                    <img src={team3}
                      class="card-img-top img-fluid p-4" alt="..." />
                    <div class="card-body text-center">
                      <h5 class="card-title">Michael Laurens</h5>
                      <p class="">Marketing Director</p>
                      <img src={social1} height={22} />
                    </div>

                  </div>
                </a>
              </div>
              <div class="col-3 p-4">
                <a target="_blank" href="https://www.linkedin.com/in/jamie-wheeler1988/" >
                  <div class=" card" >
                    <img src={team4}
                      class="card-img-top img-fluid p-4" alt="..." />
                    <div class="card-body text-center">
                      <h5 class="card-title">Jamie Wheeler</h5>
                      <p class="">Marketing and Operations Manager</p>
                      <img src={social1} height={22} />
                    </div>

                  </div>
                </a>
              </div>
              <div class="col-3 p-4">
                <a target="_blank" href="https://www.linkedin.com/in/rahular101/" >
                  <div class=" card" >
                    <img src={team5}
                      class="card-img-top img-fluid p-4" alt="..." />
                    <div class="card-body text-center">
                      <h5 class="card-title">Rahul A R</h5>
                      <p class="">Blockchain Lead</p>
                      <img src={social1} height={22} />
                    </div>

                  </div>
                </a>
              </div>
              <div class="col-3 p-4">
                <a target="_blank" href="https://www.linkedin.com/in/tomas-rokos/" >
                  <div class=" card" >
                    <img src={team6}
                      class="card-img-top img-fluid p-4" alt="..." />
                    <div class="card-body text-center">
                      <h5 class="card-title">Tomas Rokos</h5>
                      <p class="">Technical Analytist</p>
                      <img src={social1} height={22} />
                    </div>

                  </div>
                </a>
              </div>
              <div class="col-3 p-4">
                <a target="_blank" href="https://www.linkedin.com/in/lurisante/" >
                  <div class=" card" >
                    <img src={team7}
                      class="card-img-top img-fluid p-4" alt="..." />
                    <div class="card-body text-center">
                      <h5 class="card-title">Luis Ricardo Sanchez</h5>
                      <p class="">Senior Blockchain Developer</p>
                      <img src={social1} height={22} />
                    </div>

                  </div>
                </a>
              </div>
              <div class="col-3 p-4">
                <a target="_blank" href="https://www.linkedin.com/in/ihor-medvid-208211129/" >
                  <div class=" card" >
                    <img src={team8}
                      class="card-img-top img-fluid p-4" alt="..." />
                    <div class="card-body text-center">
                      <h5 class="card-title">Ihor Medvediv</h5>
                      <p class="">Growth Strategist</p>
                      <img src={social1} height={22} />
                    </div>

                  </div>
                </a>
              </div>
              <div class="col-3 p-4">
                <a target="_blank" href="https://www.linkedin.com/in/bohdan-stavskyi/" >
                  <div class=" card" >
                    <img src={team9}
                      class="card-img-top img-fluid p-4" alt="..." />
                    <div class="card-body text-center">
                      <h5 class="card-title">Bohdan Stavskyi</h5>
                      <p class="">Financial Planning & Analysis</p>
                      <img src={social1} height={22} />
                    </div>

                  </div>
                </a>
              </div>
              


            </div>
          </div>

        </div>

        <div class="container text-center">
          <div class="container p-5">
            <header class="align-items-center  pb-3 mb-2 fw-bold text-white p-5 ">
              <h1 class="display-5 fw-bold">Our advisors</h1>
            </header>
            <div class="row p-5">

              <div class="col-3 p-4">
                <a target="_blank" href="https://www.linkedin.com/in/arthur-iinuma-4115ba17/" >
                  <div class=" card" >
                    <img src={advisor1}
                      class="card-img-top img-fluid p-4" alt="..." />
                    <div class="card-body text-center">
                      <h5 class="card-title">Arthur Iinuma</h5>
                      <p class="lead">Founder of Iinuma.io and President & Co-Founder at ISBX</p>
                      <img src={social1} height={22} />
                    </div>

                  </div>
                </a>
              </div>
              <div class="col-3 p-4">
                <a target="_blank" href="https://www.linkedin.com/in/blaineglobal/" >
                  <div class=" card" >
                    <img src={advisor2}
                      class="card-img-top img-fluid p-4" alt="..." />
                    <div class="card-body text-center">
                      <h5 class="card-title">Blaine Graboyes</h5>
                      <p class="lead">Casino video games category pioneer</p>
                      <img src={social1} height={22} />
                    </div>

                  </div>
                </a>
              </div>
              <div class="col-3 p-4">
                <a target="_blank" href="https://www.linkedin.com/in/stevenmberman/" >
                  <div class=" card" >
                    <img src={advisor3}
                      class="card-img-top img-fluid p-4" alt="..." />
                    <div class="card-body text-center">
                      <h5 class="card-title">Steve Berman</h5>
                      <p class="lead">Regulated gaming industry veteran</p>
                      <img src={social1} height={22} />
                    </div>

                  </div>
                </a>
              </div>
              <div class="col-3 p-4">
                <a target="_blank" href="https://www.linkedin.com/in/rbarcolari" >
                  <div class=" card" >
                    <img src={advisor4}
                      class="card-img-top img-fluid p-4" alt="..." />
                    <div class="card-body text-center">
                      <h5 class="card-title">Ricardo Barcolari</h5>
                      <p class="lead">CEO at ChainLab</p>
                      <img src={social1} height={22} />
                    </div>

                  </div>
                </a>
              </div>
              <div class="col-3 p-4">
                <a target="_blank" href="https://www.linkedin.com/in/giacomo-voltolina-384b21125" >
                  <div class=" card" >
                    <img src={advisor5}
                      class="card-img-top img-fluid p-4" alt="..." />
                    <div class="card-body text-center">
                      <h5 class="card-title">Giacomo Voltolina</h5>
                      <p class="lead">Co-Founder & CPO at Chainlab</p>
                      <img src={social1} height={22} />
                    </div>

                  </div>
                </a>
              </div>


            </div>
          </div>

        </div>
        </div>

        <div class="container-fluid py-4 ">
          <h1 class="display-5 fw-bold  lh-1 mb-3 text-white text-center">
            Backers and Partners
          </h1>
          <ImageSlider images={images} slidesToShow={slidesToShow} autoplaySpeed={autoplaySpeed} />
        </div>

        <div class="container p-5">
          <div class="containenr p-5">
            <div class="containenr p-5">
              <div class=" py-5 shadow  rounded-4" style={{ "background-color": "rgb(254 197 163/var(--tw-bg-opacity))" }}>
                <header class="text-center pb-3 mb-2 fw-bold p-5 ">
                  <h1 class="display-7 fw-bold">$500k and Tesla giveaway!</h1>
                  <p>
                    The more $ICOPAD you purchase and the more you participate in Gleam, the more tickets you earn, and the higher your chances of walking away with these extraordinary prizes!
                  </p>
                  <button class="btn btn-link btn-lg rounded-5 px-4 bg-black border-0 b-secondary text-blue text-decoration-underline" onmouseover="mouseover()" type="button">
                    Join the giveaway
                  </button>
                </header>
              </div>
            </div>
          </div>
        </div>

        <div class="container text-white p-5">
          <div class="row p-5">
            <div class="col-6 p-5">
              <h1 class="display-5 fw-bold  ">FAQs</h1>
              <p class="lead">You may have questions, we have the answers.</p>
            </div>
            <div class="col-6 p-5">
              <div class="row gy-4">

                <div classs="col-12">
                  <div class="card  py-5 text-white shadow bg-color rounded-5" style={{ background: "rgba(0, 0, 0, 0.5)" }}>
                    <div class="card-body">
                    <a data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                      <div class="row">
                          <div class="col-10">
                              <h5 class="card-title fw-bold  text-white">What is BillionAir?   </h5>
                            
                            <p class="collapse card-text  py-3 lead text-white" id="collapseExample">
                              BillionAir is a raffles and games ecosystem offering life-changing prizes, exciting and
                              engaging entertainment, and opportunities within an all-encompassing, borderless, and provably fair
                              ecosystem. On a larger scale, it’s so much more than that, positioned as a bridge between web3 natives
                              and the traditional and web2 markets and a contra bet to the current web3 gaming projects out there,
                              helping projects to fundraise and engage their community.
                            </p>
                          </div>
                          <div class="col-2  display-6 text-white">
                            {'>'}
                          </div>
                      </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div classs="col-12">
                  <div class="card py-5 text-white shadow bg-color rounded-4" style={{ background: "rgba(0, 0, 0, 0.5)" }}>
                    <div class="card-body">
                    <a data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample2">
                      <div class="row">
                        <div class="col-10">
                          
                            <h5 class="card-title fw-bold text-white">What is $ICOPAD, and what is its value? </h5>
                          

                          <p class="collapse card-text text-white py-3 lead" id="collapseExample2">
                            The BillionAir Token $ICOPAD is the native token of our ecosystem,
                            giving you the real edge to have luck on your side. $ICOPAD, our platform-wide currency,
                            is the ecosystem powering token behind BillionAir, working in tandem with our NFT raffle tickets.
                            The token itself has value built-in across the platform, with use cases including staking for lucrative rewards,
                            climbing the tier system earning you multipliers, favored game entries, built-in deflation, raffle ticket purchases,
                            and many more perks for holders. As the BillionAir platform and ecosystem grow,
                            the utility and price of the token will grow with it!
                          </p>
                        </div>
                        <div class="col-2  display-6 text-white">
                          {'>'}
                        </div>
                      </div>
                    </a>

                    </div>
                  </div>
                </div>
                <div classs="col-12">
                  <div class="card py-5 text-white shadow bg-color rounded-4" style={{ background: "rgba(0, 0, 0, 0.5)" }}>
                    <div class="card-body">
                    <a data-bs-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample3">
                      <div class="row">
                        <div class="col-10">
                            <h5 class="card-title fw-bold text-white">What is the difference between BillionAir and other platforms? </h5>
                         

                          <p class="collapse card-text text-white py-3 lead" id="collapseExample3">
                            Essentially, BillionAir is a contra bet to the current web3 gaming projects out there, providing innovative ways for
                            projects and communities to fundraise while engaging users from many different communities. Our raffles offer everything
                            from luxury prizes and experiences, through to cash, digital assets and NFTs, in addition to a continuously growing
                            selection of games, the BillionAir ecosystem offers opportunity and entertainment all-round with a minimal
                            upfront investment. Built on top of blockchain technology, and therefore offering the underlying benefits
                            available including tiered rewards, a deflationary token model and real yield staking,
                            the life-changing opportunities are even greater.
                          </p>
                        </div>
                        <div class="col-2  display-6 text-white">
                          {'>'}
                        </div>
                      </div>
                      </a>

                    </div>
                  </div>
                </div>
                <div classs="col-12">
                  <div class="card py-5 text-white shadow bg-color rounded-4" style={{ background: "rgba(0, 0, 0, 0.5)" }}>
                    <div class="card-body">
                    <a data-bs-toggle="collapse" href="#collapseExample4" role="button" aria-expanded="false" aria-controls="collapseExample4">

                      <div class="row">
                        <div class="col-10">
                            <h5 class="card-title fw-bold text-white">What makes BillionAir sustainable in the long term? </h5>
                          

                          <p class="collapse card-text text-white py-3 lead" id="collapseExample4">
                            There are countless sustainability features integrated into our ecosystem, designed to safeguard our future for years to come. From token buyback and burn mechanisms to enticing staking opportunities that incentivize token locking, our platform has it all. And with a finite token supply, the price will only grow over time. And that's just the beginning - stay tuned for even more exciting developments to come!
                          </p>
                        </div>
                        <div class="col-2  display-6 text-white">
                          {'>'}
                        </div>
                      </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div classs="col-12">
                  <div class="card py-5 text-white shadow bg-color rounded-4" style={{ background: "rgba(0, 0, 0, 0.5)" }}>
                    <div class="card-body">
                    <a data-bs-toggle="collapse" href="#collapseExample5" role="button" aria-expanded="false" aria-controls="collapseExample5">
                      <div class="row">
                        <div class="col-10">
                            <h5 class="card-title fw-bold text-white">How can I participate in the token Pre-Sale? </h5>
                         

                          <p class="collapse card-text text-white py-3 lead" id="collapseExample5">
                            To participate in our Pre-Sale, simply buy $ICOPAD through the user-friendly banners and modals available on any of our pages. Don’t hesitate too long! The sooner you will join, the better prize you get, making you great returns.
                          </p>
                        </div>
                        <div class="col-2  display-6 text-white">
                          {'>'}
                        </div>
                      </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div classs="col-12">
                  <div class="card py-5 text-white shadow bg-color rounded-4" style={{ background: "rgba(0, 0, 0, 0.5)" }}>
                    <div class="card-body">
                    <a data-bs-toggle="collapse" href="#collapseExample6" role="button" aria-expanded="false" aria-controls="collapseExample6">
                      <div class="row">
                        <div class="col-10">
                            <h5 class="card-title fw-bold text-white">Which exchanges will $ICOPAD be listed on? </h5>
                          <p class="collapse card-text text-white py-3 lead" id="collapseExample6">
                            Shortly after our public sale, the BillionAir Token will be listed on 3+ major exchanges, starting with Bitmart, with additional exchange listings to be announced in the coming weeks. Follow us on Twitter to be among the first to know about our exchange listings.
                          </p>
                        </div>
                        <div class="col-2  display-6 text-white">
                          {'>'}
                        </div>
                      </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div classs="col-12">
                  <div class="card py-5 text-white shadow bg-color rounded-4" style={{ background: "rgba(0, 0, 0, 0.5)" }}>
                    <div class="card-body">
                    <a data-bs-toggle="collapse" href="#collapseExample7" role="button" aria-expanded="false" aria-controls="collapseExample7">
                      <div class="row">
                        <div class="col-10">
                            <h5 class="card-title fw-bold text-white">What network does BillionAir run on?  </h5>
                          <p class="collapse card-text text-white py-3 lead" id="collapseExample7">
                            BillionAir is launching on BNB-Chain (formerly known as Binance Smart Chain) network.
                          </p>
                        </div>
                        <div class="col-2  display-6 text-white">
                          {'>'}
                        </div>
                      </div>
                      </a>

                    </div>
                  </div>
                </div>
                <div classs="col-12">
                  <div class="card py-5 text-white shadow bg-color rounded-4" style={{ background: "rgba(0, 0, 0, 0.5)" }}>
                    <div class="card-body">
                    <a data-bs-toggle="collapse" href="#collapseExample8" role="button" aria-expanded="false" aria-controls="collapseExample8">
                      <div class="row">
                        <div class="col-10">
                            <h5 class="card-title fw-bold text-white">When will it launch?</h5>
                          <p class="collapse card-text text-white py-3 lead" id="collapseExample8">
                            Our platform will be launched in phases, and we are excited that the $ICOPAD pre-sale is currently underway. This is an excellent opportunity for you to get in on the ground floor and secure your tokens before they are listed on major exchanges, such as Bitmart. After the pre-sale ends, the tokens will become available for everyone, and you will have the chance to claim yours, stake them, and earn rewards before the full platform launches in Q3 of 2023. Don't miss out on this exciting opportunity to be a part of our growing community!
                          </p>
                        </div>
                        <div class="col-2  display-6 text-white">
                          {'>'}
                        </div>
                      </div>
                    </a>

                    </div>
                  </div>
                </div>
                <div classs="col-12">
                  <div class="card py-5 text-white shadow bg-color rounded-4" style={{ background: "rgba(0, 0, 0, 0.5)" }}>
                    <div class="card-body">
                    <a data-bs-toggle="collapse" href="#collapseExample9" role="button" aria-expanded="false" aria-controls="collapseExample9">
                      <div class="row">
                        <div class="col-10">
                            <h5 class="card-title fw-bold text-white"> What are the vesting schedules? </h5>
                          <p class="collapse card-text text-white py-3 lead" id="collapseExample9">
                            The vesting schedule indicates when tokens will be issued. The pre-sale vesting schedule is set so that right after the pre-sale you will receive 20% of the tokens and they will continue to vest linearly for 4 months. It means that once we’ve reached month 4, ALL PRE-SALE tokens will be distributed.
                          </p>
                        </div>
                        <div class="col-2  display-6 text-white">
                          {'>'}
                        </div>
                      </div>
                    </a>
                    </div>
                  </div>
                </div>
                <div classs="col-12">
                  <div class="card py-5 text-white shadow bg-color rounded-4" style={{ background: "rgba(0, 0, 0, 0.5)" }}>
                    <div class="card-body">
                    <a data-bs-toggle="collapse" href="#collapseExample10" role="button" aria-expanded="false" aria-controls="collapseExample10">
                      <div class="row">
                        <div class="col-10">
                            <h5 class="card-title fw-bold text-white"> How will tokens be distributed? </h5>        
                          <p class="collapse card-text text-white py-3 lead" id="collapseExample10">
                            Once the pre-sale ends you will be able to connect your wallet and claim your tokens on our website www.billionair.com, at this time you can find more info in our section “How to claim”.
                          </p>
                        </div>
                        <div class="col-2  display-6 text-white">
                          {'>'}
                        </div>
                      </div>
                      </a>

                    </div>
                  </div>
                </div>
                <div classs="col-12">
                  <div class="card py-5 text-white shadow bg-color rounded-4" style={{ background: "rgba(0, 0, 0, 0.5)" }}>
                    <div class="card-body">
                    <a data-bs-toggle="collapse" href="#collapseExample11" role="button" aria-expanded="false" aria-controls="collapseExample11">
                      <div class="row">
                        <div class="col-10">
                            <h5 class="card-title fw-bold text-white"> What is our smart contract address? </h5>
                          <p class="collapse card-text text-white py-3 lead" id="collapseExample11">
                            Contract address: 0xb6b3b930af6fa095d71876d268a89def5f3e9894
                            You can find it <a href="https://bscscan.com/address/0xb6b3b930af6fa095d71876d268a89def5f3e9894"> here </a>
                          </p>
                        </div>
                        <div class="col-2  display-6 text-white">
                          {'>'}
                        </div>
                      </div>
                      </a>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>

        </div>


        <div class="container p-5">
          <div class="containenr p-5">
            <div class="containenr p-5">
              <div class=" py-5   rounded-4" >
                <header class="text-center text-white pb-3 mb-2 fw-bold p-5 ">
                  <h1 class="display-7 fw-bold">Don’t miss out, stay</h1>
                  <h1 class="display-7 fw-bold">updated</h1>
                  <div class="d-flex">
                    <input type="email" class="form-control border-0 text-white" id="exampleFormControlInput1"
                      style={{ "background-color": "hsla(0,0%,100%,.2)", "color": "white" }} placeholder="Enter your email"></input>
                    <button class="btn btn-primary text-black btn-lg rounded-5 px-4  border-0 b-secondary "
                      onmouseover="mouseover()" style={{ "background-color": "rgb(254 197 163/var(--tw-bg-opacity))" }} type="button">
                      Subscribe
                    </button>
                  </div>
                  <br />
                  <p class="lead">
                    Get the latest information about the public Pre-sale, progress and community updates!
                  </p>
                  <br />
                  <br />
                  <nav class="pt-5 navbar navbar-expand-lg navbar-dark">
                    <div class="container-fluid">


                      <div class="collapse navbar-collapse " id="navbarSupportedContent">
                        <div class="mb-2 mb-lg-0 ms-auto me-auto">
                          <ul class="navbar-nav   text-white ">

                            <li class="nav-item">
                              <a class="nav-link active" aria-current="page" href="#">HOME</a>
                            </li>
                            <li class="nav-item active">
                              <a class="nav-link" href="#">ECOSYSTEM</a>
                            </li>
                            <li class="nav-item active text-blue">
                              <a class="nav-link" href="#">WHITEPAPER</a>
                            </li>
                            <li class="nav-item active">
                              <a class="nav-link" href="#">WIN $500K</a>
                            </li>
                            <li class="nav-item active">
                              <a class="nav-link">HOW TO BUY</a>
                            </li>
                            <li class="nav-item active">
                              <a class="nav-link">CONTACT US</a>
                            </li>
                            <li class="nav-item active">
                              <a class="nav-link">PRIVACY POLICAY</a>
                            </li>
                            <li class="nav-item active">
                              <a class="nav-link">TERMS POLICY</a>
                            </li>

                          </ul>

                        </div>

                      </div>
                    </div>
                  </nav>
                  <div class="d-flex justify-content-between">
                    <div>
                      <img src={logo} />
                    </div>
                    <div>
                      <ul class="flex items-center gap-4 sm:gap-[20px] md:gap-[26px] xl:gap-4">
                        <li>
                          <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/billionair_app">
                            <svg aria-hidden="true" class="inline-flex shrink-0 fill-current" focusable="false" role="presentation" style={{ width: "30px", height: "30px" }}>
                              <use xlinkHref="https://billionair.com/_next/static/media/sprite-9c60ffc5a924d1ba..svg#twitter"></use>
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>

                  </div>
                  <div class="text-white">
                    <p class="lead">
                      For support, email us: <b> support@billionair.com </b>
                    </p>
                    <p class="lead">
                      Cryptocurrency may be unregulated in your jurisdiction. The value of cryptocurrencies may go down as well as up. Profits may be subject to capital gains or other taxes applicable in your jurisdiction.
                    </p>
                    <p class="lead">
                      2023 BillionAir. All rights reserved. IRR Group Limited, Majuro Islands, Marshall Islands
                    </p>
                  </div>
                </header>
              </div>
            </div>
          </div>
        </div>

        <div class="container-fluid">
          <header class="pb-1 mb-1 fw-bold text-white p-5 bg-white" style={{
            "background-image": "url(https://billionair.com/images/partners/bg.png)",
            "background-repeat": "no-repeat",
            "background-size": "cover"
          }}>
            <div class="d-flex align-items-center gap-4">
              <p class="display-5 fw-bold">Audit and KYC by </p>
              <img src={img12} />
            </div>
          </header>
        </div>


      <script src={bootstrap}></script>

    </div>
  );

  /*
  <div class="Background_background__Obe1R bg-dark isLoaded ">
        <canvas class="absolute top-0 left-0 -z-10 h-full w-full isLoaded" data-transition-in="true" id="our" 
        style={{"--gradient-color-1":" #b982ff"," --gradient-color-2":" #ffd16b"," --gradient-color-3":" #E87E83"," --gradient-color-4":" #FF94FF"}} 
        width="1261" height="600">
          
        </canvas>
        <div class="Background_backgroundImage__45z_q h-[100%] bg-cover text-white" 
          style={{"background-image": "url(https://billionair.com/images/background_logo_our.webp)" ,"background-position": "center center" ,
          "--gradient-color-1":" #b982ff"," --gradient-color-2":" #ffd16b"," --gradient-color-3":" #E87E83"," --gradient-color-4":" #FF94FF"
          }}>
            fdsafs
            </div>
       </div>
  */
  /*
  
      <div class="Background_content___GAg0">
      <section class="pb-9 pt-6 sm:pb-13 md:pt-11 lg:pt-15 lg:pb-20 xl:pt-25 xl:pb-19">
      <section class="col-span-full mb-9 sm:mb-6 md:mb-12 lg:mb-15">
      <div class="gs container">
      <article class="gs-container mt-[-240px] overflow-hidden rounded-[40px] bg-dark sm:mt-[-220px] md:mt-[-240px] lg:mt-[-300px] xl:mt-[-400px] "
       style={{"box-shadow": "rgba(255, 255, 255, 0.2) 3px 0px 0px inset, rgba(255, 255, 255, 0.2) -3px 0px 0px inset, rgba(255, 255, 255, 0.2) 0px 3px 0px inset", "box-sizing": "border-box; opacity: 1"}}>
       <div class="Background_container__RCLV5">
       <div class="Background_content___GAg0">
       <div class="py-5 px-3 sm:flex sm:items-center sm:gap-x-13 sm:px-6 sm:pb-7 sm:pt-[44px] md:gap-x-[100px] md:px-7 md:py-5 lg:gap-x-20 lg:px-[122px] lg:py-8 xl:gap-x-25 xl:py-[72px]" id="whitepaper">
       <div class="w-full flex-shrink-0">
       <h2 class="v-h650 mb-[4px] block font-bold -tracking-[0.03em] sm:v-h800 sm:mb-12px md:v-h800-md md:mb-2 lg:v-h800-lg lg:mb-[20px] xl:v-h800-xl xl:mb-3">
       Deepen the knowledge</h2>
       <div class="grid gap-[22px]">
       <div>
       <p class="v-p600-md block opacity-90 sm:v-p450 md:v-p600-md lg:v-p450-lg xl:v-p450-xl ">
       See for yourself that BillionAir is People-centered and Trustworthy. Understand how our system works. Transparent and Safe. </p>
       </div>
       <div class="flex w-full flex-col flex-wrap items-center justify-between gap-2 sm:flex-row md:items-end lg:gap-3">
       <div class="flex w-[100%] justify-center sm:w-[31%] ">
       <a class="styles_button__AXNxo styles_variant-cta__Yg_fZ styles_size-200__vitZh !v-h550 w-full transition-opacity hover:opacity-90 focus:opacity-90 active:opacity-80" href="https://billionair.docsend.com/view/s/66eqhubrbqgnuwqj" 
       rel="nofollow noopener noreferrer" target="_blank" 
       style={{"background": "linear-gradient(90deg, rgb(84, 189, 203) 17.63%, rgb(52, 132, 253) 85.65%);"}}>OnePager</a>
       </div>
       <div class="flex w-[100%] justify-center sm:w-[31%] ">
       <a class="styles_button__AXNxo styles_variant-cta__Yg_fZ styles_size-200__vitZh !v-h550 w-full transition-opacity hover:opacity-90 focus:opacity-90 active:opacity-80" href="https://billionair.docsend.com/view/s/66eqhubrbqgnuwqj" rel="nofollow noopener noreferrer" target="_blank" >Tokenomics</a>
       </div>
       <div class="flex w-[100%] justify-center sm:w-[31%] ">
       <a class="styles_button__AXNxo styles_variant-cta__Yg_fZ styles_size-200__vitZh !v-h550 w-full transition-opacity hover:opacity-90 focus:opacity-90 active:opacity-80" href="https://billionair.docsend.com/view/s/66eqhubrbqgnuwqj" rel="nofollow noopener noreferrer" target="_blank" >WhitePaper</a>
       </div></div></div></div></div>
       <div class="relative flex h-[93px] cursor-pointer items-center justify-center gap-[12px] overflow-hidden rounded-b-xl bg-blue px-3 sm:h-[64px] sm:gap-[20px] md:h-8 lg:h-11 lg:gap-x-6 xl:h-13 styles_bgImg__dLuiz" role="presentation" >
       <p class="styles_content__B92J2">Audit and KYC by &gt;</p>
       <img alt="Background Figure" class="pointer-events-none flex max-h-[55px] w-[40%] max-w-[229px]" src="https://billionair.com/images/partners/solid-proof.png" />
       </div></div>
       <div class="Background_background__Obe1R " >
       <div class="Background_circleContainer__abx_l Background_circle_article-card-left__6I7NJ">
       </div></div></div></article></div></section>
       <div class="relative" id="team"></div>
       <section class="overflow-hidden"><div class="gs container">
       <div class="gs-container mb-3 flex flex-col items-center text-dark">
       <h3 class="v-h800 mb-12px text-center font-bold md:v-h900-md md:mb-2 lg:v-h850-lg lg:mb-3 xl:v-h850-xl xl:mb-3">A team you can trust</h3>
       <p class="styles_typography__xvvW1 styles_p450__b6Mbm mb-4 max-w-[296px] text-center opacity-90 sm:mb-4 md:mb-6 md:max-w-[283px] lg:mb-8 lg:max-w-[388px] xl:mb-10 xl:max-w-[458px]">
       It's not just about the people behind the project, it's about the people in front.</p>
       <div class=" mb-8 w-screen md:mb-12 md:w-full lg:mb-15"><div class="flex flex-col gap-y-3">
       <ul class="-mb-2 flex w-full flex-nowrap gap-12px overflow-x-auto pl-[20px] pb-2 sm:mb-0 sm:grid sm:grid-cols-12 sm:gap-3 sm:overflow-x-visible sm:pb-0 sm:pl-0 lg:gap-3 xl:gap-[23px]">
       <li class="col-span-3 flex w-19 flex-shrink-0 sm:w-auto" style={{"opacity": "1", "transform": "translateY(1px) translateZ(0px);"}}>
       <div class="w-full"><a href="https://www.linkedin.com/in/radekpleha/" rel="nofollow noopener noreferrer" target="_blank" class="flex h-full w-full flex-col items-center rounded-xl bg-white px-[14px] pt-3 pb-3 text-center sm:rounded-2xl sm:px-3 md:pb-3 md:pt-3 lg:rounded-[30px]">
       <div class="relative mb-3 h-[120px] w-full object-contain md:mb-[28px] md:h-[160px] lg:mb-5 lg:h-[220px] xl:mb-3 xl:h-[262px]">
       <span >
       <img alt="Radek Pléha" title="Radek Pléha" sizes="100vw" srcset="/images/team/nextImageExportOptimizer/radek-opt-640.WEBP 640w, /images/team/nextImageExportOptimizer/radek-opt-750.WEBP 750w, /images/team/nextImageExportOptimizer/radek-opt-828.WEBP 828w, /images/team/nextImageExportOptimizer/radek-opt-1080.WEBP 1080w, /images/team/nextImageExportOptimizer/radek-opt-1200.WEBP 1200w, /images/team/nextImageExportOptimizer/radek-opt-1920.WEBP 1920w, /images/team/nextImageExportOptimizer/radek-opt-2048.WEBP 2048w, /images/team/nextImageExportOptimizer/radek-opt-3840.WEBP 3840w" src="https://billionair.com/images/team/nextImageExportOptimizer/radek-opt-3840.WEBP" decoding="async" data-nimg="fill" class="h-full w-full rounded-xl lg:rounded-[30px]" style={{"position": "absolute", "inset":" 0px", "box-sizing":" border-box", "padding":" 0px", "border":" none", "margin":" auto", "display":" block", "width":" 0px", "height":" 0px", "min-width":" 100%", "max-width":" 100%", "min-height":" 100%", "max-height":" 100%", "object-fit":" cover"}}/>
       <noscript></noscript></span></div>
       <h4 class="styles_typography__xvvW1 styles_h550__oWZyR mb-[4px] -tracking-[0.03em] text-dark md:mb-1 lg:!text-[24px] xl:!v-h550-xl">Radek Pléha</h4>
       <p class="styles_typography__xvvW1 styles_p450__b6Mbm mb-1 whitespace-pre-wrap -tracking-[0.03em] text-dark opacity-70 lg:mb-2 lg:!text-[16px] xl:!text-[18px]">Co-Founder</p>
       <svg aria-hidden="true" class="inline-flex shrink-0 fill-current mt-auto !h-[20px] !w-[20px] lg:!h-5 lg:!w-5" focusable="false" role="presentation" style={{"width": "24px", "height": "24px;"}}>
       <use xlinkHref="https://billionair.com/_next/static/media/sprite-9c60ffc5a924d1ba..svg#linkedin"></use></svg></a></div></li>
       <li class="col-span-3 flex w-19 flex-shrink-0 sm:w-auto" style={{"opacity": "1", "transform": "translateY(1px) translateZ(0px)"}}>
       <div class="w-full"><a href="https://www.linkedin.com/in/radovan-voda/" rel="nofollow noopener noreferrer" target="_blank" class="flex h-full w-full flex-col items-center rounded-xl bg-white px-[14px] pt-3 pb-3 text-center sm:rounded-2xl sm:px-3 md:pb-3 md:pt-3 lg:rounded-[30px]">
       <div class="relative mb-3 h-[120px] w-full object-contain md:mb-[28px] md:h-[160px] lg:mb-5 lg:h-[220px] xl:mb-3 xl:h-[262px]">
     </div>
     </a>
     </div>
     </li>
     </ul>
     </div>
     </div>
     </div>
     </div></section></section></div>
  */
  /*
   <ul class="styles_boxIcon__3LDIB">
            <li class="styles_icon__HPaNr">
              <a rel="noopener noreferrer" target="_blank" href="https://linktr.ee/billionair_app">
                <svg aria-hidden="true" class="inline-flex shrink-0 fill-current" focusable="false" role="presentation" style="width: 30px; height: 30px; fill: rgb(255, 209, 120);">
                  <use xlink:href="https://billionair.com/_next/static/media/sprite-9c60ffc5a924d1ba..svg#tree"></use>
                </svg>
              </a>
            </li>
            <li class="styles_icon__HPaNr">
              <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/billionair_app">
                <svg aria-hidden="true" class="inline-flex shrink-0 fill-current" focusable="false" role="presentation" style="width: 30px; height: 30px; fill: rgb(255, 209, 120);">
                  <use xlink:href="https://billionair.com/_next/static/media/sprite-9c60ffc5a924d1ba..svg#twitter"></use>
                </svg>
              </a>
            </li>
            <li class="styles_icon__HPaNr">
              <a rel="noopener noreferrer" target="_blank" href="https://t.me/billionair_app">
                <svg aria-hidden="true" class="inline-flex shrink-0 fill-current" focusable="false" role="presentation" style="width: 30px; height: 30px; fill: rgb(255, 209, 120);">
                  <use xlink:href="https://billionair.com/_next/static/media/sprite-9c60ffc5a924d1ba..svg#telegram"></use>
                </svg>
              </a>
            </li>
            <li class="styles_icon__HPaNr">
              <a rel="noopener noreferrer" target="_blank" href="https://t.me/billionair_announcements">
                <svg aria-hidden="true" class="inline-flex shrink-0 fill-current" focusable="false" role="presentation" style="width: 30px; height: 30px; fill: rgb(255, 209, 120);">
                  <use xlink:href="https://billionair.com/_next/static/media/sprite-9c60ffc5a924d1ba..svg#billionair-announcements"></use>
                </svg>
              </a>
            </li>
            <li class="styles_icon__HPaNr">
              <a rel="noopener noreferrer" target="_blank" href="https://discord.gg/QGHv26UajU">
                <svg aria-hidden="true" class="inline-flex shrink-0 fill-current" focusable="false" role="presentation" style="width: 30px; height: 30px; fill: rgb(255, 209, 120);">
                  <use xlink:href="https://billionair.com/_next/static/media/sprite-9c60ffc5a924d1ba..svg#discord"></use>
                </svg>
              </a>
            </li>
            <li class="styles_icon__HPaNr">
              <a rel="noopener noreferrer" target="_blank" href="https://instagram.com/billionair_app">
                <svg aria-hidden="true" class="inline-flex shrink-0 fill-current" focusable="false" role="presentation" style="width: 30px; height: 30px; fill: rgb(255, 209, 120);">
                  <use xlink:href="https://billionair.com/_next/static/media/sprite-9c60ffc5a924d1ba..svg#instagram"></use>
                </svg>
              </a>
            </li>
            <li class="styles_icon__HPaNr">
              <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/profile.php?id=100090222482120">
                <svg aria-hidden="true" class="inline-flex shrink-0 fill-current" focusable="false" role="presentation" style="width: 30px; height: 30px; fill: rgb(255, 209, 120);">
                  <use xlink:href="https://billionair.com/_next/static/media/sprite-9c60ffc5a924d1ba..svg#facebook-icon"></use>
                </svg>
              </a>
            </li>
            <li class="styles_icon__HPaNr">
              <a rel="noopener noreferrer" target="_blank" href="https://medium.com/billionair-app">
                <svg aria-hidden="true" class="inline-flex shrink-0 fill-current" focusable="false" role="presentation" style="width: 30px; height: 30px; fill: rgb(255, 209, 120);">
                  <use xlink:href="https://billionair.com/_next/static/media/sprite-9c60ffc5a924d1ba..svg#medium"></use>
                </svg>
              </a>
            </li></ul>
  */
  /*

  
              <li class="styles_icon__HPaNr">
                <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/billionair_app">
                  <svg aria-hidden="true" class="inline-flex shrink-0 fill-current" focusable="false" role="presentation" style="width: 30px; height: 30px; fill: rgb(255, 209, 120);">
                    <use xlink:href="https://billionair.com/_next/static/media/sprite-9c60ffc5a924d1ba..svg#twitter"></use>
                  </svg>
                </a>
              </li>
              <li class="styles_icon__HPaNr">
                <a rel="noopener noreferrer" target="_blank" href="https://t.me/billionair_app">
                  <svg aria-hidden="true" class="inline-flex shrink-0 fill-current" focusable="false" role="presentation" style="width: 30px; height: 30px; fill: rgb(255, 209, 120);">
                    <use xlink:href="https://billionair.com/_next/static/media/sprite-9c60ffc5a924d1ba..svg#telegram"></use>
                  </svg>
                </a>
              </li>
              <li class="styles_icon__HPaNr">
                <a rel="noopener noreferrer" target="_blank" href="https://t.me/billionair_announcements">
                  <svg aria-hidden="true" class="inline-flex shrink-0 fill-current" focusable="false" role="presentation" style="width: 30px; height: 30px; fill: rgb(255, 209, 120);">
                    <use xlink:href="https://billionair.com/_next/static/media/sprite-9c60ffc5a924d1ba..svg#billionair-announcements"></use>
                  </svg>
                </a>
              </li>
              <li class="styles_icon__HPaNr">
                <a rel="noopener noreferrer" target="_blank" href="https://discord.gg/QGHv26UajU">
                  <svg aria-hidden="true" class="inline-flex shrink-0 fill-current" focusable="false" role="presentation" style="width: 30px; height: 30px; fill: rgb(255, 209, 120);">
                    <use xlink:href="https://billionair.com/_next/static/media/sprite-9c60ffc5a924d1ba..svg#discord"></use>
                  </svg>
                </a>
              </li>
              <li class="styles_icon__HPaNr">
                <a rel="noopener noreferrer" target="_blank" href="https://instagram.com/billionair_app">
                  <svg aria-hidden="true" class="inline-flex shrink-0 fill-current" focusable="false" role="presentation" style="width: 30px; height: 30px; fill: rgb(255, 209, 120);">
                    <use xlink:href="https://billionair.com/_next/static/media/sprite-9c60ffc5a924d1ba..svg#instagram"></use>
                  </svg>
                </a>
              </li>
              <li class="styles_icon__HPaNr">
                <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/profile.php?id=100090222482120">
                  <svg aria-hidden="true" class="inline-flex shrink-0 fill-current" focusable="false" role="presentation" style="width: 30px; height: 30px; fill: rgb(255, 209, 120);">
                    <use xlink:href="https://billionair.com/_next/static/media/sprite-9c60ffc5a924d1ba..svg#facebook-icon"></use>
                  </svg>
                </a>
              </li>
              <li class="styles_icon__HPaNr">
                <a rel="noopener noreferrer" target="_blank" href="https://medium.com/billionair-app">
                  <svg aria-hidden="true" class="inline-flex shrink-0 fill-current" focusable="false" role="presentation" style="width: 30px; height: 30px; fill: rgb(255, 209, 120);">
                    <use xlink:href="https://billionair.com/_next/static/media/sprite-9c60ffc5a924d1ba..svg#medium"></use>
                  </svg>
                </a>
              </li>

  */
  /*
  <div class="container ">

          <div class="row">
            <div class="col-4 p-2 bg-white text-black">
              <h3 class="display-5 fw-bold">Staking</h3>
              <p>
                The BillionAir ecosystem provides a variety of safe and secure staking opportunities, with rewards up to 240% APY. Maximising the benefits of the available earnings can make your raffles, games and entertainment experience essentially free, and even profitable!
              </p>
            </div>



            <div class="col-8 p-2 bg-white text-black">
              <h3 class="display-5 fw-bold">Raffles</h3>
              <p>
                Dream cars, skydives, bucket list experiences and much, much more! You can make your dreams come true with our next-generation raffles to win and priceless time for you and your loved ones. Walk away with digital assets such as tokens or NFTs, physical goods including cars, watches, and electronics, and even once-in-a-lifetime trips and activities.
              </p>
            </div>
          </div>
        </div>

        <br />

        <div class=" align-items-center gap-4">

          <div>

            <div class="p-2 bg-white text-black">
              <h3 class="display-5 fw-bold">Tier system</h3>
              <p>
                Everything counts! Play games, enter raffles, invite friends, or actively participate in the community to level up on our built-in tier system. Earn the opportunity to gain higher APY and greater odds of winning the main raffle prizes with invaluable ticket multipliers.
              </p>
            </div>

            <br />

            <div class="p-2 bg-white text-black">
              <h3 class="display-5 fw-bold">Transparency</h3>
              <p>
                Blockchain technology, and therefore BillionAir, is decentralised, immutable, and unalterable. This creates a level playing field, making every game and raffle provably fair for everyone, without any edge over other players.</p>
            </div>

          </div>

          <br />

          <div>

            <div class="p-2 bg-white text-black">
              <h3 class="display-5 fw-bold">Games</h3>
              <p>
                Play games with the community, challenge your friends or take a shot at someone across the globe! Our entertainment ecosystem offers a great selection of thrilling games to satisfy even the most demanding players, ranging from chance-based and arcade games to cutting-edge VR-based options. As we develop and expand, we aim to bridge chains and expand communities, creating and introducing games in collaboration with not-yet-gamified projects.
              </p>
            </div>
            <br />
            <div class="p-2 bg-white text-black">
              <h3 class="display-5 fw-bold">Buybacks</h3>
              <p>
                Long-term sustainability and value are key focus areas within our vision, and this is assisted through several value creation mechanisms. We achieve both sustainability and constant growth with a built-in deflationary mechanism powered by a systematic token-burning process. Additionally, the token buyback program controls the circulating supply of $ICOPAD tokens, supports staking and increases token value.
              </p>
            </div>

          </div>

        </div>
  */
}

export default App;
