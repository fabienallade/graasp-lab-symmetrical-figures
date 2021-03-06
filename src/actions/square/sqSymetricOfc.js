import {
  SQ_SYM_OF_C,
  SQ_WORD_FOUND,
  SQ_WORD_NOT_FOUND,
} from '../../types';

const compareWords = (typedWords, symmetricWord) => {
  const w1 = typedWords.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const w2 = symmetricWord.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  return w1.localeCompare(w2);
};

export const sqSymetricOfc = ({ typedWords, kind }) => (dispatch) => {
  let wordFound = false;
  if (typedWords.length === SQ_SYM_OF_C.length) {
    const convertedWords = compareWords(typedWords, SQ_SYM_OF_C);
    if (convertedWords === 0 && kind === 'square') {
      wordFound = true;
    } else if (convertedWords === 1 || convertedWords === -1) {
      wordFound = false;
    }
  }
  if (!wordFound) {
    dispatch({
      type: SQ_WORD_NOT_FOUND,
    });
  } else {
    dispatch({
      type: SQ_WORD_FOUND,
    });
  }
};

export default sqSymetricOfc;
