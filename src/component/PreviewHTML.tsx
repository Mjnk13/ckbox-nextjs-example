function format(html: string) {
    var tab = '\t';
    var result = '';
    var indent= '';

    html.split(/>\s*</).forEach(function(element) {
        if (element.match( /^\/\w/ )) {
            indent = indent.substring(tab.length);
        }

        result += indent + '<' + element + '>\r\n';

        if (element.match( /^<?\w[^>]*[^\/]$/ ) && !element.startsWith("input")  ) { 
            indent += tab;              
        }
    });

    return result.substring(1, result.length-3);
}

export function PreviewHTML ({data, title = 'Preview HTML:'}: {data: string, title?: string}) {
    return (
        <div className="preview">
            <h3>{title}</h3>
            <div className='editor-box'>
                <code>
                    <pre>
                        {format(data)}
                    </pre>
                </code>
            </div>
        </div>
    );
}