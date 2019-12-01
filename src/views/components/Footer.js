import Experiences from './Experiences.js';
import School from './Schools.js';

import { myExperiences, mySchools } from '../../store/Data.js';

const Footer = {
  render: async () => {
    let view = /*html*/ `
            <div class="down">
                <div class="work-education hide">
                    <div class="section work">
                        <h3 class="exph3">Experience</h3>
                        <div id="work" class="all-job ">
                            ${await Experiences.render(myExperiences)} 
                        </div>
                    </div>
                    <div class="section">
                        <h3 class="exph3">Education</h3>
                        <div class="all-skul">
                            ${await School.render(mySchools)}
                        </div>
                    </div>
                </div>
                <div class="footer">
                    <p class="mini"><i class="fas fa-briefcase"></i>  Work/Education  <i class="fas fa-chevron-down"></i></p>
                </div>
            </div>
        `;
    return view;
  },
  events: async () => {
      await Experiences.events();
      await School.events();
      const footerBtn = document.querySelector(".footer");
      const workEdication = document.querySelector(".work-education");
      const mini = document.querySelector(".mini");
      const work = document.querySelector("#work");
      let open = false;
      footerBtn.addEventListener('click', ()=>{
          if(!open){
              open = true;
              workEdication.classList.remove('hide');
              mini.innerHTML = '<p class="mini"><i class="fas fa-briefcase"></i>  Minimize  <i class="fas fa-chevron-up"></i></p>'
              work.scrollIntoView({ behavior: 'smooth', block: 'start'});
          }else {
            open = false;
            workEdication.classList.add('hide');
            mini.innerHTML = '<p class="mini"><i class="fas fa-briefcase"></i>   Work/Education  <i class="fas fa-chevron-dpwn"></i></p>'
          }
      });
  }
};
export default Footer;