// Importações de imagens
import paoFrances from '../assets/images/produtos/PãoFrancês.jpg';
import boloChocolate from '../assets/images/produtos/BolodeChocolate.jpg';
import croissant from '../assets/images/produtos/Croissant.jpg';
import paoQueijo from '../assets/images/produtos/PãodeQueijo.jpg';
import baguete from '../assets/images/produtos/Baguete.jpg';
import pudim from '../assets/images/produtos/Pudim.jpg';
import sonho from '../assets/images/produtos/SonhoDoce.jpg';
import quiche from '../assets/images/produtos/Quiche.jpg';
import paoArtesanal from '../assets/images/produtos/PãoArtesanal.jpg';
import tortaMorango from '../assets/images/produtos/TortaDMorango.jpg';

export const PRODUTOS = [
  {
    id: 1,
    nome: "Pão Francês",
    descricao: "Pão tradicional com casca crocante e miolo macio.",
    preco: 0.75,
    imagem: paoFrances,
    categoria: "pao",
    destaque: true,
  },
  {
    id: 2,
    nome: "Bolo de Chocolate",
    descricao: "Bolo fofinho recheado e coberto com chocolate belga.",
    preco: 45.9,
    imagem: boloChocolate,
    categoria: "bolo",
    destaque: true,
  },
  {
    id: 3,
    nome: "Croissant",
    descricao: "Croissant de massa folhada feito com manteiga francesa.",
    preco: 8.5,
    imagem: croissant,
    categoria: "doce",
    destaque: true,
  },
  {
    id: 4,
    nome: "Pão de Queijo",
    descricao: "Pão de queijo mineiro tradicional quentinho e macio.",
    preco: 4.5,
    imagem: paoQueijo,
    categoria: "salgado",
    destaque: true,
  },
  {
    id: 5,
    nome: "Baguete",
    descricao: "Baguete artesanal com fermentação natural.",
    preco: 12.9,
    imagem: baguete,
    categoria: "pao",
  },
  {
    id: 6,
    nome: "Pudim de Leite",
    descricao: "Pudim caseiro com calda de caramelo.",
    preco: 10.5,
    imagem: pudim,
    categoria: "doce",
  },
  {
    id: 7,
    nome: "Sonho",
    descricao: "Sonho recheado com creme de baunilha.",
    preco: 6.99,
    imagem: sonho,
    categoria: "doce",
  },
  {
    id: 8,
    nome: "Quiche de Legumes",
    descricao: "Quiche recheada com legumes frescos e queijo.",
    preco: 36.9,
    imagem: quiche,
    categoria: "salgado",
  },
  {
    id: 9,
    nome: "Pão Artesanal",
    descricao: "Pão artesanal com fermentação natural de 24 horas.",
    preco: 18.5,
    imagem: paoArtesanal,
    categoria: "especial",
  },
  {
    id: 10,
    nome: "Torta de Morango",
    descricao: "Torta doce com creme e morangos frescos.",
    preco: 55.0,
    imagem: tortaMorango,
    categoria: "especial",
  },
];