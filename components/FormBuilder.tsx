"use client";

import React, { useEffect, useState } from "react";
import PreviewDialogBtn from "./PreviewDialogBtn";
import Designer from "./Designer";
import { DndContext, MouseSensor, TouchSensor, useSensor, useSensors } from "@dnd-kit/core";
import DragOverlayWrapper from "./DragOverlayWrapper";
import useDesigner from "./hooks/useDesigner";
import { ImSpinner2 } from "react-icons/im";
import { HiSaveAs } from "react-icons/hi";
import { Button } from "./ui/button";
import Confetti from "react-confetti";
import ReactJson from 'react-json-view'
import Link from "next/Link";
import { BsArrowLeft } from "react-icons/bs";


function FormBuilder({ name }: { name: string }) {
  const { elements } = useDesigner();

  const { setElements, setSelectedElement } = useDesigner();
  const [isReady, setIsReady] = useState(false);
  const [show, setShow] = useState<{} | null>(null);

  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10, // 10px
    },
  });

  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      delay: 300,
      tolerance: 5,
    },
  });

  const sensors = useSensors(mouseSensor, touchSensor);

  useEffect(() => {
    if (isReady) return;
    // const elements = JSON.parse(form.content);
    // setElements(elements);
    setSelectedElement(null);
    const readyTimeout = setTimeout(() => setIsReady(true), 500);
    return () => clearTimeout(readyTimeout);
  }, [setElements, isReady, setSelectedElement]);

  function save() {
    const jsonElements = JSON.stringify(elements);
    setShow(elements);
  }

  if (!isReady) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-full">
        <ImSpinner2 className="animate-spin h-12 w-12" />
      </div>
    );
  }

  return !show ? (
    <DndContext sensors={sensors}>
      <main className="flex flex-col w-full">
        <nav className="flex justify-between border-b-2 p-4 gap-3 items-center">
          <h2 className="truncate font-medium">
            <span className="text-muted-foreground mr-2">Form:</span>
            {name}
          </h2>
          <div className="flex items-center gap-2">
            <PreviewDialogBtn />
            {/* <SaveFormBtn /> */}
            {/* <PublishFormBtn id={form.id} /> */}
            <Button variant={"outline"} className="gap-2" onClick={save}>
              <HiSaveAs className="h-4 w-4" />
              Save
              {/* {loading && <FaSpinner className="animate-spin" />} */}
            </Button>
          </div>
        </nav>
        <div className="flex w-full flex-grow items-center justify-center relative overflow-y-auto h-[200px] bg-accent bg-[url(/paper.svg)] dark:bg-[url(/paper-dark.svg)]">
          <Designer />
        </div>
      </main>
      <DragOverlayWrapper />
    </DndContext>
  ) : (
    <>
      <Confetti width={window.innerWidth} height={window.innerHeight} recycle={false} numberOfPieces={1000} />
      <div className="flex flex-col items-center justify-center h-screen w-full">
        <div className="max-w-md">
          <h1 className="text-center text-4xl font-bold text-primary border-b pb-2 mb-10">Form Json</h1>
          <div className="my-4 flex flex-col gap-2 items-center w-full shadow-xl rounded-xl bg-gray-200 p-4 w-[500px] h-[500px] overflow-y-scroll">
            <ReactJson src={show} />
          </div>
          <div className="flex justify-between">
            <Button variant={"link"} asChild>
            
                <Link href={"/"} className="gap-2">
                  <BsArrowLeft/>
                  Go back home
                </Link>
              </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormBuilder;
