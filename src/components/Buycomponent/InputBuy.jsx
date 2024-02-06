import React, { useState } from "react";
import "./HeroBuy.scss";
import Buydata from "../../BuyData.json";
import ReactPaginate from "react-paginate";
import { Navigate } from "react-router-dom";

const InputBuy = () => {
  const [buyers, setBuyers] = useState(Buydata.slice(0, 36));
  const [pageNumber, setPageNumber] = useState(0);
  const [goToSubscribe, setGoTOSubscribe] = useState(false);
  const buyersPerPage = 9;
  const pagesVisited = pageNumber * buyersPerPage;
  if (goToSubscribe) {
    return <Navigate to="/Subscribe" />;
  }

  const displayBuyers = buyers
    .slice(pagesVisited, pagesVisited + buyersPerPage)
    .map((buyer) => {
      return (
        <div
          key={buyer.id}
          className="single-grid"
          onClick={() => setGoTOSubscribe(true)}
        >
          <img src={buyer.image} />
          <div className="flex">
            <h3>{buyer.pricing}</h3>
            <p>{buyer.cancelled}</p>
          </div>
          <p>{buyer.address}</p>
          <p>{buyer.description}</p>
        </div>
      );
    });

  const pageCount = Math.ceil(buyers.length / buyersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div className="wrapper">
      <div className="input-container">
        <div className="search">
          <input type="text" placeholder="Where would you prefer to live?" />
        </div>
        <select defaultValue="">
          <option value="hidden">Select price range</option>
          <option value="first option">#100,000</option>
          <option value="second option">#200,000</option>
          <option value="Third option">#300,000</option>
        </select>
        <select defaultValue="">
          <option value="hidden">Select </option>
          <option value="first option">1 plot</option>
          <option value="second option">2 plots</option>
          <option value="Third option">3 plots</option>
        </select>
      </div>
      <div className="input-container2">
        <select defaultValue="">
          <option value="hidden">Duration</option>
          <option value="first option">1 year</option>
          <option value="second option">2 years</option>
          <option value="Third option">3 years</option>
        </select>

        <button className="filter">Find Property</button>
      </div>
      <div className="grid-container">
        {" "}
        {displayBuyers}
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>
    </div>
  );
};

export default InputBuy;
