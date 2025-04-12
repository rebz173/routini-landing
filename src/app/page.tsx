'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export default function RoutiniLandingPage() {
  const [email, setEmail] = useState("");

  const validateEmail = (email: string) => /^\S+@\S+\.\S+$/.test(email);

  const handleSubmit = async () => {
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    const res = await fetch("/api/subscribe", {
      method: "POST",
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      alert("Thanks for joining the waitlist! 🎉");
      setEmail("");
    } else {
      alert("Oops! Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 p-6 md:p-12">
      <div className="max-w-4xl mx-auto grid gap-12">
        <section className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold">Smarter Workouts. Less Scrolling.</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Organize your favorite YouTube workouts into clean, quick-access gym playlists.
          </p>
          <div className="flex justify-center gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-64"
            />
            <Button onClick={handleSubmit}>Join the Waitlist</Button>
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-6 text-center">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">🎯 Curate by Goal</h3>
              <p>Save videos into categories like Push Day, HIIT, Stretch, and more.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">⏱️ Skip the Fluff</h3>
              <p>Jump to the exact moment you want in each workout — every time.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">📱 Built for the Gym</h3>
              <p>Minimal, mobile-first design for one-handed, distraction-free use.</p>
            </CardContent>
          </Card>
        </section>

        <section className="text-center space-y-4">
          <h2 className="text-3xl font-bold">How Routini Works</h2>
          <ol className="text-left max-w-xl mx-auto list-decimal list-inside space-y-2 text-lg">
            <li>Add any fitness video from YouTube</li>
            <li>Tag it, set start/end times, and organize into folders</li>
            <li>Tap and train – no wasted time</li>
          </ol>
        </section>

        <section className="text-center space-y-2 text-sm text-gray-600 max-w-md mx-auto">
          <p className="font-semibold">📲 Save Routini to Your Phone Like an App:</p>
          <p><strong>iPhone:</strong> Tap the Share button in Safari → "Add to Home Screen"</p>
          <p><strong>Android:</strong> Tap the 3-dot menu → "Install App"</p>
        </section>

        <section className="text-center space-y-4">
          <p className="text-xl">Built by people who hate scrolling through workouts in the gym.</p>
          <div className="flex justify-center gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-64"
            />
            <Button onClick={handleSubmit}>Get Early Access</Button>
          </div>
        </section>
      </div>
    </div>
  );
}
