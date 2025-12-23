import { Metadata } from "next";
import { TeamMembers } from "@/components/sections/team-members";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the talented team behind Storyline Pictures: Directors, photographers, cinematographers, and marketing professionals.",
};

export default function TeamPage() {
  return (
    <>
      <TeamMembers />
    </>
  );
}

