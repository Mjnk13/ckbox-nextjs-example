import { CKEditor } from '@ckeditor/ckeditor5-react';
import BalloonEditor from "@ckeditor/ckeditor5-build-balloon-block";
import CKEditorInspector from '@ckeditor/ckeditor5-inspector';
import { textSample3 } from '@/text-sample/text';
import { useState } from 'react';
import { PreviewHTML } from './PreviewHTML';

export function BalloonBlockEditorComp () {
    const [previewHtmlText, setPreviewHtmlText] = useState('');

    return (
        <div>
            <h3>Balloon Block Editor (Toolbar appear on the left hand side)</h3>
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