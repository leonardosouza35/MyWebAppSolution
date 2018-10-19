using System;
using System.Collections.Generic;

namespace MyWebApp.Entidades
{
    public class Pedido
    {
        public int Id { get; set; }
        public DateTime DataPedido { get; set; }
        public ICollection<ItemPedido> ItensPedidos { get; set; }
    }
}
