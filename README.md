# Dev Spaces Extensions Pre-Install Test (`24 Extensions`)

Sample repository with a `devfile.yaml` and `.vscode/extensions.json` containing **24 recommended extensions** to test automatic background VSIX pre-installation in `devspaces-remote-connector`.

## Quick Start

1. Create a new Dev Spaces workspace from this repository URL:
   ```text
   https://github.com/rmallam-rhdh/devspaces-extensions-test.git
   ```
   - Either from VS Code (**Dev Spaces sidebar → `+` New Workspace → Paste Git URL**), or
   - Via Dev Spaces Dashboard Factory URL:
     `https://<your-devspaces-host>/#https://github.com/rmallam-rhdh/devspaces-extensions-test`
2. Connect to the workspace from local VS Code using **Dev Spaces Connector**.
3. Check background installation progress in the remote workspace terminal:
   ```bash
   cat ~/.vscode-server/.extensions-install.log
   ls -1 ~/.vscode-server/extensions
   ```
