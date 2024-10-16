import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PrevArrow from './PrevArrow';
import NextArrow from './NextArrow';
import { userAdminStyles } from '../styles/UserAdminStyles';

type PageFooterProps = {
  currentPage: number;
  totalPages: number;
  handlePrevPage: () => void;
  handleNextPage: () => void;
  disabledPrev: boolean;
  disabledNext: boolean;
};

const PageFooter: React.FC<PageFooterProps> = ({ 
  currentPage, 
  totalPages, 
  handlePrevPage, 
  handleNextPage, 
  disabledPrev, 
  disabledNext 
}) => {
  return (
    <View style={userAdminStyles.paginationContainer}>
      <PrevArrow onPress={handlePrevPage} disabled={disabledPrev} />
      <Text style={userAdminStyles.pageNumber}>Página {currentPage} de {totalPages}</Text>
      <NextArrow onPress={handleNextPage} disabled={disabledNext} />
    </View>
  );
};

export default PageFooter;
