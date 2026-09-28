module.exports = {
  id: "ai-3d-generator",
  name: "AI 3D Generator",
  description: "Install and run the AI 3D Generator with backend + frontend.",
  version: "1.0.0",

  scripts: {
    install: {
      title: "Install",
      description: "Install frontend + backend and download models",
      script: "install.js"
    },
    start: {
      title: "Start",
      description: "Start backend and frontend",
      script: "start.js"
    }
  }
};
