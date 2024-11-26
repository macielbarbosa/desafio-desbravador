import { observer } from "mobx-react-lite";

import { Search } from "./components/Search";
import { User } from "./components/User";
import { Root } from "./style";
import { useHome } from "./context";

export const Home = observer(() => {
  const { user } = useHome();

  return (
    <Root>
      <Search />
      {user && <User />}
    </Root>
  );
});
