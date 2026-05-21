import React from "react";
const cases=["Cryogenic Sample Identification","Clinical Research Labeling","Small-Batch Biotech Operations"];
export default function CaseStudies(){return <section className="page"><div className="pageIntro"><p className="eyebrow">CASE STUDIES</p><h1>Application stories for evolving laboratory and clinical workflows.</h1><p>Case studies are being prepared. This page can be expanded later with real applications.</p></div><div className="caseList">{cases.map((item)=><article className="caseCard" key={item}><span>{item}</span></article>)}</div></section>}
