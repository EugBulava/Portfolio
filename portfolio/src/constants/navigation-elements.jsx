import { ReactComponent as HomeIcon }  from "../images/navigation/home-icon.svg";
import { ReactComponent as AboutIcon } from "../images/navigation/about-icon.svg";
import { ReactComponent as SkillsIcon } from "../images/navigation/skills-icon.svg";
import { ReactComponent as MyWorkIcon } from "../images/navigation/my-work-icon.svg";
import { ReactComponent as ContactIcon } from "../images/navigation/contact-icon.svg";

export const elements = [
  {
    icon: HomeIcon,
    type: 'Home',
    path: '/'
  },

  {
    icon: AboutIcon,
    type: 'About',
    path: '/about'
  },

  {
    icon: SkillsIcon,
    type: 'Skills',
    path: '/skills'
  },

  {
    icon: MyWorkIcon,
    type: 'My Work',
    path: '/mywork'
  },

  {
    icon: ContactIcon,
    type: 'Contact',
    path: '/contact'
  }
];
