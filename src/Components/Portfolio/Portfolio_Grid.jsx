import TrophyTile from "../Home/Trophy/TrophyTile";
import projects from "../../json/Projects.json";

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';




function getItems(givenTag) {
  return projects
    .filter(item => givenTag === "All" || item.tag === givenTag)
    .map(item => (
      <TrophyTile 
        key={item.id}
        title={item.title}
        link={item.link}
        image={item.image}
        skills={item.skills}
      />
    ));
    // Add functionality here for article tiles down the road => if tag is article, <ArticleTile>
}


export default function Portfolio_Grid({ tag }) {


  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 12;
  const [activeTag, setActiveTag] = useState("All");

  if(activeTag != tag){
    setCurrentPage(0);
    setActiveTag(tag);
  }
  const offset = currentPage * itemsPerPage;
  // console.log(`Loading items from page ${currentPage} to offset ${offset}`);
  const items = getItems(activeTag);
  const currentItems = items.slice(offset, offset + itemsPerPage);

  
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };
  

  return (
    <section
      id="projects"
      className="block  ml-auto mr-auto md:py-12 py-6  dark:bg-muted/0 px-2 md:px-0"
    >
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-2 md:gap-4 mb-4">
        {currentItems}
      </div>



      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={Math.ceil(items.length / itemsPerPage)}
        marginPagesDisplayed={0}
        pageRangeDisplayed={0}
        onPageChange={handlePageChange}
        forcePage={currentPage}
        containerClassName={
          "flex justify-center gap-7 items-center  text-md"
        }
        activeClassName={
          "bg-transparent   text-white rounded-lg font-medium py-2"
        }
        pageLinkClassName={
          "bg-transparent text-white/90 border border-zinc-900 rounded-lg font-medium px-3 py-2"
        }
        previousLinkClassName={
          "bg-white/20 text-white/70 lg:px-4 px-3 text-lg lg:text-base py-2 rounded-lg font-medium"
        }
        nextLinkClassName={
          "bg-white/20 text-white/70 lg:px-4 px-3 text-lg lg:text-base py-2 rounded-lg font-medium"
        }
        disabledClassName={"pointer-events-none opacity-50"}
      />
    </section>
  );
}
