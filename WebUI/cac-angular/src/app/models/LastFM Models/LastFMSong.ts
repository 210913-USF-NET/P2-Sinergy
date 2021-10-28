import { attribute } from "./attribute";
import { LastFMArtist } from "./LastFMArtist";

export interface song {
    artist: LastFMArtist;
    name: string;
    playcount: number;
    rank: attribute;
}