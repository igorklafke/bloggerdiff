BloggerDiff
===========

Código para exibir diferença em post editado no blogger

##Instalação

Encontrar o texto

	<macro:include id='main-column-right-sections'

Inserir antes:

	<b:if cond='data:blog.pageType == &quot;item&quot;'>
 		<!-- corrected post -->
 		<div id='corrected_post'/>
	</b:if>

Encontrar

	</body>

Inserir antes:

	<!-- comment out below if you have jQuery library loaded already -->
	<script src='//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js'/>
	<script src='http://www.igorklafke.com/bloggerdiff/jsdiff.js'/>
	<script src='http://www.igorklafke.com/bloggerdiff/widgetcompare.js'/>
	<script>
	  // corrected post
	  if($(&#39;#corrected_post&#39;).length &gt; 0){
	    $(&#39;#corrected_post&#39;).correctedPost();
	  };
	</script>

Encontrar

	]]></b:skin>
	
Inserir antes:

	ins {
	  background: #e6ffe6;
	}
	del {
	  background: #ffe6e6;
	}