import { API_KEY } from '../config';

export type FetchVideosResponseType = {
  id: string;
  statistics: {
    // commentCount: string;
    // favoriteCount: string;
    // likeCount: string;
    viewCount: string;
  };
  snippet: {
    channelTitle: string;
    description: string;
    thumbnails: {
      default: {
        height: number;
        url: string;
        width: number;
      };
    };
  };
}[];

export async function fetchVideos(): Promise<FetchVideosResponseType> {
  const response = await fetch(
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=${API_KEY}`
  );
  const data = await response.json();
  return data?.items;
}
