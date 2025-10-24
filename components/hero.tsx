import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-linear-to-br from-background to-muted/20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="bg-linear-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              Smart Attendance System
            </span>
            <br />
            <span className="text-foreground">Made Easy</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience lightning-fast, secure attendance system with Next
            Attend. Built with React and Tailwind CSS for modern web
            applications.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Secure and Reliable</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Fast and Efficient</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Easy to Use</span>
            </div>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button asChild size="lg" className="text-lg px-8 py-6 h-auto">
              <Link href="/signin">Sign In</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 h-auto"
              asChild
            >
              <Link href="/">API Status</Link>
            </Button>
          </div>

          {/* Additional Info */}
          <p className="text-sm text-muted-foreground pt-8">
            Join thousands of users building secure and efficient attendance
            systems
          </p>
        </div>
      </div>
    </section>
  );
}
