using Microsoft.EntityFrameworkCore;
using MyWebApp.Entidades;

namespace MyWebApp
{
    public class MyWebAppContext : DbContext
    {
        public DbSet<Produto> Produtos { get; set; }
        public DbSet<Pedido> Pedidos { get; set; }
        public DbSet<ItemPedido> Itens { get; set; }

        public MyWebAppContext(DbContextOptions<MyWebAppContext> options):base(options)
        {

        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Produto>().HasKey(p => p.Id);
            modelBuilder.Entity<Pedido>().HasKey(p => p.Id);
            modelBuilder.Entity<ItemPedido>().HasKey(p => p.Id);

            base.OnModelCreating(modelBuilder);
        }

        public override int SaveChanges()
        {
            ChangeTracker.DetectChanges();
            return base.SaveChanges();
        }
    }


}
