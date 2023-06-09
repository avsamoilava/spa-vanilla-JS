# Финальное задание

### Создать одностраничное приложение на нативном JavaScript.

#### 1. Аутентификация 

<p style="text-indent: 1em;"> При запуске приложения появляется страница входа пользователя (по email и паролю), должна быть также страница регистрации (email, пароль, совпадение паролей) </p>

<p style="text-indent: 1em;">(При регистрации новый пользователь сохраняется в массив, а при входе проверяется, есть ли такой пользователь в системе)</p>

  - Все поля должны быть обязательными для заполнения
  - На поле email должна быть проверка на формат email
  - Если поле не заполнено или неправильно заполнено, кнопка входа должна быть неактивна  и под полем должно появляться сообщение об ошибк  
  - если при входе не было найдено такого  пользователя, показывать сообщение об этом на экране
  - данные о входе (email) должны записываться при входе в localstorage и при следующем входе пользователь должен сразу попадать на основную страницу приложения

<p style="text-indent: 1em;">После входа/регистрации пользователь попадает на основной экран приложения, который содержит:</p>

  - меню приложения, в котором должны быть пункты “Главная”,  “Клиенты”, “Карта”, а также кнопка выхода из приложения
  - при открытии основного экрана в меню активен пункт “Главная”
активные пункты меню необходимо выделять, например, другим цветом или подчеркиванием

<p style="text-indent: 1em;">На главной странице должен выводиться приветственный текст, а также информация о том, с какого устройства пользователь открыл приложение.<p>

#### 2. Страница “Клиенты”

<p style="text-indent: 1em;">На странице необходимо отобразить таблицу (произвольный дизайн)</p>

<p style="text-indent: 1em;">Данные получить с помощью fetch запроса по ссылке -  https://gist.githubusercontent.com/oDASCo/3f4014d24dc79e1e29b58bfa96afaa1b/raw/677516ee3bd278f7e3d805108596ca431d00b629/db.json (массив объектов)</p>


<p style="text-indent: 1em;">В таблице вывести полученные данные:</p>

  - Имя
  - Компания
  - Email
  - Телефон
  - Баланс
  - Дата регистрации в формате dd.mm.yyyy

<p style="text-indent: 1em;">В зависимости от значения поля isActive - строка таблицы должна иметь различный цвет ( например,  для активных - белый, для неактивных - серый)</p>

<p style="text-indent: 1em;">Также на странице необходимо отобразить информацию (например, над таблицей):</p>

  - Количество мужчин/женщин (пройти по полученному массиву объектов и определить число)
  - Наибольший баланс 

<p style="text-indent: 1em;">Реализовать возможность удаления строки таблицы: добавить кнопку удаления в каждую строку - при нажатии на нее должно появляться модальное окно. </p>
<p style="text-indent: 1em;">Модальное окно должно содержать:</p>

  - Текст “вы действительно хотите удалить …. “ 
  - Кнопку “Подтвердить”, при нажатии на которую модальное окно закрывается и соответствующая строка таблицы удаляется
  - Кнопку “Отмена”, при нажатии на которую модальное окно закрывается

<p style="text-indent: 1em;">При удалении строки таблицы должно появиться информационное сообщение (уведомление) в правом нижнем углу страницы о том, что данные успешно удалены. В верхнем углу сообщения - кнопка закрытия уведомления. </p> 
<p style="text-indent: 1em;">В самом конце таблицы должна быть кнопка “вернуться к началу”, при нажатии на которую происходит прокрутка к началу страницы</p>

#### 3. Страница “Карта”

  - Отобразить на странице Google карту. 
  - Разместить на всю ширину страницы, сделать кастомные стили: рамки, отступы и тд.
  - Показать 15 маркеров со своими местами (маркеры размещаются по координатам широты и долготы) 
  - На клик по маркеру рядом с ним появляется карточка с информацией, например, название места
  - Использовать для реализации Google Maps API

Приложение нужно собрать с помощью Webpack - 1 или несколько файлов для запуска приложения. Подключить Babel, чтобы написанный JS код поддерживался различными браузерами. Также реализовать обработку, подгрузку CSS  ( или SCSS, LESS) с помощью Webpack.