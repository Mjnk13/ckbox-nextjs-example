import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import CKEditorInspector from '@ckeditor/ckeditor5-inspector';
import { textSample1 } from '@/text-sample/text';
import { useState } from 'react';
import { PreviewHTML } from './PreviewHTML';

export function ClassicEditorComp() {
    const [previewHtmlText, setPreviewHtmlText] = useState('');
    
    return (
        <div>
            <h3>Classic Editor</h3>
            <div className='editor-box'>
                <CKEditor
                    editor={ClassicEditor}
                    data={textSample1}
                    onReady={(editor) => {
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