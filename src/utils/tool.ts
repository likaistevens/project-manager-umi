export const getBase64 = (file: any): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

export const isVideoFile = (file: any) => {
  const acceptedFormats = ['mp4', 'avi', 'mov'];
  const fileExtension = file.name.split('.').pop().toLowerCase();
  return acceptedFormats.includes(fileExtension);
};
