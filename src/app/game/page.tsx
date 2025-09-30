"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function GamePage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scoreDisplayRef = useRef<HTMLDivElement>(null);
  const highScoreDisplayRef = useRef<HTMLDivElement>(null);
  const startButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Snake game implementation
    const canvas = canvasRef.current;
    const scoreDisplay = scoreDisplayRef.current;
    const highScoreDisplay = highScoreDisplayRef.current;
    const startButton = startButtonRef.current;

    if (!canvas || !scoreDisplay || !highScoreDisplay || !startButton) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 400;
    canvas.height = 400;

    const gridSize = 20;
    const tileCount = canvas.width / gridSize;

    let snake: { x: number; y: number }[] = [];
    let food: { x: number; y: number } = { x: 0, y: 0 };
    let direction = 'right';
    let score = 0;
    let highScore = 0;
    let gameInterval: NodeJS.Timeout | null = null;
    let gameActive = false;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    function initializeGame() {
      snake = [{ x: 5, y: 5 }];
      direction = 'right';
      score = 0;
      if (scoreDisplay) scoreDisplay.textContent = `Score: ${score}`;
      placeFood();
    }

    function placeFood() {
      food = {
        x: Math.floor(Math.random() * tileCount),
        y: Math.floor(Math.random() * tileCount)
      };
      for (let part of snake) {
        if (part.x === food.x && part.y === food.y) {
          placeFood();
          break;
        }
      }
    }

    function draw() {
      if (!ctx || !canvas) return;
      
      ctx.fillStyle = '#faf0dd';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#ec6ba7';
      snake.forEach((part, index) => {
        if (index === 0) {
          ctx.fillStyle = '#d84f8b';
        }
        ctx.fillRect(part.x * gridSize, part.y * gridSize, gridSize - 2, gridSize - 2);
      });
      
      ctx.fillStyle = '#547dfd';
      ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize - 2, gridSize - 2);
    }

    function moveSnake() {
      if (!gameActive) return;
      
      const head = { x: snake[0].x, y: snake[0].y };
      
      const headPixelX = head.x * gridSize + gridSize / 2;
      const headPixelY = head.y * gridSize + gridSize / 2;
      const angleRad = Math.atan2(mouseY - headPixelY, mouseX - headPixelX);

      const angleDeg = (angleRad * 180 / Math.PI + 360) % 360;
      
      if (angleDeg >= 315 || angleDeg < 45) {
        direction = 'right';
      } else if (angleDeg >= 45 && angleDeg < 135) {
        direction = 'down';
      } else if (angleDeg >= 135 && angleDeg < 225) {
        direction = 'left';
      } else {
        direction = 'up';
      }
      
      switch(direction) {
        case 'up': head.y--; break;
        case 'down': head.y++; break;
        case 'left': head.x--; break;
        case 'right': head.x++; break;
      }
      
      if (head.x < 0 || head.x >= tileCount || 
          head.y < 0 || head.y >= tileCount) {
        gameOver();
        return;
      }
      
      snake.unshift(head);
      
      if (head.x === food.x && head.y === food.y) {
        score += 10;
        if (scoreDisplay) scoreDisplay.textContent = `Score: ${score}`;
        if (score > highScore) {
          highScore = score;
          if (highScoreDisplay) highScoreDisplay.textContent = `High Score: ${highScore}`;
        }
        placeFood();
      } else {
        snake.pop();
      }
      
      draw();
    }

    function gameOver() {
      gameActive = false;
      if (gameInterval) clearInterval(gameInterval);
      if (startButton) {
        startButton.textContent = 'Play Again';
        startButton.disabled = false;
      }
      
      if (!ctx || !canvas) return;
      
      ctx.fillStyle = '#ec6ba7'; 
      ctx.font = '40px "Press Start 2P"';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      
      ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
      ctx.fillText('GAME OVER', canvas.width/2 + 2, canvas.height/2 + 2);
      
      ctx.fillStyle = '#ec6ba7';
      ctx.fillText('GAME OVER', canvas.width/2, canvas.height/2);
      
      ctx.font = '20px "Press Start 2P"';
      ctx.fillStyle = '#547dfd';  
      ctx.fillText(`Final Score: ${score}`, canvas.width/2, canvas.height/2 + 50);
    }

    function startGame() {
      if (gameInterval) {
        clearInterval(gameInterval);
      }
      gameActive = true;
      if (startButton) {
        startButton.disabled = true;
        startButton.textContent = 'Playing...';
      }
      initializeGame();
      gameInterval = setInterval(moveSnake, 100);
    }

    startButton.addEventListener('click', startGame);

    initializeGame();
    draw();

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      if (gameInterval) clearInterval(gameInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] overflow-x-hidden relative">
      {/* Card-themed background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-16 h-24 bg-white rounded-lg transform rotate-12"></div>
        <div className="absolute top-32 right-20 w-16 h-24 bg-white rounded-lg transform -rotate-12"></div>
        <div className="absolute bottom-40 left-32 w-16 h-24 bg-white rounded-lg transform rotate-6"></div>
        <div className="absolute bottom-20 right-40 w-16 h-24 bg-white rounded-lg transform -rotate-6"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-24 bg-white rounded-lg transform rotate-45"></div>
      </div>

      {/* Hero Section - Card Stack */}
      <div className="relative w-full h-96 flex items-center justify-center mb-12">
        <div className="relative">
          {/* Card stack effect */}
          <div className="absolute inset-0 w-80 h-48 bg-gradient-to-br from-[#faf0dd] to-[#e8d5b7] rounded-xl shadow-2xl transform rotate-3 border-4 border-[#2c3e50]"></div>
          <div className="absolute inset-0 w-80 h-48 bg-gradient-to-br from-[#faf0dd] to-[#e8d5b7] rounded-xl shadow-2xl transform -rotate-2 border-4 border-[#2c3e50]"></div>
          <div className="relative w-80 h-48 bg-gradient-to-br from-[#faf0dd] to-[#e8d5b7] rounded-xl shadow-2xl border-4 border-[#2c3e50] flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-2">🃏</div>
              <h1 className="text-2xl font-press-start text-[#2c3e50] mb-2">J@mbo</h1>
              <p className="text-lg font-press-start text-[#2c3e50]">Game Habitat</p>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-20"></div>

      {/* About Section - Card Layout */}
      <section className="mx-8 max-w-6xl mx-auto mb-12">
        <div className="relative">
          {/* About Card */}
          <div className="bg-gradient-to-br from-[#faf0dd] to-[#e8d5b7] rounded-2xl shadow-2xl border-4 border-[#2c3e50] p-8 transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl">♠️</div>
                  <h3 className="text-[#2c3e50] text-2xl font-press-start">
                    W3lc0me ab0@rd &gt;:3
                  </h3>
                  <div className="text-4xl">♠️</div>
                </div>
                <p className="text-[#2c3e50] text-xl leading-relaxed" style={{ fontFamily: 'Dokdo, sans-serif' }}>
                  This is J@mbo (Lamar Jambi) :P. I&apos;m an Integrated Design and Media, Computer Science, 
                  and Game Design student at New York University. Currently based in Brooklyn, NY! Interested
                  in digital art, game development, and computer vision in entertainment :]
                </p>
              </div>
              <div className="relative">
                <div className="w-48 h-64 bg-gradient-to-br from-[#2c3e50] to-[#34495e] rounded-xl shadow-xl border-4 border-[#faf0dd] overflow-hidden">
                  <Image
                    src="/img/self.jpg"
                    alt="Illustration of Lamar"
                    width={200}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Card corner decorations */}
                <div className="absolute -top-2 -left-2 w-6 h-6 bg-[#e74c3c] rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">A</span>
                </div>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-[#e74c3c] rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">A</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-20"></div>

      {/* Projects Section - Card Deck */}
      <section className="w-[80%] mx-auto font-press-start mb-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-gradient-to-r from-[#e74c3c] to-[#c0392b] text-white rounded-full text-sm mb-6 shadow-lg">
            <span className="text-2xl">🃏</span>
            <span>Game Projects</span>
            <span className="text-2xl">🃏</span>
          </div>
          <h2 className="text-white text-3xl mb-4 leading-relaxed" style={{ fontFamily: 'Dokdo, sans-serif' }}>
            Experimenting with different game engines!!
          </h2>
          <p className="text-[#bdc3c7] text-lg">Click on a project card to play :3</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Game Cards */}
          <div className="group relative">
            <div className="bg-gradient-to-br from-[#faf0dd] to-[#e8d5b7] rounded-2xl shadow-2xl border-4 border-[#2c3e50] overflow-hidden transform group-hover:scale-105 group-hover:rotate-2 transition-all duration-300">
              <a href="https://playlamar.itch.io/cosmic-thread" target="_blank" rel="noopener noreferrer" className="block">
                <div className="relative">
                  <video autoPlay loop muted playsInline className="w-full h-48 object-cover">
                    <source src="/img/cosmicThread-gamplay.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl">♠️</span>
                    <span className="text-2xl">♠️</span>
                  </div>
                  <h3 className="text-[#2c3e50] text-lg font-press-start text-center">Cosmic Thread</h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-2xl">♠️</span>
                    <span className="text-2xl">♠️</span>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="group relative">
            <div className="bg-gradient-to-br from-[#faf0dd] to-[#e8d5b7] rounded-2xl shadow-2xl border-4 border-[#2c3e50] overflow-hidden transform group-hover:scale-105 group-hover:-rotate-2 transition-all duration-300">
              <a href="https://github.com/lamarjambi/hues-quest.git" target="_blank" rel="noopener noreferrer" className="block">
                <div className="relative">
                  <video autoPlay loop muted playsInline className="w-full h-48 object-cover">
                    <source src="/img/huesQuest-gameplay.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl">♥️</span>
                    <span className="text-2xl">♥️</span>
                  </div>
                  <h3 className="text-[#2c3e50] text-lg font-press-start text-center">Hue&apos;s Quest</h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-2xl">♥️</span>
                    <span className="text-2xl">♥️</span>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="group relative">
            <div className="bg-gradient-to-br from-[#faf0dd] to-[#e8d5b7] rounded-2xl shadow-2xl border-4 border-[#2c3e50] overflow-hidden transform group-hover:scale-105 group-hover:rotate-1 transition-all duration-300">
              <a href="https://github.com/lamarjambi/poly-0-the-saga.git" target="_blank" rel="noopener noreferrer" className="block">
                <div className="relative">
                  <video autoPlay loop muted playsInline className="w-full h-48 object-cover">
                    <source src="/img/poly0-gameplay.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl">♦️</span>
                    <span className="text-2xl">♦️</span>
                  </div>
                  <h3 className="text-[#2c3e50] text-lg font-press-start text-center">Poly-0: The Saga</h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-2xl">♦️</span>
                    <span className="text-2xl">♦️</span>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="group relative">
            <div className="bg-gradient-to-br from-[#faf0dd] to-[#e8d5b7] rounded-2xl shadow-2xl border-4 border-[#2c3e50] overflow-hidden transform group-hover:scale-105 group-hover:-rotate-1 transition-all duration-300">
              <a href="oppr.org/s/3HMXmh9U" target="_blank" rel="noopener noreferrer" className="block">
                <div className="relative">
                  <Image src="/img/typing-rush-game.gif" alt="Typing Rush" width={400} height={200} className="w-full h-48 object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl">♣️</span>
                    <span className="text-2xl">♣️</span>
                  </div>
                  <h3 className="text-[#2c3e50] text-lg font-press-start text-center">Typing Rush</h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-2xl">♣️</span>
                    <span className="text-2xl">♣️</span>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="group relative">
            <div className="bg-gradient-to-br from-[#faf0dd] to-[#e8d5b7] rounded-2xl shadow-2xl border-4 border-[#2c3e50] overflow-hidden transform group-hover:scale-105 group-hover:rotate-2 transition-all duration-300">
              <a href="oppr.org/s/iYpolLEj" target="_blank" rel="noopener noreferrer" className="block">
                <div className="relative">
                  <video autoPlay loop muted playsInline className="w-full h-48 object-cover">
                    <source src="/img/SAJ-demo-game.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl">🃏</span>
                    <span className="text-2xl">🃏</span>
                  </div>
                  <h3 className="text-[#2c3e50] text-lg font-press-start text-center">Super Adrenaline Junkies</h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-2xl">🃏</span>
                    <span className="text-2xl">🃏</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-20"></div>

      {/* Skills Section - Card Hand */}
      <section className="w-[80%] mx-auto font-press-start mb-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-gradient-to-r from-[#27ae60] to-[#2ecc71] text-white rounded-full text-sm mb-6 shadow-lg">
            <span className="text-2xl">🃏</span>
            <span>Skills Deck</span>
            <span className="text-2xl">🃏</span>
          </div>
          <h2 className="text-white text-3xl mb-4" style={{ fontFamily: 'Dokdo, sans-serif' }}>
            Where do my skills lie?
          </h2>
          <p className="text-[#bdc3c7] text-lg">A hand of expertise cards</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {/* Digital Art Card */}
          <div className="bg-gradient-to-br from-[#faf0dd] to-[#e8d5b7] rounded-2xl shadow-2xl border-4 border-[#2c3e50] p-6 w-80 transform hover:scale-105 hover:rotate-1 transition-all duration-300">
            <div className="text-center mb-4">
              <div className="text-4xl mb-2">🎨</div>
              <h3 className="text-[#2c3e50] text-lg font-press-start">Digital Art</h3>
            </div>
            <div className="space-y-2">
              <div className="bg-[#2c3e50] text-[#faf0dd] px-3 py-1 rounded-full text-sm text-center" style={{ fontFamily: 'Dokdo, sans-serif' }}>Adobe Photoshop</div>
              <div className="bg-[#2c3e50] text-[#faf0dd] px-3 py-1 rounded-full text-sm text-center" style={{ fontFamily: 'Dokdo, sans-serif' }}>Adobe Animate</div>
              <div className="bg-[#2c3e50] text-[#faf0dd] px-3 py-1 rounded-full text-sm text-center" style={{ fontFamily: 'Dokdo, sans-serif' }}>Concept Art</div>
              <div className="bg-[#2c3e50] text-[#faf0dd] px-3 py-1 rounded-full text-sm text-center" style={{ fontFamily: 'Dokdo, sans-serif' }}>Character Design</div>
            </div>
          </div>

          {/* Programming Languages Card */}
          <div className="bg-gradient-to-br from-[#faf0dd] to-[#e8d5b7] rounded-2xl shadow-2xl border-4 border-[#2c3e50] p-6 w-80 transform hover:scale-105 hover:-rotate-1 transition-all duration-300">
            <div className="text-center mb-4">
              <div className="text-4xl mb-2">💻</div>
              <h3 className="text-[#2c3e50] text-lg font-press-start">Programming</h3>
            </div>
            <div className="space-y-2">
              <div className="bg-[#2c3e50] text-[#faf0dd] px-3 py-1 rounded-full text-sm text-center" style={{ fontFamily: 'Dokdo, sans-serif' }}>C# / C++</div>
              <div className="bg-[#2c3e50] text-[#faf0dd] px-3 py-1 rounded-full text-sm text-center" style={{ fontFamily: 'Dokdo, sans-serif' }}>Python / Java</div>
              <div className="bg-[#2c3e50] text-[#faf0dd] px-3 py-1 rounded-full text-sm text-center" style={{ fontFamily: 'Dokdo, sans-serif' }}>JavaScript</div>
              <div className="bg-[#2c3e50] text-[#faf0dd] px-3 py-1 rounded-full text-sm text-center" style={{ fontFamily: 'Dokdo, sans-serif' }}>HTML/CSS / React</div>
            </div>
          </div>

          {/* Technologies Card */}
          <div className="bg-gradient-to-br from-[#faf0dd] to-[#e8d5b7] rounded-2xl shadow-2xl border-4 border-[#2c3e50] p-6 w-80 transform hover:scale-105 hover:rotate-1 transition-all duration-300">
            <div className="text-center mb-4">
              <div className="text-4xl mb-2">🛠️</div>
              <h3 className="text-[#2c3e50] text-lg font-press-start">Technologies</h3>
            </div>
            <div className="space-y-2">
              <div className="bg-[#2c3e50] text-[#faf0dd] px-3 py-1 rounded-full text-sm text-center" style={{ fontFamily: 'Dokdo, sans-serif' }}>Unity / Unreal</div>
              <div className="bg-[#2c3e50] text-[#faf0dd] px-3 py-1 rounded-full text-sm text-center" style={{ fontFamily: 'Dokdo, sans-serif' }}>Adobe Suite</div>
              <div className="bg-[#2c3e50] text-[#faf0dd] px-3 py-1 rounded-full text-sm text-center" style={{ fontFamily: 'Dokdo, sans-serif' }}>UI/UX Tools</div>
              <div className="bg-[#2c3e50] text-[#faf0dd] px-3 py-1 rounded-full text-sm text-center" style={{ fontFamily: 'Dokdo, sans-serif' }}>Robotics / P5.js</div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-20"></div>

      {/* Snake Game Section - Game Card */}
      <section className="w-[80%] mx-auto font-press-start mb-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-gradient-to-r from-[#8e44ad] to-[#9b59b6] text-white rounded-full text-sm mb-6 shadow-lg">
            <span className="text-2xl">🐍</span>
            <span>Sn@ke Game</span>
            <span className="text-2xl">🐍</span>
          </div>
          <h2 className="text-white text-3xl mb-4" style={{ fontFamily: 'Dokdo, sans-serif' }}>
            Lead our Sn@ke (pink :3) to his food using your magical Kirby mouse!
          </h2>
        </div>

        <div className="flex justify-center">
          <div className="bg-gradient-to-br from-[#faf0dd] to-[#e8d5b7] rounded-2xl shadow-2xl border-4 border-[#2c3e50] p-8 transform hover:scale-105 transition-all duration-300">
            <div className="text-center">
              <canvas 
                ref={canvasRef}
                className="border-4 border-[#2c3e50] bg-[#faf0dd] rounded-xl shadow-lg"
              ></canvas>
              
              {/* Score Cards */}
              <div className="flex justify-center gap-4 mt-6">
                <div className="bg-[#2c3e50] text-[#faf0dd] px-4 py-2 rounded-lg shadow-lg">
                  <div ref={scoreDisplayRef} className="text-lg font-press-start">
                    Score: 0
                  </div>
                </div>
                <div className="bg-[#e74c3c] text-white px-4 py-2 rounded-lg shadow-lg">
                  <div ref={highScoreDisplayRef} className="text-lg font-press-start">
                    High: 0
                  </div>
                </div>
              </div>
              
              <button 
                ref={startButtonRef}
                className="mt-6 px-8 py-3 font-press-start cursor-pointer bg-gradient-to-r from-[#e74c3c] to-[#c0392b] text-white rounded-xl text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Start Game
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-20"></div>

      {/* Footer - Card Deck */}
      <footer className="py-12">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-[#faf0dd] to-[#e8d5b7] rounded-2xl shadow-2xl border-4 border-[#2c3e50] p-8">
            <div className="text-center">
              <div className="flex justify-center gap-8 mb-8">
                <a href="mailto:play.lmjambi@gmail.com" className="bg-[#2c3e50] text-[#faf0dd] p-3 rounded-full transition-all duration-300 hover:scale-110 hover:bg-[#e74c3c]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/lamar-jambi/" target="_blank" rel="noopener noreferrer" className="bg-[#2c3e50] text-[#faf0dd] p-3 rounded-full transition-all duration-300 hover:scale-110 hover:bg-[#e74c3c]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="https://github.com/lamarjambi" target="_blank" rel="noopener noreferrer" className="bg-[#2c3e50] text-[#faf0dd] p-3 rounded-full transition-all duration-300 hover:scale-110 hover:bg-[#e74c3c]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <a href="https://instagram.com/the.jamboala" target="_blank" rel="noopener noreferrer" className="bg-[#2c3e50] text-[#faf0dd] p-3 rounded-full transition-all duration-300 hover:scale-110 hover:bg-[#e74c3c]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                  </svg>
                </a>
              </div>
              <div className="text-[#2c3e50] text-sm font-press-start">
                <p className="mb-2">© 2024 All rights reserved</p>
                <p>Made with ★ in Brooklyn, NY</p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Home Link */}
      <div className="text-center pb-8">
        <Link href="/" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#e74c3c] to-[#c0392b] text-white px-6 py-3 rounded-full font-press-start text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg">
          <span>🃏</span>
          <span>Back to Home</span>
          <span>🃏</span>
        </Link>
      </div>
    </div>
  );
}
