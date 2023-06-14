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
