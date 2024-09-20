import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html",[]),
    new Route("/services", "Services", "/pages/services.html", []),
    new Route("/avis", "Avis", "/pages/avis.html"),
    new Route("/contact", "Contact", "/pages/contact.html",[]),
    new Route("/habitats", "Habitats", "/pages/habitats.html",[]),
    new Route("/signin", "Connexion", "/pages/auth/signin.html",["disconnected"], "/js/auth/signin.js"),
    new Route("/signup", "Inscription", "/pages/auth/signup.html", "/js/auth/signup.js" ["admin"]),
    new Route("/allServices", "Modifier les services", "/pages/allServices.html", ["admin"]),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Arcadia";