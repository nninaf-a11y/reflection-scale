document.querySelectorAll('.scale').forEach(group => {
  const dots = group.querySelectorAll('.dot');
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      dots.forEach(d => d.setAttribute('aria-checked', d === dot ? 'true' : 'false'));
    });
    dot.addEventListener('keydown', e => {
      const arr = Array.from(dots);
      const i = arr.indexOf(dot);
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); arr[(i+1)%arr.length].focus(); }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); arr[(i-1+arr.length)%arr.length].focus(); }
      if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); dot.click(); }
    });
  });
});
