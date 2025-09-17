import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Notification {
  id: string;
  name: string;
  location: string;
  message: string;
}

const notifications: Notification[] = [
  { id: "1", name: "Samantha", location: "California", message: "just claimed $500 DoorDash gift card" },
  { id: "2", name: "Brian", location: "Texas", message: "secured his $500 DoorDash reward" },
  { id: "3", name: "Emily", location: "New York", message: "unlocked $500 DoorDash credit" },
  { id: "4", name: "Michael", location: "Florida", message: "won $500 DoorDash gift card" },
  { id: "5", name: "Sarah", location: "Illinois", message: "claimed her $500 DoorDash reward" },
  { id: "6", name: "David", location: "Washington", message: "received $500 DoorDash credit" },
];

export function SocialProofNotifications() {
  const [currentNotification, setCurrentNotification] = useState<Notification | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [notificationIndex, setNotificationIndex] = useState(0);

  useEffect(() => {
    const showNotification = () => {
      const randomNotification = notifications[notificationIndex];
      setCurrentNotification(randomNotification);
      setIsVisible(true);
      
      // Hide after 4 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 4000);
      
      // Update index for next notification
      setNotificationIndex((prev) => (prev + 1) % notifications.length);
    };

    // Show first notification after 2 seconds
    const initialTimeout = setTimeout(showNotification, 2000);
    
    // Then show every 6-8 seconds
    const interval = setInterval(() => {
      if (!isVisible) {
        showNotification();
      }
    }, Math.random() * 2000 + 6000); // 6-8 seconds

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [isVisible, notificationIndex]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!currentNotification || !isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-sm">
      <div className="animate-slide-in-left bg-white rounded-lg shadow-floating glow-primary p-4 border border-primary/20">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-gray-900">
                {currentNotification.name}
              </span>
              <span className="text-xs text-gray-500">
                from {currentNotification.location}
              </span>
            </div>
            <p className="text-sm text-gray-700 font-medium">
              {currentNotification.message}
            </p>
            <span className="text-xs text-gray-500 mt-1 block">
              Just now
            </span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClose}
            className="p-1 h-auto hover:bg-gray-100"
          >
            <X className="h-4 w-4 text-gray-400" />
          </Button>
        </div>
      </div>
    </div>
  );
}