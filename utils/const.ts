export interface IInternship {
  company: string
  role: string
  from: string
  to: string
}

export const INTERNSHIPS: IInternship[] = [
  {
    company: 'Billme (Thailand)',
    role: 'Backend Developer Intern',
    from: 'June 2019',
    to: 'July 2019',
  },
]

export interface IEducation {
  degree: string
  institite: string
  from: string
  to: string
}

export const EDUCATIONS: IEducation[] = [
  {
    degree: 'B.Sc. Information Technology',
    institite: `King Mongkut's Institute of Technology Ladkrabang`,
    from: '2017',
    to: 'Now',
  },
  {
    degree: 'High School',
    institite: `Assumption Samutprakarn School`,
    from: '2011',
    to: '2017',
  },
]

export interface IAward {
  name: string
  prize: string
  description?: string
}

export const AWARDS: IAward[] = [
  {
    name: '2019 National Software Content (NSC)',
    prize: 'Semifinal in Artificial Intelligence',
    description:
      'Classnalytic - classroom analytic platform tracking students attendance, emotion and behavior then generate into a report',
  },
  {
    name: 'NAPROCK 10th International Programming Contest - Tokushima, Japan',
    prize: 'Special Prize',
    description:
      'Classnalytic - classroom analytic platform tracking students attendance, emotion and behavior then generate into a report',
  },
  {
    name:
      'Actions on Google Hackathon Thailand 2018 - Google Developer Group Thailand',
    prize: '1st Runner-up',
    description:
      'Siri FastPass - Google Assistant app help you and your guests visiting your residence easier',
  },
  {
    name: 'The Stupid Hackathon 2018 - StupidHackTH Thailand',
    prize: 'First Prize in the most Angry Emoji Vote Category',
  },
  {
    name:
      'ICT Challenge 2016 - SIT King Mongkut’s University of Technology Thonburi',
    prize: 'Winner',
  },
  {
    name: '2016 C Language Programming Competition - Silipakorn University',
    prize: 'Winner',
  },
  {
    name:
      'Web Development with PHP and Javascript - IT Latkrabang Open House 2016',
    prize: 'Winner',
  },
]

export interface IActivity {
  name: string
  link?: string
  role: string
  from: string
  to: string
}

export const ACTIVITIES: IActivity[] = [
  {
    name: '17th Young Webmaster Camp',
    link: 'https://ywc17.ywc.in.th/',
    role: 'Developer and Core Team',
    from: 'June',
    to: 'December 2019',
  },
]
