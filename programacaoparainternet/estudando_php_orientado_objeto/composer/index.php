<?php /* a pasta vendor ficara os pacotes de terceiros 
         o arquivo autoload.php  ira carregar todos este pacotes   */
        
      require_once 'vendor/autoload.php';
      //namescape use indica a class que vamos usar
      use Cocur\Slugify\Slugify;

      $slug =  new Slugify();
      echo $slug->slugify('teste com acentuação para geração de slug');
      $slug->addRule('ão', 'erro');
      echo "<br>".$slug->slugify('teste com acentuação para geração de slug','_');

      

/**OBS comando do composer para rodar o autoload "composer dump-autoload" */
?>