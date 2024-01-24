import { CKEditor } from '@ckeditor/ckeditor5-react';
import BalloonEditor from "@ckeditor/ckeditor5-build-balloon";
import CKEditorInspector from '@ckeditor/ckeditor5-inspector';
import { textSample3 } from '@/text-sample/text';
import { useState } from 'react';
import { PreviewHTML } from './PreviewHTML';

export function BalloonEditorComp () {
    const [previewHtmlText, setPreviewHtmlText] = useState('');
    
    return (
        <div>
            <h3>Balloon Editor (Select the text to see toolbar)</h3>
            <div className='editor-box editor-box-border'>
                <CKEditor
                    editor={ BalloonEditor }
                    data={textSample3}
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