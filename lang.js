const translations = {
  en: {
    menu: "Menu",
    back_dashboard: "Back to Dashboard",
    home: "Home",
    clients: "Clients",
    create_client: "Create Client",
    saved_clients: "Saved Clients",
    invoices: "Invoices",
    create_invoice: "Create Invoice",
    saved_invoices: "Saved Invoices",
    quotes: "Quotes",
    create_quote: "Create Quote",
    saved_quotes: "Saved Quotes",
    contracts: "Contracts",
    create_contract: "Create Contract",
    saved_contracts: "Saved Contracts",
    reminders: "Reminders",
    create_reminder: "Create Reminder",
    saved_reminders: "Saved Reminders",
    expense_csv: "Expense CSV",
    create_expense: "Create Expense",
    saved_expenses: "Saved Expenses",
    analytics: "Analytics",
    bookkeeper: "My Bookkeeper",
    summary: "Summary",
    roi: "ROI Estimator",
    taxassistant: "Tax Assistant",
    tax_calculator: "Tax Calculator",
    tax_analytics: "Tax Analytics",
    tax_guide: "Tax Guide",
    templates: "Templates",
    email_gemeente: "Email to Gemeente",
    cv: "CV / Portfolio",
    ai_assistant: "AI Assistant (PRO)",
    settings: "Settings",
    profile: "Profile",
    toggle_theme: "Toggle Theme",
    help: "Help",
    upgrade: "Upgrade to PRO",
    contact: "Contact Support",
    logout: "Logout",
    welcome: "Welcome",
    upgrade_plan: "Upgrade to PRO",
    plan_free: "Free",
    quick_clients: "Clients",
    quick_invoice: "Invoice",
    quick_quote: "Quote",
    quick_contract: "Contract",
    quick_reminder: "Reminder",
    revenue: "Revenue",
    unpaid: "Unpaid",
    quote_rate: "Quote Win-Rate",
    reminders_sent: "Reminders Sent",
    expenses: "Expenses",
    overdue: "Overdue",
    top_client: "Top Client",
    suggestions: "Smart Suggestions",
    all_good: "All good. Keep it up!",
    recent_activity: "Recent Activity",
    loading: "Loading..."
  },
   nl: {
  menu: "Menu",
back_dashboard: "Terug naar dashboard",
home: "Home",
clients: "Klanten",
create_client: "Klant aanmaken",
saved_clients: "Opgeslagen klanten",
invoices: "Facturen",
create_invoice: "Factuur aanmaken",
saved_invoices: "Opgeslagen facturen",
quotes: "Offertes",
create_quote: "Offerte aanmaken",
saved_quotes: "Opgeslagen offertes",
contracts: "Contracten",
create_contract: "Contract aanmaken",
saved_contracts: "Opgeslagen contracten",
reminders: "Herinneringen",
create_reminder: "Herinnering aanmaken",
saved_reminders: "Opgeslagen herinneringen",
expense_csv: "Onkosten CSV",
create_expense: "Maak kosten aan",
saved_expenses: "Opgeslagen kosten",
analytics: "Analytics",
my_bookkeeper: "Mijn boekhouder",
summary: "Overzicht",
roi_estimator: "ROI-calculator",
tax_assistant: "Belastingassistent",
tax_calculator: "Belastingcalculator",
tax_analytics: "Belastinganalyse",
tax_guide: "Belastinggids",
templates: "Sjablonen",
email_gemeente: "E-mail naar gemeente",
cv_portfolio: "CV / Portfolio",
ai_assistant: "AI Assistent (PRO)",
settings: "Instellingen",
profile: "Profiel",
toggle_theme: "Thema wisselen",
help: "Hulp",
upgrade_pro: "Upgraden naar PRO",
contact_support: "Neem contact op met Support",
logout: "Uitloggen",
welcome: "Welkom",
upgrade_plan: "Upgraden naar PRO",
plan_free: "Gratis",
quick_clients: "Klanten",
quick_invoice: "Factuur",
quick_quote: "Offerte",
quick_contract: "Contract",
quick_reminder: "Herinnering",
revenue: "Inkomsten",
unpaid: "Onbetaald",
quote_rate: "Winstpercentage offerte",
reminders_sent: "Verzonden herinneringen",
expenses: "Uitgaven",
overdue: "Overdue",
top_client: "Topklant",
smart_suggestions: "Slimme suggesties",
suggestion_all_good: "Alles goed. Ga zo door!",
recent_activity: "Recente activiteit",
loading: "Laden..."     
 }
};
  // Add similar blocks for other languages like 'de', 'fr', etc.

function applyTranslations(lang = "en") {
  const dict = translations[lang] || translations["en"];
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const selectedLang = localStorage.getItem("language") || "en";
  applyTranslations(selectedLang);

  const langSelector = document.getElementById("languageSwitcher");
  if (langSelector) {
    langSelector.value = selectedLang;
    langSelector.addEventListener("change", function () {
      localStorage.setItem("language", this.value);
      location.reload();
    });
  }
});
