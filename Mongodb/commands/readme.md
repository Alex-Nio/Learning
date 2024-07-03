Основные команды для работы с MongoDB можно разделить на несколько категорий: команды для работы с базами данных, коллекциями и документами. Вот список наиболее часто используемых команд:

### Управление базами данных
- `show dbs`: Показывает список всех баз данных.
- `use <database>`: Переключает на указанную базу данных или создает новую, если она не существует.
- `db`: Показывает текущую базу данных.
- `db.dropDatabase()`: Удаляет текущую базу данных.

### Управление коллекциями
- `show collections`: Показывает список всех коллекций в текущей базе данных.
- `db.createCollection("<collection>")`: Создает новую коллекцию.
- `db.<collection>.drop()`: Удаляет указанную коллекцию.
- `db.<collection>.renameCollection("<newName>")`: Переименовывает коллекцию.

### CRUD операции с документами
- `db.<collection>.insertOne(<document>)`: Вставляет один документ в коллекцию.
- `db.<collection>.insertMany([<document1>, <document2>, ...])`: Вставляет несколько документов в коллекцию.
- `db.<collection>.find(<query>)`: Находит документы в коллекции, соответствующие запросу.
- `db.<collection>.findOne(<query>)`: Находит один документ в коллекции, соответствующий запросу.
- `db.<collection>.updateOne(<filter>, <update>)`: Обновляет один документ, соответствующий фильтру.
- `db.<collection>.updateMany(<filter>, <update>)`: Обновляет все документы, соответствующие фильтру.
- `db.<collection>.replaceOne(<filter>, <replacement>)`: Заменяет один документ, соответствующий фильтру.
- `db.<collection>.deleteOne(<filter>)`: Удаляет один документ, соответствующий фильтру.
- `db.<collection>.deleteMany(<filter>)`: Удаляет все документы, соответствующие фильтру.

### Индексы
- `db.<collection>.createIndex(<keys>, <options>)`: Создает индекс для коллекции.
- `db.<collection>.getIndexes()`: Показывает все индексы коллекции.
- `db.<collection>.dropIndex(<indexName>)`: Удаляет индекс.

### Примеры использования
- Найти все документы в коллекции `courses`:
  ```javascript
  db.courses.find({});
  ```
- Вставить новый документ в коллекцию `courses`:
  ```javascript
  db.courses.insertOne({ name: "New Course", description: "Course Description" });
  ```
- Обновить документ в коллекции `courses`:
  ```javascript
  db.courses.updateOne({ name: "New Course" }, { $set: { description: "Updated Description" } });
  ```
- Удалить документ из коллекции `courses`:
  ```javascript
  db.courses.deleteOne({ name: "New Course" });
  ```

Эти команды помогут вам управлять базами данных, коллекциями и документами в MongoDB.
