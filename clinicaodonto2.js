var dataRef = new Firebase(
  "https://clinicaodonto-78fd0-default-rtdb.firebaseio.com/"
);

dataRef.on("value", function (snapshot) {
  var t = snapshot.val();

  for (var key in t) {
    var valor = t[key];

    if (key === "dentistas") {
      var _itemsKey = Object.entries(valor);

      for (const [, value2] of _itemsKey) {
        $("#tbDentistas tbody").append(
          `<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <<td class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">${value2.cidade}</td>
            <td class="py-4 px-6">${value2.cpf}</td>
            <td class="py-4 px-6">${value2.especialidade}</td>
            <td class="py-4 px-6">${value2.nome}</td>
          </tr>`
        );
      }
    }
  }
});
