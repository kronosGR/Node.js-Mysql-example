const dateFromString = (dat) => {
  let dt = dat.split('-');
  let date = new Date();
  date.setFullYear(dt[0]);
  date.setMonth(dt[1] - 1);
  date.setDate(dt[2]);
  return date;
};

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

async function addSpecie(url) {
  let newTemp = prompt('Name for Specie');
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
  return 'Specie Added';
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

$(document).ready(function () {
  $('#searchDiv').hide();

  $('#searchLink').click(function () {
    $('#searchDiv').toggle();
  });

  $('#searchForm').submit(function (e) {
    e.preventDefault();

    $('#table > div').each(function () {
      $(this).show();
    });
    let from = $('#from').val();
    let to = $('#to').val();

    if (from != '' && to != '') {
      let dateFrom = new Date(from);
      let dateTo = new Date(to);

      $('#table > div').each(function () {
        let date = dateFromString($(this).find('#BirthDate').text().trim());

        if (date < dateFrom || date > dateTo) {
          $(this).hide();
        }
      });
    } else {
      $('#table > div').each(function () {
        $(this).show();
      });
    }
  });
});
