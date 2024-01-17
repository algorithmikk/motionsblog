interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
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
  },
]

export default projectsData
