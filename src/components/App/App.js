import React, { useState, useEffect, useCallback } from "react";
import { ProjectGrid } from "../ProjectGrid/ProjectGrid";
import { Pagination } from "../Pagination/Pagination";

const API_URL =
  "https://crm.server.pro-part.es/api/v1/secondary-projects/integration/projects";
const ACCESS_KEY = "A7gjfjj0WdBynt8d";
const SECRET_KEY = "tGH5UlZcgNtAPrfq9MnmMhWji9j5vYXn";
const PAGE_SIZE = 30;

const App = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const fetchData = useCallback(async (page) => {
    setLoading(true);
    setError(null);

    const controller = new AbortController();
    const signal = controller.signal;

    try {
      const url = new URL(API_URL);
      url.searchParams.append("accessKey", ACCESS_KEY);
      url.searchParams.append("secretKey", SECRET_KEY);
      url.searchParams.append("isPagination", "true");
      url.searchParams.append("size", PAGE_SIZE);
      url.searchParams.append("page", page);

      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
        signal,
      });

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("Data not found.");
        }
        if (response.status >= 500) {
          throw new Error("Server error. Please try again later.");
        }
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();

      if (!data.projects || !Array.isArray(data.projects)) {
        throw new Error("Invalid API response format.");
      }
      setProjects(data.projects);
      setTotalPages(data.totalPages || 0);
    } catch (error) {
      if (error.name !== "AbortError") {
        setError(error.message || "Unknown error");
      }
    } finally {
      setLoading(false);
    }

    return () => controller.abort();
  }, []);

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage, fetchData]);

  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div style={{ color: "red" }}>⚠ {error}</div>}
      {!loading && !error && projects.length > 0 && <ProjectGrid projects={projects} />}
      {!loading && !error && projects.length === 0 && (
        <div>No data available.</div>
      )}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default App;
