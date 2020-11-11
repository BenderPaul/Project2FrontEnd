export type State = {
    username: string
    password:  string
    isButtonDisabled: boolean
    helperText: string
    isError: boolean
  };
  
  export const initialState:State = {
    username: '',
    password: '',
    isButtonDisabled: true,
    helperText: '',
    isError: false
  };
  
  export type Action = { type: 'setUsername', payload: string }
    | { type: 'setPassword', payload: string }
    | { type: 'setIsButtonDisabled', payload: boolean }
    | { type: 'loginSuccess', payload: string }
    | { type: 'loginFailed', payload: string }
    | { type: 'setIsError', payload: boolean };
  


export const reducer = (state: State, action: Action): State => {
    switch (action.type) {
      case 'setUsername': 
        return {
          ...state,
          username: action.payload
        };
      case 'setPassword': 
        return {
          ...state,
          password: action.payload
        };
      case 'setIsButtonDisabled': 
        return {
          ...state,
          isButtonDisabled: action.payload
        };
      case 'loginSuccess': 
        return {
          ...state,
          helperText: action.payload,
          isError: false
        };
      case 'loginFailed': 
        return {
          ...state,
          helperText: action.payload,
          isError: true
        };
      case 'setIsError': 
        return {
          ...state,
          isError: action.payload
        };
    }
  }