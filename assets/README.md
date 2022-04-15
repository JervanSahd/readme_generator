<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>#${outPut.title}</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
  <h1 class="display-4">##${outPut.title}</h1>
    <h2 class="display-4">##${outPut.description}</h2>
    <ul class="list-group">
        <li class="list-group-item">##Installation: ${outPut.usage}</li>
        <li class="list-group-item">## Usage : ${outPut.usage}</li>
        <li class="list-group-item">## Contributing: ${outPut.contribution}</li>
        <li class="list-group-item">## Tests: ${outPut.test}</li>
    </ul>
  </div>
</div>
</body>
</html>`


## <h1>Description: ${outPut.description}</h1>
## Installation:
## Usage :${outPut.usage}
## Contributing: ${outPut.contribution}
## Tests: ${outPut.test}
