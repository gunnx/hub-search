import React from 'react';
import './Application.scss';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SearchPanel from '../SearchPanel/SearchPanel';

function Application () {
  return (
    <div className='application'>
      <Header />
      <main className='application__content'>
        <SearchPanel />
      </main>
      <Footer />
    </div>
  );
}

Application.propTypes = {};

export default Application;
