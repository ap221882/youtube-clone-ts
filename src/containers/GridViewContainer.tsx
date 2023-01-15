import React, { useState, useEffect } from 'react';
import { GridView } from '../components';
import { fetchVideos } from '../services';
import { FetchVideosResponseType } from '../services';

const GridViewContainer = () => {
  const [videoList, setVideoList] = useState<FetchVideosResponseType>([]);

  useEffect(() => {
    (async () => {
      const videosData = await fetchVideos();
      setVideoList(videosData);
    })();
  }, []);

  return (
    <>
      <GridView data={videoList} />
    </>
  );
};

export default GridViewContainer;
