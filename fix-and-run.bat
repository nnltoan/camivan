@echo off
chcp 65001 >nul
REM Fix node_modules + start dev server

cd /d "%~dp0"

echo.
echo ============================================
echo   FIX + START - CAMI VAN Rustic
echo ============================================
echo.

REM Force delete old node_modules (often stale/empty)
if exist "node_modules" (
    echo [...] Xoa node_modules cu...
    rmdir /s /q "node_modules" 2>nul
    if exist "node_modules" (
        echo [!] Khong xoa duoc node_modules. Vui long xoa thu cong:
        echo     1. Mo File Explorer
        echo     2. Vao: %CD%
        echo     3. Xoa folder "node_modules"
        echo     4. Chay lai file nay
        pause
        exit /b 1
    )
    echo [OK] Da xoa.
    echo.
)

REM Check Node
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [X] Node.js chua cai dat!
    echo Cai tu: https://nodejs.org/
    pause
    exit /b 1
)
echo [OK] Node:
node --version
echo.

REM Fresh install
echo [...] Cai dependencies (2-3 phut)...
call npm install
if %ERRORLEVEL% NEQ 0 (
    echo [X] Loi npm install.
    pause
    exit /b 1
)
echo [OK] Cai xong.
echo.

echo [...] Khoi dong dev server...
echo.
echo Mo browser va vao: http://localhost:3000
echo Dung server: Ctrl+C
echo.
call npm run dev

pause
