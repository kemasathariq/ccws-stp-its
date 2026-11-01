# Git Workflow for Two Contributors

## First-time setup by repository owner

After extracting the starter kit:

```bash
git init
git branch -M main
git add .
git commit -m "Initial CCWS STP project scaffold"
gh repo create ccws-stp-its --public --source=. --remote=origin --push
git switch -c develop
git push -u origin develop
```

Use `--private` instead of `--public` if the group wants a private repository.

## Member A workflow

```bash
git clone <REPOSITORY-URL>
cd ccws-stp-its
git switch develop
git pull
git switch -c feat/member-a-core-exterior-robot
```

Work only on Member A modules. Commit in small increments and open a pull request into `develop`.

## Mahda workflow

```bash
git clone <REPOSITORY-URL>
cd ccws-stp-its
git switch develop
git pull
git switch -c feat/mahda-interior-exhibits
```

Work only on Mahda modules. Commit in small increments and open a pull request into `develop`.

## Before opening a pull request

```bash
npm ci
npm run build
git status
```

Add a screenshot or short recording to the pull request description. Do not commit `node_modules/` or `dist/`.

## Integration

The integration owner reviews both pull requests, merges them into `develop`, tests the merged application, then merges the stable result into `main`. If a shared interface must change, agree on it before changing `docs/INTEGRATION_CONTRACT.md` or shared files.

## Important

The starter kit does not include a GitHub remote because the team has not supplied a repository URL or selected its visibility. Creating the local scaffold does not create a remote repository automatically.
