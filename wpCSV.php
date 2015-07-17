<?php
	include_once('lectorCSV.php');

	$arrayPaquetes = array();
	$arrayPaquetes = loadDataFromCSV('http://...');

	$titulo;
	$enlaceInfo;
	$enlacePic;
	$enlaceReferencias;

	/*for($itePaquete = 1; $itePaquete < sizeof($arrayPaquetes); $itePaquete ++){
		$titulo = $arrayPaquetes[$itePaquete][0];
		$enlaceInfo = $arrayPaquetes[$itePaquete][1];
		$enlacePic = $arrayPaquetes[$itePaquete][2];
		$enlaceReferencias = $arrayPaquetes[$itePaquete][3];*/

		$elemento = '<section id="cta-section4">';
        $elemento .='	 <div class="cta">';
        $elemento .='	     <div class="container">';
        $elemento .='	         <div class="row">';
        $elemento .='	             <div class="page-header-wrapper first-section">';
        $elemento .='	                 <div class="container">';
        $elemento .='	                     <div class="page-header text-center wow fadeInUp" data-wow-delay="0.3s">';
        $elemento .='	                         <h2>Procedimientos</h2>';
        $elemento .='	                         <div class="devider"></div>';
        $elemento .='	                         <p class="subtitle"></p>';
        $elemento .='	                         <div class="responsive-iframe-container-procedimientos">';
        $elemento .='	                             <iframe src="https://docs.google.com/document/d/1rszg-eygEH579VyP4d3_KE_8HMXn_wwdUq3AMjRWB1c/pub?embedded=true" frameborder="1"></iframe>';
        $elemento .='	                         </div>';
        $elemento .='	                     </div>';
        $elemento .='	                 </div>';
        $elemento .='	             </div>';
        $elemento .='	         </div> ';
        $elemento .='	     </div>';
        $elemento .='	 </div>';
        $elemento .='</section>';
        $elemento .='<section id="cta-section2">';
        $elemento .='	<div class="page-header-wrapper">';
        $elemento .='		<div class="container">';
        $elemento .='		    <div class="page-header text-center wow fadeInUp" data-wow-delay="0.3s">';
        $elemento .='		        <h2>Recursos</h2>';
        $elemento .='		        <div class="devider"></div>';
        $elemento .='		        <div id="row" class="selectores-drive">';
        $elemento .='		            <button id="boton-vista-drive-file" class="btn btn-default"><span class="icon-file-text2"></span></button>';
        $elemento .='		            <button id="boton-vista-drive-list" class="btn"><span class="icon-list"></span></button>';
        $elemento .='		        </div>';
        $elemento .='		        <div class="extra-space-l"></div>';
        $elemento .='		        <div id="row">';
        $elemento .='		            <div class="responsive-iframe-container"><iframe id="iframe-recursos" src="https://drive.google.com/embeddedfolderview?id=0B777mNcRbpXNflFhSm96RzlJOTQ2c2hZUHNPSm5veVNiSFNDTEg0a1pEODNjTHNxdUFTX0k#grid" width="800" height="500" frameborder="1"></iframe></div>';
        $elemento .='		        </div>';
        $elemento .='		    </div>';
        $elemento .='		</div>';
        $elemento .='	 </div>';
        $elemento .='</section>  ';   
	
?>