import { Skeleton } from "@/components/ui/skeleton"; // Assuming you have a Skeleton component or similar

export default function BlogLoading() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center mb-8">
        <Skeleton className="h-8 w-32" /> {/* Back to Portfolio button */}
        <Skeleton className="h-8 w-24 ml-4" /> {/* Blog title */}
      </div>
      
      <div className="relative mb-8">
        <Skeleton className="h-10 w-full" /> {/* Search input */}
      </div>
      
      <div className="mb-8">
        <Skeleton className="h-6 w-32 mb-4" /> {/* Popular Tags title */}
        <div className="flex flex-wrap gap-2">
          <Skeleton className="h-8 w-20 rounded-full" />
          <Skeleton className="h-8 w-24 rounded-full" />
          <Skeleton className="h-8 w-16 rounded-full" />
        </div>
      </div>
      
      <div className="space-y-6">
        {/* Placeholder for multiple blog post cards */}
        {[...Array(3)].map((_, index) => (
          <div key={index} className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
            <Skeleton className="h-6 w-3/4 mb-2" /> {/* Post title */}
            <Skeleton className="h-4 w-full mb-3" /> {/* Excerpt line 1 */}
            <Skeleton className="h-4 w-2/3" /> {/* Excerpt line 2 */}
            <div className="flex flex-wrap gap-2 mt-3">
              <Skeleton className="h-5 w-16 rounded-md" />
              <Skeleton className="h-5 w-20 rounded-md" />
            </div>
            <div className="flex items-center text-sm text-gray-500 mt-4">
              <Skeleton className="h-4 w-24" /> {/* Date and read time */}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
