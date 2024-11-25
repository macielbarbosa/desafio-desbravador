import { Outlet } from "react-router";

import { Root } from "./style";

function App() {
  return (
    <Root>
      <Outlet />
    </Root>
  );
}

export default App;
