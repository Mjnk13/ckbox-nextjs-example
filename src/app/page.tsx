export default function Home() {
  return (
    <div className="p-10">
      <h2>CKEditor 5 demo</h2>
      {/* Don't use Link from next js because it will conflict module, basically CKEditor only support 1 pre-build library at the same time  */}
      {/* If you want to make 2 library exist at the time, you need a "Supper Build" */}
      <ul className="mt-3">
        <li><a className="text-blue-500 hover:text-red-500 no-underline" href="/classic">Classic Editor</a></li>
        <li><a className="text-blue-500 hover:text-red-500 no-underline" href="/inline">Inline Editor</a></li>
        <li><a className="text-blue-500 hover:text-red-500 no-underline" href="/balloon">Balloon Editor</a></li>
        <li><a className="text-blue-500 hover:text-red-500 no-underline" href="/balloon-block">Balloon Block Editor</a></li>
        <li><a className="text-blue-500 hover:text-red-500 no-underline" href="/decoupled-document">Document Editor</a></li>
        <li><a className="text-blue-500 hover:text-red-500 no-underline" href="/multi-root">Multi Root Editor</a></li>
        <li><a className="text-blue-500 hover:text-red-500 no-underline" href="/online-build">Online Build Editor</a></li>
      </ul>
    </div>
  );
}
