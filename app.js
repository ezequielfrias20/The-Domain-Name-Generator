var pronoun = ['the','our'];
var adj = ['great', 'big' ];
var noun = ['jogger','racoon'];
var ext = ['.com' , '.net' , '.us' , '.io']

function DomainNameGenerator (pronoun,adj,noun,ext){

    for (let i=0;i<pronoun.length;i++){
        for (let a=0 ; a<adj.length;a++){
            for (let e=0 ; e<noun.length;e++){
                for (let o=0 ; o<ext.length;o++){
                    console.log (pronoun[i]+adj[a]+noun[e]+ext[o]);
                };
            };
        };
    };
    

};

DomainNameGenerator(pronoun,adj,noun,ext);