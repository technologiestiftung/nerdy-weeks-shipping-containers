# Exercise 9 Publishing


## GitHub Container Registry (GHCR)

GitHub has a own container registry where you can publish images under your org.

### Setup your Environment

Create a [Personal Access Token on GitHub](https://github.com/settings/tokens) with the scope to read, write and delete the packages.

Now add this token to your `.bashrc`, `.bash_profile` or `.zshrc` with this line

```bash
export CR_PAT=YOUR_TOKEN
```

Or if you are on fish-shell add the next line to your`~/.config/fish/config.fish`

```
set -gx GHCR_PAT YOUR_TOKEN
```

Now reload your shell.

```bash
exec $SHELL
```

And login to the GHCR.

```bash
echo $GHCR_PAT *|* docker login ghcr.io -u YOUR_GITHUB_USERNAME --password-stdin
```