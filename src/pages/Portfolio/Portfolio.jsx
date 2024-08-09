import React, { useEffect, useState } from 'react'
import { FaRegEye } from 'react-icons/fa'

const Portfolio = () => {
    const[project,setProject]=useState([])
    const[filterProject,setFilterProject]=useState([])
    const[selectcategory,setSelectcategory]=useState('All')
    useEffect(()=>{
        fetch('projects.json').then(res=>res.json()).then(data=>{
            setProject(data);
            setFilterProject(data);
        })
    },[])
    const handleFilterClick=(category)=>{
        setSelectcategory(category)
        if (category==='All') {
            setFilterProject(project)
        }else{
            const filtered=project.filter(projects=>projects.category === category);
            setFilterProject(filtered)
        }
    }
  return (
    <section>
        <header>
            <h2 className="h2 article-title">Portfolio</h2>
        </header>
      {/* filter-section */}
      <ul className='filter-list'>
        {['All','PSD TO CODE','Api','React','Bootstrap','Application'].map(category=>(
            <li key={category} className='filter-item'>
                <button onClick={()=> handleFilterClick(category)} data-filter-btn className={category === selectcategory?'active':''}>{category}</button>
            </li>
        ))}
      </ul>
      {/* show portfolio data */}
      <section className='projects'>
<ul className='project-list'>
    {
        filterProject.map(projects =>(
            <li key={projects.id} className='project-item active'
            data-filter-item
            data-category={project.category}
            >
            <a href={projects.link}>
                <figure className='project-img'>
                    <div className='project-item-icon-box'>
                        <FaRegEye/>
                    </div>
                    <img src={projects.image} alt="" loading='lazy' />
                </figure>
                <h3 className='project-title'>{projects.title}</h3>
                <p className='project-category'>{projects.category}</p>
            </a>

           </li>
     ))
    }
</ul>
      </section>
    </section>
  )
}

export default Portfolio
