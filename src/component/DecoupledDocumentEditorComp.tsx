import { CKEditor } from '@ckeditor/ckeditor5-react';
import DecoupledDocument from "@ckeditor/ckeditor5-build-decoupled-document";
import CKEditorInspector from '@ckeditor/ckeditor5-inspector';
import { textSample4 } from '@/text-sample/text';
import { useState } from 'react';
import { PreviewHTML } from './PreviewHTML';

export function DecoupledDocumentEditorComp () {
    const [previewHtmlText, setPreviewHtmlText] = useState('');

    return (
        <div>
            <h3>Decoupled Document Editor</h3>
            <div className='decoupled-document-editor-toolbar'></div>
            <div className='editor-box editor-box-border'>
                <CKEditor
                    editor={ DecoupledDocument }
                    data= {textSample4}
                    onReady={(editor: any) => {
                        setPreviewHtmlText(editor.getData());
                        CKEditorInspector.attach(editor);
                        const toolbarContainer = document.querySelector('.decoupled-document-editor-toolbar') as HTMLElement;
                        toolbarContainer.appendChild( editor.ui.view.toolbar.element );
                        // Make toolbar sticky when the editor is focused.
                        editor.ui.focusTracker.on( 'change:isFocused', () => {
                            if(toolbarContainer) {
                                if ( editor.ui.focusTracker.isFocused ) {
                                    toolbarContainer.classList.add( 'sticky-toolbar' );
                                } else {
                                    toolbarContainer.classList.remove( 'sticky-toolbar' );
                                }
                            }
                        } );
                    }}
                    onChange={(event, editor) => {
                        setPreviewHtmlText(editor.getData());
                    }}
                />
            </div>
            <div className='editor-box'>
                <PreviewHTML data={previewHtmlText} />
            </div>
        </div>
    );
}