'use client'

import { BackToHome } from "@/component/BackToHome";
import dynamic from "next/dynamic";

export default function InlineEditorPage() {
  const InlineEditorComp = dynamic( () => {
    return import( '@/component/InlineEditorComp' ).then( mod => mod.InlineEditorComp );
  }, { ssr: false } );

  return (
    <div className="p-10">
      <BackToHome />
      <InlineEditorComp />
    </div>
  );
}
