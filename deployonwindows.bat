cd "%~dp0\projectmain"
cmd /c "npm run build"
rmdir /s /q "%~dp0\server\build"
move "%~dp0\projectmain\build" "%~dp0\server"
cd "%~dp0\server"
node index.js
