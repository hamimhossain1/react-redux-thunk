import { TO_REQUEST, TO_SUCCESS, TO_FAILURE } from "./actionType";

const initialState = {
  isLoading: false,
  isError: false,
  to: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default: {
      return state;
    }
  }
};
