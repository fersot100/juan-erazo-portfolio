const languagePool = document.querySelector('#skill-languages');
const frontEndPool = document.querySelector('#skill-frontend');
const backEndPool = document.querySelector('#skill-backend');
const databasePool = document.querySelector('#skill-database');
const cloudPool = document.querySelector('#skill-cloud');
const versionControlPool = document.querySelector('#skill-vc');
const productionPool = document.querySelector('#skill-production');
const hardwarePool = document.querySelector('#skill-hardware');
const UNIXPool = document.querySelector('#skill-UNIX');

const appendSkills = (list, nodeToAppend) => {
    list.split(', ').forEach( item => {
            const node = document.createElement('span');
            node.innerHTML = item;
            nodeToAppend.appendChild(node);
        }   
    )
}

appendSkills('C++, Javascript, Python, C#, C, 64-bit Assembly', languagePool)
appendSkills('HTML, CSS, React.JS, jQuery, Bootstrap, Materialze.css, SASS/SCSS, FlexBox, CSS-Grid', frontEndPool)
appendSkills('Node.js, Express.js, PHP', backEndPool);
appendSkills('mySQL, SQLite, MongoDB', databasePool);
appendSkills('AWS S3/EC2, Heroku, Firebase', cloudPool);
appendSkills('Git CLI, Git LFS, Gitkraken', versionControlPool);
appendSkills('Unity 3D, Photoshop, Blender, Unreal Engine 4, Adobe Premiere, Adobe AfterEffects', productionPool);
appendSkills('Arduino, Raspberry PI, VEX EDR, circuitry', hardwarePool);
appendSkills('BASH, netcat, advanced CLI file manipulation', UNIXPool);