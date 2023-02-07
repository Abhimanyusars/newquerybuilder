import React, { useState } from 'react';
import Content from './model/Content';
import Footer from './model/Footer';
import Header from './model/Header';

const MainQuery = ({ fieldOptions, criteriaOptions, onClose, onSubmit }) => {
    const [query, setQuery] = useState("");

  return (
    <div className="flex flex-col"
        style={{width: "100vw", height: "300vh", backgroundColor: "#1D2025"}}>
            <Header queryString={query} onClose={onClose}></Header>
            <Content 
            setQuery={setQuery}
            fieldOptions={fieldOptions}
            criteriaOptions={criteriaOptions}
                >

                </Content>
            <Footer onClose={onClose} onSubmit={onSubmit}></Footer>    
        </div>
  );
};

export default MainQuery;