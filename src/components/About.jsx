import React from 'react';
import PhotoCarousel from './PhotoCarousel';

export default function About() {
  return (
    <section
      id="about"
      className="text-slate-100 mb-6 mt-10 panel px-8 py-6 text-justify leading-relaxed"
    >
      <p className="font-normal text-slate-200 pb-5">
        Software engineer and recent AUT Master of Computer and Information Sciences graduate focused on intelligent,
        real-world systems built with clean, efficient code.
      </p>

      <p className="font-normal text-slate-200 pb-5">
        Experience includes machine learning, RAG, computer vision, time series forecasting, and full-stack
        web/mobile development. Built applications with React and React Native, including a{' '}
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
        During my AI internship at Goldenset, I worked on <a className="font-semibold text-cyan-200 hover:text-cyan-300 transition">LLM and retrieval infrastructure</a>, including CSV-to-RAG
        pipelines, token-aware chunking, embedding workflows, and multi-model integration across OpenAI and Anthropic.
      </p>

      <p className="font-normal text-slate-200 pb-5">
        For my dissertation, I explored Explainable AI for traffic prediction with LSTM, XGBoost, and SHAP. I also
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
        Interested in practical AI systems that deliver measurable value through automation, decision support, and
        strong developer tooling.
      </p>

      <div>
        <PhotoCarousel />
      </div>
    </section>
  );
}
