import React from "react";
import {
  FlaskConical,
  Layers3,
  Headphones,
  ShieldCheck,
} from "lucide-react";

const howItems = [
  {
    title: "Co-Develop Solutions",
    text: "We work closely with customers to develop labeling materials and identification solutions around real workflow needs.",
    icon: FlaskConical,
  },

  {
    title: "Advance Material Performance",
    text: "We collaborate with label material partners to support demanding laboratory and clinical environments.",
    icon: Layers3,
  },

  {
    title: "Respond with Expertise",
    text: "Our engineering team provides fast, practical support for changing applications and urgent operational requirements.",
    icon: Headphones,
  },

  {
    title: "Protect Identification Quality",
    text: "We focus on durable adhesion, reliable readability, and long-term identification performance to help reduce sample loss and labeling errors.",
    icon: ShieldCheck,
  },
];

export default function About() {
  return (
    <section className="page">
      <div className="pageIntro">
        <p className="eyebrow">ABOUT UVMARK</p>

        <h1>
          Supporting Modern Biopharmaceutical Workflows
        </h1>

        <p>
          UVMARK works closely with biopharmaceutical research and clinical teams
          to develop flexible labeling materials and workflow-focused identification
          solutions for evolving laboratory and clinical environments.
        </p>
      </div>

      <div className="sectionHeader compact">
        <p className="eyebrow">HOW WE WORK</p>
      </div>

      <div className="twoByTwoGrid">
        {howItems.map((item) => {
          const Icon = item.icon;

          return (
            <article className="detailCard" key={item.title}>
              <div className="iconBox">
                <Icon size={28} strokeWidth={1.8} />
              </div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
