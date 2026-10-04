document.addEventListener('DOMContentLoaded', () => {
    // 1. Populate Personal Data
    const pd = portfolioData.personal;
    document.getElementById('hero-name').textContent = pd.name;
    document.getElementById('hero-title').textContent = pd.title;
    document.getElementById('hero-tagline').textContent = `"${pd.tagline}"`;
    document.getElementById('hero-desc').textContent = pd.heroDesc;
    
    // Resume Button
    if(pd.contact.resumeUrl) {
        const resumeBtn = document.getElementById('resume-btn');
        resumeBtn.classList.remove('hidden');
        resumeBtn.onclick = () => window.open(pd.contact.resumeUrl, '_blank');
    }

    // Socials
    const socialsContainer = document.getElementById('hero-socials');
    const icons = {
        github: 'ph-github-logo',
        linkedin: 'ph-linkedin-logo',
        email: 'ph-envelope-simple',
        kaggle: 'ph-graph',
        tableau: 'ph-chart-line-up'
    };
    
    for (const [key, url] of Object.entries(pd.contact)) {
        if(url && key !== 'resumeUrl') {
            const link = key === 'email' ? `mailto:${url}` : url;
            socialsContainer.innerHTML += `
                <a href="${link}" target="_blank" class="hover:text-accent transition-colors" aria-label="${key}">
                    <i class="ph ${icons[key] || 'ph-link'}"></i>
                </a>
            `;
        }
    }

    // About
    document.getElementById('about-text').innerHTML = pd.about.split('\n\n').map(p => `<p class="mb-4">${p}</p>`).join('');
    document.getElementById('about-highlights').innerHTML = pd.highlights.map(h => `
        <li class="flex items-start">
            <i class="ph ph-caret-right text-accent mt-1 mr-2"></i>
            <span>${h}</span>
        </li>
    `).join('');

    // 2. Populate Skills
    const skillsContainer = document.getElementById('skills-container');
    for (const [category, skillsList] of Object.entries(portfolioData.skills)) {
        skillsContainer.innerHTML += `
            <div class="bg-charcoal p-6 rounded-lg border border-lightNavy hover:border-accent/50 transition-colors">
                <h3 class="text-xl font-semibold text-whiteest mb-4 font-mono">${category}</h3>
                <ul class="space-y-2">
                    ${skillsList.map(skill => `
                        <li class="flex items-center text-sm">
                            <i class="ph ph-check-circle text-accent mr-2"></i>
                            ${skill}
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;
    }

    // 3. Populate Projects
    const projectsContainer = document.getElementById('projects-container');
    const modal = document.getElementById('project-modal');
    const modalContent = document.getElementById('modal-content');
    
    function renderProjects(filter = 'All') {
        projectsContainer.innerHTML = '';
        const filtered = portfolioData.projects.filter(p => filter === 'All' || p.category.includes(filter));
        
        filtered.forEach(p => {
            const card = document.createElement('div');
            card.className = 'project-card bg-charcoal p-6 rounded-lg border border-lightNavy flex flex-col h-full cursor-pointer relative';
            card.innerHTML = `
                <div class="flex justify-between items-start mb-4">
                    <i class="ph ph-folder text-4xl text-accent"></i>
                    <div class="flex gap-3">
                        ${p.github ? `<a href="${p.github}" target="_blank" class="hover:text-accent" onclick="event.stopPropagation()"><i class="ph ph-github-logo text-xl"></i></a>` : ''}
                        ${p.dashboard ? `<a href="${p.dashboard}" target="_blank" class="hover:text-accent" onclick="event.stopPropagation()"><i class="ph ph-arrow-square-out text-xl"></i></a>` : ''}
                    </div>
                </div>
                ${p.isTemplate ? `<span class="absolute top-4 right-16 bg-yellow-500/10 text-yellow-500 text-xs px-2 py-1 rounded border border-yellow-500/30">Template</span>` : ''}
                <h3 class="project-title text-xl font-bold text-whiteest mb-2 transition-colors">${p.title}</h3>
                <p class="text-sm mb-6 flex-grow">${p.objective}</p>
                <div class="flex flex-wrap gap-2 mt-auto pt-4 border-t border-lightNavy/50 font-mono text-xs text-lightSlate">
                    ${p.tools.map(t => `<span>${t}</span>`).join(' <span class="text-slate/50">•</span> ')}
                </div>
            `;
            card.onclick = () => openModal(p);
            projectsContainer.appendChild(card);
        });
    }

    renderProjects();

    // Project Filters
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => {
                b.classList.remove('active', 'bg-accent/10', 'text-accent', 'border-accent');
                b.classList.add('border-lightNavy', 'text-slate');
            });
            e.target.classList.add('active');
            e.target.classList.remove('border-lightNavy', 'text-slate');
            renderProjects(e.target.dataset.filter);
        });
    });

    // Modal Logic
    function openModal(project) {
        modalContent.innerHTML = `
            <div class="mb-6 border-b border-lightNavy pb-4 pr-8">
                ${project.isTemplate ? `<span class="bg-yellow-500/10 text-yellow-500 text-xs px-2 py-1 rounded border border-yellow-500/30 mb-2 inline-block">Training Project Template</span>` : ''}
                <h2 class="text-3xl font-bold text-whiteest mb-2">${project.title}</h2>
                <div class="flex flex-wrap gap-2 font-mono text-xs text-accent">
                    ${project.tools.map(t => `<span>${t}</span>`).join(' • ')}
                </div>
            </div>
            <div class="space-y-4 text-sm">
                <div><h4 class="font-bold text-whiteest">Objective:</h4> <p>${project.objective}</p></div>
                <div><h4 class="font-bold text-whiteest">Dataset:</h4> <p>${project.dataset}</p></div>
                <div><h4 class="font-bold text-whiteest">Preparation Steps:</h4> <p>${project.steps}</p></div>
                <div><h4 class="font-bold text-whiteest">Analysis:</h4> <p>${project.analysis}</p></div>
                <div><h4 class="font-bold text-whiteest">Key Findings:</h4> <p>${project.findings}</p></div>
            </div>
            <div class="mt-8 pt-6 border-t border-lightNavy flex gap-4">
                ${project.github ? `<a href="${project.github}" target="_blank" class="px-4 py-2 border border-accent text-accent rounded hover:bg-accent/10 transition-colors font-mono text-sm"><i class="ph ph-github-logo mr-2"></i>View Code</a>` : ''}
                ${project.dashboard ? `<a href="${project.dashboard}" target="_blank" class="px-4 py-2 bg-accent text-navy font-bold rounded hover:bg-accentDark transition-colors font-mono text-sm"><i class="ph ph-arrow-square-out mr-2"></i>View Dashboard</a>` : ''}
            </div>
        `;
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        document.body.style.overflow = 'hidden';
    }

    document.getElementById('close-modal').onclick = () => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.style.overflow = 'auto';
    };

    modal.onclick = (e) => {
        if(e.target === modal) document.getElementById('close-modal').click();
    };

    // 4. Workflow
    const workflowContainer = document.getElementById('workflow-container');
    portfolioData.workflow.forEach((step, index) => {
        workflowContainer.innerHTML += `
            <div class="relative pl-8 md:pl-12">
                <div class="absolute -left-[5px] top-1 w-3 h-3 bg-accent rounded-full ring-4 ring-navy"></div>
                <h3 class="text-xl font-bold text-whiteest mb-2 flex items-center gap-3">
                    <span class="text-accent font-mono text-sm border border-accent/30 bg-accent/10 px-2 py-0.5 rounded">${step.step}</span>
                    ${step.title}
                </h3>
                <p class="text-sm max-w-2xl">${step.desc}</p>
            </div>
        `;
    });

    // 5. Learning
    document.getElementById('learning-desc').textContent = portfolioData.learning.description;
    document.getElementById('learning-courses').innerHTML = portfolioData.learning.courses.map(c => `<li><i class="ph ph-certificate text-accent mr-2"></i>${c}</li>`).join('');
    document.getElementById('learning-goals').innerHTML = portfolioData.learning.goals.map(g => `<li><i class="ph ph-target text-accent mr-2"></i>${g}</li>`).join('');

    // 6. Mobile Menu
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileBtn.onclick = () => {
        mobileMenu.classList.toggle('hidden');
    };
    mobileMenu.querySelectorAll('a').forEach(a => {
        a.onclick = () => mobileMenu.classList.add('hidden');
    });

    // 7. Contact Form
    const form = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    form.onsubmit = (e) => {
        e.preventDefault();
        formStatus.textContent = "Thank you! Your message configuration is required to actually send emails. (Demo mode)";
        formStatus.classList.remove('hidden', 'text-red-500');
        formStatus.classList.add('text-accent');
        form.reset();
        setTimeout(() => formStatus.classList.add('hidden'), 5000);
    };

    // 8. Analytics Playground (Chart.js)
    try { if (typeof Chart !== 'undefined') initCharts(); } catch (err) { console.error('Charts failed:', err); }
});

function initCharts() {
    Chart.defaults.color = '#8892b0';
    Chart.defaults.font.family = 'Inter, sans-serif';
    Chart.defaults.borderColor = '#233554';

    // Mock Data
    const mockData = {
        q1: {
            revenue: [12000, 15000, 18000],
            categories: [45, 30, 25],
            regions: [35, 25, 20, 20],
            totalRev: '$45,000', vol: '1,245', aov: '$36.14'
        },
        q2: {
            revenue: [17000, 21000, 24000],
            categories: [40, 35, 25],
            regions: [40, 30, 15, 15],
            totalRev: '$62,000', vol: '1,890', aov: '$32.80'
        },
        all: {
            revenue: [12000, 15000, 18000, 17000, 21000, 24000],
            categories: [42, 33, 25],
            regions: [38, 28, 17, 17],
            totalRev: '$107,000', vol: '3,135', aov: '$34.13'
        }
    };

    let currentPeriod = 'all';
    let currentMultiplier = 1;

    // Trend Chart
    const ctxTrend = document.getElementById('trendChart').getContext('2d');
    const trendChart = new Chart(ctxTrend, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Revenue ($)',
                data: mockData.all.revenue,
                borderColor: '#64ffda',
                backgroundColor: 'rgba(100, 255, 218, 0.1)',
                borderWidth: 2,
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: { y: { beginAtZero: true } }
        }
    });

    // Category Chart
    const ctxCat = document.getElementById('categoryChart').getContext('2d');
    const catChart = new Chart(ctxCat, {
        type: 'doughnut',
        data: {
            labels: ['Electronics', 'Clothing', 'Home'],
            datasets: [{
                data: mockData.all.categories,
                backgroundColor: ['#64ffda', '#45b8a0', '#233554'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { position: 'bottom' } },
            cutout: '70%'
        }
    });

    // Region Chart
    const ctxReg = document.getElementById('regionChart').getContext('2d');
    const regChart = new Chart(ctxReg, {
        type: 'bar',
        data: {
            labels: ['North America', 'Europe', 'Asia', 'Rest of World'],
            datasets: [{
                label: 'Sales %',
                data: mockData.all.regions,
                backgroundColor: '#64ffda',
                borderRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: { y: { beginAtZero: true, max: 100 } }
        }
    });

    function updateDashboard() {
        const data = mockData[currentPeriod];
        
        // Update KPIs
        document.getElementById('kpi-revenue').textContent = currentMultiplier === 1 ? data.totalRev : '$' + Math.round(parseInt(data.totalRev.replace(/\D/g, '')) * currentMultiplier).toLocaleString();
        document.getElementById('kpi-volume').textContent = data.vol;
        document.getElementById('kpi-aov').textContent = data.aov;

        // Update Charts
        if (currentPeriod === 'q1') {
            trendChart.data.labels = ['Jan', 'Feb', 'Mar'];
        } else if (currentPeriod === 'q2') {
            trendChart.data.labels = ['Apr', 'May', 'Jun'];
        } else {
            trendChart.data.labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
        }
        
        trendChart.data.datasets[0].data = data.revenue.map(v => v * currentMultiplier);
        trendChart.update();

        catChart.data.datasets[0].data = data.categories;
        catChart.update();

        regChart.data.datasets[0].data = data.regions;
        regChart.update();
    }

    // Initial load
    updateDashboard();

    // Filters
    document.getElementById('chart-date-filter').addEventListener('change', (e) => {
        currentPeriod = e.target.value;
        updateDashboard();
    });
    
    // Category filter mock interaction
    document.getElementById('chart-category-filter').addEventListener('change', (e) => {
        // Just wiggle the data a bit to simulate filtering by category
        currentMultiplier = e.target.value === 'all' ? 1 : 0.4;
        updateDashboard();
    });
}
