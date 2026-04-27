import { Mail, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import PageWrapper from "@/components/layout/PageWrapper";

export default function About() {
  return (
    <PageWrapper>
      <div className="max-w-2xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold">About</h1>
          <p className="text-muted-foreground mt-2">
            This is a starter template — replace this page with your own content.
          </p>
        </div>

        <Separator />

        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
            <AvatarFallback>
              <User className="h-6 w-6" />
            </AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <p className="font-semibold">Your Name</p>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              <Mail className="h-3.5 w-3.5" />
              your@email.com
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
