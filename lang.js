const translations = {
  en: {
    back_to_dashboard: "Back to Dashboard",
    new_expense: "New Expense",
    title: "Saved Expenses",
    search_placeholder: "Search by description or ID..."
  },
  nl: {
    back_to_dashboard: "Terug naar Dashboard",
    new_expense: "Nieuwe Uitgave",
    title: "Opgeslagen Uitgaven",
    search_placeholder: "Zoeken op beschrijving of ID..."
  },
  de: {
    back_to_dashboard: "Zurück zum Dashboard",
    new_expense: "Neue Ausgabe",
    title: "Gespeicherte Ausgaben",
    search_placeholder: "Suche nach Beschreibung oder ID..."
  },
  fr: {
    back_to_dashboard: "Retour au tableau de bord",
    new_expense: "Nouvelle dépense",
    title: "Dépenses enregistrées",
    search_placeholder: "Rechercher par description ou ID..."
  },
  pl: {
    back_to_dashboard: "Powrót do panelu",
    new_expense: "Nowy wydatek",
    title: "Zapisane wydatki",
    search_placeholder: "Szukaj według opisu lub ID..."
  },
  ru: {
    back_to_dashboard: "Назад к панели",
    new_expense: "Новый расход",
    title: "Сохраненные расходы",
    search_placeholder: "Поиск по описанию или ID..."
  },
  es: {
    back_to_dashboard: "Volver al panel",
    new_expense: "Nuevo gasto",
    title: "Gastos guardados",
    search_placeholder: "Buscar por descripción o ID..."
  }
};

function applyTranslations(lang = "en") {
  const t = translations[lang];
  if (!t) return;

  document.title = `📋 SmartWerk — ${t.title}`;
  document.querySelector('h1')?.textContent = `📋 SmartWerk — ${t.title}`;
  document.getElementById('backDashboardBtn')?.textContent = `🏠 ${t.back_to_dashboard}`;
  document.querySelector('a[href="expense-csv.html"]')?.textContent = `➕ ${t.new_expense}`;
  document.getElementById('search')?.setAttribute('placeholder', `🔍 ${t.search_placeholder}`);
}

document.addEventListener("DOMContentLoaded", () => {
  const selectedLang = localStorage.getItem('language') || 'en';
  applyTranslations(selectedLang);

  const langSelector = document.getElementById('languageSwitcher');
  if (langSelector) {
    langSelector.value = selectedLang;
    langSelector.addEventListener("change", function () {
      localStorage.setItem('language', this.value);
      location.reload(); // оновлює сторінку для застосування
    });
  }
});
