import React from 'react';

export default function About() {
  return (
    <section id="about" className=" text-white mb-6 mt-10 bg-slate-800 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.2)] rounded-md px-8 py-4 text-justify">
      {/* <h2 className="text-2xl font-bold mb-4">About Me</h2> */}
      <p className="font-light pb-5">
        I’m a curious and driven aspiring software engineer currently pursuing a Master’s in Computer and Information Sciences at AUT. I’m passionate about solving real-world problems through clean, efficient code and thoughtful design.
      </p>  
      <p className=" font-light pb-5">
      My work so far has spanned projects in machine learning, computer vision, time series forecasting, and both web and mobile development. I have built applications using React and React Native, including a barcode scanner app and a project that displays real-time bus schedules in my room using a public transport API. 
      </p> 
      <p className=" font-light pb-5">
        I have also used LSTM models and SHAP to predict traffic patterns in Auckland, and built a YOLO-based model for New Zealand currency recognition. To strengthen my skills further, I actively attend workshops and events including sessions on GIT, AWS, Site Visit, Career Panels, and AI discussions.
      </p> 
      <p className=" font-light pb-5">
        When I am not coding, I am probably watching a good movie, listening to music, or playing board game. I am also a huge football fan. As a loyal Manchester United supporter, I never miss a match and enjoy the passion and history the club represents. These hobbies fuel my creativity, keep me balanced, and often spark ideas that carry over into my development work.
      </p> 
    </section>
  );
}
