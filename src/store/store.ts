import { create } from 'zustand';
import { INote, INoteStore } from './types.ts';

const useNoteStore = create<INoteStore>((set) => ({
  notes: [],
  addNote: (note: INote) => set((state) => {
    const isDuplicate = state.notes.some((existingNote) => existingNote.id === note.id);
    if (isDuplicate) {
      return state;
    }

    return {
      notes: [...state.notes, note],
    };
  }),
  clearNotes: () => set({ notes: [] }),
}));

export default useNoteStore;