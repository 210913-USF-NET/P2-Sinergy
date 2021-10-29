import { DeclarationListEmitMode } from "@angular/compiler";

export interface Playlist {
    PlaylistID: number;
    PlaylistName: string;
    UserID: number;
    user: string;
    SongCount: number;
    StartDate: number;
    EndDate: number;
    /**Date: datetime;**/
}
