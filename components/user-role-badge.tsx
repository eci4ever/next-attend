"use client";

import { Badge } from "@/components/ui/badge";

interface UserRoleBadgeProps {
  roles: string | null | undefined;
}

// Function to get badge variant based on role
function getRoleVariant(
  role: string
): "default" | "secondary" | "success" | "warning" | "info" | "destructive" {
  switch (role.toLowerCase()) {
    case "admin":
      return "default";
    case "manager":
      return "warning";
    case "user":
      return "info";
    case "member":
      return "secondary";
    default:
      return "default";
  }
}

export function UserRoleBadge({ roles }: UserRoleBadgeProps) {
  if (!roles) {
    return null;
  }

  // Split roles by comma and clean up whitespace
  const roleList = roles
    .split(",")
    .map((role) => role.trim())
    .filter(Boolean);

  if (roleList.length === 0) {
    return null;
  }

  return (
    <div className="flex items-center gap-1">
      {roleList.map((role, index) => (
        <Badge
          key={index}
          variant={getRoleVariant(role)}
          className="text-xs font-medium"
        >
          {role.charAt(0).toUpperCase() + role.slice(1)}
        </Badge>
      ))}
    </div>
  );
}
