import Skills from './Skills.js';
import Projects from './Projects.js';

import { mySkills, myInfo,myProjects } from '../../store/Data.js';

import Utils from './../../services/Utils.js';

const Content = {
  render: async () => {
      const request = Utils.getURL();
    let view = /*html*/ `
            <div class="content">
                <div class="names">
                    <div class="mynames">
                        <h1>${myInfo.firstname}</h1>
                        <P>${myInfo.lastname}</P>
                        <p>${myInfo.job}</p>
                    </div>
                    <div class="link-git">
                        <a class="btn" href="${myInfo.linkedin}" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i> Linkedin</a>
                        <a class="btn" href="${myInfo.github}" target="_blank" rel="noopener noreferrer"><i class="fab fa-github-square"></i> Github</a>
                    </div>
                </div>
                <div class="skills">
                    <div class="label"><p>Skills: </p></div>
                    <div class="myskills">
                       ${await Skills.render(mySkills)} 
                    </div>
                </div>
                <div class="portfolio">
                    <div class="arrows">
                        <i class="fas fa-long-arrow-alt-left prev"></i>
                        <h3 class="title">${request.resource === 'about'? 'About': 'Portfolio'}</h3>
                        <i class="fas fa-long-arrow-alt-right next"></i>
                    </div>
                    <div id="projects" class="projects ${request.resource === 'about'? 'hide': ''}">
                        ${await Projects.render(myProjects)}
                    </div>
                    <div id="about" class="about ${request.resource === 'about'? ' ': 'hide'}">
                        <p>${myInfo.about}</p>
                        
                    </div>
                </div>
            </div>
        `;
    return view;
  },
  events: async () => {
      await Skills.events();
      await Projects.events();
      const request = Utils.getURL();
      const projectsContainer = document.querySelector("#projects");
      const prev = document.querySelector(".prev");
      const next = document.querySelector(".next");

      prev.addEventListener('click', ()=> {
        if(request.resource === "/") return;
        Utils.routeTo('/#/');
      });

      next.addEventListener('click', ()=> {
        if(request.resource === "/about") return;
        Utils.routeTo('/#/about');
      });

        let isDown = false;
        let startX;
        let scrollLeft;

        projectsContainer.addEventListener('mousedown', (e) => {
            isDown = true;
            projectsContainer.classList.add('active');
            startX = e.pageX - projectsContainer.offsetLeft;
            scrollLeft = projectsContainer.scrollLeft;
        });
        projectsContainer.addEventListener('mouseleave', () => {
            isDown = false;
            projectsContainer.classList.remove('active');
        });
        projectsContainer.addEventListener('mouseup', () => {
            isDown = false;
            projectsContainer.classList.remove('active');
        });
        projectsContainer.addEventListener('mousemove', (e) => {
            if(!isDown) return;
            e.preventDefault();
            const x = e.pageX - projectsContainer.offsetLeft;
            const walk = (x - startX) * 2; //scroll-fast
            projectsContainer.scrollLeft = scrollLeft - walk;
        });

  }
};
export default Content;