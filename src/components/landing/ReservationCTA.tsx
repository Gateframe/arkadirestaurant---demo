import { useEffect, useMemo, useRef, useState, type FormEvent, type ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useI18n } from "@/i18n";
import bg from "@/assets/reservation-bg.png";

export function ReservationCTA() {
  const { t } = useI18n();
  const ref = useReveal<HTMLDivElement>();
  const scrollYRef = useRef(0);
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const timeWindows = useMemo(
    () =>
      [
        t("reservation.time1"),
        t("reservation.time2"),
        t("reservation.time3"),
        t("reservation.time4"),
        t("reservation.time5"),
        t("reservation.time6"),
      ],
    [t],
  );

  function openReservationForm() {
    scrollYRef.current = window.scrollY;
    setSubmitted(false);
    setOpen(true);
  }

  function restoreScrollPosition() {
    requestAnimationFrame(() => window.scrollTo({ top: scrollYRef.current, left: 0 }));
  }

  useEffect(() => {
    window.addEventListener("open-reservation-form", openReservationForm);
    return () => window.removeEventListener("open-reservation-form", openReservationForm);
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(nextOpen) => {
        setOpen(nextOpen);
        if (nextOpen) {
          setSubmitted(false);
        } else {
          restoreScrollPosition();
        }
      }}
    >
      <section id="reservation" className="px-3 py-24 sm:px-5 sm:py-32">
        <div
          ref={ref}
          className="reveal relative mx-auto flex min-h-[70vh] max-w-[1600px] items-center justify-center overflow-hidden rounded-3xl"
        >
          <img
            src={bg}
            alt={t("reservation.ariaRoom")}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover brightness-[1.05] contrast-[1.05] saturate-[1.06]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(34,26,20,0.68)] via-[rgba(26,20,16,0.32)] to-[rgba(18,14,12,0.18)]" />

          <div className="relative z-10 max-w-2xl px-6 py-20 text-center">
            <span className="eyebrow">{t("reservation.eyebrow")}</span>
            <h2 className="text-display mt-6 text-5xl text-ivory [text-shadow:0_1px_2px_rgba(12,10,8,0.45),0_4px_36px_rgba(0,0,0,0.3),0_0_64px_rgba(243,239,226,0.1)] sm:text-7xl">
              {t("reservation.title1")}
              <br />
              <span className="italic text-gold">{t("reservation.title2")}</span>
            </h2>
            <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-ivory/70">{t("reservation.blurb")}</p>
            <button
              type="button"
              onClick={openReservationForm}
              className="mt-10 inline-flex items-center gap-3 rounded-full border border-gold bg-gold px-7 py-3.5 text-[11px] uppercase tracking-[0.28em] text-background transition-all hover:bg-transparent hover:text-gold"
            >
              {t("reservation.cta")}
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      <DialogContent
        onCloseAutoFocus={(event) => event.preventDefault()}
        className="max-h-[92dvh] max-w-2xl overflow-y-auto border-white/15 bg-background/95 p-6 text-ivory shadow-[0_24px_90px_-40px_rgba(0,0,0,0.9)] sm:rounded-[2rem] sm:p-8"
      >
        <div>
          <span className="eyebrow">{t("reservation.dialogEyebrow")}</span>
          <DialogTitle className="text-display mt-3 text-3xl font-normal text-ivory sm:text-4xl">
            {t("reservation.dialogTitle")}
          </DialogTitle>
          <DialogDescription className="mt-3 max-w-md text-sm leading-relaxed text-ivory/65">
            {t("reservation.dialogDesc")}
          </DialogDescription>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 text-left">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label={t("reservation.name")} htmlFor="reservation-name">
              <Input
                id="reservation-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                placeholder={t("reservation.namePh")}
                className="h-11 border-white/15 bg-white/5 text-ivory placeholder:text-ivory/35 focus-visible:ring-gold/60"
              />
            </Field>

            <Field label={t("reservation.phone")} htmlFor="reservation-phone">
              <Input
                id="reservation-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                placeholder="+49 …"
                className="h-11 border-white/15 bg-white/5 text-ivory placeholder:text-ivory/35 focus-visible:ring-gold/60"
              />
            </Field>

            <Field label={t("reservation.people")} htmlFor="reservation-people">
              <Input
                id="reservation-people"
                name="people"
                type="number"
                min="1"
                max="20"
                required
                placeholder="2"
                className="h-11 border-white/15 bg-white/5 text-ivory placeholder:text-ivory/35 focus-visible:ring-gold/60"
              />
            </Field>

            <Field label={t("reservation.time")} htmlFor="reservation-time">
              <select
                id="reservation-time"
                name="timeWindow"
                required
                defaultValue=""
                className="flex h-11 w-full rounded-md border border-white/15 bg-white/5 px-3 py-2 text-sm text-ivory shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold/60"
              >
                <option value="" disabled>
                  {t("reservation.selectWindow")}
                </option>
                {timeWindows.map((window) => (
                  <option key={window} value={window} className="bg-background text-ivory">
                    {window}
                  </option>
                ))}
              </select>
            </Field>
          </div>

          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full border border-gold bg-gold px-7 py-3.5 text-[11px] uppercase tracking-[0.28em] text-background transition-all hover:bg-transparent hover:text-gold"
          >
            {submitted ? t("reservation.submitDone") : t("reservation.submit")}
            <ArrowUpRight className="h-4 w-4" />
          </button>
          <p className="mt-4 text-center text-xs leading-relaxed text-ivory/55">
            {submitted ? t("reservation.thankYou") : t("reservation.note")}
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={htmlFor} className="text-[10px] uppercase tracking-[0.28em] text-gold">
        {label}
      </Label>
      {children}
    </div>
  );
}
