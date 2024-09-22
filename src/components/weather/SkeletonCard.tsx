import { Skeleton } from "@/components/ui/skeleton";

export function ThreeCardSkeleton() {
  return (
    <div className="grid mt-8 md:grid-cols-2 gap-6">
      <Skeleton className="h-[165px] w-full rounded-xl" />
      <Skeleton className="h-[165px] w-full rounded-xl" />
      <div className="col-span-2">
        <Skeleton className="h-[165px] w-full rounded-xl" />
      </div>
    </div>
  );
}
