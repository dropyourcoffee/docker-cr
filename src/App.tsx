import React from "react";
import { Route, BrowserRouter as Router,  Routes} from 'react-router-dom';
import Layout from "@containers/Layout";
import MainBody from "@containers/MainBody";
import MainPage from "@pages/Main";
import ImagePage from "@pages/Image";
import HistoryPage from "@pages/Image/History";
import Header from "@components/organisms/Header";

function App() {

  return (
    <div className="App">
      <Router>
        <Layout>
          <Header/>
          <MainBody>
            <Routes>  {/* Group of routes */}
              <Route path="/" element={<MainPage/>} />
              <Route path="/im/:im" element={<ImagePage/>} />
              <Route path="/im/:im/history" element={<HistoryPage/>} />
            </Routes>
          </MainBody>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
