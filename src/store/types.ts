export interface INote {
  id: number;
  title: string;
  content: string;
  writeTime: number;
}

export interface INoteStore {
  notes: INote[];
  addNote: (note: INote) => void;
  clearNotes: () => void;
}