import React from 'react';
import { GridViewContainer, NavBar, SideBar } from '../../containers';

type Props = {};

const HomePage = (props: Props) => {
  return (
    <>
      <NavBar />
      <SideBar />
      <GridViewContainer />
    </>
  );
};

export default HomePage;
