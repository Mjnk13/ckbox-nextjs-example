'use client'

import { BackToHome } from "@/component/BackToHome";
import dynamic from "next/dynamic";

export default function DecoupledDocumentEditorPage() {
  const DecoupledDocumentEditorComp = dynamic( () => {
    return import( '@/component/DecoupledDocumentEditorComp' ).then( mod => mod.DecoupledDocumentEditorComp );
  }, { ssr: false } );

  return (
    <div className="p-10">
      <BackToHome />
      <DecoupledDocumentEditorComp />
    </div>
  );
}
