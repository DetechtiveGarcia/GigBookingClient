"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { GigBooking } from "@/types";
import { FindBookingForm, findBookingSchema } from "@/types/schemas";


type FindBookingModalProps = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  gigBookings: GigBooking[];
  onBookingFound: (booking: GigBooking) => void;
  clickedEventId: string | null;
};

export default function FindBookingModal({
  isOpen,
  setIsOpen,
  gigBookings,
  onBookingFound,
  clickedEventId
}: FindBookingModalProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FindBookingForm>({
    resolver: zodResolver(findBookingSchema),
    defaultValues: { bookingId: "" },
  });

  const onSubmit = (data: FindBookingForm) => {

    const foundBooking = gigBookings.find((gb) => gb.id === data.bookingId);

    if (!foundBooking || foundBooking.id !== clickedEventId) {
      return toast.error("Kunde inte hitta någon bokning med det numret.", {
        description: "Dubbelkolla koden i ditt bekräftelsemail.",
      });
    }

    toast.success("Bokning hittad!");
    reset();
    setIsOpen(false);
    onBookingFound(foundBooking);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle>Hantera din bokning</DialogTitle>
            <DialogDescription>
              Har du bokat från en annan enhet? Skriv in ditt bokningsnummer för att ändra eller avboka.
            </DialogDescription>
          </DialogHeader>

          <FieldGroup className="py-4">
            <Field>
              <FieldLabel htmlFor="bookingId">Bokningsnummer</FieldLabel>
              <Input
                id="bookingId"
                placeholder="f81d4fae-7dec-11d0-a765-00a0c91e6bf6"
                {...register("bookingId")}
              />
              {errors.bookingId && (
                <span className="text-xs text-destructive mt-1">
                  {errors.bookingId.message}
                </span>
              )}
            </Field>
          </FieldGroup>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsOpen(false)}
            >
              Avbryt
            </Button>
            <Button type="submit">Hitta bokning</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}