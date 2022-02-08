import React from 'react';
import '../../styles/Home/Home.css';
import Image from '../../components/common/Image';

const DESIGN_IMG = '/design.png';
const OFFERING_IMG = '/offering.png';

export default function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Power your business with beautiful website</h1>
          <p>We make website for you with our exprienced teams of designer and developer.</p>
        </div>
        <div className="col">
          <Image imgSize="large" imgUrl={DESIGN_IMG} imgAlt="Design" />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Image imgSize="large" imgUrl={OFFERING_IMG} imgAlt="Design" />
        </div>
        <div className="col">
          <h1>Power your business with beautiful website</h1>
          <p>We make website for you with our exprienced teams of designer and developer.</p>
        </div>
      </div>
    </div>
  );
}