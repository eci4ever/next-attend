"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Calendar,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  Users,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

const teams = [
  {
    name: "Acme Inc",
    logo: GalleryVerticalEnd,
    plan: "Enterprise",
  },
  {
    name: "Acme Corp.",
    logo: AudioWaveform,
    plan: "Startup",
  },
  {
    name: "Evil Corp.",
    logo: Command,
    plan: "Free",
  },
];

const user = [
  {
    name: "shadcn",
    email: "m@example.com",
    image: "",
  },
];

const navMain = [
  {
    title: "Users",
    url: "/dashboard/users",
    icon: Users,
    isActive: true,
    items: [
      {
        title: "Attendance",
        url: "/dashboard/attendance",
        icon: Calendar,
      },
    ],
  },
  {
    title: "Manager",
    url: "#",
    icon: Bot,
    items: [
      {
        title: "Verification",
        url: "#",
      },
    ],
  },
  {
    title: "Admin",
    url: "#",
    icon: BookOpen,
    items: [
      {
        title: "Users",
        url: "#",
      },
      {
        title: "Roles",
        url: "#",
      },
    ],
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user[0]} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
