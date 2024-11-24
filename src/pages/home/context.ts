import { createContext, useContext } from "react";
import { makeAutoObservable } from "mobx";

import { Repository, User } from "./interfaces";

class HomeStore {
  user?: User | null;
  repositories?: Repository[];
  isLoading: boolean = false;

  get isUserNotFounded() {
    return this.user === null;
  }

  setUser = (value: User | null) => {
    this.user = value;
  };

  setRepositories = (value: Repository[]) => {
    this.repositories = value;
  };

  setIsLoading = (value: boolean) => {
    this.isLoading = value;
  };

  constructor() {
    makeAutoObservable(this);
  }
}

const context = createContext(new HomeStore());
export const useHome = () => useContext(context);
