<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Formulario</title>
</head>
<body>
    <form action="filterValidacao.php" method="POST">
        <label for="inNome">Nome : </label>
        <input type="text" name="nome" id="inNome">
        <br>
        <label for="inIdade">Idade : </label>
        <input type="text" name="idade" id="inIdade">
        <br>
        <label for="inEmail">Email : </label>
        <input type="email" name="email" id="inEmail">
        <br>
        <label for="inPeso">Peso : </label>
        <input type="text" name="peso" id="inPeso">
        <br>
        <label for="inIP">IP : </label>
        <input type="text" name="ip" id="inIP">
        <br>
        <label for="inURL">URL : </label>
        <input type="text" name="url" id="inURL">
        <br>
        <input type="submit" value="Enviar" name="enviar-formulario">
        <!-- ===== um formulario com method GET
        <button type="submit">Enviar</button>
    <form action="dados.php" method="GET">
        <a href="dados.php?idade=34&sobrenome=Pacheti">Enviar</a>    
        -->  
    </form>
</body>
</html>