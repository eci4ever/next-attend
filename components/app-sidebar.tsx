"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Calendar,
  Check,
  Command,
  GalleryVerticalEnd,
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

interface User {
  name: string;
  email: string;
  image: string;
}

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
        url: "/dashboard/verification",
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
        url: "/dashboard/users",
      },
    ],
  },
];

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  user: User;
}

export function AppSidebar({ user, ...props }: AppSidebarProps) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
