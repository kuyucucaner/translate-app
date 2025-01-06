import { createSlice } from '@reduxjs/toolkit';

const translationSlice = createSlice({
  name: 'translation',
  initialState: {
    text: '',
    targetLanguage: 'en',
    translatedText: '',
    ocrDetectedText: '',
    analysis: {}, // Analiz sonuçları

  },
  reducers: {
    setText: (state, action) => {
      state.text = action.payload;
    },
    setTargetLanguage: (state, action) => {
      state.targetLanguage = action.payload;
    },
    setTranslatedText: (state, action) => {
      state.translatedText = action.payload;
    },
    setocrDetectedText: (state, action) => {
      state.ocrDetectedText = action.payload;
    },
    setAnalysis: (state, action) => {
      state.analysis = action.payload;
    },
  },
});

export const { setText, setTargetLanguage, setTranslatedText  ,setocrDetectedText ,setAnalysis} = translationSlice.actions;
export default translationSlice.reducer;
