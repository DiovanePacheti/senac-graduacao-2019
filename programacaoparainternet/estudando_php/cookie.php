<?php
// COOKIE
setcookie('user', 'nomeDoUsuario', time()+3600);
setcookie('idade', '34', time()+3600);
setcookie('ultima_pesquisa', 'Grêmio', time()+3600);

var_dump($_COOKIE);

echo "<br>".$_COOKIE['ultima_pesquisa'];