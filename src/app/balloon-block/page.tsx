'use client'

import { BackToHome } from "@/component/BackToHome";
import dynamic from "next/dynamic";

export default function BalloonBlockEditorPage() {
  const BalloonBlockEditorComp = dynamic( () => {
    return import( '@/component/BalloonBlockEditorComp' ).then( mod => mod.BalloonBlockEditorComp );
  }, { ssr: false } );

  return (
    <div className="p-10">
      <BackToHome />
      <BalloonBlockEditorComp />
    </div>
  );
}
