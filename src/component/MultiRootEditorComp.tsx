import React, { useEffect, useState } from 'react';
import MultiRootEditor from '@ckeditor/ckeditor5-build-multi-root';
import CKEditorInspector from '@ckeditor/ckeditor5-inspector';
import { textSample1, textSample2 } from '@/text-sample/text';
import { PreviewHTML } from './PreviewHTML';


export function MultiRootEditorComp () {
    const [previewHtmlText1, setPreviewHtmlText1] = useState('');
    const [previewHtmlText2, setPreviewHtmlText2] = useState('');

    useEffect(() => {
        MultiRootEditor.create({
            root1: document.querySelector('#root1') as HTMLElement,
            root2: document.querySelector('#root2') as HTMLElement
        }).then(editor => {
            editor.setData({
                root1: textSample1,
                root2: textSample2
            });

            setPreviewHtmlText1(editor.getData({rootName: 'root1'}));
            setPreviewHtmlText2(editor.getData({rootName: 'root2'}));

            editor.model.document.on('change:data', () => {
                setPreviewHtmlText1(editor.getData({rootName: 'root1'}));
                setPreviewHtmlText2(editor.getData({rootName: 'root2'}));
            });

            // Append toolbar to a proper container.
            const toolbarContainer = document.querySelector( '#toolbar' );
            if (toolbarContainer) {
                toolbarContainer.appendChild(editor.ui.view.toolbar.element as HTMLElement);
            }
    
            // Make toolbar sticky when the editor is focused.
            editor.ui.focusTracker.on( 'change:isFocused', () => {
                if(toolbarContainer) {
                    if ( editor.ui.focusTracker.isFocused ) {
                        toolbarContainer.classList.add('sticky-toolbar');
                    } else {
                        toolbarContainer.classList.remove('sticky-toolbar');
                    }
                }
            } );
    
            CKEditorInspector.attach(editor);
    
            return editor;
        })
        .catch(error => {
            console.error('Error: ', error);
        });
    }, []);

    return (
        <div className='multi-root-editor-container'>
            <h3>Multiroot Editor</h3>
            <div id="toolbar" className='editor-box'></div>
            <div className='multi-root-editor'>
                <div className='multi-editor-wrapper'>
                    <h4>Root 1:</h4>
                    <div className='editor-box-border'>
                        <div id='root1'/>
                    </div>
                    <PreviewHTML data={previewHtmlText1} title='Preview Html root 1'/>
                </div>
                <div className='multi-editor-wrapper'>
                    <h4>Root 2:</h4>
                    <div className='editor-box-border'>
                        <div id='root2'/>
                    </div>
                    <PreviewHTML data={previewHtmlText1} title='Preview Html root 2'/>
                </div>
            </div>
        </div>
    );
};