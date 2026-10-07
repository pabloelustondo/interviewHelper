# PlantUML Open With

This workspace extension adds a **PlantUML Preview** entry to VS Code's
**Open With...** menu and routes it to the installed PlantUML extension. The
workspace settings also make it the default editor for PlantUML source files.
The source opens alongside the preview.

## Requirements

- The [PlantUML extension](https://marketplace.visualstudio.com/items?itemName=jebbs.plantuml)
- Java and the renderer configured by the PlantUML extension, if required by
  that extension's rendering mode

## Package and install

From this directory, package the extension with `vsce package`, then install
the generated VSIX into VS Code with `code --install-extension <file.vsix>`.
Reload the workspace after installation. The local extension must be installed
in each VS Code profile that uses this workspace.
