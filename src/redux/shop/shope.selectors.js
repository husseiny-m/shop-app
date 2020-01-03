import { createSelector } from 'reselect';

export const selectShop = (state) => state.shop;

export const selectShopCollections = createSelector([selectShop], (shop) => shop.collections);

export const selectShopCollectionsForPreview = createSelector(
  [selectShopCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])
);
export const selectShopCollection = (collectionId) => {
  return createSelector([selectShopCollections], (collections) => {
    return collections[collectionId];
  });
};
