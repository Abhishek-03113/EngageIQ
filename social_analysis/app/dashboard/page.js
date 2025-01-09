"use client";

import { useState, useEffect } from "react";


import { Button } from "@/components/ui/button";
import { ChevronUp, ChevronDown } from "lucide-react";
import ChartComponent from "@/components/Chart";
import Chatbot from "@/components/ChatBot";
import Dropdown from "@/components/DropDown";



export default function Dashboard() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [postType, setPostType] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [dateRange, setDateRange] = useState({ startDate: "", endDate: "" });
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "" });
  const [rowsPerPage, setRowsPerPage] = useState(50);
  const [currentPage, setCurrentPage] = useState(1);
  const [minDate, setMinDate] = useState("");
  const [maxDate, setMaxDate] = useState("");

  

  // Fetching Data from JSON
  useEffect(() => {
    fetch("/Data.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setFilteredData(data);

        // get min and max date
        const dates = data.map((post) => new Date(post.posted_at));
        const min = new Date(Math.min(...dates));
        const max = new Date(Math.max(...dates));

        setMinDate(min.toISOString().split("T")[0]);
        setMaxDate(max.toISOString().split("T")[0]);
      });
  }, []);

  useEffect(() => {
    let result = data;

    // Filtering logic
    if (postType) {
      result = result.filter((post) => post.post_type === postType);
    }

    if (searchQuery) {
      result = result.filter((post) =>
        String(post.likes).includes(searchQuery)
      );
    }

    if (dateRange.startDate && dateRange.endDate) {
      const start = new Date(dateRange.startDate);
      const end = new Date(dateRange.endDate);
      result = result.filter((post) => {
        const postedAt = new Date(post.posted_at);
        return postedAt >= start && postedAt <= end;
      });
    }

    setFilteredData(result);
  }, [postType, searchQuery, dateRange, data]);

  // Sorting logic
  const sortData = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });

    const sortedData = [...filteredData].sort((a, b) => {
      if (direction === "asc") {
        return a[key] > b[key] ? 1 : -1;
      }
      return a[key] < b[key] ? 1 : -1;
    });

    setFilteredData(sortedData);
  };

  // Pagination logic
  const paginatedData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  // Clear filters
  const clearFilters = () => {
    setPostType("");
    setSearchQuery("");
    setDateRange({ startDate: "", endDate: "" });
    setFilteredData(data);
  };

  return (
    <div className="relative mb-6">


      <div className="flex justify-between items-start mb-4">
        <h2 className="text-2xl font-semibold text-gray-900">Dashboard Overview</h2>

        <Chatbot />
      </div>



      {/* Visualization */}
      <ChartComponent data={data} />

      {/* 
      <Chatbot /> */}

      {/* Filter Section */}
      <div className="flex flex-col  space-x-4 space-y-2 items-center overflow-x-auto p-1 mb-2 md:flex-row">
        <Dropdown
          value={postType}
          onChange={setPostType}
          options={["Image", "Video", "Reel", "Carousel"]}
          label="Filter by Post Type"

        />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by likes"
          className="border border-gray-300 rounded p-2"

        />
        <input
          type="date"
          value={dateRange.startDate}
          onChange={(e) =>
            setDateRange({ ...dateRange, startDate: e.target.value })
          }
          min={minDate}
          max={maxDate}
          className="border border-gray-300 rounded p-2"
        />
        <input
          type="date"
          value={dateRange.endDate}
          onChange={(e) =>
            setDateRange({ ...dateRange, endDate: e.target.value })
          }
          min={minDate}
          max={maxDate}
          className="border border-gray-300 rounded p-2"
        />

        {/* Rows per Page */}
        <div className="flex items-center space-x-4">
          <span>Rows per page:</span>
          <Dropdown
            value={rowsPerPage}
            onChange={(value) => setRowsPerPage(Number(value))}
            options={[50, 100]}
          />
        </div>

        <Button onClick={clearFilters}>Clear Filters</Button>
      </div>

      {/* Data Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">Post Type</th>
              <th className="p-2 border cursor-pointer flex" onClick={() => sortData("likes")}>
                Likes

                <div className="ml-2">

                  {sortConfig.key === "likes" && (

                    sortConfig.direction === "asc" ? <ChevronUp /> : <ChevronDown />
                  )}
                </div>
              </th>

              <th className="p-2 border cursor-pointer" onClick={() => sortData("comments")}>

                <div className="flex">
                  Comments


                  <div className="ml-2">

                    {sortConfig.key === "comments" && (

                      sortConfig.direction === "asc" ? <ChevronUp /> : <ChevronDown />
                    )}
                  </div>
                </div>
              </th>
              <th className="p-2 border cursor-pointer" onClick={() => sortData("shares")}>

                <div className="flex">
                  Shares
                  <div className="ml-2">

                    {sortConfig.key === "shares" && (

                      sortConfig.direction === "asc" ? <ChevronUp /> : <ChevronDown />
                    )}
                  </div>

                </div>
              </th>


              <th className="p-2 border cursor-pointer" onClick={() => sortData("impressions")}>

                <div className="flex">
                  Impressions
                  <div className="ml-2">

                    {sortConfig.key === "impressions" && (

                      sortConfig.direction === "asc" ? <ChevronUp /> : <ChevronDown />
                    )}
                  </div>

                </div>
              </th>

              <th className="p-2 border cursor-pointer" onClick={() => sortData("reach")}>
                <div className="flex">
                  Reach
                  <div className="ml-2">

                    {sortConfig.key === "reach" && (

                      sortConfig.direction === "asc" ? <ChevronUp /> : <ChevronDown />
                    )}
                  </div>
                </div>
              </th>

              <th className="p-2 border cursor-pointer" onClick={() => sortData("save_count")}>

                <div className="flex">
                  Save Count
                  <div className="ml-2">

                    {sortConfig.key === "save_count" && (

                      sortConfig.direction === "asc" ? <ChevronUp /> : <ChevronDown />
                    )}
                  </div>
                </div>
              </th>


              <th className="p-2 border cursor-pointer" onClick={() => sortData("posted_at")}>
                <div className="flex">
                  Posted At
                  <div className="ml-2">

                    {sortConfig.key === "posted_at" && (

                      sortConfig.direction === "asc" ? <ChevronUp /> : <ChevronDown
                      />
                    )}
                  </div>

                </div>
              </th>

            </tr>
          </thead>
          <tbody>
            {paginatedData.map((post) => (
              <tr key={post.post_id}>
                <td className="p-2 border">{post.post_type}</td>
                <td className="p-2 border">{post.likes}</td>
                <td className="p-2 border">{post.comments}</td>
                <td className="p-2 border">{post.shares}</td>
                <td className="p-2 border">{post.impressions}</td>
                <td className="p-2 border">{post.reach}</td>
                <td className="p-2 border">{post.save_count}</td>
                <td className="p-2 border">{new Date(post.posted_at).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <Button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <Button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
