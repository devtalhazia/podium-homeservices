import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Skeleton as ShadSkeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PageWrapper from "@/components/layout/PageWrapper";

function CardSkeletonRLS() {
  return (
    <SkeletonTheme baseColor="#e2e8f0" highlightColor="#f8fafc">
      <div className="rounded-lg border p-6 space-y-3">
        <div className="flex items-center gap-3">
          <Skeleton circle width={40} height={40} />
          <div className="flex-1">
            <Skeleton height={14} width="60%" />
            <Skeleton height={12} width="40%" className="mt-1" />
          </div>
        </div>
        <Skeleton count={3} height={12} />
        <Skeleton height={32} borderRadius={6} />
      </div>
    </SkeletonTheme>
  );
}

function CardSkeletonShadcn() {
  return (
    <Card>
      <CardHeader className="space-y-2">
        <div className="flex items-center gap-3">
          <ShadSkeleton className="h-10 w-10 rounded-full" />
          <div className="space-y-1 flex-1">
            <ShadSkeleton className="h-4 w-3/5" />
            <ShadSkeleton className="h-3 w-2/5" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <ShadSkeleton className="h-3 w-full" />
        <ShadSkeleton className="h-3 w-full" />
        <ShadSkeleton className="h-3 w-4/5" />
        <ShadSkeleton className="h-8 w-full mt-2" />
      </CardContent>
    </Card>
  );
}

export default function Skeletons() {
  return (
    <PageWrapper>
      <div className="max-w-3xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Skeleton Loaders</h1>
          <p className="text-muted-foreground mt-2">
            Two approaches — shadcn{" "}
            <code className="text-xs bg-muted px-1 py-0.5 rounded">Skeleton</code> for quick usage,{" "}
            <code className="text-xs bg-muted px-1 py-0.5 rounded">react-loading-skeleton</code> for
            advanced theming.
          </p>
        </div>

        <Tabs defaultValue="shadcn">
          <TabsList>
            <TabsTrigger value="shadcn">shadcn/ui Skeleton</TabsTrigger>
            <TabsTrigger value="rls">react-loading-skeleton</TabsTrigger>
          </TabsList>

          <TabsContent value="shadcn" className="mt-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <CardSkeletonShadcn />
              <CardSkeletonShadcn />
            </div>
          </TabsContent>

          <TabsContent value="rls" className="mt-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <CardSkeletonRLS />
              <CardSkeletonRLS />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </PageWrapper>
  );
}
