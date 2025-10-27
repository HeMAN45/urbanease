import { useState } from "react";
import { format, addDays } from "date-fns";
import { Calendar, Clock } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Professional } from "@shared/schema";

interface BookingModalProps {
  professional: Professional | null;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (date: string, timeSlot: string) => void;
}

const TIME_SLOTS = [
  "9:00 AM - 10:00 AM",
  "10:00 AM - 11:00 AM",
  "11:00 AM - 12:00 PM",
  "12:00 PM - 1:00 PM",
  "2:00 PM - 3:00 PM",
  "3:00 PM - 4:00 PM",
  "4:00 PM - 5:00 PM",
  "5:00 PM - 6:00 PM",
];

export default function BookingModal({ professional, isOpen, onClose, onConfirm }: BookingModalProps) {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  
  const dates = Array.from({ length: 7 }, (_, i) => {
    const date = addDays(new Date(), i);
    return {
      value: format(date, 'yyyy-MM-dd'),
      label: format(date, i === 0 ? "'Today' - MMM d" : i === 1 ? "'Tomorrow' - MMM d" : "EEE, MMM d"),
    };
  });
  
  const handleConfirm = () => {
    if (selectedDate && selectedTime) {
      onConfirm(selectedDate, selectedTime);
      setSelectedDate("");
      setSelectedTime("");
    }
  };
  
  if (!professional) return null;
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Book {professional.name}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Calendar className="w-5 h-5 text-primary" />
              <h3 className="font-semibold">Select Date</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {dates.map((date) => (
                <Button
                  key={date.value}
                  variant={selectedDate === date.value ? "default" : "outline"}
                  className="justify-start"
                  onClick={() => setSelectedDate(date.value)}
                  data-testid={`button-date-${date.value}`}
                >
                  {date.label}
                </Button>
              ))}
            </div>
          </div>
          
          {selectedDate && (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-5 h-5 text-primary" />
                <h3 className="font-semibold">Select Time Slot</h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {TIME_SLOTS.map((slot) => (
                  <Button
                    key={slot}
                    variant={selectedTime === slot ? "default" : "outline"}
                    className="justify-start"
                    onClick={() => setSelectedTime(slot)}
                    data-testid={`button-time-${slot}`}
                  >
                    {slot}
                  </Button>
                ))}
              </div>
            </div>
          )}
          
          {selectedDate && selectedTime && (
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold mb-2">Booking Summary</h4>
              <div className="space-y-1 text-sm">
                <p><span className="text-muted-foreground">Professional:</span> {professional.name}</p>
                <p><span className="text-muted-foreground">Date:</span> {dates.find(d => d.value === selectedDate)?.label}</p>
                <p><span className="text-muted-foreground">Time:</span> {selectedTime}</p>
                <p className="text-lg font-bold mt-2">Starting from ₹{professional.basePrice}</p>
              </div>
            </div>
          )}
        </div>
        
        <DialogFooter>
          <Button variant="outline" onClick={onClose} data-testid="button-cancel-booking">
            Cancel
          </Button>
          <Button 
            onClick={handleConfirm} 
            disabled={!selectedDate || !selectedTime}
            data-testid="button-confirm-booking"
          >
            Confirm Booking
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
