import { textSample5 } from '@/text-sample/text';
import CKEditorInspector from '@ckeditor/ckeditor5-inspector';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import OnlineBuildEditor from 'ckeditor5-custom-build/build/ckeditor';
import { useState } from 'react';
import { PreviewHTML } from './PreviewHTML';

export function OnlineBuildEditorComp() {
    const [previewHtmlText, setPreviewHtmlText] = useState('');

    return (
        <div>
            <h3>Online Editor (with classic style)</h3>
            <div className='editor-box editor-box-border'>
                <CKEditor
                    editor={OnlineBuildEditor}
                    data={textSample5}
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