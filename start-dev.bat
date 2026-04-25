@echo off
chcp 65001 >nul
REM CAMI VAN - Rustic Atelier (nau ri set)

cd /d "%~dp0"

echo.
echo ============================================
echo   CAMI VAN - Rustic Atelier (Nau Ri Set)
echo ============================================
echo.

where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [X] Node.js chua cai dat!
    echo Vui long cai Node.js LTS tu: https://nodejs.org/
    pause
    exit /b 1
)

echo [OK] Node.js version:
node --version
echo.

REM Always run npm install to ensure dependencies are correct (idempotent)
if not exist "package-lock.json" goto INSTALL
if not exist "node_modules\next" goto INSTALL
goto STARTDEV

:INSTALL
echo [...] Cai dat dependencies (2-3 phut)...
echo.
call npm install
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo [X] Loi khi cai dat npm. Vui long xem thong bao loi o tren.
    pause
    exit /b 1
)
echo.
echo [OK] Da cai xong dependencies.
echo.

:STARTDEV
echo [...] Dang khoi dong dev server...
echo.
echo Sau khi thay "Ready", mo browser va vao: http://localhost:3000
echo De DUNG server: nhan Ctrl+C
echo.

call npm run dev

pause
