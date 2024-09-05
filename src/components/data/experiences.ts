export type Experience = {
  title: string,
  since: string,
  to: string,
  company: string,
  responsibilities: string[],
}

const experiences: Experience[] = [
  {
    title: 'Principal Software Engineer',
    company: 'ChomCHOB',
    since: 'April 2023',
    to: 'Present',
    responsibilities: [
      'Head of developement department',
      'Whole company\'s products management',
      'Supervise and improve developer team',
    ]
  },
  {
    title: 'Innovation Team Leader',
    company: 'ChomCHOB',
    since: 'January 2023',
    to: 'March 2023',
    responsibilities: [
      'Design and develop innovation products',
      'Supervise and improve developer team',
    ]
  },
  {
    title: 'Executive Blockchain Developer',
    company: 'ChomCHOB',
    since: 'July 2022',
    to: 'December 2022',
    responsibilities: [
      'Design and implement blockchain products',
      'Consult business with blockchain and Web 3.0 knowledge'
    ]
  },
  {
    title: 'Senior Backend and Blockchain Developer',
    company: 'ChomCHOB',
    since: 'June 2021',
    to: 'July 2022',
    responsibilities: [
      'Design and implement blockchain products',
    ]
  },
  {
    title: 'Senior Backend Developer and Data Scientist',
    company: 'ChomCHOB',
    since: 'January 2021',
    to: 'June 2022',
    responsibilities: [
      'Data analytics, research and solution for business',
    ]
  },
  {
    title: 'Junior Backend Developer',
    company: 'ChomCHOB',
    since: 'January 2019',
    to: 'December 2020',
    responsibilities: [
      'Design and implement microservices, database and system for ChomCHOB\'s products'
    ]
  },
  {
    title: 'Internship Backend Developer',
    company: 'ChomCHOB',
    since: 'July 2018',
    to: 'August 2018',
    responsibilities: [
      'Implement web service for ChomCHOB product'
    ]
  },
]
export default experiences