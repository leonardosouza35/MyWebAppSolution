using System.Collections.Generic;
using MyWebApp.Entidades;

namespace MyWebApp.AcessoDados
{
    public interface IProdutoRepository
    {
        List<Produto> ListarProdutos();
        Produto ObterProdutoPorId(int id);
        void Salvar(Produto produto);
    }
}