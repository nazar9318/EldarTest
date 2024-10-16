import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { useAuth } from '../context/AuthContext';
import { userAdminStyles } from '../styles/UserAdminStyles';
import PageFooter from '../components/PageFooter';

const UserScreen: React.FC = () => {
  const { role, username } = useAuth();
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(0);

  useEffect(() => {
    if (role === 'user') {
      fetchData();
    }
  }, [role]);

  useEffect(() => {
    const calculateItemsPerPage = () => {
      const screenHeight = Dimensions.get('window').height;
      const itemHeight = 200;
      const calculatedItems = Math.floor(screenHeight / itemHeight);
      setItemsPerPage(calculatedItems > 0 ? calculatedItems : 1);
    };

    calculateItemsPerPage();
    const subscription = Dimensions.addEventListener('change', calculateItemsPerPage);
    return () => {
      subscription?.remove();
    };
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const result = await response.json();
      setData(result);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(data.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const paginateData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };

  if (loading) {
    return (
      <View style={userAdminStyles.loadingContainer}>
        <Text>Cargando...</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <Text style={userAdminStyles.welcomeText}>Bienvenido, {username}</Text>
      
      <ScrollView style={{ flexGrow: 1, flex: 1 }} contentContainerStyle={userAdminStyles.scrollContainer}>
        {role === 'user' ? (
          paginateData().map((item) => (
            <View key={item.id} style={userAdminStyles.itemContainer}>
              <Text style={userAdminStyles.title}>{item.title}</Text>
              <Text>{item.body}</Text>
            </View>
          ))
        ) : (
          <Text>No tienes permiso para ver estos datos.</Text>
        )}
      </ScrollView>

      <PageFooter 
        currentPage={currentPage} 
        totalPages={data.length / itemsPerPage}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
        disabledPrev={currentPage === 1}
        disabledNext={currentPage === (data.length / itemsPerPage)}
      />
    </View>
  );
}

export default UserScreen;
