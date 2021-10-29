import { LastFMTrack } from './LastFMTrack';
import { LastFMTime } from './LastFMTime';

export interface LastFMImage {
    track: LastFMTrack;
    time: LastFMTime; //Attr in Last.FM API
}

export class playlistMaker{
    public playlistName: string = '';
    public listLength: string = '';
    public from: string = '';
    public to: string = '';
    public user: string = '';
}