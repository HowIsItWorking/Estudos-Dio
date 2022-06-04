SHA1 = Encriptação. Forma curta de representar um arquivo.

objetos do GIT:
	- BLOBS = "Blob L\0 conteudo" tem seu próprio SHA1
	- TREES = "Tree L\0 blob 13f0d2 name.type" recursivo ( pode apontar para outra Tree) e tem seu proprio SHA1 também
	- COMMITS = Aponta para uma Tree, Parente, Autor, Mensagem e Timestamp. Claro, também tem seu proprio Hash.

Tree V
![[Pasted image 20220530203944.png]]
Commit V
![[Pasted image 20220530204404.png]]
