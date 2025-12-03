import React from 'react'
import Lottie from 'lottie-react'

const AnimationLottie = ({ animationPath, width }) => {
  return (
    <Lottie
      animationData={animationPath}
      loop={true}
      autoplay={true}
      style={{ width: width || '95%' }}
    />
  );
};

export default AnimationLottie;