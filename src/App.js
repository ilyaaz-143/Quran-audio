import "./App.css";
import Fetch from "./Components/fetchAPI/GetData";
import Surahs from "./Components/Surahs";
import { makeStyles, ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core";

function App() {
  const darkTheme = createTheme({
    palette: {
      type: "dark",
    },
  });
  let [data, loading] = Fetch(`https://api.quran.com/api/v4/chapters`);
  console.log(data, loading);

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">{loading && <Surahs Surahs={data} />}</div>
    </ThemeProvider>
  );
}

export default App;
