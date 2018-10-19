using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace MyWebApp.Migrations
{
    public partial class MyWebAppMigration2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Pedidos_Pedidos_PedidoId",
                table: "Pedidos");

            migrationBuilder.DropIndex(
                name: "IX_Pedidos_PedidoId",
                table: "Pedidos");

            migrationBuilder.DropColumn(
                name: "PedidoId",
                table: "Pedidos");

            migrationBuilder.AddColumn<int>(
                name: "PedidoId",
                table: "Itens",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Itens_PedidoId",
                table: "Itens",
                column: "PedidoId");

            migrationBuilder.AddForeignKey(
                name: "FK_Itens_Pedidos_PedidoId",
                table: "Itens",
                column: "PedidoId",
                principalTable: "Pedidos",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Itens_Pedidos_PedidoId",
                table: "Itens");

            migrationBuilder.DropIndex(
                name: "IX_Itens_PedidoId",
                table: "Itens");

            migrationBuilder.DropColumn(
                name: "PedidoId",
                table: "Itens");

            migrationBuilder.AddColumn<int>(
                name: "PedidoId",
                table: "Pedidos",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Pedidos_PedidoId",
                table: "Pedidos",
                column: "PedidoId");

            migrationBuilder.AddForeignKey(
                name: "FK_Pedidos_Pedidos_PedidoId",
                table: "Pedidos",
                column: "PedidoId",
                principalTable: "Pedidos",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
