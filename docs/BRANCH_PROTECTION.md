# Branch Protection & PR Guidelines

## Overview

This document outlines the branch protection rules and pull request workflow for the DhanRakshak website repository.

## Protected Branches

The following branches are protected and require special handling:

### `main` (Production)
- **Purpose:** Production-ready code deployed to GitHub Pages
- **Protection:** Requires PR approval and passing CI checks
- **Deployment:** Auto-deploys on merge

### `develop` (Optional - Staging)
- **Purpose:** Integration branch for testing features
- **Protection:** Requires passing CI checks
- **Deployment:** Can be deployed to a staging environment

## Branch Protection Rules (Recommended)

Configure these settings in GitHub: **Settings** → **Branches** → **Branch protection rules**

### For `main` branch:

1. **Require a pull request before merging**
   - ✅ Require approvals: 1 (adjust based on team size)
   - ✅ Dismiss stale pull request approvals when new commits are pushed
   - ✅ Require review from Code Owners (optional, if CODEOWNERS file exists)

2. **Require status checks to pass before merging**
   - ✅ Require branches to be up to date before merging
   - **Required status checks:**
     - `Type Check` (from CI workflow)
     - `Build Verification` (from CI workflow)
     - `Bundle Size Check` (from CI workflow)

3. **Require conversation resolution before merging**
   - ✅ All comments must be resolved

4. **Require signed commits** (optional, for higher security)

5. **Require linear history** (optional, for cleaner git history)
   - ✅ Enforce linear history (no merge commits)

6. **Do not allow bypassing the above settings**
   - ✅ Include administrators (recommended for consistency)

7. **Restrict who can push to matching branches**
   - Add specific users/teams who can push directly (emergency only)

## Pull Request Workflow

### 1. Create a Feature Branch

```bash
# From main branch
git checkout main
git pull origin main

# Create feature branch
git checkout -b feature/description-of-feature
# or
git checkout -b fix/description-of-bug
```

**Branch naming conventions:**
- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation updates
- `chore/` - Maintenance tasks
- `refactor/` - Code refactoring
- `style/` - Styling/formatting changes

### 2. Make Changes

```bash
# Make your changes
# Test locally
npm run dev

# Build to verify
npm run build

# Check types
npx astro check
```

### 3. Commit Changes

```bash
# Stage changes
git add .

# Commit with descriptive message
git commit -m "feat: add new analytics feature"
```

**Commit message format:**
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation
- `style:` - Formatting, CSS
- `refactor:` - Code restructuring
- `test:` - Adding tests
- `chore:` - Maintenance

### 4. Push and Create PR

```bash
# Push to remote
git push origin feature/description-of-feature

# Create PR via GitHub UI or CLI
gh pr create --title "Add new analytics feature" --body "Description of changes"
```

### 5. PR Checklist

Before submitting a PR, ensure:

- [ ] Code builds successfully (`npm run build`)
- [ ] Type checking passes (`npx astro check`)
- [ ] All pages render correctly
- [ ] Dark/light mode works
- [ ] Mobile responsive
- [ ] No console errors
- [ ] Updated documentation if needed
- [ ] Tested on different browsers (Chrome, Firefox, Safari)

### 6. PR Review Process

1. **Automated Checks** - CI workflow runs automatically
   - Type checking
   - Build verification
   - Bundle size check
   - Link validation

2. **Code Review** - Team member reviews changes
   - Check code quality
   - Verify design consistency
   - Test functionality locally if needed

3. **Address Feedback**
   ```bash
   # Make requested changes
   git add .
   git commit -m "fix: address PR feedback"
   git push origin feature/branch-name
   ```

4. **Approval & Merge**
   - Once approved and CI passes, PR can be merged
   - Use "Squash and merge" for cleaner history (recommended)
   - Delete branch after merge

## CI/CD Checks

### Automated PR Checks (`.github/workflows/ci.yml`)

1. **Lint & Format Check**
   - Verifies code formatting consistency

2. **TypeScript Type Check**
   - Ensures type safety with `astro check`

3. **Build Verification**
   - Confirms the site builds successfully
   - Validates critical pages exist

4. **Bundle Size Check**
   - Ensures bundle stays under 5MB
   - Reports total build size

5. **Link Check**
   - Verifies internal links aren't broken

6. **Security Audit**
   - Runs `npm audit` for vulnerabilities

### Deployment Checks (`.github/workflows/deploy.yml`)

1. **Pre-deployment Verification**
   - Type checking
   - Security audit

2. **Build & Deploy**
   - Only runs on `main` branch
   - Builds site
   - Verifies output
   - Deploys to GitHub Pages

## Emergency Hotfixes

For critical production issues:

1. **Create hotfix branch from main**
   ```bash
   git checkout main
   git pull origin main
   git checkout -b hotfix/critical-issue
   ```

2. **Make minimal fix**
   - Only fix the critical issue
   - Don't include unrelated changes

3. **Fast-track PR**
   - Tag PR with `hotfix` label
   - Request immediate review
   - Can bypass some checks if absolutely necessary (requires admin)

4. **Deploy immediately after merge**

## Reverting Changes

If a deployed change causes issues:

### Option 1: Revert PR
```bash
# From main branch
git revert <commit-hash>
git push origin main
```

### Option 2: Create fix PR
```bash
# Better for complex issues
git checkout -b fix/revert-issue
# Make fixes
# Create PR
```

## Best Practices

### DO:
- ✅ Keep PRs small and focused (< 500 lines changed)
- ✅ Write descriptive PR titles and descriptions
- ✅ Test thoroughly before submitting
- ✅ Respond to review comments promptly
- ✅ Keep branch up-to-date with main
- ✅ Delete branches after merge

### DON'T:
- ❌ Push directly to main (except emergencies)
- ❌ Merge your own PRs without review
- ❌ Mix multiple unrelated changes in one PR
- ❌ Ignore failing CI checks
- ❌ Force push to shared branches
- ❌ Leave PRs open for extended periods

## GitHub Settings Configuration

To enable these protections:

1. Go to **Settings** → **Branches**
2. Click **Add rule**
3. Branch name pattern: `main`
4. Configure options as described above
5. Click **Create** or **Save changes**

## Troubleshooting

### CI Checks Failing

**Type check fails:**
```bash
# Run locally to see errors
npx astro check
```

**Build fails:**
```bash
# Run local build
npm run build
# Check error messages
```

**Bundle size exceeds limit:**
- Check for large images/assets
- Optimize images
- Remove unused dependencies

### PR Can't Be Merged

**Branch is out of date:**
```bash
# Update your branch
git checkout main
git pull origin main
git checkout your-branch
git rebase main
# or
git merge main
```

**Merge conflicts:**
```bash
# Resolve conflicts
git checkout your-branch
git rebase main
# Fix conflicts in files
git add .
git rebase --continue
git push origin your-branch --force-with-lease
```

## Resources

- [GitHub Branch Protection](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches)
- [Pull Request Best Practices](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests)
- [Conventional Commits](https://www.conventionalcommits.org/)
