import * as bin from './index';
import config from '../../../config.json';

export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'Summary' to display summary.
`;
};

// Github profile
// export const repo = async (args: string[]): Promise<string> => {
//   window.open(`${config.repo}`);
//   return 'Opening Github repository...';
// };


// About
export const about = async (args: string[]): Promise<string> => {
return `Hi, I am ${config.name}. \n
I am a 4th-year B.Tech student at the National Institute of Technology, Silchar.\n
<span style="font-size: 2rem;">Welcome to my website!</span>\n
The site contains links to my Resume, My Coding profiles, Social media profiles, Github, Date, Weather forecast.
'Summary' - short summary.
'Resume' - my latest resume.
'LeetCode' - my LeetCode username.
'Codeforces' - my Codeforces handle.
'GFG' - my GeeksforGeeks username.
'Github' - my github profile.
'Linkedin' - my linkedin profile.
'Reddit' - search reddit.
'Date' - current date and time.
'email' - my email address.
'weather place' - get weather forecast for a place.`;
};
//Resume
export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening Resume...';
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening Gmail:${config.email}...`;
};
//Github
export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};
//linkedin
export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);
  return 'Opening linkedin...';
};
export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};


export const leetcode = async (args: string[]): Promise<string> => {
  window.open(`https://leetcode.com/${config.social.leetcode}/`, '_blank');
  return 'Opening LeetCode profile...';
};

export const codeforces = async (args: string[]): Promise<string> => {
  window.open(`https://codeforces.com/profile/${config.social.codeforces}/`, '_blank');
  return 'Opening Codeforces profile...';
};

export const codechef = async (args: string[]): Promise<string> => {
  window.open(`https://www.codechef.com/${config.social.codechef}/`, '_blank');
  return 'Opening Codechef profile...';
};

export const gfg = async (args: string[]): Promise<string> => {
  window.open(`https://www.geeksforgeeks.org/${config.social.gfg}/`, '_blank');
  return 'Opening GeeksforGeeks profile...';
};

//Display my name
export const banner = (args?: string[]): string => {
  return `

░███████   ░██                                                       ░██             ░██████                           ░██               
░██   ░██                                                            ░██            ░██   ░██                          ░██               
░██    ░██ ░██░██    ░██ ░██    ░██  ░██████   ░████████   ░███████  ░████████     ░██        ░██    ░██ ░████████  ░████████  ░██████   
░██    ░██ ░██░██    ░██ ░██    ░██       ░██  ░██    ░██ ░██        ░██    ░██    ░██  █████ ░██    ░██ ░██    ░██    ░██          ░██  
░██    ░██ ░██ ░██  ░██  ░██    ░██  ░███████  ░██    ░██  ░███████  ░██    ░██    ░██     ██ ░██    ░██ ░██    ░██    ░██     ░███████  
░██   ░██  ░██  ░██░██   ░██   ░███ ░██   ░██  ░██    ░██        ░██ ░██    ░██     ░██  ░███ ░██   ░███ ░███   ░██    ░██    ░██   ░██  
░███████   ░██   ░███     ░█████░██  ░█████░██ ░██    ░██  ░███████  ░██    ░██      ░█████░█  ░█████░██ ░██░█████      ░████  ░█████░██ 
                                ░██                                                                      ░██                             
                          ░███████                                                                       ░██                             
                                                                                                                                         


Type 'About' to see the functions.
Type 'Summary' to display profile links.
`;
};
