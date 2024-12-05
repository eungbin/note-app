export interface INote {
  title: string;
  content: string;
}

export interface INoteStore {
  notes: INote[];
  addNote: (note: INote) => void;
}