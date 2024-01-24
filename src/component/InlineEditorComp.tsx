import { CKEditor } from '@ckeditor/ckeditor5-react';
import InlineEditor from '@ckeditor/ckeditor5-build-inline';
import CKEditorInspector from '@ckeditor/ckeditor5-inspector';
import { textSample2 } from '@/text-sample/text';
import { useState } from 'react';
import { PreviewHTML } from './PreviewHTML';

export function InlineEditorComp() {
    const [previewHtmlText, setPreviewHtmlText] = useState('');
    
    return (
        <div>
            <h3>Inline Editor</h3>
            <div className='editor-box editor-box-border'>
                <CKEditor
                    editor={InlineEditor}
                    data={textSample2}
                    onReady={(editor: any) => {
                        setPreviewHtmlText(editor.getData());
                        CKEditorInspector.attach(editor);
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