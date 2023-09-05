function adoptAnimal(id) {}

function deleteAnimal(id) {}

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

function deleteSpecies(url, id) {}

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
