import { artists } from "./spotifyArtist";
export interface track{
    name: string;
    popularity: number;
    artists: artists[];
    uri: string;
}