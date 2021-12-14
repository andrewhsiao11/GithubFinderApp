import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };
  // dispatch sends action to the reducer
  const [state, dispatch] = useReducer(githubReducer, initialState);

  // the children passed in will be output here
  // any values I want to pass down to components go into this object's value={}
  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;

// functions in context that dispatch some kind of action to the reducer
// reducer checks action and then updates state
// any components that use any part of that state are gonna react
// all coming from context (functions and state can be passed to components)
