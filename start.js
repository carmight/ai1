const path = require("path");

module.exports = async ({ pinokio }) => {
  const appDir = pinokio.appDir;

  const frontendDir = path.join(appDir, "frontend");
  const backendDir = path.join(appDir, "ap");
  const envDir = path.join(backendDir, "env");

  const python = process.platform === "win32"
    ? path.join(envDir, "Scripts", "python.exe")
    : path.join(envDir, "bin", "python");

  pinokio.log("Starting backend server (main.py)...");
  pinokio.execDetached(`${python} main.py`, { cwd: backendDir });

  pinokio.log("Starting frontend (npm start)...");
  await pinokio.exec("npm start", { cwd: frontendDir });
};
