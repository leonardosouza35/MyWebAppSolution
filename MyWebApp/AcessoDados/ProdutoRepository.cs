using MyWebApp.Entidades;
using System.Collections.Generic;
using System.Linq;

namespace MyWebApp.AcessoDados
{
    public class ProdutoRepository : IProdutoRepository
    {
        private readonly MyWebAppContext _myWebAppContext;

        public ProdutoRepository(MyWebAppContext myWebAppContext)
        {
            _myWebAppContext = myWebAppContext;
        }

        public List<Produto> ListarProdutos()
        {
            return _myWebAppContext.Produtos.ToList();
        }

        public Produto ObterProdutoPorId(int id)
        {
            return _myWebAppContext.Produtos.FirstOrDefault(p => p.Id == id);
        }

        public void Salvar(Produto produto)
        {
            _myWebAppContext.Produtos.Add(produto);
            _myWebAppContext.SaveChanges();
        }
    }
}
