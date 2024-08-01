export const saveContactData = (data: { name: string; email: string; message: string }) => {
    const existingData = JSON.parse(localStorage.getItem('contactData') || '[]');
    const updatedData = [...existingData, data];
    localStorage.setItem('contactData', JSON.stringify(updatedData));
  };
  
  export const getContactData = () => {
    return JSON.parse(localStorage.getItem('contactData') || '[]');
  };
  