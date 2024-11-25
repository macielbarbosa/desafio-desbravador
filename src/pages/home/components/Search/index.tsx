import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import {
  Button,
  CircularProgress,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { Clear, Search as SearchIcon } from "@mui/icons-material";

import { axiosInstance } from "@utils/axiosInstance";
import { useHome } from "@pages/home/context";

import { Root } from "./style";

export const Search = observer(() => {
  const [username, setUsername] = useState<string>("macielbarbosa");
  const { setUser, setRepositories, isLoading, setIsLoading } = useHome();

  useEffect(() => {
    getData();
  }, []);

  const request = async (endpoint: string, setFn: (data: any) => void) => {
    const { data } = await axiosInstance(endpoint);
    setFn(data);
  };

  const getData = async () => {
    setIsLoading(true);
    try {
      await Promise.all([
        request(`users/${username}`, setUser),
        request(`users/${username}/repos`, setRepositories),
      ]);
    } catch (error) {
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  const clearUsername = () => {
    setUsername("");
    document.getElementById("search-input")?.focus();
  };

  const clearInputAdornment = (
    <InputAdornment position="end">
      <IconButton size="small" title="Limpar" onClick={clearUsername}>
        <Clear />
      </IconButton>
    </InputAdornment>
  );

  return (
    <Root>
      <TextField
        id="search-input"
        size="small"
        placeholder="Digite o username..."
        value={username}
        onChange={({ target }) => setUsername(target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") getData();
        }}
        slotProps={{
          input: {
            endAdornment: clearInputAdornment,
          },
        }}
      />
      <Button
        disabled={!username || isLoading}
        variant="contained"
        onClick={getData}
        startIcon={isLoading ? <CircularProgress size={20} /> : <SearchIcon />}
      >
        Buscar
      </Button>
    </Root>
  );
});
