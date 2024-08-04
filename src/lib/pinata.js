import axios from 'axios';

const pinataApiKey = process.env.NEXT_PUBLIC_PINATA_API_KEY;
const pinataSecretApiKey = process.env.NEXT_PUBLIC_PINATA_SECRET_API_KEY;

export const uploadToIPFS = async (file) => {
  const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
  const formData = new FormData();
  formData.append('file', file);

  const response = await axios.post(url, formData, {
    maxBodyLength: 'Infinity', // this is needed to prevent axios from erroring out with large files
    headers: {
      'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
      'pinata_api_key': pinataApiKey,
      'pinata_secret_api_key': pinataSecretApiKey,
    },
  });

  return response.data;
};
