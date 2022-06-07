import { useState, useEffect } from 'react';
import Card from './../Card/Card';
const MainPage = () => {
  const [data, setData] = useState(null)
  const [search, setSearch] = useState('')

  useEffect(async () => {
    const fetchData = async () => {
      const res = await fetch(
        'https://breakingbadapi.com./api/characters'
      )
      const json = await res.json()
      //console.log({json})
      console.table(json)
      setData(json)
    };
    fetchData()
  }, [])

  const filter = (seachBy) => {
    setSearch(seachBy)
  }
  return (
    <div className="MainPage">
      <input type="text"
        placeholder='Walter'
        onChange={(e) => filter(e.target.value)}
        className='form-control' />

      <div className="row">
        
        {data && data.map((item, index) => {
          if(item.name.toLowerCase().includes(search.toLowerCase())) {
            return (
              <div className="col-md-4 col-xs-12" key={index}>
                <Card personaje={item}>

                </Card>
              </div>
            )
          }
        })}
      

      </div>
    </div>
  )
};



export default MainPage;
