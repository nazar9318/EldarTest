import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, FlatList, Alert, Dimensions } from 'react-native';
import { useAuth } from '../context/AuthContext';
import { userAdminStyles } from '../styles/UserAdminStyles';
import PageFooter from '../components/PageFooter';
import AdminTextInput from '../components/AdminTextInput';

const AdminScreen: React.FC = () => {
  const { role } = useAuth();
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const [editMode, setEditMode] = useState<boolean>(false);
  const [editId, setEditId] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(0);

  useEffect(() => {
    if (role === 'admin') {
      fetchData();
    }
  }, [role]);


  useEffect(() => {
    const calculateItemsPerPage = () => {
      const screenHeight = Dimensions.get('window').height;
      const itemHeight = 300;
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

  const handleAddOrEdit = () => {
    if (title === '' || body === '') {
      Alert.alert('Error', 'Por favor, completa todos los campos.');
      return;
    }

    if (editMode && editId !== null) {
      const updatedData = data.map((item) =>
        item.id === editId ? { ...item, title, body } : item
      );
      setData(updatedData);
      setEditMode(false);
      setEditId(null);
    } else {
      const newItem = {
        id: data.length + 1,
        title,
        body,
      };
      setData([...data, newItem]);
    }

    setTitle('');
    setBody('');
  };

  const handleEdit = (item: any) => {
    setTitle(item.title);
    setBody(item.body);
    setEditMode(true);
    setEditId(item.id);
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
    <View style={userAdminStyles.container}>
      <Text style={userAdminStyles.title}>Hola Admin, a continuación podrá ver los datos traídos de la API, divididos en tarjetas, podrá crear nuevas o editar las existentes. Tome su rol con responsabilidad ya que todo lo que agregue o edite será leído por otras personas. ¡Mucha suerte!</Text>
      
      <AdminTextInput
        style={userAdminStyles.input}
        placeholder="Título"
        value={title}
        onChangeText={setTitle}
      />
      <AdminTextInput
        style={userAdminStyles.input}
        placeholder="Cuerpo"
        value={body}
        onChangeText={setBody}
      />
      <Button title={editMode ? "Actualizar" : "Agregar"} onPress={handleAddOrEdit} />
      
      <FlatList
        data={paginateData()}
        style={{marginTop: 10}}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={userAdminStyles.itemContainer}>
            <Text style={userAdminStyles.title}>{item.title}</Text>
            <Text>{item.body}</Text>
            <Button title="Editar" onPress={() => handleEdit(item)} />
          </View>
        )}
      />

      <PageFooter 
        currentPage={currentPage} 
        totalPages={Math.ceil(data.length / itemsPerPage)}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
        disabledPrev={currentPage === 1}
        disabledNext={currentPage === (data.length / itemsPerPage)}
      />
    </View>
  );
};

export default AdminScreen;
