export interface Canopy {
  id: string;
  joinDate: string;
  status: string;
  title: string;
}

export interface CanopyQuestionResponse {
  canopyId: string;
  details: string;
  id: string;
  isAnswered: boolean;
  order: number;
  text: string;
  type: string;
}

export interface AnswerResponse {
  created: string;
  details: string;
  downloadUrl: string;
  expertId: string;
  id: string;
  questionId: string;
  questionText: string;
  status: string;
  type: string;
}
