const Projects = {
  render: async (projects) => {
    let view = projects.map((project) =>/*html*/ `
            <div class="card project">
                <div class="imagecontainer">
                    <img src="${project.image}" alt="project">
                </div>
                <div class="p_name-link">
                    <a href="${project.url}" target="_blank" rel="noopener noreferrer"><h3>${project.name}</h3></a>
                    <a href="${project.gitUrl}" target="_blank" rel="noopener noreferrer"><i class="fas fa-external-link-alt"></i></a>
                </div>
            </div>
        `).join(" ");
    return view;
  },
  events: async () => {}
};
export default Projects;