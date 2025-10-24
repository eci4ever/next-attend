"use client";

import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// Function to capitalize and format route segments
function formatSegment(segment: string): string {
  return segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Function to generate breadcrumbs from pathname
function generateBreadcrumbs(
  pathname: string
): { label: string; href?: string }[] {
  const segments = pathname.split("/").filter(Boolean);
  const breadcrumbs: { label: string; href?: string }[] = [];

  let currentPath = "";

  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const isLast = index === segments.length - 1;

    breadcrumbs.push({
      label: formatSegment(segment),
      href: isLast ? undefined : currentPath,
    });
  });

  return breadcrumbs;
}

export function DynamicBreadcrumb() {
  const pathname = usePathname();

  // Generate breadcrumbs from current pathname
  const breadcrumbItems = generateBreadcrumbs(pathname);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbItems.map((item, index) => (
          <div key={index} className="flex items-center">
            {index > 0 && <BreadcrumbSeparator className="mx-2" />}
            <BreadcrumbItem>
              {item.href ? (
                <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
              ) : (
                <BreadcrumbPage>{item.label}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
          </div>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
