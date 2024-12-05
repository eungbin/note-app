import { create } from 'zustand';
import { INote, INoteStore } from './types.ts';

const useNoteStore = create<INoteStore>((set) => ({
  notes: [],
  addNote: (note: INote) => set((state) => ({
    notes: {
      ...state.notes,
      note
    }
  }))
}));

export default useNoteStore;