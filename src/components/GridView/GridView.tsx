import React from 'react';
import { FetchVideosResponseType } from '../../services';
import GridViewItem from './GridViewItem';

interface IGridViewItemProps {
  data: FetchVideosResponseType;
}

const GridView = ({ data }: IGridViewItemProps) => {
  return (
    <>
      {data.map((singleData) => (
        <GridViewItem key={singleData.id} />
      ))}
    </>
  );
};

export default GridView;
