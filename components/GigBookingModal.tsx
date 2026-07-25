import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldError,
} from "@/components/ui/field";
import { extractTime, createISOString, getAvailableTimesForDate } from "@/lib/helpers";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Dispatch, SetStateAction, useEffect } from "react";
import { GigBookingRequest, GigBooking } from "@/types";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { GigBookingFormSchema, GigBookingFormValues } from "@/types/schemas";
import { createGigBooking } from "@/lib/actions";
import { useGigBookings } from "@/hooks/useGigBookings";

type GigBookingModalProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  selectedDate: string | null;
  bookingDone: boolean;
  setBookingDone: Dispatch<SetStateAction<boolean>>;
  setBookedTime: Dispatch<
    SetStateAction<{ start: string; end: string } | null>
  >;
  updateGigBooking: {
    isUpdating: boolean;
    gigBooking: GigBooking | null;
  };
};

export default function GigBookingModal({
  isOpen,
  setIsOpen,
  selectedDate,
  bookingDone,
  setBookingDone,
  setBookedTime,
  updateGigBooking,
}: GigBookingModalProps) {
  const { modifyBooking, removeBooking } = useGigBookings();
  const availableTimes = getAvailableTimesForDate(selectedDate);
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<GigBookingFormValues>({
    resolver: zodResolver(GigBookingFormSchema),
    defaultValues: {
      startTime: "",
      endTime: "",
      street: "",
      streetNumber: "",
      zipCode: "",
      city: "",
      clientName: "",
      clientEmail: "",
      clientPhone: "",
      venue: "",
    },
  });

  const isEditMode = !!updateGigBooking?.isUpdating;

  useEffect(() => {
    if (isOpen && isEditMode && updateGigBooking.gigBooking) {
      const gb = updateGigBooking.gigBooking;

      reset({
        startTime: extractTime(gb.startDate),
        endTime: extractTime(gb.endDate),
        street: gb.street || "",
        streetNumber: gb.streetNumber || "",
        zipCode: gb.zipCode || "",
        city: gb.city || "",
        venue: gb.venue || "",
        clientName: gb.clientName || "",
        clientEmail: gb.clientEmail || "",
        clientPhone: gb.clientPhone || "",
      });
    } else if (isOpen && !isEditMode) {
      reset({
        startTime: "",
        endTime: "",
        street: "",
        streetNumber: "",
        zipCode: "",
        city: "",
        venue: "",
        clientName: "",
        clientEmail: "",
        clientPhone: "",
      });
    }
  }, [updateGigBooking, isOpen, reset, isEditMode]);

  const onSubmit = async (data: GigBookingFormValues) => {
    try {
      const requestPayload: GigBookingRequest = {
        startDate: createISOString(selectedDate, data.startTime),
        endDate: createISOString(selectedDate, data.endTime),
        street: data.street,
        streetNumber: data.streetNumber,
        zipCode: data.zipCode,
        city: data.city,
        clientName: data.clientName,
        clientEmail: data.clientEmail,
        clientPhone: data.clientPhone,
        venue: data.venue,
      };

      if (updateGigBooking.isUpdating && updateGigBooking.gigBooking) {
        await modifyBooking(updateGigBooking.gigBooking.id, requestPayload);

        toast.success("Bokningen har uppdaterats!", {
          description: "En ny bekräftelse har sparats.",
        });
        setIsOpen(false);
        setBookingDone(!bookingDone);
        setBookedTime({ start: data.startTime, end: data.endTime });
      } else {
        const booking: GigBooking = await createGigBooking(requestPayload);
        const savedGigBookings = JSON.parse(
          localStorage.getItem("myBookings") ?? "[]",
        );
        localStorage.setItem(
          "myBookings",
          JSON.stringify([...savedGigBookings, booking]),
        );

        reset();
        setIsOpen(false);
        setBookingDone(!bookingDone);
        setBookedTime({ start: data.startTime, end: data.endTime });
      }
    } catch (error) {
      toast.error("Något gick fel vid sparandet.");
    }
  };

  return (

      <Dialog open={isOpen} onOpenChange={setIsOpen} >
        <DialogContent className="calendar-booking-modal sm:max-w-md">
          <form onSubmit={handleSubmit(onSubmit)}>
            <DialogHeader>
              <DialogTitle>Boka {selectedDate}</DialogTitle>
              <DialogDescription>
                Fyll i dina uppgifter för att boka.
              </DialogDescription>
            </DialogHeader>

            <FieldGroup>
              <div className="grid grid-cols-2 gap-4">
                <Field>
                  <FieldLabel>Starttid</FieldLabel>
                  <Controller
                    name="startTime"
                    control={control}
                    render={({ field }) => (
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Välj tid" />
                        </SelectTrigger>
                        <SelectContent className="max-h-48 overflow-y-auto">
                          <SelectGroup>
                            {availableTimes.map((time) => (
                              <SelectItem key={time} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.startTime && (
                    <FieldError>{errors.startTime.message}</FieldError>
                  )}
                </Field>

                <Field>
                  <FieldLabel>Sluttid</FieldLabel>
                  <Controller
                    name="endTime"
                    control={control}
                    render={({ field }) => (
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Välj tid" />
                        </SelectTrigger>
                        <SelectContent className="max-h-48 overflow-y-auto">
                          <SelectGroup>
                            {availableTimes.map((time) => (
                              <SelectItem key={time} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.endTime && (
                    <FieldError>{errors.endTime.message}</FieldError>
                  )}
                </Field>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Field>
                  <FieldLabel htmlFor="street">Gata</FieldLabel>
                  <Input
                    id="street"
                    placeholder="Storgatan"
                    {...register("street")}
                  />
                  {errors.street && (
                    <FieldError>{errors.street.message}</FieldError>
                  )}
                </Field>

                <Field>
                  <FieldLabel htmlFor="streetNumber">Gatunummer</FieldLabel>
                  <Input
                    id="streetNumber"
                    placeholder="14"
                    {...register("streetNumber")}
                  />
                  {errors.streetNumber && (
                    <FieldError>{errors.streetNumber.message}</FieldError>
                  )}
                </Field>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Field>
                  <FieldLabel htmlFor="zipCode">Postnummer</FieldLabel>
                  <Input
                    id="zipCode"
                    placeholder="11122"
                    {...register("zipCode")}
                  />
                  {errors.zipCode && (
                    <FieldError>{errors.zipCode.message}</FieldError>
                  )}
                </Field>

                <Field>
                  <FieldLabel htmlFor="city">Stad</FieldLabel>
                  <Input
                    id="city"
                    placeholder="Stockholm"
                    {...register("city")}
                  />
                  {errors.city && (
                    <FieldError>{errors.city.message}</FieldError>
                  )}
                </Field>
              </div>

              <Field>
                <FieldLabel htmlFor="venue">Spelplats</FieldLabel>
                <Input
                  id="venue"
                  placeholder="Berns Salonger"
                  {...register("venue")}
                />
                {errors.venue && (
                  <FieldError>{errors.venue.message}</FieldError>
                )}
              </Field>

              <Field>
                <FieldLabel htmlFor="clientName">Namn</FieldLabel>
                <Input
                  id="clientName"
                  placeholder="Anna Lindgren"
                  {...register("clientName")}
                />
                {errors.clientName && (
                  <FieldError>{errors.clientName.message}</FieldError>
                )}
              </Field>

              <Field>
                <FieldLabel htmlFor="clientEmail">Email</FieldLabel>
                <Input
                  id="clientEmail"
                  type="email"
                  placeholder="anna@email.com"
                  {...register("clientEmail")}
                />
                {errors.clientEmail && (
                  <FieldError>{errors.clientEmail.message}</FieldError>
                )}
              </Field>

              <Field>
                <FieldLabel htmlFor="clientPhone">Telefon</FieldLabel>
                <Input
                  id="clientPhone"
                  placeholder="0701234567"
                  {...register("clientPhone")}
                />
                {errors.clientPhone && (
                  <FieldError>{errors.clientPhone.message}</FieldError>
                )}
              </Field>
            </FieldGroup>

            <DialogFooter className="mt-4 flex justify-between">
              {isEditMode ? (
                <>
                  <Button
                    type="button"
                    variant="destructive"
                    onClick={async () => {
                      if (updateGigBooking.gigBooking) {
                        try {
                          await removeBooking(updateGigBooking.gigBooking.id);
                          toast.success("Bokningen har avbokats");
                          setIsOpen(false);
                          setBookingDone(!bookingDone);
                        } catch (error) {
                          toast.error("Det gick inte att avboka. Försök igen.");
                        }
                      }
                    }}
                    className="mr-auto"
                  >
                    Avboka
                  </Button>
                  <Button type="submit">Spara ändringar</Button>
                </>
              ) : (
                <>
                  <DialogClose asChild>
                    <Button variant="outline">Avbryt</Button>
                  </DialogClose>
                  <Button type="submit">Boka</Button>
                </>
              )}
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

  );
}
