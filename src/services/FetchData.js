export default (url) => {
  return fetch(url)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw Error(
          `There was an error when trying to fetch the data (${res.status})`
        );
      }
    })
    .then((data) => {
      return { data, error: null };
    })
    .catch((error) => {
      return { data: [], error };
    });
};
