document.addEventListener('DOMContentLoaded', function () {
  const rootElement = document.getElementById('root');
  const filmsList = document.createElement('ul');
  let currentAddForm = null;
  let currentEditForm = null;
  let currentFilmContainer = null;
  initialURL = window.location.href;
  const historyURL = [];
  historyURL.push(initialURL);


 

  function renderFilmsList() {
    initializeFilms();
    updateFilmList();

    const addFilmButton = document.createElement('button');
    addFilmButton.textContent = 'Додати фільм';
    addFilmButton.addEventListener('click', () => showAddFilmForm());
    rootElement.appendChild(filmsList);
    rootElement.appendChild(addFilmButton);
  }

  function initializeFilms() {
    if (localStorage.getItem('films') === null) {
      localStorage.setItem('films', JSON.stringify(initialFilms));
    }
  }

  function updateFilmList(films) {
    const storedFilms = JSON.parse(localStorage.getItem('films')) || [];
    filmsList.innerHTML = '';

    storedFilms.forEach((film) => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
          <span class="film-title">${film.title}</span>
          <button class="edit-btn" data-id="${film.id}">Редагувати</button>
        `;

      const titleElements = listItem.querySelectorAll('.film-title');
      titleElements.forEach((titleElement) => {
        titleElement.addEventListener('click', (event) => {
          event.stopPropagation();
          showFilmDetails(film.id)
        });
        titleElement.style.cursor = "pointer";
      });

      listItem.querySelector('.edit-btn').addEventListener('click', () => showEditFilmForm(film.id));
      filmsList.appendChild(listItem);
    });
  }


  function showAddFilmForm() {

    const currentURL = window.location.href; 


    let newURL;
    if (currentURL.includes('#')) {
      const baseURL = currentURL.split('#')[0].split('?')[0];
      newURL = `${baseURL}#add`; 
      console.log(newURL);
    } else {
      newURL = `${currentURL}#add`;
      console.log(newURL); 
    }


    historyURL.push(newURL);
    window.history.pushState(null, null, newURL);








    // window.location.hash = '#add';
    // historyURL.push(window.location.href);

    if (currentEditForm && currentEditForm.parentNode === rootElement) {
      rootElement.removeChild(currentEditForm);
    }

    if (currentAddForm && currentAddForm.parentNode === rootElement) {
      rootElement.removeChild(currentAddForm);
    }

    if (currentFilmContainer && currentFilmContainer.parentNode === rootElement) {
      rootElement.removeChild(currentFilmContainer);
    }

    const form = document.createElement('form');
    form.innerHTML = `
        <label for="title">Назва фільму:</label>
        <input type="text" id="title" name="title" required>

        <label for="author">Автор:</label>
        <input type="text" id="author" name="author" required>

        <label for="imageUrl">Посилання на картинку:</label>
        <input type="url" id="imageUrl" name="imageUrl" required>

        <label for="plot">Короткий опис:</label>
        <textarea id="plot" name="plot" rows="4" required></textarea>

        <div>
          <button type="button" onclick="saveFilm()">Зберегти</button>
          <button type="button" onclick="cancelFilm()">Відмінити</button>
        </div>
      `;

    rootElement.appendChild(form);

    currentAddForm = form;
  }


  window.saveFilm = function () {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const imageUrl = document.getElementById('imageUrl').value;
    const plot = document.getElementById('plot').value;

    if (!title || !author || !imageUrl || !plot) {
      alert('Заповніть всі поля форми.');
      return;
    }

    const imageUrlPattern = /^(https?):\/\/\S+\.(jpg|jpeg|png|gif)$/i;
    if (!imageUrlPattern.test(imageUrl)) {
      alert('Введіть коректне посилання на картинку.');
      return;
    }

    const existingFilms = JSON.parse(localStorage.getItem('films')) || [];

    const newFilmId = generateUniqueId(existingFilms);

    const newFilm = {
      id: newFilmId,
      title: title,
      author: author,
      imageUrl: imageUrl,
      plot: plot,
    };

    existingFilms.push(newFilm);

    localStorage.setItem('films', JSON.stringify(existingFilms));

    showFilmDetails(newFilm.id);

    updateFilmList();

    alert('Фільм успішно додано!');

  };

  function generateUniqueId(films) {
    const filmIds = films.map(film => parseInt(film.id));
    const maxId = Math.max(...filmIds);
    const newId = maxId + 1;
    return newId.toString();
  }


  function showFilmDetails(filmId) {

    const existingFilms = JSON.parse(localStorage.getItem('films')) || [];
    const index = filmId - 1;

    if (index >= 0 && index < existingFilms.length) {


      const currentURL = window.location.href; 

      let newURL;
      if (currentURL.includes('#')) {
        const baseURL = currentURL.split('#')[0].split('?')[0];
        newURL = `${baseURL}?id={${filmId}}#preview`; 
        console.log(newURL);
      } else {
        newURL = `${currentURL}?id={${filmId}}#preview`;
        console.log(newURL); 
      }

      historyURL.push(newURL);
      window.history.pushState(null, null, newURL);



      // window.location.hash = `?id={${filmId}}#preview`;
      // historyURL.push(window.location.href);

      const film = existingFilms[index];

      if (currentEditForm && currentEditForm.parentNode === rootElement) {
        rootElement.removeChild(currentEditForm);
      }

      if (currentAddForm && currentAddForm.parentNode === rootElement) {
        rootElement.removeChild(currentAddForm);
      }

      if (currentFilmContainer && currentFilmContainer.parentNode === rootElement) {
        rootElement.removeChild(currentFilmContainer);
      }

      const filmContainer = document.createElement('div');

      const titleElement = document.createElement('h2');
      titleElement.textContent = film.title;
      filmContainer.appendChild(titleElement);

      const authorElement = document.createElement('p');
      authorElement.textContent = `Автор: ${film.author}`;
      filmContainer.appendChild(authorElement);

      const imageElement = document.createElement('img');
      imageElement.src = film.imageUrl;
      filmContainer.appendChild(imageElement);

      const plotElement = document.createElement('p');
      plotElement.textContent = film.plot;
      filmContainer.appendChild(plotElement);

      rootElement.appendChild(filmContainer);
      currentFilmContainer = filmContainer;
    } else {
      console.error(`Фільм з ідентифікатором ${filmId} не знайдено.`);
    }
  }



  function showEditFilmForm(filmId) {

    const existingFilms = JSON.parse(localStorage.getItem('films')) || [];

    const index = filmId - 1;

    if (index >= 0 && index < existingFilms.length) {


      const currentURL = window.location.href; 

      let newURL;
      if (currentURL.includes('#')) {
        const baseURL = currentURL.split('#')[0].split('?')[0];
        newURL = `${baseURL}?id={${filmId}}#edit`; 
        console.log(newURL);
      } else {
        newURL = `${currentURL}?id={${filmId}}#edit`; 
        console.log(newURL);
      }
    

      historyURL.push(newURL);
      window.history.pushState(null, null, newURL);


      let film = existingFilms[index];

      if (currentEditForm && currentEditForm.parentNode === rootElement) {
        rootElement.removeChild(currentEditForm);
      }

      if (currentAddForm && currentAddForm.parentNode === rootElement) {
        rootElement.removeChild(currentAddForm);
      }

      if (currentFilmContainer && currentFilmContainer.parentNode === rootElement) {
        rootElement.removeChild(currentFilmContainer);
      }

      const form = document.createElement('form');

      form.innerHTML = `
          <label for="title">Назва фільму:</label>
          <input type="text" id="title" name="title" value = ${film.title} required>

          <label for="author">Автор:</label>
          <input type="text" id="author" name="author" value = ${film.author} required>

          <label for="imageUrl">Посилання на картинку:</label>
          <input type="url" id="imageUrl" name="imageUrl" value = ${film.imageUrl} required>

          <label for="plot">Короткий опис:</label>
          <textarea id="plot" name="plot" rows="4" required>${film.plot}</textarea>

          <div>
            <button type="button" onclick="editFilm(${film.id})">Зберегти</button>
            <button type="button" onclick="cancelFilm()">Відмінити</button>
          </div>
        `;

      rootElement.appendChild(form);

      currentEditForm = form;
    } else {
      console.error(`Фільм з ідентифікатором ${filmId} не знайдено.`);
    }
  }


  window.editFilm = function (filmId) {

    const newTitle = document.getElementById('title').value;
    const newAuthor = document.getElementById('author').value;
    const newImageUrl = document.getElementById('imageUrl').value;
    const newPlot = document.getElementById('plot').value;


    if (!title || !author || !imageUrl || !plot) {
      alert('Заповніть всі поля форми.');
      return;
    }

    const imageUrlPattern = /^(https?):\/\/\S+\.(jpg|jpeg|png|gif)$/i;
    if (!imageUrlPattern.test(newImageUrl)) {
      alert('Введіть коректне посилання на картинку.');
      return;
    }

    const existingFilms = JSON.parse(localStorage.getItem('films')) || [];

    const editFilm = {
      id: filmId,
      title: newTitle,
      author: newAuthor,
      imageUrl: newImageUrl,
      plot: newPlot,
    };

    existingFilms[filmId - 1] = editFilm

    localStorage.setItem('films', JSON.stringify(existingFilms));

    showFilmDetails(editFilm.id);

    updateFilmList();

    alert('Фільм успішно оновлено!');
  };


// треба переробити так щоб показувало те що було перед ним
  window.cancelFilm = function () {
    let permission = confirm('Скасувати зміни?');
    if (permission) {
      console.log(historyURL);
      const previousURL = historyURL.pop();
      const currentURL = historyURL.pop();
      if (historyURL.length > 0) {
        if (currentURL.includes(`#add`)) {
          showAddFilmForm();
          window.location.href = currentURL;
          console.log(historyURL);
        }
        else if (typeof currentURL === 'string' && currentURL.includes('?id=')) {

          let filmId = currentURL.split('={')[1].split('}#')[0];
          if (currentURL.includes('#edit')) {
            showEditFilmForm(filmId);
            window.location.href = currentURL;
            console.log(historyURL);
          } else if (currentURL.includes('#preview')) {
            showFilmDetails(filmId); 
            window.location.href = currentURL;
            console.log(historyURL);
          }
        } else {
          window.location.href = currentURL;
        }
      } else {
        window.location.href = currentURL;
      }
    }
  };



  // window.addEventListener('popstate', function(event) {
  //   var newURL = event.currentTarget.location.href;
    
  //   if (newURL.includes('#edit')) {
  //       var filmId = newURL.split('={')[1].split('}#')[0];
  //       showEditFilmForm(filmId);
  //   } else if (newURL.includes('#preview')) {
  //       var filmId = newURL.split('={')[1].split('}#')[0];
  //       showFilmDetails(filmId);
  //   } else if (newURL.includes('#add')) {
  //       showAddFilmForm();
  //   } else {
  //       renderFilmsList();
  //   }
  // });


  renderFilmsList();
  

});
