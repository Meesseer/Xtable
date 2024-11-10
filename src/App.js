import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [tableData, setTabledata] = useState(
[

  { date: "2022-09-01", views: 100, article: "Article 1" },

  { date: "2023-09-01", views: 100, article: "Article 1" },

  { date: "2023-09-02", views: 150, article: "Article 2" },

  { date: "2023-09-02", views: 120, article: "Article 3" },

  { date: "2020-09-03", views: 200, article: "Article 4" }

]
  )

  const handleDate = () =>{
    const sortedData = [...tableData].sort((a,b)=> new Date(b.date) - new Date(a.date))
    setTabledata(sortedData)
  }

  const handleViews = () => {
    const sortedViews = [...tableData].sort((a,b)=> b.views - a.views)
    setTabledata(sortedViews)
  }


  return (
    <div className="App">
      <h1>Date and Views Table</h1>
      <button onClick={handleDate}>Sort by Date</button>
      <button onClick={handleViews}>Sort by Views</button>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((value, index)=>(
            <tr key={index}>
              <td>{value.date}</td>
              <td>{value.views}</td>
              <td>{value.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
