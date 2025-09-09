import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

export function FAQ() {
  return (
    <section id="faq" className="py-20 bg-white" role="region" aria-labelledby="faq-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 id="faq-heading" className="text-charcoal mb-3">Frequently Asked Questions</h2>
          <p className="text-charcoal/70">
            Please reach us at <a href="mailto:rafikgenesislimo@gmail.com" className="text-soft-gold hover:underline">rafikgenesislimo@gmail.com</a> if you cannot find an answer to your question.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto">
          <AccordionItem value="service-areas">
            <AccordionTrigger className="text-lg text-charcoal">
              What areas do you serve?
            </AccordionTrigger>
            <AccordionContent className="text-charcoal/80">
              We proudly serve Houston and all surrounding areas, including Katy, Sugar Land, The Woodlands, Pearland, Cypress, Spring, Richmond, Humble, League City, and more. If you're unsure whether we cover your area, just give us a call!
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="vehicle-types">
            <AccordionTrigger className="text-lg text-charcoal">
              What types of vehicles do you offer?
            </AccordionTrigger>
            <AccordionContent className="text-charcoal/80">
              Our fleet includes executive SUVs, stretch limousines, party buses (14–27 passengers), and executive shuttle buses. We have vehicles for every group size and event type.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="advance-booking">
            <AccordionTrigger className="text-lg text-charcoal">
              How far in advance should I book a vehicle?
            </AccordionTrigger>
            <AccordionContent className="text-charcoal/80">
              We recommend booking early — especially for weekends, holidays, proms, and weddings. However, we also accommodate last-minute bookings based on availability.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="chauffeur-training">
            <AccordionTrigger className="text-lg text-charcoal">
              Are your chauffeurs professionally trained?
            </AccordionTrigger>
            <AccordionContent className="text-charcoal/80">
              Absolutely. All Genesis Limo chauffeurs are professionally trained, background-checked, fully insured, and committed to delivering a safe and premium experience.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="airport-service">
            <AccordionTrigger className="text-lg text-charcoal">
              Do you offer airport pickup and drop-off services?
            </AccordionTrigger>
            <AccordionContent className="text-charcoal/80">
              Yes, we provide 24/7 airport transportation to and from both Houston IAH and Hobby airports. Our drivers monitor flight times in real time to ensure prompt and seamless pickups.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}


