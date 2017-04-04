class NegociacoesView extends View{
	template(modelo) {
		return `
		    <table class="table table-hover table-bordered">
		        <thead>
		            <tr>
		                <th onclick="negociacaoController.ordena('data')">DATA <span id="ordenacao-data" class="indicador-ordenacao"></span></th>
		                <th onclick="negociacaoController.ordena('quantidade')">QUANTIDADE <span id="ordenacao-quantidade" class="indicador-ordenacao"></span></th>
		                <th onclick="negociacaoController.ordena('valor')">VALOR <span id="ordenacao-valor" class="indicador-ordenacao"></span></th>
		                <th onclick="negociacaoController.ordena('volume')">VOLUME <span id="ordenacao-volume" class="indicador-ordenacao"></span></th>
		            </tr>
		        </thead>
		        
		        <tbody>
		        	${modelo.negociacoes.map(n => 
							`<tr>
								<td>${DataHelper.dataParaTexto(n.data)}</td>
								<td>${n.quantidade}</td>
								<td>${n.valor}</td>
								<td>${n.volume}</td>									
							</tr>`
		        		).join("")}
		        </tbody>
		        <tfoot>
		        	<td colspan="3"></td>
		        	<td>${modelo.volumeTotal}</td>
		        </tfoot>
		    </table>
		`;
	}
}