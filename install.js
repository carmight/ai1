const path = require("path");

module.exports = async ({ pinokio }) => {
  const appDir = pinokio.appDir;

  const frontendDir = path.join(appDir, "frontend");
  const backendDir = path.join(appDir, "ap");
  const envDir = path.join(backendDir, "env");

  pinokio.log("Installing frontend dependencies...");
  await pinokio.exec("npm install", { cwd: frontendDir });

  pinokio.log("Creating Python virtual environment...");
  await pinokio.exec("python3 -m venv env", { cwd: backendDir });

  const pip = process.platform === "win32"
    ? path.join(envDir, "Scripts", "pip.exe")
    : path.join(envDir, "bin", "pip");

  pinokio.log("Upgrading pip...");
  await pinokio.exec(`${pip} install --upgrade pip`);

  pinokio.log("Installing backend dependencies...");
  await pinokio.exec(`${pip} install -r requirements.txt`, { cwd: backendDir });

  pinokio.log("Downloading AI models (models.py)...");
  const python = process.platform === "win32"
    ? path.join(envDir, "Scripts", "python.exe")
    : path.join(envDir, "bin", "python");

  await pinokio.exec(`${python} models.py`, { cwd: backendDir });

  pinokio.log("Installation complete.");
};
