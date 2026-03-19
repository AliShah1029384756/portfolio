// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks  = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close menu on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.style.boxShadow = window.scrollY > 10
    ? '0 2px 20px rgba(0,0,0,0.4)'
    : 'none';
});

// Active nav link highlight on scroll
const sections = document.querySelectorAll('section[id]');
const links    = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 80) current = sec.id;
  });
  links.forEach(a => {
    a.style.color = a.getAttribute('href') === `#${current}` ? '#818cf8' : '';
  });
});

// GitHub API integration
const GH_USER = 'AliShah1029384756';
const GH_API  = `https://api.github.com/users/${GH_USER}`;

function escapeHtml(str) {
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(str || ''));
  return div.innerHTML;
}

async function loadGitHubProfile() {
  const container = document.getElementById('gh-profile');
  try {
    const res = await fetch(GH_API);
    if (!res.ok) throw new Error('Failed to load profile');
    const user = await res.json();

    container.innerHTML = `
      <img class="gh-avatar" src="${escapeHtml(user.avatar_url)}" alt="${escapeHtml(user.login)} avatar" />
      <div class="gh-profile-info">
        <h3>${escapeHtml(user.name || user.login)}</h3>
        <p class="gh-username">@${escapeHtml(user.login)}</p>
        ${user.bio ? `<p class="gh-bio">${escapeHtml(user.bio)}</p>` : ''}
        <div class="gh-stats">
          <div class="gh-stat"><span>${escapeHtml(String(user.public_repos))}</span><small>Repos</small></div>
          <div class="gh-stat"><span>${escapeHtml(String(user.followers))}</span><small>Followers</small></div>
          <div class="gh-stat"><span>${escapeHtml(String(user.following))}</span><small>Following</small></div>
        </div>
      </div>
      <a href="${escapeHtml(user.html_url)}" target="_blank" rel="noopener noreferrer" class="btn-primary">View Profile</a>
    `;
  } catch (err) {
    container.innerHTML = `<p class="gh-loading">Could not load GitHub profile.</p>`;
  }
}

async function loadGitHubRepos() {
  const container = document.getElementById('gh-repos');
  try {
    const res = await fetch(`${GH_API}/repos?sort=updated&per_page=6`);
    if (!res.ok) throw new Error('Failed to load repos');
    const repos = await res.json();

    if (!repos.length) {
      container.innerHTML = `<p class="gh-loading">No public repositories found.</p>`;
      return;
    }

    container.innerHTML = repos.map(repo => `
      <a class="gh-repo-card" href="${escapeHtml(repo.html_url)}" target="_blank" rel="noopener noreferrer">
        <div class="gh-repo-name">📁 ${escapeHtml(repo.name)}</div>
        ${repo.description ? `<div class="gh-repo-desc">${escapeHtml(repo.description)}</div>` : '<div class="gh-repo-desc">No description</div>'}
        <div class="gh-repo-meta">
          ${repo.language ? `<span>🔵 ${escapeHtml(repo.language)}</span>` : ''}
          <span>⭐ ${escapeHtml(String(repo.stargazers_count))}</span>
          <span>🍴 ${escapeHtml(String(repo.forks_count))}</span>
        </div>
      </a>
    `).join('');
  } catch (err) {
    container.innerHTML = `<p class="gh-loading">Could not load repositories.</p>`;
  }
}

loadGitHubProfile();
loadGitHubRepos();

