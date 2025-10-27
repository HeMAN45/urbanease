import { useState } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/Header";
import HomePage from "@/pages/HomePage";
import ChatPage from "@/pages/ChatPage";
import FavoritesPage from "@/pages/FavoritesPage";
import Profile from "@/pages/Profile";
import NotFound from "@/pages/not-found";

function Router({ currentPage, onNavigate, location, onLocationChange }: {
  currentPage: string;
  onNavigate: (page: string) => void;
  location: string;
  onLocationChange: () => void;
}) {
  return (
    <>
      <Header
        location={location}
        onLocationChange={onLocationChange}
        onNavigate={onNavigate}
        currentPage={currentPage}
      />
      <Switch location={`/${currentPage}`}>
        <Route path="/home" component={HomePage} />
        <Route path="/chat" component={ChatPage} />
        <Route path="/favorites" component={FavoritesPage} />
        <Route path="/profile" component={Profile} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [location, setLocation] = useState("Akurdi, Pune, 411035");
  
  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    console.log('Navigated to:', page);
  };
  
  const handleLocationChange = () => {
    setCurrentPage('profile');
  };
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-background">
          <Router
            currentPage={currentPage}
            onNavigate={handleNavigate}
            location={location}
            onLocationChange={handleLocationChange}
          />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
