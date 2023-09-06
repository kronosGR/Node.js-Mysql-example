async function adoptAnimal(url, id, userId) {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      Id: id,
      UserId: userId,
    }),
  });
  location.reload();
  return 'Animal Adopted';
}

async function deleteAnimal(url, id) {
  const res = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      Id: id,
    }),
  });
  location.reload();
  return 'Adoption Canceled';
}

async function updateSpecies(url, id) {
  let newSpecies = prompt('Update species');
  const res = await fetch(url + '/update', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      Id: id,
      Name: newSpecies,
    }),
  });
  location.reload();
  return 'Specie Updated';
}

async function deleteSpecies(url, id) {
  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      Id: id,
    }),
  });
  location.reload();
  return 'Specie Deleted';
}

async function updateTemperament(url, id) {
  let newTemperament = prompt('Update temperament');
  const response = await fetch(url + '/update', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      Id: id,
      Name: newTemperament,
    }),
  });
  location.reload();
  return 'Temperament Updated';
}

async function addTemperament(url) {
  let newTemp = prompt('Name for temperament');
  console.log('-----------------------------', url);
  const res = await fetch(url + '/add', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      Name: newTemp,
    }),
  });
  location.reload();
  return 'Temperament Added';
}

async function deleteTemperament(url, id) {
  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      Id: id,
    }),
  });
  location.reload();
  return 'Temperament Deleted';
}
