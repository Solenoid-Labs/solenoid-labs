// export function initProjectHeroLines() {
//   document.addEventListener("DOMContentLoaded", setupHeroSignals);
//   if (document.readyState !== "loading") setupHeroSignals();
//   window.addEventListener("resize", () => {
//     if (window.heroResizeTimeout) clearTimeout(window.heroResizeTimeout);
//     window.heroResizeTimeout = setTimeout(setupHeroSignals, 300);
//   });
// }
//
// let rafId = null;
//
// function setupHeroSignals() {
//   const container = document.getElementById("lineGrid");
//   if (!container) return;
//   
//   const wrapper = container.closest(".project-hero-wrapper");
//   if (!wrapper) return;
//   
//   // Clean up
//   if (rafId) {
//     cancelAnimationFrame(rafId);
//     rafId = null;
//   }
//   
//   container.innerHTML = "";
//   
//   const width = wrapper.offsetWidth;
//   const height = wrapper.offsetHeight;
//   const lineSpacing = 24;
//   const lineCount = Math.min(Math.floor(height / lineSpacing), 20);
//   
//   // Create canvas
//   const canvas = document.createElement("canvas");
//   canvas.width = width;
//   canvas.height = height;
//   canvas.style.position = "absolute";
//   canvas.style.top = "0";
//   canvas.style.left = "0";
//   canvas.style.width = "100%";
//   canvas.style.height = "100%";
//   container.appendChild(canvas);
//   
//   const ctx = canvas.getContext("2d");
//   
//   // Line configurations
//   const lines = [];
//   for (let i = 0; i < lineCount; i++) {
//     lines.push({
//       y: (i + 1) * lineSpacing,
//       pulses: [],
//       nextPulseTime: Date.now() + Math.random() * 2000
//     });
//   }
//   
//   function render() {
//     ctx.clearRect(0, 0, width, height);
//     ctx.strokeStyle = "rgba(0, 255, 150, 0.6)";
//     ctx.lineWidth = 1.5;
//     ctx.shadowBlur = 2;
//     ctx.shadowColor = "rgba(0, 255, 150, 0.5)";
//     
//     const now = Date.now();
//     
//     lines.forEach(line => {
//       // Randomly spawn a pulse
//       if (now > line.nextPulseTime && line.pulses.length < 3) {
//         line.pulses.push({
//           position: Math.random() * width, // WHERE the pulse happens
//           birth: now,
//           lifetime: 600 + Math.random() * 800, // How long it lives
//           maxAmplitude: 10 + Math.random() * 15,
//           frequency: 0.05 + Math.random() * 0.1,
//           spread: 50 + Math.random() * 100 // How wide the pulse spreads
//         });
//         line.nextPulseTime = now + 1500 + Math.random() * 3500;
//       }
//       
//       // Remove dead pulses
//       line.pulses = line.pulses.filter(p => now - p.birth < p.lifetime);
//       
//       // Draw the line
//       ctx.beginPath();
//       ctx.moveTo(0, line.y);
//       
//       for (let x = 0; x <= width; x += 3) {
//         let y = line.y;
//         
//         // Each pulse affects the line at its position
//         line.pulses.forEach(pulse => {
//           const age = now - pulse.birth;
//           const lifeProgress = age / pulse.lifetime;
//           
//           // The pulse grows and shrinks over its lifetime
//           const amplitude = pulse.maxAmplitude * Math.sin(lifeProgress * Math.PI);
//           
//           // Distance from pulse center
//           const distance = Math.abs(x - pulse.position);
//           
//           if (distance < pulse.spread) {
//             // Gaussian falloff from center
//             const falloff = Math.exp(-(distance * distance) / (pulse.spread * pulse.spread * 0.5));
//             
//             // The actual wave distortion
//             const wave = Math.sin(distance * pulse.frequency) * amplitude * falloff;
//             y += wave;
//           }
//         });
//         
//         ctx.lineTo(x, y);
//       }
//       
//       ctx.stroke();
//     });
//     
//     rafId = requestAnimationFrame(render);
//   }
//   
//   render();
// }


export function initProjectHeroLines() {
  document.addEventListener("DOMContentLoaded", setupHeroLines);

  if (document.readyState !== "loading") {
    setupHeroLines();
  }

  window.addEventListener("resize", setupHeroLines);
}

function setupHeroLines() {
  const lineSpacing = 10;
  const lineContainer = document.getElementById("lineGrid");
  if (!lineContainer) return;

  const wrapper = lineContainer.closest(".project-hero-wrapper");
  if (!wrapper) return;

  // Clear existing lines
  lineContainer.innerHTML = "";

  const height = wrapper.offsetHeight;
  const count = Math.floor(height / lineSpacing);

  for (let i = 0; i < count; i++) {
    const lineWrapper = document.createElement("div");
    lineWrapper.className = "line-wrapper";

    const line = document.createElement("div");
    line.className = "line";

    lineWrapper.appendChild(line);
    lineContainer.appendChild(lineWrapper);
  }

}
