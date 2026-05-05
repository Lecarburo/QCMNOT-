# Revision IPv6 QCM

Petite application React pour reviser rapidement IPv6 avant un QCM de BUT Reseaux & Telecommunications.

## Fonctionnalites

- Dashboard avec progression globale.
- Fiches courtes sur IPv6, adressage, SLAAC, NDP, Cisco, routage et Wireshark.
- Flashcards interactives avec sauvegarde des cartes connues.
- QCM d'entrainement avec correction immediate et explications.
- Mode examen de 20 questions aleatoires avec timer de 10 minutes.
- Pages dediees aux pieges, commandes et schemas de topologie.
- Sauvegarde locale avec `localStorage`.

## Installation

```bash
npm install
```

## Lancer le site en local

```bash
npm run dev
```

Vite affiche ensuite l'URL locale, en general `http://localhost:5173`.

## Verification

```bash
npm run lint
npm run build
```

## Structure

```text
src/
  components/
  data/
  pages/
  utils/
  App.jsx
  main.jsx
  index.css
```

Toutes les donnees pedagogiques sont dans `src/data/`.
