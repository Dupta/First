import config from '../../../config.json';

const summary = async (): Promise<string> => {
return `     
 ${config.name}      
 <u><a href="${config.resume_url}" target="_blank">Resume</a></u>
 <u><a href="https://github.com/${config.social.github}" target="_blank">Github</a></u>
 <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">Linkedin</a></u>
🧠 <u><a href="https://leetcode.com/${config.social.leetcode}" target="_blank">Leetcode</a></u>
⚙️ <u><a href="https://codeforces.com/profile/${config.social.codeforces}" target="_blank">Codeforces</a></u>
⚙️ <u><a href="https://codechef.com/users/${config.social.codechef}" target="_blank">Codechef</a></u>
📘 <u><a href="https://auth.geeksforgeeks.org/user/${config.social.gfg}/" target="_blank">GFG</a></u>
 <u><a href="mailto:${config.email}">${config.email}</a></u>

`;
};
export default summary;
