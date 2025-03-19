// loading.tsx is a special Next.js file built on top of React Suspense
// It allows you to create fallback UI to show as a replacement while page content loads.
// Since <SideNav> is static, it's shown immediately

// Since loading.tsx is a level higher than /invoices/page.tsx and /customers/page.tsx in the file system,
//  it's also applied to those pages.
import DashboardSkeleton from "@/app/ui/skeletons";

export default function Loading() {
    return <DashboardSkeleton />;
  }