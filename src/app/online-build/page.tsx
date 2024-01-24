'use client'

import { BackToHome } from "@/component/BackToHome";
import dynamic from "next/dynamic";

export default function InlineEditorPage() {
  const OnlineBuildEditorComp = dynamic( () => {
    return import( '@/component/OnlineBuildEditorComp' ).then( mod => mod.OnlineBuildEditorComp );
  }, { ssr: false } );

  return (
    <div className="p-10">
      <BackToHome />
      <OnlineBuildEditorComp />
    </div>
  );
}