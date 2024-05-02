"use client";

import { ExtrasType } from "@/lib/validators/bookingServices";
import { Button } from "./ui/button";

const ExtrasSelect = ({
  extras,
  activeExtras,
  onChangeExtras,
}: {
  extras: Array<ExtrasType>;
  activeExtras: Array<ExtrasType>;
  onChangeExtras: (extras: Array<ExtrasType>) => void;
}) => {
  return (
    <div className="flex flex-wrap gap-4">
      {...extras.map((extra) => (
        <Button
          key={extra.id}
          variant={
            activeExtras.find((activeExtra) => activeExtra.id === extra.id)
              ? "default"
              : "outline"
          }
          onClick={(e: React.MouseEvent) => {
            e.preventDefault();
            if (
              activeExtras.find((activeExtra) => activeExtra.id === extra.id)
            ) {
              onChangeExtras(
                activeExtras.filter(
                  (activeExtra) => activeExtra.id !== extra.id
                )
              );
            } else {
              onChangeExtras([...activeExtras, extra]);
            }
          }}
        >
          {extra.name}
        </Button>
      ))}
    </div>
  );
};

export default ExtrasSelect;
