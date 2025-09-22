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
  { id: "1", name: "Samantha", location: "", message: "unlocked $750!" },
  { id: "2", name: "Brian", location: "TX", message: "entered!" },
  { id: "3", name: "Emily", location: "", message: "got $750 confirmed!" },
  { id: "4", name: "Olivia", location: "", message: "'s $750 pending!" },
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
      
      // Hide after 6 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 6000);
      
      // Update index for next notification
      setNotificationIndex((prev) => (prev + 1) % notifications.length);
    };

    // Show first notification after 2 seconds
    const initialTimeout = setTimeout(showNotification, 2000);
    
    // Then show every 10 seconds (6s show + 4s hide)
    const interval = setInterval(() => {
      if (!isVisible) {
        showNotification();
      }
    }, 10000);

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
    <div className="fixed bottom-4 left-4 z-50 w-72 md:w-80">
      <div className="animate-slide-in-left bg-gradient-to-r from-red-500 to-red-600 rounded-lg shadow-lg p-4 border" style={{ background: 'linear-gradient(135deg, #FF3008, #E02A00)' }}>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-white">
                {currentNotification.name}
              </span>
              {currentNotification.location && (
                <span className="text-xs text-white/80">
                  from {currentNotification.location}
                </span>
              )}
            </div>
            <p className="text-sm text-white font-medium">
              {currentNotification.message}
            </p>
            <span className="text-xs text-white/80 mt-1 block">
              Just now
            </span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClose}
            className="p-1 h-auto hover:bg-white/20 text-white"
          >
            <X className="h-4 w-4" style={{ color: '#FF3008' }} />
          </Button>
        </div>
      </div>
    </div>
  );
}