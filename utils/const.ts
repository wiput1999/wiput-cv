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
]
