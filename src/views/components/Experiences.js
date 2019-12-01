const Experiences = {
  render: async (experiences) => {
    let view = experiences.map((experience) => `
            <div class="job flex-box row">
              <div class="dot-box column">
                  <div class="dot"></div>
                  <div class="line"></div>
              </div>
              <div class="work-detail">
                  <h3><span>${experience.title}</span> / ${experience.time}</h3>
                  <p>${experience.place}</p>
                  <p>${experience.date} </p>
                  <p class="desc">
                      ${experience.desc}
                  </p>
              </div>
          </div>
        `).join(" ");
    return view;
  },
  events: async () => {}
};
export default Experiences;