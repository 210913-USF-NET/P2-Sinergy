using Microsoft.EntityFrameworkCore.Migrations;

namespace DL.Migrations
{
    public partial class modelsUpdate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "URI",
                table: "Songs");

            migrationBuilder.AddColumn<string>(
                name: "PlaylistName",
                table: "Playlists",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "user",
                table: "Playlists",
                type: "text",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PlaylistName",
                table: "Playlists");

            migrationBuilder.DropColumn(
                name: "user",
                table: "Playlists");

            migrationBuilder.AddColumn<string>(
                name: "URI",
                table: "Songs",
                type: "text",
                nullable: true);
        }
    }
}
