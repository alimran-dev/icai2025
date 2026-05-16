export interface CommitteeMember {
  name: string;
  role: string;
  affiliation?: string;
  image: string;
}

export interface ICommittee{
  "Advisory Panel": CommitteeMember[];
  "General Chair": CommitteeMember[];
  "Organizing Committee": CommitteeMember[];
  "Ambassador Committee": CommitteeMember[];
  "Registration Committee": CommitteeMember[];
  "Web and Design Committee": CommitteeMember[];
  "Publication and Publicity Committee": CommitteeMember[];
}