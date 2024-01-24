'use client'

import { BackToHome } from "@/component/BackToHome";
import dynamic from "next/dynamic";

export default function ClassicEditorPage() {
  const ClassicEditorComp = dynamic( () => {
    return import( '@/component/ClassicEditorComp' ).then( mod => mod.ClassicEditorComp );
  }, { ssr: false } );

  return (
    <div className="p-10">
      <BackToHome />
      <ClassicEditorComp />
    </div>
  );
}
