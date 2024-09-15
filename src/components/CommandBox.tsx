"use client";

import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandList,
} from "@/components/ui/command";
import { Dialog, DialogContent } from "./ui/dialog";
import { useEffect, useState } from "react";

export function CommandBox() {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent enableCross={false} className="p-0">
        <Command className="rounded-lg border shadow-md md:min-w-[450px]">
          <CommandInput placeholder="Search any component or page..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            {/* <CommandGroup heading="Suggestions">
              <CommandItem>
                <CalendarIcon className="mr-2 h-4 w-4" />
                <span>Calendar</span>
              </CommandItem>
              <CommandItem>
                <FaceIcon className="mr-2 h-4 w-4" />
                <span>Search Emoji</span>
              </CommandItem>
              <CommandItem disabled>
                <RocketIcon className="mr-2 h-4 w-4" />
                <span>Launch</span>
              </CommandItem>
            </CommandGroup> */}
            {/* <CommandSeparator /> */}
            {/* <CommandGroup heading="Settings">
              <CommandItem>
                <PersonIcon className="mr-2 h-4 w-4" />
                <span>Profile</span>
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <EnvelopeClosedIcon className="mr-2 h-4 w-4" />
                <span>Mail</span>
                <CommandShortcut>⌘B</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <GearIcon className="mr-2 h-4 w-4" />
                <span>Settings</span>
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
            </CommandGroup> */}
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
}
