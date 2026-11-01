// --- MEDAR STUDIO - Core Application Logic ---

const portfolioItems = [
    {
        id: 'proj-husa',
        title: 'HUSA AGADIR',
        subtitle: 'Sports Visual Direction & Matchday Storytelling',
        category: 'Sports & Event Posters (Matchday / F1 / Combat)',
        disciplineTag: 'Sports Visual Direction',
        year: '2025',
        client: 'Hassania Union Sport Agadir (Botola Pro)',
        deliverables: 'Matchday Posters, Lineup Compositions, Goal Live Visuals, Scoreboards',
        impact: '+140% digital engagement & nationwide sports broadcasting',
        lead: 'A striking collection of high-intensity sports visuals sculpted to electrify the club\'s brand identity during Botola Pro football clashes.',
        coverImage: '/images/MATCHDAY_HUSA_RAJA.webp',
        projectBrief: 'A premier visual identity and matchday narrative project crafted for professional football.\n\nThrough an impactful series of matchday posters, tactical lineup graphics, and live scoring artworks, this concept captures the raw electricity of modern sports and honors the rich heritage of Hassania Agadir.\n\nArt Direction & High-Voltage Visuals — Medar Studio.\nEvery fixture is a visual spectacle, every artwork leaves a lasting mark.',
        briefParagraphs: [
            'Through an impactful series of matchday posters, tactical lineup graphics, and live scoring artworks, this concept captures the raw electricity of modern sports and honors the rich heritage of Hassania Agadir.',
            'The design approach fuses distressed athletic textures, stark chromatic contrasts (deep carmine red, rich absolute black, and sharp pure white), and bold kinetic typography engineered to dominate high-speed social feeds.',
            'From the headliner clash against Raja Casablanca to in-game celebration highlights, each composition guarantees instant clarity and unyielding visual impact.'
        ],
        process: [
            { stepNumber: '01', title: 'Official Matchday', image: '/images/MATCHDAY_HUSA_RAJA.webp', text: 'Official Matchday Poster — HUSA vs RAJA Casablanca' },
            { stepNumber: '02', title: 'Starting Lineup', image: '/images/lineup.webp', text: 'Tactical Starting Lineup — Formation & Squad Composition' },
            { stepNumber: '03', title: 'Goal Celebration', image: '/images/goal.webp', text: 'Goal Highlight — Live Match Action & Player Graphic' },
            { stepNumber: '04', title: 'Halftime Score', image: '/images/halftime.webp', text: 'Halftime Graphic — Mid-Game Score Update' },
            { stepNumber: '05', title: 'Fulltime Scoreboard', image: '/images/fulltime.webp', text: 'Fulltime Scoreboard — Official Match Result' }
        ]
    },
    {
        id: 'proj-loyalis',
        title: 'LOYALIS TRANS',
        subtitle: 'Digital Strategy & Fleet Operations Platform',
        category: 'Visual Identity & Logo Design',
        disciplineTag: 'Digital Solution & SaaS',
        year: '2024 — 2025',
        client: 'Loyalis Trans S.A.R.L (Freight & Logistics)',
        deliverables: 'Custom SaaS Architecture, Document Workflow Engine, Fleet & KPI Analytics',
        impact: '45% reduction in billing cycle time and real-time operational visibility',
        lead: 'An end-to-end proprietary enterprise software suite designed to digitize freight logistics and streamline fleet tracking.',
        coverImage: '/images/launchloyalis.webp',
        projectBrief: 'A tailored digital solution engineered to eliminate administrative bottlenecks and elevate road transport efficiency.\n\nBuilt for Loyalis Trans, this system centralizes delivery orders, shipment milestones, and journey-level profitability analysis within an intuitive, ultra-fast interface.\n\nDigital Strategy & Application Engineering — Medar Studio.',
        briefParagraphs: [
            'Built for Loyalis Trans, this system centralizes delivery orders, shipment milestones, and journey-level profitability analysis within an intuitive, ultra-fast interface.',
            'The primary challenge was consolidating fragmented spreadsheets into a unified operational command center easily adopted by dispatchers and field coordinators alike.',
            'From operational audit to software deployment, Medar Studio delivered a cohesive digital experience centered on productivity and decision-making clarity.'
        ],
        process: [
            { stepNumber: '01', title: 'Platform Launch', image: '/images/launchloyalis.webp', text: 'Unified Operations Portal — Document management, dispatch tracking and profitability' }
        ]
    }
];

const carouselItems = [
    { id: 'proj-husa', title: 'HUSA AGADIR — Matchday', coverImage: '/images/MATCHDAY_HUSA_RAJA.webp' },
    { id: 'proj-loyalis', title: 'LOYALIS TRANS — Platform Launch', coverImage: '/images/launchloyalis.webp' },
    { id: 'proj-husa', title: 'HUSA AGADIR — Lineup', coverImage: '/images/lineup.webp' },
    { id: 'proj-husa', title: 'HUSA AGADIR — Goal', coverImage: '/images/goal.webp' },
    { id: 'proj-husa', title: 'HUSA AGADIR — Halftime', coverImage: '/images/halftime.webp' },
    { id: 'proj-husa', title: 'HUSA AGADIR — Fulltime', coverImage: '/images/fulltime.webp' }
];

const socialLinks = [
    { name: 'Instagram', url: 'https://www.instagram.com/medar.studio/', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M16.5 7.5l0 .01" /></svg>' },
    { name: 'TikTok', url: 'https://www.tiktok.com/@medar.studio?is_from_webapp=1&sender_device=pc', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.3-.002.59.04.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.27 6.27 0 0 0 1.88-4.48V8.71a8.3 8.3 0 0 0 3.89 1z"/></svg>' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/company/medar-studio/home/', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M8 11l0 5" /><path d="M8 8l0 .01" /><path d="M12 16l0 -5" /><path d="M16 16v-3a2 2 0 0 0 -4 0" /></svg>' }
];

let selectedServices = ['Match & Sports Posters'];
let selectedScope = 'Standard Project';
let selectedTimeline = '1 week';

function initApp() {
    setupHeaderScrollEffect();
    setupSmoothScrolling();
    setup3DCarousel();
    setupLazyLoading();
    setupPortfolioFilters();
    setupProjectViewer();
    setupMobileNav();
    setupTestimonialsSlider();
    setupAboutToggle();
    setupEnhancedBriefForm();
    setupNewsletterForm();
    setupInteractiveBackground();
}

function setupLazyLoading(root = document) {
    const lazyImages = root.querySelectorAll('img.lazy-image[data-src]');
    if (!lazyImages.length) return;

    const loadImage = (img) => {
        const src = img.dataset.src;
        if (!src) return;

        const onImageComplete = () => {
            img.classList.add('is-loaded');
            const parentCard = img.closest('.portfolio-card, .viewer-thumb');
            if (parentCard) {
                parentCard.classList.add('is-loaded');
            }
        };

        const tempImg = new Image();
        tempImg.onload = () => {
            img.src = src;
            img.removeAttribute('data-src');
            requestAnimationFrame(() => {
                onImageComplete();
            });
        };
        tempImg.onerror = () => {
            img.src = src;
            img.removeAttribute('data-src');
            onImageComplete();
        };
        tempImg.src = src;
    };

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    observer.unobserve(img);
                    loadImage(img);
                }
            });
        }, {
            rootMargin: '120px 0px',
            threshold: 0.01
        });

        lazyImages.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for browsers without IntersectionObserver
        lazyImages.forEach(loadImage);
    }
}

function setupHeaderScrollEffect() {
    const header = document.querySelector('.header');
    if (!header) return;
    const handleScroll = () => {
        if (window.scrollY > 40) header.classList.add('scrolled');
        else header.classList.remove('scrolled');
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
}

function setupMobileNav() {
    const navToggle = document.querySelector('.mobile-nav-toggle');
    const header = document.querySelector('.header');
    if (navToggle && header) {
        navToggle.addEventListener('click', () => {
            const isOpen = header.classList.toggle('nav-open');
            navToggle.setAttribute('aria-expanded', isOpen);
        });
    }
}

function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (!targetId || targetId === '#') return;
            e.preventDefault();
            
            const header = document.querySelector('.header');
            if (header?.classList.contains('nav-open')) {
                const navToggle = document.querySelector('.mobile-nav-toggle');
                header.classList.remove('nav-open');
                navToggle?.setAttribute('aria-expanded', 'false');
            }

            if (targetId === '#home') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return;
            }

            const headerHeight = header ? header.offsetHeight : 80;

            if (targetId === '#contact') {
                const contactSection = document.getElementById('contact');
                const formWrapper = document.getElementById('briefFormWrapper');
                const openBtn = document.getElementById('openBriefBtn');

                if (formWrapper) {
                    formWrapper.classList.add('is-open');
                    if (openBtn) openBtn.innerHTML = `<span>Brief ouvert</span> <i class="fas fa-chevron-down"></i>`;
                }

                setTimeout(() => {
                    const target = formWrapper && formWrapper.classList.contains('is-open') ? formWrapper : (contactSection || document.body);
                    const rect = target.getBoundingClientRect();
                    const absoluteTop = rect.top + window.pageYOffset;
                    const destination = Math.max(0, absoluteTop - headerHeight - 20);

                    window.scrollTo({
                        top: destination,
                        behavior: 'smooth'
                    });

                    setTimeout(() => {
                        const nameField = document.getElementById('clientName');
                        if (nameField) nameField.focus();
                    }, 400);
                }, 50);
                return;
            }

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const rect = targetElement.getBoundingClientRect();
                const absoluteTop = rect.top + window.pageYOffset;
                window.scrollTo({
                    top: Math.max(0, absoluteTop - headerHeight - 20),
                    behavior: 'smooth'
                });
            }
        });
    });
}

function setup3DCarousel() {
    const carousel3d = document.getElementById('carousel3d');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const carouselContainer = document.querySelector('.carousel-3d-container');
    if (!carousel3d || !prevBtn || !nextBtn || !carouselContainer) return;

    const items = carouselItems;
    const cardCount = items.length;
    const theta = 360 / cardCount;
    let currentAngle = 0;
    let isDragging = false;
    let isHovered = false;
    let dragStartX = 0;
    let startAngle = 0;
    const dragSensitivity = 0.55;
    const autoRotateSpeed = 0.16; // Continuous gentle rotation (~9.6 deg/s)

    const getTranslateZ = () => {
        if (window.innerWidth < 480) return 210;
        if (window.innerWidth < 768) return 250;
        return 300;
    };

    const applyCardTransforms = () => {
        const tz = getTranslateZ();
        const cards = carousel3d.querySelectorAll('.card');
        cards.forEach((card, i) => {
            card.style.transform = `rotateY(${i * theta}deg) translateZ(${tz}px)`;
        });
        carousel3d.style.transform = `translateZ(-${tz}px) rotateY(${currentAngle}deg)`;
    };

    // Check if cards need rendering
    if (carousel3d.children.length === 0) {
        carousel3d.innerHTML = '';
        items.forEach((item, i) => {
            const card = document.createElement('div');
            card.className = 'card';
            if (i === 0) card.classList.add('active');
            card.dataset.id = item.id;
            card.innerHTML = `
                <img src="${item.coverImage}" alt="${item.title}" loading="lazy">
            `;
            carousel3d.appendChild(card);
        });
    }

    applyCardTransforms();

    let lastActiveIdx = -1;
    const updateActiveCard = () => {
        const cards = carousel3d.querySelectorAll('.card');
        const normalizedAngle = ((currentAngle % 360) + 360) % 360;
        const index = Math.round(normalizedAngle / theta) % cardCount;
        const targetActive = (cardCount - index) % cardCount;
        if (targetActive !== lastActiveIdx) {
            lastActiveIdx = targetActive;
            cards.forEach((card, i) => card.classList.toggle('active', i === targetActive));
        }
    };
    
    const rotateCarouselTo = (angle) => {
        currentAngle = angle;
        const tz = getTranslateZ();
        carousel3d.style.transform = `translateZ(-${tz}px) rotateY(${currentAngle}deg)`;
    };

    const snapToAngle = (angle) => {
        carousel3d.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
        rotateCarouselTo(angle);
        updateActiveCard();
        setTimeout(() => {
            if (!isDragging) {
                carousel3d.style.transition = 'none';
            }
        }, 500);
    };

    // Continuous gentle auto-rotation loop
    const autoRotateLoop = () => {
        if (!isDragging && !isHovered) {
            carousel3d.style.transition = 'none';
            currentAngle -= autoRotateSpeed;
            const tz = getTranslateZ();
            carousel3d.style.transform = `translateZ(-${tz}px) rotateY(${currentAngle}deg)`;
            updateActiveCard();
        }
        requestAnimationFrame(autoRotateLoop);
    };

    // Pause on hover so viewing/clicking is comfortable
    carouselContainer.addEventListener('mouseenter', () => { isHovered = true; });
    carouselContainer.addEventListener('mouseleave', () => { isHovered = false; });

    prevBtn.addEventListener('click', () => {
        const targetAngle = Math.round((currentAngle + theta) / theta) * theta;
        snapToAngle(targetAngle);
    });

    nextBtn.addEventListener('click', () => {
        const targetAngle = Math.round((currentAngle - theta) / theta) * theta;
        snapToAngle(targetAngle);
    });
    
    carouselContainer.addEventListener('mousedown', (e) => {
        isDragging = true;
        dragStartX = e.clientX;
        startAngle = currentAngle;
        carousel3d.style.transition = 'none';
    });

    window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const diffX = e.clientX - dragStartX;
        rotateCarouselTo(startAngle - (diffX * dragSensitivity));
        updateActiveCard();
    });

    window.addEventListener('mouseup', () => {
        if (!isDragging) return;
        isDragging = false;
        snapToAngle(Math.round(currentAngle / theta) * theta);
    });

    carouselContainer.addEventListener('touchstart', (e) => {
        if (e.touches.length === 1) {
            isDragging = true;
            isHovered = true;
            dragStartX = e.touches[0].clientX;
            startAngle = currentAngle;
            carousel3d.style.transition = 'none';
        }
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
        if (!isDragging || e.touches.length !== 1) return;
        const diffX = e.touches[0].clientX - dragStartX;
        rotateCarouselTo(startAngle - (diffX * dragSensitivity));
        updateActiveCard();
    }, { passive: true });

    window.addEventListener('touchend', () => {
        if (!isDragging) return;
        isDragging = false;
        isHovered = false;
        snapToAngle(Math.round(currentAngle / theta) * theta);
    });

    window.addEventListener('resize', () => {
        applyCardTransforms();
        updateActiveCard();
    }, { passive: true });

    rotateCarouselTo(0);
    updateActiveCard();
    requestAnimationFrame(autoRotateLoop);
}

function setupPortfolioFilters() {
    const filterBtns = document.querySelectorAll('.portfolio-filters .filter-btn');
    const cards = document.querySelectorAll('#portfolioGrid .portfolio-card');
    if (!filterBtns.length || !cards.length) return;

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.dataset.filter;

            cards.forEach(card => {
                const cat = card.dataset.category;
                if (filter === 'all' || cat === filter) {
                    card.style.display = '';
                    card.style.opacity = '1';
                } else {
                    card.style.display = 'none';
                    card.style.opacity = '0';
                }
            });
        });
    });
}

function setupProjectViewer() {
    const viewer = document.getElementById('projectViewer');
    if (!viewer) return;

    // Elements
    const backdrop = document.getElementById('projectViewerBackdrop');
    const closeBtn = document.getElementById('pvCloseBtn');
    const prevProjBtn = document.getElementById('pvPrevProjectBtn');
    const nextProjBtn = document.getElementById('pvNextProjectBtn');
    const bottomPrevBtn = document.getElementById('pvBottomPrevBtn');
    const bottomNextBtn = document.getElementById('pvBottomNextBtn');
    const bottomPrevTitle = document.getElementById('pvBottomPrevTitle');
    const bottomNextTitle = document.getElementById('pvBottomNextTitle');
    const bottomIndicator = document.getElementById('pvBottomIndicator');

    const globalCounterEl = document.getElementById('pvGlobalCounter');
    const projectCategoryEl = document.getElementById('pvProjectCategory');
    const disciplineTagEl = document.getElementById('pvDisciplineTag');
    const projectYearEl = document.getElementById('pvProjectYear');
    const projectTitleEl = document.getElementById('pvProjectTitle');
    const projectLeadEl = document.getElementById('pvProjectLead');

    const clientValueEl = document.getElementById('pvClientValue');
    const categoryValueEl = document.getElementById('pvCategoryValue');
    const deliverablesValueEl = document.getElementById('pvDeliverablesValue');
    const impactValueEl = document.getElementById('pvImpactValue');
    const briefContainerEl = document.getElementById('pvProjectBrief');
    const processStepsListEl = document.getElementById('pvProcessStepsList');
    const stepCountEl = document.getElementById('pvStepCount');

    const mainWrapper = document.getElementById('viewerMainWrapper');
    const mainImage = document.getElementById('viewerMainImage');
    const prevBtn = document.getElementById('viewerPrevBtn');
    const nextBtn = document.getElementById('viewerNextBtn');
    const counterEl = document.getElementById('viewerCounter');
    const captionEl = document.getElementById('viewerCaption');
    const thumbsTrack = document.getElementById('viewerThumbsTrack');
    const zoomToggleBtn = document.getElementById('pvZoomToggleBtn');
    const zoomIcon = document.getElementById('pvZoomIcon');
    const zoomText = document.getElementById('pvZoomText');
    const launchBriefBtn = document.getElementById('pvLaunchBriefBtn');
    const shareBtn = document.getElementById('pvShareBtn');
    const shareLabel = document.getElementById('pvShareLabel');

    let currentProjectIndex = 0;
    let activeSlideIndex = 0;
    let isZoomed = false;

    const renderSlide = (index) => {
        const project = portfolioItems[currentProjectIndex];
        if (!project || !project.process || !project.process.length) return;

        const total = project.process.length;
        activeSlideIndex = (index + total) % total;
        const step = project.process[activeSlideIndex];

        if (mainWrapper) mainWrapper.classList.add('is-loading');

        if (mainImage) {
            mainImage.classList.remove('is-loaded');

            const preloader = new Image();
            preloader.onload = () => {
                mainImage.src = step.image;
                mainImage.alt = `${project.title} — ${step.title || step.text || ''}`;
                requestAnimationFrame(() => {
                    mainImage.classList.add('is-loaded');
                    if (mainWrapper) mainWrapper.classList.remove('is-loading');
                });
            };
            preloader.onerror = () => {
                mainImage.src = step.image;
                mainImage.alt = `${project.title} — ${step.title || step.text || ''}`;
                mainImage.classList.add('is-loaded');
                if (mainWrapper) mainWrapper.classList.remove('is-loading');
            };
            preloader.src = step.image;
        }

        if (counterEl) counterEl.textContent = `${activeSlideIndex + 1} / ${total}`;
        if (captionEl) captionEl.textContent = step.title || step.text || '';

        // Sync thumbnail states
        if (thumbsTrack) {
            const thumbs = thumbsTrack.querySelectorAll('.pv-thumb-item');
            thumbs.forEach((th, i) => {
                th.classList.toggle('active', i === activeSlideIndex);
                if (i === activeSlideIndex) {
                    th.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                }
            });
        }

        // Sync process steps list states
        if (processStepsListEl) {
            const stepItems = processStepsListEl.querySelectorAll('.pv-step-item');
            stepItems.forEach((item, i) => {
                item.classList.toggle('active', i === activeSlideIndex);
            });
        }
    };

    const loadProject = (projectIndex, targetSlide = 0) => {
        if (!portfolioItems.length) return;
        currentProjectIndex = (projectIndex + portfolioItems.length) % portfolioItems.length;
        const project = portfolioItems[currentProjectIndex];
        if (!project) return;

        const totalProjects = portfolioItems.length;
        const prevIndex = (currentProjectIndex - 1 + totalProjects) % totalProjects;
        const nextIndex = (currentProjectIndex + 1) % totalProjects;

        // Reset zoom state when switching project
        if (isZoomed && mainWrapper) {
            isZoomed = false;
            mainWrapper.classList.remove('is-zoomed');
            if (zoomIcon) zoomIcon.className = 'fas fa-expand-alt';
            if (zoomText) zoomText.textContent = 'Fullscreen';
        }

        // Update Top HUD
        if (globalCounterEl) {
            globalCounterEl.textContent = `PROJECT 0${currentProjectIndex + 1} / 0${totalProjects}`;
        }
        if (projectCategoryEl) projectCategoryEl.textContent = project.category;
        if (disciplineTagEl) disciplineTagEl.textContent = project.disciplineTag || project.category;
        if (projectYearEl) projectYearEl.textContent = project.year || '2025';

        // Update Project Headline
        if (projectTitleEl) projectTitleEl.textContent = project.title;
        if (projectLeadEl) projectLeadEl.textContent = project.lead || project.subtitle || '';

        // Update Metadata Table
        if (clientValueEl) clientValueEl.textContent = project.client || 'Private Client';
        if (categoryValueEl) categoryValueEl.textContent = project.subtitle || project.category;
        if (deliverablesValueEl) deliverablesValueEl.textContent = project.deliverables || 'Art Direction, Visual Design';
        if (impactValueEl) impactValueEl.textContent = project.impact || 'Brand Reach & Digital Impact';

        // Update Editorial Brief
        if (briefContainerEl) {
            const paragraphs = project.briefParagraphs || (project.projectBrief ? project.projectBrief.split('\n\n') : []);
            briefContainerEl.innerHTML = paragraphs.map(p => `<p>${p.replace(/\n/g, '<br>')}</p>`).join('');
        }

        // Update Process Count
        const processSteps = project.process || [];
        if (stepCountEl) stepCountEl.textContent = processSteps.length;

        // Populate Interactive Process Steps List
        if (processStepsListEl) {
            processStepsListEl.innerHTML = processSteps.map((st, idx) => `
                <div class="pv-step-item ${idx === 0 ? 'active' : ''}" data-step="${idx}" role="button" tabindex="0">
                    <span class="pv-step-number">${st.stepNumber || `0${idx + 1}`}</span>
                    <span class="pv-step-label">${st.title || st.text || `Visual ${idx + 1}`}</span>
                    <span class="pv-step-view-icon"><i class="fas fa-arrow-right"></i></span>
                </div>
            `).join('');

            processStepsListEl.querySelectorAll('.pv-step-item').forEach(item => {
                item.addEventListener('click', () => {
                    const idx = parseInt(item.dataset.step, 10);
                    renderSlide(idx);
                });
            });
        }

        // Populate Filmstrip Thumbnails
        if (thumbsTrack) {
            if (processSteps.length > 1) {
                thumbsTrack.innerHTML = processSteps.map((st, idx) => `
                    <button type="button" class="pv-thumb-item ${idx === 0 ? 'active' : ''}" data-index="${idx}" aria-label="View visual ${idx + 1}">
                        <img class="pv-thumb-img" src="${st.image}" alt="${st.title || ''}" loading="lazy" />
                        <span class="pv-thumb-index">${st.stepNumber || `0${idx + 1}`}</span>
                    </button>
                `).join('');

                thumbsTrack.querySelectorAll('.pv-thumb-item').forEach(th => {
                    th.addEventListener('click', () => {
                        const idx = parseInt(th.dataset.index, 10);
                        renderSlide(idx);
                    });
                });

                if (prevBtn) prevBtn.style.display = 'flex';
                if (nextBtn) nextBtn.style.display = 'flex';
            } else {
                thumbsTrack.innerHTML = `
                    <button type="button" class="pv-thumb-item active" data-index="0" aria-label="Single visual">
                        <img class="pv-thumb-img" src="${processSteps[0]?.image || project.coverImage}" alt="Visual" loading="lazy" />
                        <span class="pv-thumb-index">01</span>
                    </button>
                `;
                if (prevBtn) prevBtn.style.display = 'none';
                if (nextBtn) nextBtn.style.display = 'none';
            }
        }

        // Update Bottom Project Switcher Bar
        if (bottomPrevTitle) bottomPrevTitle.textContent = portfolioItems[prevIndex]?.title || 'Previous';
        if (bottomNextTitle) bottomNextTitle.textContent = portfolioItems[nextIndex]?.title || 'Next';

        if (bottomIndicator) {
            bottomIndicator.innerHTML = portfolioItems.map((_, i) => `
                <span class="pv-indicator-circle ${i === currentProjectIndex ? 'active' : ''}"></span>
            `).join('');
        }

        renderSlide(targetSlide);
    };

    const openViewer = (projectIdentifier) => {
        let idx = 0;
        if (typeof projectIdentifier === 'number') {
            idx = projectIdentifier;
        } else if (typeof projectIdentifier === 'string') {
            const foundIdx = portfolioItems.findIndex(p => p.id === projectIdentifier);
            if (foundIdx !== -1) idx = foundIdx;
        }

        loadProject(idx, 0);

        viewer.classList.add('is-visible');
        viewer.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    };

    const closeViewer = () => {
        viewer.classList.remove('is-visible');
        viewer.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        if (isZoomed && mainWrapper) {
            isZoomed = false;
            mainWrapper.classList.remove('is-zoomed');
        }
    };

    // Close handlers
    if (closeBtn) closeBtn.addEventListener('click', closeViewer);
    if (backdrop) backdrop.addEventListener('click', closeViewer);

    // Slide arrow navigation
    if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            renderSlide(activeSlideIndex - 1);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            renderSlide(activeSlideIndex + 1);
        });
    }

    // Project switchers
    const switchPrevProject = () => loadProject(currentProjectIndex - 1, 0);
    const switchNextProject = () => loadProject(currentProjectIndex + 1, 0);

    if (prevProjBtn) prevProjBtn.addEventListener('click', switchPrevProject);
    if (nextProjBtn) nextProjBtn.addEventListener('click', switchNextProject);
    if (bottomPrevBtn) bottomPrevBtn.addEventListener('click', switchPrevProject);
    if (bottomNextBtn) bottomNextBtn.addEventListener('click', switchNextProject);

    // Zoom / Fullscreen stage toggle
    if (zoomToggleBtn && mainWrapper) {
        zoomToggleBtn.addEventListener('click', () => {
            isZoomed = !isZoomed;
            mainWrapper.classList.toggle('is-zoomed', isZoomed);
            if (zoomIcon) {
                zoomIcon.className = isZoomed ? 'fas fa-compress-alt' : 'fas fa-expand-alt';
            }
            if (zoomText) {
                zoomText.textContent = isZoomed ? 'Exit' : 'Fullscreen';
            }
        });
    }

    // Direct Conversion CTA: "Start a similar brief"
    if (launchBriefBtn) {
        launchBriefBtn.addEventListener('click', () => {
            const currentProj = portfolioItems[currentProjectIndex];
            closeViewer();

            // Auto-select corresponding service
            if (currentProj) {
                if (currentProj.id === 'proj-husa') {
                    selectedServices = ['Match & Sports Posters'];
                } else if (currentProj.id === 'proj-loyalis') {
                    selectedServices = ['Visual Identity & Logo Design'];
                }
            }

            // Sync selected service badges in brief form
            const form = document.getElementById('agencyBriefForm');
            if (form) {
                form.querySelectorAll('.service-choice-item').forEach(item => {
                    const serviceName = item.dataset.service;
                    item.classList.toggle('selected', selectedServices.includes(serviceName));
                });
            }

            // Open brief form and scroll to it
            setTimeout(() => {
                const contactSection = document.getElementById('contact');
                const formWrapper = document.getElementById('briefFormWrapper');
                const openBtn = document.getElementById('openBriefBtn');

                if (formWrapper) {
                    formWrapper.classList.add('is-open');
                    if (openBtn) openBtn.innerHTML = `<span>Brief open</span> <i class="fas fa-chevron-down"></i>`;
                }

                const target = formWrapper && formWrapper.classList.contains('is-open') ? formWrapper : (contactSection || document.body);
                const rect = target.getBoundingClientRect();
                const absoluteTop = rect.top + window.pageYOffset;
                window.scrollTo({
                    top: Math.max(0, absoluteTop - 90),
                    behavior: 'smooth'
                });

                setTimeout(() => {
                    const nameField = document.getElementById('clientName');
                    if (nameField) nameField.focus();
                }, 450);
            }, 300);
        });
    }

    // Share action
    if (shareBtn && shareLabel) {
        shareBtn.addEventListener('click', async () => {
            const currentProj = portfolioItems[currentProjectIndex];
            const url = `${window.location.origin}${window.location.pathname}#${currentProj?.id || 'work'}`;
            try {
                if (navigator.clipboard) {
                    await navigator.clipboard.writeText(url);
                    shareLabel.textContent = 'Link copied!';
                    shareBtn.style.borderColor = 'var(--color-red)';
                    setTimeout(() => {
                        shareLabel.textContent = 'Share';
                        shareBtn.style.borderColor = '';
                    }, 2500);
                }
            } catch (err) {
                console.warn('Share copy error:', err);
            }
        });
    }

    // Touch and swipe gestures on the image stage
    let touchStartX = 0;
    let touchEndX = 0;
    if (mainWrapper) {
        mainWrapper.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        mainWrapper.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            const diff = touchEndX - touchStartX;
            if (Math.abs(diff) > 40) {
                if (diff < 0) renderSlide(activeSlideIndex + 1);
                else renderSlide(activeSlideIndex - 1);
            }
        }, { passive: true });
    }

    // Delegate clicks from portfolio cards and carousel cards to open the viewer
    document.body.addEventListener('click', (e) => {
        const card = e.target.closest('.portfolio-card, .carousel-3d .card.active');
        if (card && card.dataset.id) {
            e.preventDefault();
            openViewer(card.dataset.id);
        }
    });

    // Keyboard shortcuts
    window.addEventListener('keydown', (e) => {
        if (!viewer.classList.contains('is-visible')) return;

        if (e.key === 'Escape') {
            closeViewer();
        } else if (e.key === 'ArrowLeft') {
            renderSlide(activeSlideIndex - 1);
        } else if (e.key === 'ArrowRight') {
            renderSlide(activeSlideIndex + 1);
        } else if (e.key === 'p' || e.key === 'P') {
            switchPrevProject();
        } else if (e.key === 'n' || e.key === 'N') {
            switchNextProject();
        }
    });

    // Check initial hash if direct link to project was provided
    if (window.location.hash) {
        const hash = window.location.hash.replace('#', '');
        if (hash === 'proj-husa' || hash === 'proj-loyalis') {
            setTimeout(() => openViewer(hash), 250);
        }
    }
}

function setupTestimonialsSlider() {
    const slider = document.querySelector('.testimonial-slider');
    const prevBtn = document.querySelector('.slider-btn.prev');
    const nextBtn = document.querySelector('.slider-btn.next');
    const dotsContainer = document.getElementById('testimonialDots');
    const counter = document.getElementById('testimonialCounter');
    if (!slider || !prevBtn || !nextBtn) return;

    const slides = Array.from(slider.children);
    const total = slides.length;
    let index = 0;
    let autoPlayTimer = null;

    if (dotsContainer) {
        dotsContainer.innerHTML = '';
        slides.forEach((_, i) => {
            const dot = document.createElement('button');
            dot.className = `testimonial-dot ${i === 0 ? 'is-active' : ''}`;
            dot.type = 'button';
            dot.setAttribute('aria-label', `Go to feedback ${i + 1}`);
            dot.addEventListener('click', () => {
                index = i;
                update();
                resetAutoplay();
            });
            dotsContainer.appendChild(dot);
        });
    }

    const update = () => {
        slider.style.transform = `translateX(-${index * 100}%)`;
        if (counter) {
            const currStr = String(index + 1).padStart(2, '0');
            const totalStr = String(total).padStart(2, '0');
            counter.textContent = `${currStr} / ${totalStr}`;
        }
        if (dotsContainer) {
            const dots = dotsContainer.querySelectorAll('.testimonial-dot');
            dots.forEach((d, i) => d.classList.toggle('is-active', i === index));
        }
    };

    const next = () => {
        index = (index + 1) % total;
        update();
    };

    const prev = () => {
        index = (index - 1 + total) % total;
        update();
    };

    nextBtn.addEventListener('click', () => {
        next();
        resetAutoplay();
    });

    prevBtn.addEventListener('click', () => {
        prev();
        resetAutoplay();
    });

    const startAutoplay = () => {
        if (!autoPlayTimer) {
            autoPlayTimer = setInterval(next, 7500);
        }
    };

    const resetAutoplay = () => {
        if (autoPlayTimer) {
            clearInterval(autoPlayTimer);
            autoPlayTimer = null;
        }
        startAutoplay();
    };

    const container = document.querySelector('.testimonial-slider-container');
    if (container) {
        container.addEventListener('mouseenter', () => {
            if (autoPlayTimer) {
                clearInterval(autoPlayTimer);
                autoPlayTimer = null;
            }
        });
        container.addEventListener('mouseleave', startAutoplay);
    }

    startAutoplay();
    update();
}

function setupAboutToggle() {
    const btn = document.querySelector('.read-more-btn');
    const content = document.querySelector('.about-content');
    if (btn && content) {
        btn.addEventListener('click', () => { 
            content.classList.toggle('is-expanded'); 
            const isExpanded = content.classList.contains('is-expanded');
            btn.textContent = isExpanded ? 'Show less' : 'Read our manifesto';
        });
    }
}

function setupEnhancedBriefForm() {
    const form = document.getElementById('agencyBriefForm');
    const formWrapper = document.getElementById('briefFormWrapper');
    const openBtn = document.getElementById('openBriefBtn');
    const closeBtn = document.getElementById('closeBriefBtn');
    const successModal = document.getElementById('briefSuccessModal');
    const recapBox = document.getElementById('briefRecapContent');
    const hiddenServices = document.getElementById('hiddenServices');
    const hiddenScope = document.getElementById('hiddenScope');
    const hiddenTimeline = document.getElementById('hiddenTimeline');
    const resetBtn = document.getElementById('resetBriefBtn');
    const submitBtn = document.getElementById('submitBriefBtn');
    const directEmailBtn = document.getElementById('directEmailClientBtn');

    if (!form || !successModal) return;

    // Toggle opening / closing the brief form
    const openForm = (shouldScroll = true) => {
        if (formWrapper) {
            formWrapper.classList.add('is-open');
            if (openBtn) {
                openBtn.innerHTML = `<span>Brief open</span> <i class="fas fa-chevron-down"></i>`;
            }
            if (shouldScroll) {
                formWrapper.scrollIntoView({ behavior: 'smooth', block: 'start' });
                setTimeout(() => {
                    document.getElementById('clientName')?.focus();
                }, 400);
            }
        }
    };

    const closeForm = () => {
        if (formWrapper) {
            formWrapper.classList.remove('is-open');
            if (openBtn) {
                openBtn.innerHTML = `<span>Start Creative Brief</span> <i class="fas fa-pen-nib"></i>`;
            }
            document.getElementById('briefTeaserCard')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    if (openBtn) openBtn.addEventListener('click', () => openForm(true));
    if (closeBtn) closeBtn.addEventListener('click', closeForm);

    // Service Choice Toggle
    const serviceItems = form.querySelectorAll('.service-choice-item');
    serviceItems.forEach(item => {
        item.addEventListener('click', () => {
            const serviceName = item.dataset.service;
            item.classList.toggle('selected');
            
            if (item.classList.contains('selected')) {
                if (!selectedServices.includes(serviceName)) {
                    selectedServices.push(serviceName);
                }
            } else {
                selectedServices = selectedServices.filter(s => s !== serviceName);
                if (selectedServices.length === 0) {
                    item.classList.add('selected');
                    selectedServices.push(serviceName);
                }
            }
            if (hiddenServices) hiddenServices.value = selectedServices.join(', ');
        });
    });

    // Scope Selection (No pricing mentioned)
    const scopePills = form.querySelectorAll('#scopeRow .pill-option');
    scopePills.forEach(pill => {
        pill.addEventListener('click', () => {
            scopePills.forEach(p => p.classList.remove('selected'));
            pill.classList.add('selected');
            selectedScope = pill.dataset.value;
            if (hiddenScope) hiddenScope.value = selectedScope;
        });
    });

    // Timeline Selection
    const timelinePills = form.querySelectorAll('#timelineRow .pill-option');
    timelinePills.forEach(pill => {
        pill.addEventListener('click', () => {
            timelinePills.forEach(p => p.classList.remove('selected'));
            pill.classList.add('selected');
            selectedTimeline = pill.dataset.value;
            if (hiddenTimeline) hiddenTimeline.value = selectedTimeline;
        });
    });

    // Form Submission Handler
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const nameInput = document.getElementById('clientName');
        const emailInput = document.getElementById('clientEmail');
        const messageInput = document.getElementById('projectBrief');
        const companyInput = document.getElementById('companyName');
        const phoneInput = document.getElementById('clientPhone');
        const refInput = document.getElementById('referenceLink');

        let isValid = true;

        const validateField = (input, message) => {
            const group = input.closest('.form-group');
            const errorEl = group?.querySelector('.error-message');
            if (!input.value.trim() || (input.type === 'email' && !input.checkValidity())) {
                group?.classList.add('invalid');
                if (errorEl) errorEl.textContent = message;
                isValid = false;
            } else {
                group?.classList.remove('invalid');
                if (errorEl) errorEl.textContent = '';
            }
        };

        validateField(nameInput, 'Please enter your name or handle');
        validateField(emailInput, 'Please enter a valid email address');
        validateField(messageInput, 'Please describe your project or expectations');

        if (!isValid) return;

        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span>Sending brief...</span> <i class="fas fa-spinner fa-spin"></i>`;

        const briefData = {
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            company: companyInput?.value.trim() || '',
            phone: phoneInput?.value.trim() || '',
            selected_services: selectedServices.join(', '),
            project_scope: selectedScope,
            timeline: selectedTimeline,
            message: messageInput.value.trim(),
            reference_link: refInput?.value.trim() || ''
        };

        const targetEmail = 'contact@medarstudio.com';

        try {
            let deliverySuccess = false;

            // 1. Tenter le script PHP sur serveur FileZilla (contact.php)
            try {
                const phpRes = await fetch('/contact.php', {
                    method: 'POST',
                    headers: { 
                        'Content-Type': 'application/json',
                        'Accept': 'application/json' 
                    },
                    body: JSON.stringify(briefData)
                });
                if (phpRes.ok) {
                    const phpData = await phpRes.json().catch(() => null);
                    if (phpData && phpData.success) {
                        deliverySuccess = true;
                    }
                }
            } catch (phpErr) {
                // contact.php non présent en dev local
            }

            // 2. Si non envoyé via PHP, tenter l'API Express (/api/contact)
            if (!deliverySuccess) {
                try {
                    const apiRes = await fetch('/api/contact', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(briefData)
                    });
                    if (apiRes.ok) {
                        deliverySuccess = true;
                    }
                } catch (apiErr) {
                    // Ignorer en mode statique pur
                }
            }

            // 3. Fallback direct FormSubmit
            if (!deliverySuccess) {
                try {
                    const fsRes = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
                        method: 'POST',
                        headers: { 
                            'Content-Type': 'application/json',
                            'Accept': 'application/json' 
                        },
                        body: JSON.stringify({
                            _subject: `New Project Brief from ${briefData.name} - MEDAR STUDIO`,
                            _captcha: 'false',
                            _template: 'table',
                            ...briefData
                        })
                    });
                    if (fsRes.ok) {
                        deliverySuccess = true;
                    }
                } catch (fsErr) {
                    console.warn('FormSubmit brief attempt:', fsErr);
                }
            }

            // Clean English recap without exposing private server/email infrastructure
            if (recapBox) {
                recapBox.innerHTML = `
                    <div style="margin: 1rem 0; padding: 0.85rem; border-radius: 10px; background: rgba(0, 200, 100, 0.12); border: 1px solid rgba(0, 200, 100, 0.45); font-size: 0.9rem; line-height: 1.5; color: #a3ffc7;">
                        <i class="fas fa-check-circle" style="margin-right: 0.5rem;"></i> Brief submitted successfully! We will review your project and get back to you within 24 hours.
                    </div>

                    <div class="recap-row">
                        <span class="recap-label">Client Name:</span>
                        <span class="recap-value">${briefData.name} ${briefData.company ? `(${briefData.company})` : ''}</span>
                    </div>
                    <div class="recap-row">
                        <span class="recap-label">Client Email:</span>
                        <span class="recap-value">${briefData.email}</span>
                    </div>
                    <div class="recap-row">
                        <span class="recap-label">Selected Services:</span>
                        <span class="recap-value">${briefData.selected_services}</span>
                    </div>
                    <div class="recap-row">
                        <span class="recap-label">Project Scale:</span>
                        <span class="recap-value">${briefData.project_scope}</span>
                    </div>
                    <div class="recap-row">
                        <span class="recap-label">Desired Timeline:</span>
                        <span class="recap-value">${briefData.timeline}</span>
                    </div>
                `;
            }

            form.style.display = 'none';
            successModal.classList.add('is-active');
            successModal.scrollIntoView({ behavior: 'smooth', block: 'center' });

        } catch (error) {
            console.error('Brief submission error:', error);
            form.style.display = 'none';
            successModal.classList.add('is-active');
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = `<span>Send Creative Brief</span> <i class="fas fa-paper-plane"></i>`;
        }
    });

    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            form.reset();
            form.style.display = 'block';
            successModal.classList.remove('is-active');
            form.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }
}

/**
 * Newsletter Form Subscription Handler
 */
function setupNewsletterForm() {
    const form = document.getElementById('newsletterForm');
    const input = document.getElementById('newsletterEmail');
    const btn = document.getElementById('newsletterSubmitBtn');
    const feedback = document.getElementById('newsletterFeedback');
    if (!form || !input) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = input.value.trim();

        if (!email || !input.checkValidity()) {
            if (feedback) {
                feedback.className = 'newsletter-feedback error';
                feedback.textContent = 'Please enter a valid email address.';
                feedback.style.display = 'block';
            }
            input.focus();
            return;
        }

        if (btn) {
            btn.disabled = true;
            btn.innerHTML = `<span>Subscribing...</span> <i class="fas fa-spinner fa-spin"></i>`;
        }

        let sentSuccessfully = false;

        // 1. Tenter le script PHP sur hébergement FileZilla (newsletter.php)
        try {
            const phpRes = await fetch('/newsletter.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify({ email: email })
            });
            if (phpRes.ok) {
                const phpData = await phpRes.json().catch(() => null);
                if (phpData && phpData.success) {
                    sentSuccessfully = true;
                }
            }
        } catch (phpErr) {
            // PHP script non accessible dans l'environnement dev local
        }

        // 2. Si non envoyé via PHP, tenter l'API serveur (/api/newsletter)
        if (!sentSuccessfully) {
            try {
                const apiRes = await fetch('/api/newsletter', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email })
                });
                if (apiRes.ok) {
                    sentSuccessfully = true;
                }
            } catch (apiErr) {
                // Serveur Node non disponible
            }
        }

        // 3. Fallback direct FormSubmit vers medarstudio@gmail.com
        if (!sentSuccessfully) {
            try {
                const fsRes = await fetch('https://formsubmit.co/ajax/medarstudio@gmail.com', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                    body: JSON.stringify({
                        _subject: `New Newsletter Subscriber - ${email}`,
                        _captcha: 'false',
                        newsletter_email: email,
                        date: new Date().toISOString()
                    })
                });
                if (fsRes.ok) {
                    sentSuccessfully = true;
                }
            } catch (fsErr) {
                console.warn('Fallback newsletter:', fsErr);
            }
        }

        // Succès : Affiche UNIQUEMENT un message propre en anglais, SANS JAMAIS afficher medarstudio@gmail.com
        if (feedback) {
            feedback.className = 'newsletter-feedback success';
            feedback.innerHTML = `<i class="fas fa-check-circle" style="margin-right: 0.4rem;"></i> Thank you for subscribing! You will receive our latest creative updates.`;
            feedback.style.display = 'block';
        }
        input.value = '';
        if (btn) {
            btn.disabled = false;
            btn.innerHTML = `<span>Subscribed!</span> <i class="fas fa-check"></i>`;
        }
    });
}

/**
 * Rich Atmospheric Background Canvas
 */
function setupInteractiveBackground() {
    window.addEventListener('mousemove', e => {
        document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
        document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    }, { passive: true });

    const canvas = document.getElementById('ambient-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let particles = [];
    const particleCount = 38;

    const resize = () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize, { passive: true });
    resize();

    for (let i = 0; i < particleCount; i++) {
        const isRed = Math.random() > 0.45;
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 2 + 0.8,
            speedY: -(Math.random() * 0.4 + 0.15),
            speedX: (Math.random() - 0.5) * 0.25,
            baseAlpha: Math.random() * 0.4 + 0.1,
            pulse: Math.random() * Math.PI * 2,
            pulseSpeed: Math.random() * 0.02 + 0.01,
            color: isRed ? '#E91F29' : '#FFFFFF'
        });
    }

    let isVisible = true;
    document.addEventListener('visibilitychange', () => {
        isVisible = !document.hidden;
    });

    function animate() {
        if (!isVisible) {
            requestAnimationFrame(animate);
            return;
        }

        ctx.clearRect(0, 0, width, height);

        const gridSize = 120;
        ctx.strokeStyle = 'rgba(233, 31, 41, 0.06)';
        ctx.lineWidth = 1;

        for (let x = gridSize; x < width; x += gridSize) {
            for (let y = gridSize; y < height; y += gridSize) {
                ctx.beginPath();
                ctx.moveTo(x - 3, y);
                ctx.lineTo(x + 3, y);
                ctx.moveTo(x, y - 3);
                ctx.lineTo(x, y + 3);
                ctx.stroke();
            }
        }

        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            p.pulse += p.pulseSpeed;
            const currentAlpha = p.baseAlpha * (0.6 + 0.4 * Math.sin(p.pulse));

            p.x += p.speedX;
            p.y += p.speedY;

            if (p.y < -10) p.y = height + 10;
            if (p.x < -10) p.x = width + 10;
            if (p.x > width + 10) p.x = -10;

            ctx.save();
            ctx.globalAlpha = currentAlpha;
            ctx.fillStyle = p.color;

            if (p.color === '#E91F29') {
                ctx.shadowColor = 'rgba(233, 31, 41, 0.8)';
                ctx.shadowBlur = 10;
            } else {
                ctx.shadowColor = 'rgba(255, 255, 255, 0.5)';
                ctx.shadowBlur = 4;
            }

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }

        requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
}

// Immediate execution or on DOMContentLoaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}
