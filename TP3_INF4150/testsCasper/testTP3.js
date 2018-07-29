var casper = require('casper').create();

casper.start('file:///C:/Users/.../Desktop/TP3_INF4150/TP3_INF4150/ajouterMembres.html?', function() {
    this.echo(this.getTitle());
});

casper.run();