import React from 'react';
import PhotoCarousel from './PhotoCarousel';

export default function About() {
  return (
    <section
      id="about"
      className="text-slate-100 mb-6 mt-10 panel px-8 py-6 text-justify leading-relaxed"
    >
      <p className="font-normal text-slate-200 pb-5">
        I am a software engineer and recent graduate with a Master of Computer and Information Sciences from AUT.
        I am passionate about building intelligent systems that solve real-world problems through clean, efficient
        code and thoughtful design.
      </p>

      <p className="font-normal text-slate-200 pb-5">
        My work spans machine learning, retrieval-augmented generation (RAG), computer vision, time series forecasting,
        and full-stack web and mobile development. I have built applications using React and React Native, including a{' '}
        <a
          href="https://github.com/hanjuin/GroceryShoppingAssistant"
          className="font-semibold text-cyan-200 hover:text-cyan-300 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          barcode scanner app
        </a>{' '}
        and a project that displays{' '}
        <a
          href="https://github.com/hanjuin/bus-schedule"
          className="font-semibold text-cyan-200 hover:text-cyan-300 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          real-time bus schedules
        </a>{' '}
        in my room using a public transport API.
      </p>

      <p className="font-normal text-slate-200 pb-5">
        During my AI internship at Goldenset, I worked on large language model (LLM)
        infrastructure and retrieval systems. I contributed to structured CSV-to-RAG pipelines, token-aware
        chunking strategies, embedding workflows, and multi-model integrations across providers such as OpenAI
        and Anthropic. This experience strengthened my ability to design scalable AI systems and ship
        production-ready solutions.
      </p>

      <p className="font-light pb-5">
        For my dissertation, I explored Explainable AI in traffic prediction, applying LSTM and XGBoost models
        to Auckland transport data and using SHAP to translate model outputs into policy-relevant insights. I also
        built a{' '}
        <a
          href="https://github.com/hanjuin/traffic-prediction-lightgbm"
          className="font-semibold text-cyan-200 hover:text-cyan-300 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          traffic prediction model
        </a>{' '}
        and a{' '}
        <a
          href="https://github.com/hanjuin/currency_recognition_yolo"
          className="font-semibold text-cyan-200 hover:text-cyan-300 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          YOLO-based currency recognition model
        </a>{' '}
        for New Zealand banknotes.
      </p>

      <p className="font-normal text-slate-200 pb-5">
        I am particularly interested in practical AI systems that move beyond demos and deliver measurable value
        through intelligent automation, decision support, and well-designed developer tooling.
      </p>

      <p className="font-normal text-slate-200 pb-5">
        When I am not coding, I am probably watching a good movie, listening to music, or playing board games.
        I am also a huge football fan and a loyal Manchester United supporter — I rarely miss a match.
        These interests keep me balanced and often spark creative thinking that carries into my development work.
      </p>

      <div>
        <PhotoCarousel />
      </div>
    </section>
  );
}
