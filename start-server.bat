@echo off
echo ========================================================
echo  Starting Irfan's World-Class Portfolio Website Server
echo ========================================================
echo.
echo Opening portfolio in your default web browser...
start http://localhost:3000/index.html
echo.
echo Running local web server on http://localhost:3000
echo Press Ctrl+C in this window to stop the server anytime.
echo.
python -m http.server 3000
