// Stwórz plik actions.js, w którym zdefiniujesz typy akcji oraz kreatory akcji dla następujących zdarzeń:
// tworzenie komentarza,
// edycja komentarza,
// usuwanie komentarza,
// ocenianie +1 / -1 (kciuk w górę/kciuk w dół) komentarza
import uuid from uuid;

export const ADD_COMMENT = 'ADD_COMMENT';
export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
}

const boundAddComment = text => dispatch(addComment(text));

boundAddComment('nowy komentarz!');

function removeComment(text) {
    return {
        type: REMOVE_COMMENT,
        text,
        id
    }
}

const boundRemoveComment = id => dispatch(removeComment(id));

boundRemoveComment('nowy komentarz');

function editComment(text, id) {
    return {
        type: EDIT_COMMENT,
        text,
        id
    }
}

const boundEditComment = (text, id) => dispatch(editComment(text, id));

boundEditComment('nowy komentarz edytowany');

function thumbUpComment(id, votes) {
    return {
        type: THUMB_UP_COMMENT,
        id,
        votes: ++votes
    }
}

function thumbDownComment(id, votes) {
    return {
        type: THUMB_DOWN_COMMENT,
        id,
        votes: ++votes
    }
}
