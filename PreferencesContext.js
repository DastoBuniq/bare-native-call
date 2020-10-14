import React, {useState} from 'react';

const PreferencesContext = React.createContext({
  toggleTheme: () => {},
  isThemeDark: false,
});

const PreferenceProvider = (props) => {
  const [isThemeDark, setIsThemeDark] = useState(true);
  return (
    <PreferencesContext.Provider value={{isThemeDark, setIsThemeDark}}>
      {props.children}
    </PreferencesContext.Provider>
  );
};

export {PreferencesContext, PreferenceProvider};
