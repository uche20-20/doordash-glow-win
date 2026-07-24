import { useState, useEffect } from "react";
import { X, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VouchNotification {
  id: string;
  message: string;
}

const vouchMessages: VouchNotification[] = [
  { id: "1", message: "Samantha just claimed her $750 DoorDash voucher!" },
  { id: "2", message: "Michael from TX unlocked his reward — waiting confirmation." },
  { id: "3", message: "Olivia just finished the steps for $750!" },
  { id: "4", message: "Jacob secured his entry — pending code delivery." },
  { id: "5", message: "Hannah confirmed her $750 voucher." },
  { id: "6", message: "Ava from CA is waiting on her $750 DoorDash credit." },
  { id: "7", message: "Chloe just completed her claim — confirmation email sent." },
  { id: "8", message: "Grace unlocked $750 DoorDash balance." },
  { id: "9", message: "Brian is almost done — 1 step left." },
  { id: "10", message: "Jessica from NY just verified her $750 reward!" },
  { id: "11", message: "Tyler completed all steps — voucher processing." },
  { id: "12", message: "Madison secured her $750 DoorDash credit!" },
  { id: "13", message: "Connor from FL is finalizing his claim." },
  { id: "14", message: "Sophia just unlocked her reward — so excited!" },
  { id: "15", message: "Ethan confirmed his $750 voucher delivery." },
  { id: "16", message: "Isabella from CA completed her entry." },
  { id: "17", message: "Noah just finished the survey — reward pending." },
  { id: "18", message: "Emma secured her $750 DoorDash balance!" },
  { id: "19", message: "Liam from TX is waiting on confirmation email." },
  { id: "20", message: "Mia just claimed her reward — processing now." },
  { id: "21", message: "Alexander completed all requirements for $750!" },
  { id: "22", message: "Charlotte from NY unlocked her voucher." },
  { id: "23", message: "William just verified his $750 DoorDash credit." },
  { id: "24", message: "Amelia secured her entry — reward coming soon!" },
  { id: "25", message: "James from CA finished the final step." },
  { id: "26", message: "Harper just confirmed her $750 voucher!" },
  { id: "27", message: "Benjamin completed his claim — so easy!" },
  { id: "28", message: "Evelyn from FL is waiting on her reward code." },
  { id: "29", message: "Lucas unlocked his $750 DoorDash balance." },
  { id: "30", message: "Abigail just finished — confirmation pending." },
  { id: "31", message: "Henry from TX secured his $750 voucher!" },
  { id: "32", message: "Emily completed all steps — reward processing." },
  { id: "33", message: "Sebastian just claimed his DoorDash credit." },
  { id: "34", message: "Avery from NY is finalizing her $750 reward." },
  { id: "35", message: "Owen unlocked his voucher — super quick process!" }
];

export function SocialProofNotifications() {
  const [currentNotification, setCurrentNotification] = useState<VouchNotification | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [usedNotifications, setUsedNotifications] = useState<Set<string>>(new Set());
  const [notificationCount, setNotificationCount] = useState(0);
  const [timeouts, setTimeouts] = useState<any[]>([]);

  // Check localStorage on mount to see if notifications are disabled
  useEffect(() => {
    const disabled = localStorage.getItem('vouchNotificationsDisabled') === 'true';
    setIsDisabled(disabled);
  }, []);

  // Clear all timeouts on unmount
  useEffect(() => {
    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, [timeouts]);

  useEffect(() => {
    if (isDisabled || notificationCount >= 8) return;

    const showRandomNotification = () => {
      if (isDisabled || notificationCount >= 8) return;

      // Get available notifications (not used yet)
      const availableNotifications = vouchMessages.filter(notif => !usedNotifications.has(notif.id));
      
      // If we've used all notifications, reset the pool
      if (availableNotifications.length === 0) {
        setUsedNotifications(new Set());
        return;
      }

      // Pick a random notification
      const randomIndex = Math.floor(Math.random() * availableNotifications.length);
      const selectedNotification = availableNotifications[randomIndex];
      
      // Mark as used
      setUsedNotifications(prev => new Set([...prev, selectedNotification.id]));
      
      // Show notification
      setCurrentNotification(selectedNotification);
      setIsVisible(true);
      setNotificationCount(prev => prev + 1);
      
      // Hide after 6 seconds
      const hideTimeout = setTimeout(() => {
        setIsVisible(false);
      }, 6000);
      
      setTimeouts(prev => [...prev, hideTimeout]);
    };

    const scheduleNextNotification = () => {
      if (isDisabled || notificationCount >= 8) return;
      
      // Random delay between 20-40 seconds
      const delay = Math.random() * 20000 + 20000; // 20-40 seconds
      
      const nextTimeout = setTimeout(() => {
        showRandomNotification();
        scheduleNextNotification(); // Schedule the next one
      }, delay);
      
      setTimeouts(prev => [...prev, nextTimeout]);
    };

    // Show first notification after 8-12 seconds
    const initialDelay = Math.random() * 4000 + 8000; // 8-12 seconds
    const initialTimeout = setTimeout(() => {
      showRandomNotification();
      scheduleNextNotification(); // Start the recurring notifications
    }, initialDelay);
    
    setTimeouts(prev => [...prev, initialTimeout]);

    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
      setTimeouts([]);
    };
  }, [isDisabled, notificationCount, usedNotifications]);

  const handleClose = () => {
    setIsVisible(false);
    setIsDisabled(true);
    localStorage.setItem('vouchNotificationsDisabled', 'true');
    
    // Clear all pending timeouts
    timeouts.forEach(timeout => clearTimeout(timeout));
    setTimeouts([]);
  };

  if (!currentNotification || !isVisible || isDisabled) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <div
        className="w-64 md:w-72 bg-card rounded-2xl shadow-floating border border-border/60 p-3 md:p-4"
        style={{
          animation: 'fadeInSlide 0.6s cubic-bezier(0.25,0.46,0.45,0.94), fadeOutSlide 0.6s ease-in 5.4s forwards'
        }}
      >
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
              <Truck className="h-4 w-4 md:h-5 md:w-5 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs md:text-sm text-foreground font-medium leading-snug">
                {currentNotification.message}
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClose}
            className="p-1 h-auto hover:bg-muted text-muted-foreground flex-shrink-0"
          >
            <X className="h-3 w-3 md:h-4 md:w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}