//Styles
import React from 'react';
import { Wrapper } from './Card.styles';
type Props = {
  logo: string;
  video: string;
};

const Card: React.FC<Props> = ({ logo, video }) => {
  const handleOnMouseOver = (e: React.MouseEvent<HTMLVideoElement>) => {
    e.currentTarget.play();
  };

  const handleOnMouseOut = (e: React.MouseEvent<HTMLVideoElement>) => {
    e.currentTarget.pause();
  };

  return (
    <Wrapper>
      <div className='border' />
      <img src={logo} alt='logo' />
      <video
        muted
        loop
        preload='none'
        onMouseOver={handleOnMouseOver}
        onMouseOut={handleOnMouseOut}
      >
        <source src={video} type='video/mp4' />
      </video>
    </Wrapper>
  );
};

export default Card;
