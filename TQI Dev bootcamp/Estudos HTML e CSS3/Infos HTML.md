# Tags importantes:
A primeira linha do documento deve ser o `<!DOCTYPE html>`, apesar de parecer um elemento HTML ela apenas diz ao navegador que ele está lidando com um arquivo do tipo HTML5. Os elementos HTML vem logo abaixo.

 - `<html>` É o core do documento, dentro dessa tag estão todos os elementos html. Devemos também dizer ao navegador qual idioma estamos utilizando com o atributo lang.
 - `<head>` Comporta os elementos que serão lidos pelo navegador e abriga tags importantes como `<title>` e `<script>`.
 - `<body>` É o que leva todos os elementos da página que o usuario final verá: Fotos, videos, textos etc.


# Semântica:
A semântica nos permite descrever mais precisamente o nosso conteúdo, agora um bloco de texto não é apenas uma div, agora é um article e tem mais significado assim. E temos vários elementos para ressignificar as divs:

`<section>`

Representa uma seção genérica de conteúdo quando não houver um elemento mais específico para isso.

`<header>`

É o cabeçalho da página ou de uma seção da página e normalmente contém logotipos, menus, campos de busca.

`<article>`

Representa um conteúdo independente e de maior relevância dentro de uma página, como um post de blog, uma notícia em uma barra lateral ou um bloco de comentários. Um article pode conter outros elementos, como header, cabeçalhos, parágrafos e imagens.

`<aside>`

É uma seção que engloba conteúdos relacionados ao conteúdo principal, como artigos relacionados, biografia do autor e publicidade. Normalmente são representadas como barras laterais.

`<footer>`

Esse elemento representa o rodapé do conteúdo ou de parte dele, pois ele é aceito dentro de vários elementos, como article e section e até do body. Exemplos de conteúdo de um `<footer>` são informações de autor e _links_ relacionados.

`<h1>`-`<h6>`

Eles não foram criados na versão 5 do HTML e nem são específicos para semântica, mas servem para esse propósito. São utilizados para marcar a importância dos títulos, sendo ``<h1>`` o mais importante e ``<h6>`` o menos. Uma dica: use apenas um ``<h1>`` por página, pois ele representa o objetivo da sua página.

`<a>`

É um elemento ancora, ele representa um _hyperlink_.

O elemento a tem vários atributos, mas vamos focar em dois, o **href** e o **target**.

O href representa o _hyperlink_ para onde sua **âncora** aponta, pode ser uma página do seu ou de outro site, um e-mail e até mesmo um telefone, os dois últimos precisam dos prefixos **mailto**: e **tel**:, respectivamente.

O **target** neste momento vai servir para nos ajudar a abrir nossos links em outra aba do navegador usando o valor **_blank**.

`<p>`

Representa um parágrafo, mas ele não suporta apenas texto, podemos adicionar imagens, código, vídeos e vários outros tipos de conteúdo dentro dele.

`<img>`

Não contém tag de fechamento.

2 atributos: **src** e **alt**.

==**src**== é obrigatorio e espera o caminho pra imagem.

==**alt**== não é obrigatorio mas ajuda com acessibilidade, mostrando uma descrição da imagem caso ela não carregue facilitando assim que o usuario consiga ter uma boa experiencia mesmo sem a imagem.

`<ul>`

Cria uma lista não ordenada, onde a ordem dos elementos não é importante, e é representada com pontos, círculos ou quadrados.

`<ol>`

Serve para criar lista ordenadas, nessas a ordem importa, portanto elas são representadas com números, algarismos romanos ou letras.

`<li>`

é um item dentro de uma dessas listas. Um ``<li>`` pode conter vários tipos de conteúdos, como parágrafos, imagens e até outras listas.