import { useState,useEffect } from "react";

const initialArticles = [
  {
    id : 1,
    title: "articolo 1",
    description : "descrizione articolo 1"
  },
  {
    id : 2,
    title: "articolo 2",
    description : "descrizione articolo 2"
  },
  {
    id : 3,
    title: "articolo 3",
    description : "descrizione articolo 3"
  },
  {
    id : 4,
    title: "articolo 4",
    description : "descrizione articolo 4"
  },
  {
    id : 5,
    title: "articolo 5",
    description : "descrizione articolo 5"
  },
  {
    id : 6,
    title: "articolo 6",
    description : "descrizione articolo 6"
  },
]

function App() {
  const [newArticle , setNewArticle] = useState("");
  const [articles, setArticles] =useState(initialArticles)
 
 
  const handleSubmit=(e)=>{
    e.preventDefault();
    let newId=0;
    if (articles.length==0){
      newId=1;
    }
    else {newId=articles[articles.length -1 ].id+1}
    
    const newEntry={
      id: newId,
      title:newArticle,
      description:`descrizione articolo ${newId}`
    }
    
    setArticles([...articles, newEntry])
    
    alert("articolo salvato")
  }

  const handleDelete= (id) =>{
   
    const newArray=articles.filter((article) => { return article.id!=id})
    
     setArticles(newArray)
   
  }

 
  return (
   
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>lista articoli</h1>
          </div>
          <div className="col-12">
            <ul className="list-group list-unstyled">
              {articles.map((article)=>{
                return(

                <li className="list-group-item d-flex justify-content-between" key={article.id}>
                  <h3>{article.title}</h3>
                  <button className="btn btn-danger"
                    onClick={()=> handleDelete(article.id)}>elimina</button>
                </li>
                )
              })}
            </ul>

          </div>
          <div className="col-12">
            
              <form onSubmit={handleSubmit}>
             <div className="d-flex mt-3">
                <input type="text" className="form-control me-2" placeholder="inserisci articolo" 
                value={newArticle}
                onChange={(e)=> {
                  setNewArticle(e.target.value)
                }}/>
                <button className="btn btn-success">aggiungi</button>
              </div>             
              </form>
                
              
          </div>
        
        </div>
      </div>
    
    
  )
}

export default App
