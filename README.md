# Gauche ou Droite ?

Quiz politique français : devinez le positionnement **gauche** ou **droite**
d’une personnalité uniquement à partir de sa photo.

## Jouer en ligne

Après le déploiement GitHub Pages, le jeu est disponible à l’adresse :

<https://scooladvisor-alt.github.io/GUESSTHEBORD-DROITE-GAUCHE/>

## Publication automatique

Le fichier `.github/workflows/deploy-pages.yml` déploie automatiquement le site
sur GitHub Pages après chaque push sur `main` ou `master`.

## Déploiement Cloudflare Pages

Dans Cloudflare Pages, importez ce dépôt GitHub puis utilisez ces paramètres :

| Champ | Valeur |
| --- | --- |
| Framework preset | `None` |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node.js version | `20` (ou plus récent) |

Le dossier `dist` est généré automatiquement et contient uniquement les fichiers
statiques nécessaires au jeu. Après le premier déploiement, Cloudflare affiche
l’URL publique dans l’onglet **Deployments**.
