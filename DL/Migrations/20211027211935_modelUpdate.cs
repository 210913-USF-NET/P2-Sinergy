using Microsoft.EntityFrameworkCore.Migrations;

namespace DL.Migrations
{
    public partial class modelUpdate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "user",
                table: "Playlists",
                newName: "Username");

            migrationBuilder.RenameColumn(
                name: "Timeframe",
                table: "Playlists",
                newName: "StartDate");

            migrationBuilder.AddColumn<int>(
                name: "EndDate",
                table: "Playlists",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Songs_PlaylistID",
                table: "Songs",
                column: "PlaylistID");

            migrationBuilder.AddForeignKey(
                name: "FK_Songs_Playlists_PlaylistID",
                table: "Songs",
                column: "PlaylistID",
                principalTable: "Playlists",
                principalColumn: "PlaylistID",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Songs_Playlists_PlaylistID",
                table: "Songs");

            migrationBuilder.DropIndex(
                name: "IX_Songs_PlaylistID",
                table: "Songs");

            migrationBuilder.DropColumn(
                name: "EndDate",
                table: "Playlists");

            migrationBuilder.RenameColumn(
                name: "Username",
                table: "Playlists",
                newName: "user");

            migrationBuilder.RenameColumn(
                name: "StartDate",
                table: "Playlists",
                newName: "Timeframe");
        }
    }
}
