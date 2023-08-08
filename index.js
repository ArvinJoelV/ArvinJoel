let projecthtml;
projects.forEach((project)=>{
    projecthtml+=`
    <div class="project-container">
       <a class="link" href="${project.link}">
          <div class="project-image-container">
             <img class="project-image" src="${project.image}">
          </div>
          <div class="project-name">
             ${project.name}
          </div> 
       </a>
    </div>`;
});
document.querySelector('.projects-grid').innerHTML=projecthtml;

let frontendhtml;
frontend.forEach((certificate)=>{
    frontendhtml+=`
    <div class="certificate-container">
        <div class="certificate-image-container">
            <img class="certificate-image" src="./linkedin.png">
        </div>
        <div class="certificate-name">
            ${certificate.name}
        </div> 
    </div>`;
});
document.querySelector('.certificate-grid').innerHTML=frontendhtml;

let backendhtml;
backend.forEach((certificate)=>{
    backendhtml+=`
    <div class="certificate-container">
        <div class="certificate-image-container">
            <img class="certificate-image" src="./linkedin.png">
        </div>
        <div class="certificate-name">
            ${certificate.name}
        </div> 
    </div>`;
});
document.querySelector('.certificate-grid').innerHTML=backendhtml;