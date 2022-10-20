import React, { useEffect, Suspense, lazy } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

// import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container'; 
// import CollectionPageContainer from '../collection/collection.container';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import Spinner from '../../components/spinner/spinner.component';

import { ShopPageContainer } from './shop.styles';

const CollectionPageContainer = lazy(()=> import('../collection/collection.container'))

const CollectionsOverviewContainer = lazy(()=> import('../../components/collections-overview/collections-overview.container'))


const ShopPage = ({ match, fetchCollectionsStart }) => {
  useEffect(()=> {
    fetchCollectionsStart()
  }, [fetchCollectionsStart])
    return (
      <ShopPageContainer>
        <Suspense fallback={<Spinner/>}>
      <Route exact path={`${match.path}`} component={CollectionsOverviewContainer}/>
      <Route path={`${match.path}/:collectionId`} 
      component={CollectionPageContainer} />
      </Suspense>
      </ShopPageContainer>
    );
  }





const mapDispatchToProps = dispatch => ({

  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})


export default connect(null, mapDispatchToProps)(ShopPage);