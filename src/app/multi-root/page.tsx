'use client'

import { BackToHome } from "@/component/BackToHome";
import dynamic from "next/dynamic";

export default function MultiRootEditorPage() {
  const MultiRootEditorComp = dynamic( () => {
    return import( '@/component/MultiRootEditorComp' ).then( mod => mod.MultiRootEditorComp );
  }, { ssr: false } );

  return (
    <div className="p-10">
      <BackToHome />
      <MultiRootEditorComp />
    </div>
  );
}
