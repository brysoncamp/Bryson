import "./ProjectDetails.css";
import React, { forwardRef } from "react";

import { isMobile } from "react-device-detect";

type ProjectState = "CheapChat" | "PyFiddle" | "Namescraper";

type ProjectDetailsProps = {
  project: ProjectState;
  className: string;
  handleClick: (project: ProjectState) => void;
  expanded: boolean;
  isVertical?: boolean;
  handleClose?: () => void;
  top?: string;
};

import cheapchatUrl from "../../assets/vectors/cheapchat2.svg";
import pyfiddleUrl from "../../assets/vectors/pyfiddle.svg";
import namescraperUrl from "../../assets/vectors/namescraper.svg";
import expandUrl from "../../assets/vectors/expand.svg";
import collapseUrl from "../../assets/vectors/collapse.svg";
import githubUrl from "../../assets/vectors/github.svg";

import cheapchatVideo1 from '../../assets/videos/cheapchat/cheapchat-1.mp4';
import cheapchatVideo2 from '../../assets/videos/cheapchat/cheapchat-2.mp4';
import cheapchatVideo3 from '../../assets/videos/cheapchat/cheapchat-3.mp4';
import cheapchatVideo4 from '../../assets/videos/cheapchat/cheapchat-4.mp4';
import cheapchatVideo5 from '../../assets/videos/cheapchat/cheapchat-5.mp4';

import pyfiddleVideo1 from '../../assets/videos/pyfiddle/pyfiddle-1.mp4';

import namescraperVideo1 from '../../assets/videos/namescraper/namescraper-1.mp4';

const minimizedProjectDetails: {
  [key: string]: {
    subtitle: string;
    description: string;
    stackItems: string[];
    image: string;
    imageHeight?: string;
    imageMarginBottom?: string;
  };
} = {
  CheapChat: {
    subtitle: "Multi-AI chat platform",
    description: "A pay-as-you-go chatbot platform giving users access to premium LLMs without recurring fees. Currently supports OpenAI + Perplexity",
    stackItems: ["React", "Vike", "AWS", "Cognito", "Stripe", "Lambda Layers", "DynamoDB"],
    image: cheapchatUrl,
    imageHeight: "1.25rem",
  },
  PyFiddle: {
    subtitle: "Run and share Python Snippets",
    description: "An online IDE for writing, executing and sharing Python code with automatic URL generation for easy access and collaboration",
    stackItems: ["React", "Pyodide", "GitHub API", "Docker", "Amazon ECR", "MongoDB"],
    image: pyfiddleUrl
  },
  Namescraper: {
    subtitle: "AI domain search",
    description: "Leverages OpenAI and GoDaddy APIs to generate and check domain name availability in bulk, based on user business descriptions",
    stackItems: ["React", "OpenAI API", "GoDaddy API", "WebSocket API", "AWS", "MongoDB"],
    image: namescraperUrl,
    imageMarginBottom: "0.375rem"
  }
}

const expandedProjectDetails: {
  [key: string]: {
    overview: string;
    video: string;
    motivation: string;
    features: { description: string; video?: string }[];
    challenges: { title: string; description: string }[];
    stack: { frontend: string[]; backend: string[]; infrastructure: string[]; };
    links: { label: string; url: string; image: string; }[];
  };
} = {
  CheapChat: {
    overview: "CheapChat is a multi-AI chatbot platform designed to make powerful language models accessible without the friction of account setups or monthly fees. Users can interact with LLMs like OpenAI’s GPT or Perplexity via a simple web interface — paying only for what they use.",
    video: cheapchatVideo1,
    motivation: "While testing LLM APIs, I noticed a gap: most platforms lock users into subscriptions even for quick, one-off queries. I built CheapChat to solve that — offering a flexible, affordable way to explore multiple AI models with no strings attached.",
    features: [
      { description: "Real-time AI response streaming with markdown rendering", video: cheapchatVideo2 },
      { description: "Load previous conversations with automatic context restoration", video: cheapchatVideo3 },
      { description: "Secure user authentication with Google federated sign-in", video: cheapchatVideo4 },
      { description: "Support for advanced AI models with reasoning and citation features", video: cheapchatVideo5 },
    ],
    challenges: [
      { title: "Contextual WebSocket Communication with JWT Security", description: "Built a stateless WebSocket backend that maintained chat context while validating Cognito JWTs for secure user connections."},
      { title: "Secure Payment Flow with Usage Tracking", description: "Integrated Stripe checkout with Lambda functions, handled webhook events to validate payments, and tracked user expenditure for pay-as-you-go access."},
      { title: "Secure Lambda Deployments via GitHub Action", description: "Configured CI/CD pipelines to deploy AWS Lambda functions directly from GitHub using scoped IAM roles and CLI-based automation."},
      { title: "Dynamic AI Model Switching", description: "Built a flexible system to switch between AI models like OpenAI and Perplexity mid-session, adapting prompts and response handling per model."},
    ],
    stack: {
      frontend: ["React", "Vike", "AWS Amplify (Auth UI)"],
      backend: ["AWS Lambda (Node.js, Lambda Layers)", "API Gateway (HTTP & WebSocket)", "OpenAI API", "Perplexity API"],
      infrastructure: ["DynamoDB", "AWS Cognito", "Stripe", "Secrets Manager", "CloudWatch", "IAM (GitHub → Lambda Deploy)"]
    },
    links: [
      { label: "Live Site", url: "https://cheap.chat", image: cheapchatUrl },
      { label: "Frontend", url: "https://github.com/brysoncamp/CheapChat", image: githubUrl },
      { label: "Backend", url: "https://github.com/brysoncamp/CheapChat-Lambdas", image: githubUrl },
    ]
  },
  PyFiddle: {
    overview: "PyFiddle is a web-based Python IDE designed for rapid prototyping and sharing of Python code snippets. Inspired by JSFiddle and CodePen, it combines real-time Python execution with a minimalist UI and GitHub integration for storing and loading code.",
    video: pyfiddleVideo1,
    motivation: "I built PyFiddle after noticing the lack of lightweight, shareable Python code playgrounds like JSFiddle for JavaScript. It’s ideal for quickly testing snippets, debugging ideas, or sharing concepts with others — no installations required.",
    features: [
      { description: "Real-time Python execution powered by Pyodide in the browser" },
      { description: "Live output streaming using web workers for responsive UX" },
      { description: "GitHub OAuth login for saving and loading snippets via Gists" },
      { description: "Auto-generated shareable URLs with snippet path handling" },
      { description: "Resizable editor/output layout with persistent state" }
    ],
    challenges: [
      { title: "Real-Time Pyodide Execution", description: "Used a dedicated web worker to offload Pyodide execution, then streamed logs back to the main thread for immediate feedback without blocking the UI." },
      { title: "Secure Snippet Management via GitHub Gists", description: "Integrated OAuth login and Gist API to fetch/save code securely without maintaining internal databases." },
      { title: "Dynamic Routing for Snippet URLs", description: "Implemented routing logic to handle 8-character paths dynamically, fetching and injecting corresponding snippet content on page load." },
      { title: "GitHub Actions CI/CD with AWS ECR", description: "Automated container builds and pushed to AWS ECR using GitHub Actions and environment secrets." }
    ],
    stack: {
      frontend: ["React", "CodeMirror", "Pyodide", "Web Workers", "GitHub Pages"],
      backend: ["Node.js", "Express", "MongoDB", "GitHub OAuth", "Docker"],
      infrastructure: ["AWS ECR", "GitHub Actions", "MongoDB Compass"]
    },
    links: [
      { label: "Live Site", url: "https://pyfiddle.net", image: pyfiddleUrl },
      { label: "Frontend", url: "https://github.com/brysoncamp/PyFiddle-Front", image: githubUrl },
      { label: "Backend", url: "https://github.com/brysoncamp/PyFiddle-Back", image: githubUrl }
    ]
  },
  Namescraper: {
    overview: "Namescraper is a fully serverless domain name generator that combines OpenAI for creative naming with the GoDaddy API for real-time availability checks. Users get a seamless, scalable experience to brainstorm, validate, and secure domain names based on business ideas.",
    video: namescraperVideo1,
    motivation: "I built Namescraper after struggling to find tools that let users both ideate and validate domain names in bulk, without juggling multiple services. It’s a one-stop solution for entrepreneurs who want smart, fast domain suggestions that are actually available.",
    features: [
      { description: "AI-powered name generation via OpenAI based on user descriptions" },
      { description: "Live domain availability checks using GoDaddy API with real-time streaming" },
      { description: "Secure sign-in with Google using AWS Cognito and Amplify UI" },
      { description: "User credits and history tracking through REST APIs" },
      { description: "FIFO queuing with SQS to respect API rate limits and ensure fairness" }
    ],
    challenges: [
      { title: "WebSocket Streaming Architecture", description: "Designed a WebSocket API for real-time delivery of name suggestions and availability checks, ensuring low latency updates while handling connection persistence." },
      { title: "Rate-Limited GoDaddy API Orchestration", description: "Built AWS Step Functions workflows to dequeue domain queries and batch API requests in compliance with strict GoDaddy limits (60 requests/min, 500 names/request)." },
      { title: "Credit-Based Access System", description: "Implemented a credit system where users are charged based on usage, with secure updates and validations handled by Cognito-authenticated REST APIs." },
      { title: "Scalable Serverless Infrastructure", description: "Leveraged S3, CloudFront, Cognito, Lambda, DynamoDB, and SQS to build a cost-effective architecture that scales automatically with user traffic." }
    ],
    stack: {
      frontend: ["React", "Vite", "AWS Amplify (Auth UI)", "WebSocket API"],
      backend: ["AWS Lambda (Node.js)", "API Gateway (WebSocket + REST)", "OpenAI API", "GoDaddy API"],
      infrastructure: ["DynamoDB", "S3", "CloudFront", "Cognito", "SES", "SQS", "Step Functions", "GitHub Actions"]
    },
    links: [
      { label: "Frontend", url: "https://github.com/brysoncamp/Namescraper", image: githubUrl },
      { label: "Backend", url: "https://github.com/brysoncamp/Namescraper-backend", image: githubUrl }
    ]
  }  
};


const ProjectDetails = forwardRef<HTMLDivElement, ProjectDetailsProps>(({
  project,
  className,
  handleClick,
  expanded,
  isVertical = false,
  handleClose,
  top
}, ref) => {
  const { overview, video, motivation, features, challenges, stack, links } = expandedProjectDetails[project];
  const { subtitle, description, stackItems, image, imageHeight, imageMarginBottom } = minimizedProjectDetails[project];

  return (
    <div ref={ref} className={className} style={{ top: top }}>

      {/* Expanded block */}
      <div className="project-container" style={{ display: expanded ? undefined : 'none' }}>
        {isVertical && <div className="project-close" onClick={handleClose}>
          <img src={collapseUrl} alt="Close" />
        </div>}
        <div className="project-content">
          <div className="project-title-container">
            <img className="project-logo" src={image} alt={project} />
            <h2 className="project-title">{project}</h2>
          </div>
          <p className="project-subtitle">{subtitle}</p>
          <video className="project-video" autoPlay loop muted playsInline preload="auto">
            <source src={video} type="video/mp4" />
          </video>
          <div className="project-links">
            {links.map(({ label, url, image }, index) => (
              <a key={index} className="project-link" href={url} target="_blank" rel="noopener noreferrer">
                <img className="project-link-icon" src={image} alt="Link" />
                <p className="project-link-text">{label}</p>
              </a>
            ))}
          </div>
          <p className="project-written-heading">Overview</p>
          <p className="project-written-content">{ overview }</p>
          <p className="project-written-heading">Features</p>
          {features.map((feature, index) => (
            <React.Fragment key={index}>
              <ul className="project-written-list">
                <li className="project-written-list-item">
                  {feature.description}
                </li>
              </ul>
              {feature.video && <video key={feature.video} className="project-video" autoPlay loop muted playsInline preload="auto">
                <source src={feature.video} type="video/mp4" />
              </video>}
            </React.Fragment>
          ))}
          <p className="project-written-heading">Motivation</p>
          <p className="project-written-content">{ motivation }</p>
          <p className="project-written-heading">Technology</p>
          <ul className="project-written-list project-stack-list">
            <li className="project-stack-list-header"><span className="stack-subheading">Frontend: </span>{stack.frontend.map((item, index) => (
              <span key={index} className="stack-list-item">{item}</span>
            ))}</li>
            <li className="project-stack-list-header"><span className="stack-subheading">Backend: </span>{stack.backend.map((item, index) => (
              <span key={index} className="stack-list-item">{item}</span>
            ))}</li>
            <li className="project-stack-list-header"><span className="stack-subheading">Infrastructure: </span>{stack.infrastructure.map((item, index) => (
              <span key={index} className="stack-list-item">{item}</span>
            ))}</li>
          </ul>
          <p className="project-written-heading">Learnings</p>
          <ul className="project-written-list project-learnings-list">
            {challenges.map(({title, description }, index) => (
              <li key={index} className="project-written-list-item"><span className="learnings-subheading">{title}:</span> {description}</li>
            ))}
          </ul>
        </div>
        <div className="project-links">
          {links.map(({ label, url, image }, index) => (
            <a key={index} className="project-link" href={url} target="_blank" rel="noopener noreferrer">
              <img className="project-link-icon" src={image} alt="Link" />
              <p className="project-link-text">{label}</p>
            </a>
          ))}
        </div>
        <br/>
        {isVertical && <div className="project-close" onClick={handleClose}>
          <div className="close-text">Close</div>
        </div>}
      </div>

      {/* Minimized block */}
      <div style={{ display: expanded ? 'none' : undefined }} onClick={() => handleClick(project)}>
        <div className="mini-title-container">
          <img className="mini-logo" src={image} alt={project} style={{ height: imageHeight, marginBottom: imageMarginBottom }} />
          <p className="mini-title"><span className="bold">{project}</span> – {subtitle}</p>
          <img className="mini-expand" src={expandUrl} alt="Expand" />
        </div>
        <p className="mini-description">{description}</p>
        <div className="mini-stack">
          {stackItems.map((item, index) => (
            <React.Fragment key={index}>
              <p className="mini-stack-item">{item}</p>
              {index !== stackItems.length - 1 && <div className="mini-stack-divider" />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
});

export default ProjectDetails;
