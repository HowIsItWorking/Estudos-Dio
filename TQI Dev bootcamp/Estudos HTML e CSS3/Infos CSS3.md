# Classes e Id's

ID: é representado pelo símbolo # (hash) seguido de um nome para esse ID.

Classe: a classe é representada de forma parecida do ID, mas é precedida por um ponto em vez do hash.

A diferença mais importante entre eles é a forma como devem ser usados: o ID só pode ser usado uma vez em uma página HTML enquanto a classe não tem restrições.

## Box model

-   As margens (margin) são espaçamentos entre elementos;
-   As bordas (border) ;
-   O padding é um espaçamento entre as bordas e o conteúdo, a diferença para as margens é que declarações de imagem de fundo funcionam nele;
-   O conteúdo (content) é o que o seu bloco representa, um texto, uma imagem, um vídeo;

## Bordas

**solid**: mostra uma borda simples e reta;

**dotted**: são bolinhas com um pequeno espaçamento entre elas;

**dashed**: forma uma linha tracejada.

**_border-width_** para a largura, **_border-color_** para a cor e **_border-style_** para o estilo.

**Border-radius** é a última propriedade é o _border-radius_, ele permite arredondar os cantos de um elemento. Podemos usar várias unidades, mas as mais comuns são os pixels e a porcentagem.

Colocando apenas um valor mudamos todos os cantos do elemento, mas seguindo aquela mesma ordem que vimos no **_padding_** e **_margin_** - topo, direita, inferior e esquerda -  conseguimos alterar cada canto separadamente.


## Fontes

### font-family

Com o font-family podemos alterar a fonte dos nossos textos, como uma fonte da internet ou uma que esteja instalada no nosso computador, mas vamos nos ater às fontes seguras, chamadas de web safe fonts.

Essas fontes são chamadas assim pois são encontradas em quases todos os sistemas e podem ser usadas sem preocupação.

### font-size

O font-size nos ajuda a mudar o tamanho do texto, existem algumas unidades de medida para ele mas por enquanto os pixels são suficientes para nós.

### font-style

Usamos o font-style para tornar um texto itálico, na maioria das vezes você usará apenas o valor _italic_ para ele, mas se precisar tirar o itálico de um texto você pode usar o valor _normal_.

## Listas

**list-style-type:**

Square

upper-roman

"\1F44D"

**list-style-image:**

url("path")

## Dimensões e alinhamento:

**Width**

largura do conteudo

**Height**

altura do conteudo

**Max-width**

largura maxima do conteudo

**Max-height**

altura maxima do conteudo

**margin**

Margem do conteudo

**text** **align**

Usado para alinhar o texto a algum parametro como esquerda, direita, centro ou justify.