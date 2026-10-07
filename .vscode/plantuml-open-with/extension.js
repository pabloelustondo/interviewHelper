const vscode = require('vscode');

const viewType = 'meetingHelper.plantumlPreview';

function activate(context) {
  const provider = {
    async resolveCustomEditor(document, panel) {
      try {
        const textDocument = await vscode.workspace.openTextDocument(document.uri);
        await vscode.window.showTextDocument(textDocument, {
          viewColumn: vscode.ViewColumn.One,
          preview: false,
        });
        await vscode.commands.executeCommand('plantuml.preview');
        panel.dispose();
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        panel.webview.html = `<!doctype html><html><body><h2>Unable to open PlantUML preview</h2><p>${escapeHtml(message)}</p></body></html>`;
        void vscode.window.showErrorMessage(`Unable to open PlantUML preview: ${message}`);
      }
    },
  };

  context.subscriptions.push(
    vscode.window.registerCustomEditorProvider(viewType, provider, {
      supportsMultipleEditorsPerDocument: true,
    }),
  );
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[character]);
}

function deactivate() {}

module.exports = { activate, deactivate };
