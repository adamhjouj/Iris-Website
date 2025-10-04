"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card } from "./ui/card";

const testimonials = [
  {
    name: "Michael Chen",
    role: "Software Developer",
    image: "https://avatars.githubusercontent.com/u/1234567?v=4",
    content: "Iris has completely transformed how I work. I can code hands-free using voice commands and gesture controls. It's like having a personal assistant that understands exactly what I need."
  },
  {
    name: "Sarah Johnson",
    role: "Accessibility Consultant",
    image: "https://avatars.githubusercontent.com/u/2345678?v=4",
    content: "As someone with mobility challenges, Iris has given me back my independence. The voice recognition is incredibly accurate and the gesture controls work flawlessly."
  },
  {
    name: "David Wilson",
    role: "Content Creator",
    image: "https://avatars.githubusercontent.com/u/3456789?v=4",
    content: "I can now edit videos and create content without touching my keyboard. The AI understands complex commands and executes them perfectly. It's revolutionary."
  },
  {
    name: "Emily Zhang",
    role: "UX Designer",
    image: "https://avatars.githubusercontent.com/u/4567890?v=4",
    content: "Iris has made my design workflow so much more efficient. I can navigate through design tools using gestures and voice commands. It's like magic."
  },
  {
    name: "James Rodriguez",
    role: "IT Professional",
    image: "https://avatars.githubusercontent.com/u/5678901?v=4",
    content: "The security features are robust and the AI learning capabilities are impressive. Iris adapts to my work patterns and becomes more efficient over time."
  },
  {
    name: "Lisa Thompson",
    role: "Product Manager",
    image: "https://avatars.githubusercontent.com/u/6789012?v=4",
    content: "Managing multiple projects is now effortless with Iris. I can switch between applications, take notes, and organize my work using natural voice commands."
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 overflow-hidden bg-black">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-normal mb-4">Trusted by Users</h2>
          <p className="text-muted-foreground text-lg">
            Join thousands of satisfied users who have transformed their computer experience
          </p>
        </motion.div>

        <div className="relative flex flex-col antialiased">
          <div className="relative flex overflow-hidden py-4">
            <div className="animate-marquee flex min-w-full shrink-0 items-stretch gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={`${index}-1`} className="w-[400px] shrink-0 bg-black/40 backdrop-blur-xl border-white/5 hover:border-white/10 transition-all duration-300 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.image} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-white/90">{testimonial.name}</h4>
                      <p className="text-sm text-white/60">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-white/70 leading-relaxed">
                    {testimonial.content}
                  </p>
                </Card>
              ))}
            </div>
            <div className="animate-marquee flex min-w-full shrink-0 items-stretch gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={`${index}-2`} className="w-[400px] shrink-0 bg-black/40 backdrop-blur-xl border-white/5 hover:border-white/10 transition-all duration-300 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.image} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-white/90">{testimonial.name}</h4>
                      <p className="text-sm text-white/60">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-white/70 leading-relaxed">
                    {testimonial.content}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;