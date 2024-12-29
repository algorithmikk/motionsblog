interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'Restaurant Management Software',
    description: `Building a complete cloud based software solution for restaurant/private cooks to manager orders, billing, menu and payments`,
    imgSrc: '/static/images/umameats.png',
    href: 'https://umameats.com',
  },
  {
    title: 'Real Time payment systems',
    description: `Modernizing payment systems for major Canadian banks in the cloud`,
    imgSrc: '/static/images/cloud.png',
    href: 'https://www.google.com',
  },
  {
    title: 'DevSecOps',
    description: `Implementing DevOps principles using secure software principles`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/dev-sec-ops',
  }

]

export default projectsData
