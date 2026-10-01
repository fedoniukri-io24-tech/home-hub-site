"use client";

import { Pill } from "./Pill";
import { useRequest } from "@/context/RequestContext";

export function DoorRequestPill({
  label,
  modelName,
  className = "",
}: {
  label: string;
  modelName: string;
  className?: string;
}) {
  const { openRequest } = useRequest();
  return (
    <Pill className={className} onClick={() => openRequest(modelName)}>
      {label}
    </Pill>
  );
}
