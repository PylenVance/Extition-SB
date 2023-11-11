@echo off
cls 
echo %errorlevel%     
set nodeV=    
for /f "delims=" %%a in ('node -v') do @set nodeV=%%a
if  %nodeV% NEQ [] ( 
  ECHO Node Installed! -%nodeV%
  npm install discord.js-selfbot-v13@latest Axios os cli-color
) else (
   ECHO some internal error occured
)
echo %errorlevel%
