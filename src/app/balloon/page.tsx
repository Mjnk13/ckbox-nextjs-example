'use client'

import { BackToHome } from "@/component/BackToHome";
import dynamic from "next/dynamic";

export default function BalloonEditorPage() {
  const BalloonEditorComp = dynamic( () => {
    return import( '@/component/BalloonEditorComp' ).then( mod => mod.BalloonEditorComp );
  }, { ssr: false } );

  return (
    <div className="p-10">
      <BackToHome />
      <BalloonEditorComp />
    </div>
  );
}
