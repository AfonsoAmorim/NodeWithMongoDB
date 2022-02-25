
const mongodb=require('mongodb').MongoClient
const url="""

mongodb.connect(url,(erro,banco)=>{
    if(erro)throw erro
    const dbo=banco.db("Playlist")
    const obj={estilo:"Pagode",artista:"Revelação"}
    const colecao="musicas"
    
    dbo.collection(colecao).insertOne(obj,(erro,resultado)=>{
        if(erro)throw erro
        console.log("Inserido com sucesso")
        banco.close()
    })

    dbo.collection(colecao).find({}).toArray((erro,resultado)=>{
        if(erro)throw erro
        console.log(resultado)
        banco.close()
    })

    const query={estilo: /P./}
    dbo.collection(colecao).find(query, {projection:{_id:0}}).toArray((erro,resultado)=>{
        if(erro)throw erro
        console.log(resultado)
        banco.close()
    })





})