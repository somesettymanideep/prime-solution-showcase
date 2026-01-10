export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  submittedAt: string;
  status: 'new' | 'read' | 'responded';
}

const STORAGE_KEY = 'prime_solutions_contacts';

export const saveContactSubmission = (data: Omit<ContactSubmission, 'id' | 'submittedAt' | 'status'>): ContactSubmission => {
  const submissions = getContactSubmissions();
  const newSubmission: ContactSubmission = {
    ...data,
    id: crypto.randomUUID(),
    submittedAt: new Date().toISOString(),
    status: 'new',
  };
  submissions.unshift(newSubmission);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(submissions));
  return newSubmission;
};

export const getContactSubmissions = (): ContactSubmission[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

export const updateSubmissionStatus = (id: string, status: ContactSubmission['status']): void => {
  const submissions = getContactSubmissions();
  const index = submissions.findIndex((s) => s.id === id);
  if (index !== -1) {
    submissions[index].status = status;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(submissions));
  }
};

export const deleteSubmission = (id: string): void => {
  const submissions = getContactSubmissions().filter((s) => s.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(submissions));
};

export const getNewSubmissionsCount = (): number => {
  return getContactSubmissions().filter((s) => s.status === 'new').length;
};
