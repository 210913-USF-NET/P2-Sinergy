import { LastFMTrack } from './LastFMTrack';
import { LastFMTime } from './LastFMTime';

export interface LastFMImage {
    track: LastFMTrack;
    time: LastFMTime; //Attr in Last.FM API
}