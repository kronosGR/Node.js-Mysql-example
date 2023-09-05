function adoptAnimal(id) {}

function deleteAnimal(id) {}

function updateSpecies(id) {
  newSpecies = prompt('Update species');
}

function deleteSpecies(id) {}

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
