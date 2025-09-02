import { useState } from "react";

const articles = [
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

                <li className="list-group-item" key={article.id}>
                  <h3>{article.title}</h3>
                  <div className="btn-danger"></div>
                </li>
                )
              })}
            </ul>

          </div>
          <div className="col-12">
            
                <div className="card">
                  <div className="card-header">
                    <h3>aggiungi articolo</h3>
                  </div>
                  <div className="card-body">
                    <input 
                      type="text" 
                      placeholder="new title"
                      
                    /> 
                    
                  <div className="card-footer">
                    <button 
                      className="btn btn-success
                    ">
                      inserisci
                    </button>
                  </div>
                </div>               
                
              
          </div>
        
        </div>
      </div>
    </div>
    
  )
}

export default App
