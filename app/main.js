const app = angular.module('webprodutosApp', []);

app.controller('ProdutosController', ($scope) => {

    //inicialização de produtos
    $scope.produtos = [
        {nome: 'Pizza Congelada', quantidade: 6},
        {nome: 'Energético', quantidade: 2}
    ];

    $scope.adicionaProduto = () => {

        if($scope.produto && $scope.produto.nome && $scope.produto.quantidade && $scope.produto.quantidade > 0){
            //verifica se já existe produto
            let index = -1;
            for(let i=0; i< $scope.produtos.length; ++i){
                if($scope.produtos[i].nome == $scope.produto.nome) index = i;
            }

            //adicionar produto na lista
            if(index > -1) $scope.produtos[index].quantidade += $scope.produto.quantidade;
            else $scope.produtos.push({nome: $scope.produto.nome, quantidade: $scope.produto.quantidade});

            //limpar models
            $scope.produto.nome = $scope.produto.quantidade = undefined;
        }

    };

    $scope.removeProduto = () => {

        if($scope.produto && $scope.produto.nome && $scope.produto.quantidade && $scope.produto.quantidade > 0){
            //remover produto da lista
            for(let i=0; i< $scope.produtos.length; ++i){
                if($scope.produtos[i].nome == $scope.produto.nome) $scope.produtos[i].quantidade -= $scope.produto.quantidade;
                if($scope.produtos[i].quantidade < 0) $scope.produtos[i].quantidade = 0;
            }

            //limpar models
            $scope.produto.nome = $scope.produto.quantidade = undefined;
        }

    }

});