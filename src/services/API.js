const URI = "https://api.quicksell.co/v1/internal/frontend-assignment";

const getData = async () => {
  try {
    const response = await fetch(URI);

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getData;
