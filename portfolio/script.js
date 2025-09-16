document.addEventListener('DOMContentLoaded', function() {


    const projectsData = {
        '1': {
            title: 'Sistema de Gerenciamento de Alunos (ainda está em andamento)',
            image: 'imagens/imagem1.png', 
            summary: 'Plataforma web completa para professores gerenciarem notas, calcularem XP e acompanharem o ranking de alunos de forma gamificada e intuitiva.',
            challenges: 'O principal desafio técnico está sendo implementar a lógica de cálculo de XP e a atualização automática do ranking sem que a página precisasse ser recarregada. Para resolver isso, utilizei JavaScript (com Fetch API) para enviar os dados para um script PHP que processava as informações, interagia com o banco de dados MySQL e retornava a classificação atualizada, que era então exibida dinamicamente na página.',
            learnings: 'Com este projeto, aprimorei significativamente minhas habilidades em desenvolvimento back-end com PHP e na criação de interações dinâmicas no front-end, conectando as duas pontas de uma aplicação web de forma eficiente.',
            techs: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
            liveLink: '#', 
            repoLink: 'https://github.com/Lucasfaria2024/Projeto-Studio' 
        },
        '2': {
            title: 'Plataforma E-commerce',
            image: 'url_da_imagem_do_projeto_2.jpg', 
            summary: '[Escreva aqui o resumo do seu projeto de e-commerce]',
            challenges: '[Escreva aqui os desafios e soluções do projeto]',
            learnings: '[Escreva aqui o que você aprendeu com o projeto]',
            techs: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
            liveLink: '#',
            repoLink: '#'  
        },
        '3': {
            title: 'Dashboard Analytics',
            image: 'url_da_imagem_do_projeto_3.jpg',
            summary: '[Escreva aqui o resumo do seu dashboard]',
            challenges: '[Escreva aqui os desafios e soluções do projeto]',
            learnings: '[Escreva aqui o que você aprendeu com o projeto]',
            techs: ['HTML', 'CSS', 'JavaScript'],
            liveLink: '#', 
            repoLink: 'https://github.com/Lucasfaria2024/Dashboard-de-Analise'
        }
    };


    const modalOverlay = document.getElementById('project-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const detailButtons = document.querySelectorAll('.btn-project-details');

    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');
    const modalSummary = document.getElementById('modal-summary');
    const modalChallenges = document.getElementById('modal-challenges');
    const modalLearnings = document.getElementById('modal-learnings');
    const modalTechs = document.getElementById('modal-techs');
    const modalLinks = document.getElementById('modal-links');

    function openModal(projectId) {
        const project = projectsData[projectId];
        if (!project) return; 

        modalTitle.textContent = project.title;
        modalImage.src = project.image;
        modalImage.alt = `Imagem do projeto ${project.title}`;
        modalSummary.textContent = project.summary;
        modalChallenges.textContent = project.challenges;
        modalLearnings.textContent = project.learnings;
        
        modalTechs.innerHTML = '';
        project.techs.forEach(tech => {
            const techTag = document.createElement('span');
            techTag.textContent = tech;
            modalTechs.appendChild(techTag);
        });

        modalLinks.innerHTML = `
            <a href="${project.liveLink}" target="_blank" class="btn-project">
              <i class="fas fa-eye"></i> Ver Projeto Online
            </a>
            <a href="${project.repoLink}" target="_blank" class="btn-project-outline">
              <i class="fab fa-github"></i> Ver Código
            </a>
        `;

        modalOverlay.classList.add('visible');
    }

    function closeModal() {
        modalOverlay.classList.remove('visible');
    }

    detailButtons.forEach(button => {
        button.addEventListener('click', () => {
            const projectId = button.dataset.project;
            openModal(projectId);
        });
    });

    modalCloseBtn.addEventListener('click', closeModal);

    modalOverlay.addEventListener('click', (event) => {
        if (event.target === modalOverlay) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modalOverlay.classList.contains('visible')) {
            closeModal();
        }
    });



    const themeToggleButton = document.getElementById('theme-toggle-btn');
    const body = document.body;

    function applyTheme(theme) {
        if (theme === 'light') {
            body.classList.add('light-mode');
            themeToggleButton.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            body.classList.remove('light-mode');
            themeToggleButton.innerHTML = '<i class="fas fa-moon"></i>';
        }
    }

    const savedTheme = localStorage.getItem('theme') || 'dark'; 
    applyTheme(savedTheme);

    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', () => {
            let newTheme;
            if (body.classList.contains('light-mode')) {
                newTheme = 'dark';
            } else {
                newTheme = 'light';
            }
            applyTheme(newTheme);
            localStorage.setItem('theme', newTheme); 
        });
    }

    console.log("Script iniciado. A tentar encontrar o vídeo...");
    const aboutVideo = document.querySelector('#sobre .about-image video');

    if (aboutVideo) {
        console.log("Elemento de vídeo encontrado com sucesso!", aboutVideo);
        aboutVideo.setAttribute('playsinline', '');
        
        const promise = aboutVideo.play();

        if (promise !== undefined) {
            promise.then(() => {
                console.log("O vídeo começou a ser reproduzido automaticamente.");
            }).catch(error => {
                console.error("ERRO: A reprodução automática do vídeo foi bloqueada pelo navegador. Isto é normal e esperado em alguns casos.", error);
                console.warn("Dica: Interagir com a página (clicar em algo) ou usar um servidor local (Live Server no VS Code) pode resolver isto.");
            });
        }
    } else {
        console.error("ERRO CRÍTICO: Não foi possível encontrar o elemento de vídeo na secção '#sobre'. Verifique o HTML.");
    }
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.querySelector('i').classList.toggle('fa-bars');
            menuToggle.querySelector('i').classList.toggle('fa-times');
        });
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    menuToggle.querySelector('i').classList.add('fa-bars');
                    menuToggle.querySelector('i').classList.remove('fa-times');
                }
            });
        });
    }

    const typingElement = document.querySelector('.digitando');
    if (typingElement) {
        const texts = ["Desenvolvedor Web", "Front-end", "Back-end"];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let timeoutId;

        function type() {
            clearTimeout(timeoutId);
            const currentText = texts[textIndex];
            let typeSpeed = isDeleting ? 75 : 150;

            if (isDeleting) {
                typingElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }

            if (!isDeleting && charIndex === currentText.length) {
                isDeleting = true;
                typeSpeed = 2000; 
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                typeSpeed = 500; 
            }
            
            timeoutId = setTimeout(type, typeSpeed);
        }
        type();
    }
        const skillsSection = document.getElementById('tecnologias');
    if (skillsSection) {
        const skillProgressBars = skillsSection.querySelectorAll('.skill-progress');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    skillProgressBars.forEach(bar => {
                        const level = bar.getAttribute('data-level');
                        bar.style.width = level + '%';
                    });
                    observer.unobserve(skillsSection);
                }
            });
        }, { threshold: 0.4 });
        
        observer.observe(skillsSection);
    }
    const carouselTrack = document.querySelector('.carousel-track');
    if (carouselTrack) {
        const slides = Array.from(carouselTrack.children);
        const nextButton = document.querySelector('.next-btn');
        const prevButton = document.querySelector('.prev-btn');
        const indicatorsContainer = document.querySelector('.carousel-indicators');
        let slideWidth = slides.length > 0 ? slides[0].getBoundingClientRect().width : 0;
        let currentIndex = 0;

        if (slides.length > 0) {
            slides.forEach((_, index) => {
                const button = document.createElement('button');
                button.classList.add('indicator');
                if (index === 0) button.classList.add('active');
                button.setAttribute('aria-label', `Ir para o slide ${index + 1}`);
                button.addEventListener('click', () => moveToSlide(index));
                indicatorsContainer.appendChild(button);
            });
            const indicators = Array.from(indicatorsContainer.children);

            const moveToSlide = (targetIndex) => {
                if (slides.length > 0) {
                   carouselTrack.style.transform = 'translateX(-' + slideWidth * targetIndex + 'px)';
                   if(indicators[currentIndex]) indicators[currentIndex].classList.remove('active');
                   if(indicators[targetIndex]) indicators[targetIndex].classList.add('active');
                   currentIndex = targetIndex;
                }
            };

            nextButton.addEventListener('click', () => {
                const nextIndex = (currentIndex + 1) % slides.length;
                moveToSlide(nextIndex);
            });

            prevButton.addEventListener('click', () => {
                const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
                moveToSlide(prevIndex);
            });

            window.addEventListener('resize', () => {
                if (slides.length > 0) {
                   slideWidth = slides[0].getBoundingClientRect().width;
                   moveToSlide(currentIndex);
                }
            });
        }
    }
    const sectionsToFadeIn = document.querySelectorAll('.fade-in-section');

    if (sectionsToFadeIn.length > 0) {
        const sectionObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { 
            rootMargin: '0px 0px -50px 0px' 
        });

        sectionsToFadeIn.forEach(section => {
            sectionObserver.observe(section);
        });
    }

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            try {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            } catch (error) {
                console.error(`Não foi possível encontrar o elemento para o seletor: ${targetId}`);
            }
        });
    });
});

