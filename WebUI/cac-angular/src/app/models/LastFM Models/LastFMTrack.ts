import { LastFMArtist } from './LastFMArtist';
import { LastFMImage } from './LastFMImage';
import { LastFMRank } from './LastFMRank';

export interface LastFMTrack {
    Artist: LastFMArtist;
    Image: LastFMImage;
    mbid: string;
    url: string;
    name: string;
    Rank:LastFMRank; //Attr1 in Last.FM API
    playcount: string; //Was a string in Last.FM API need to convert.
}