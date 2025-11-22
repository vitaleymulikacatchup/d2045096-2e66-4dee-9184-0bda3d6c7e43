"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofTwo from '@/components/sections/socialProof/SocialProofTwo';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Users, Shield, Zap, Rocket, Sparkles, Star, Crown, Mail } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="small"
      sizing="medium"
      background="animatedAurora"
      cardStyle="gradient-bordered"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="glass"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="SaasFlow"
          button={{
            text: "Get Started",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          tag="Modern SaaS Solution"
          title="Streamline Your Workflow with Intelligent Automation"
          description="Transform the way your team works. Automate repetitive tasks, collaborate seamlessly, and unlock unprecedented productivity with our next-generation platform."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763835317486-gjvv4my8.jpg"
          imageAlt="SaasFlow dashboard showing analytics and automation features"
          buttons={[
            {
              text: "Start Free Trial",
              href: "contact"
            },
            {
              text: "View Demo",
              onClick: () => {}
            }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardEight
          title="Powerful Features Built for Scale"
          description="Everything you need to automate, collaborate, and succeed in one unified platform"
          tag="Why SaasFlow"
          textboxLayout="default"
          features={[
            {
              id: 1,
              title: "Intelligent Automation",
              description: "Set up complex workflows in minutes without writing a single line of code",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763835318229-y60o1n9o.jpg"
            },
            {
              id: 2,
              title: "Real-Time Analytics",
              description: "Track performance metrics and gain actionable insights with advanced dashboards",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763835318865-x20dt2kc.jpg"
            },
            {
              id: 3,
              title: "Team Collaboration",
              description: "Work together seamlessly with built-in communication and project management tools",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763835319751-tsmx8pr7.jpg"
            },
            {
              id: 4,
              title: "Enterprise Security",
              description: "Bank-level encryption and compliance standards keep your data protected 24/7",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763835320477-a9dpqz01.jpg"
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Growing Trust Worldwide"
          description="Join thousands of companies already transforming their operations"
          textboxLayout="default"
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          metrics={[
            {
              id: "1",
              value: "50K+",
              title: "Active Users",
              description: "Companies trusting our platform daily",
              icon: Users
            },
            {
              id: "2",
              value: "99.9%",
              title: "Uptime",
              description: "Reliable infrastructure you can count on",
              icon: Shield
            },
            {
              id: "3",
              value: "2M+",
              title: "Workflows Automated",
              description: "Processes streamlined every month",
              icon: Zap
            },
            {
              id: "4",
              value: "15min",
              title: "Setup Time",
              description: "Get started in just 15 minutes",
              icon: Rocket
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Simple, Transparent Pricing"
          description="Choose the perfect plan for your business. All plans include a 14-day free trial."
          tag="Pricing"
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "starter",
              badge: "Popular for Startups",
              badgeIcon: Sparkles,
              price: "$29/month",
              subtitle: "Perfect for small teams and growing businesses",
              features: [
                "Up to 5 team members",
                "100+ pre-built workflows",
                "Basic analytics dashboard",
                "Email support",
                "5GB storage"
              ]
            },
            {
              id: "professional",
              badge: "Most Popular",
              badgeIcon: Star,
              price: "$99/month",
              subtitle: "Best for scaling teams and enterprises",
              features: [
                "Up to 50 team members",
                "Unlimited workflows",
                "Advanced analytics",
                "Priority support",
                "500GB storage",
                "Custom integrations"
              ]
            },
            {
              id: "enterprise",
              badge: "For Large Organizations",
              badgeIcon: Crown,
              price: "Custom",
              subtitle: "Tailored solutions for enterprise needs",
              features: [
                "Unlimited team members",
                "Unlimited everything",
                "Dedicated account manager",
                "24/7 phone support",
                "Unlimited storage",
                "Advanced security"
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="Loved by Industry Leaders"
          description="See what customers are saying about how SaasFlow transformed their operations"
          tag="Testimonials"
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "CEO",
              company: "TechVentures Inc",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763835321408-nxjxfoco.jpg"
            },
            {
              id: "2",
              name: "James Chen",
              role: "Operations Director",
              company: "InnovateLab",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763835322151-w12wtpfe.jpg"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Product Manager",
              company: "Growth Systems",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763835322681-mma0dnrh.jpg"
            },
            {
              id: "4",
              name: "Michael Thompson",
              role: "CTO",
              company: "Digital Dynamics",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763835323348-h5rpzd34.jpg"
            },
            {
              id: "5",
              name: "Lisa Anderson",
              role: "Business Analyst",
              company: "StartupHub",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763835324346-o9cizekc.jpg"
            },
            {
              id: "6",
              name: "David Park",
              role: "Founder",
              company: "NextGen Solutions",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763835325405-gx1vi608.png"
            }
          ]}
        />
      </div>

      <div id="socialproof" data-section="socialproof">
        <SocialProofTwo
          title="Trusted by Leading Companies"
          description="Join the thousands of organizations using SaasFlow to drive growth"
          textboxLayout="default"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763835327169-5t3dr6mw.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763835327830-u2ljlbrj.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763835328554-nsx0enyl.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763835329128-oqmh96md.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763835329587-hx1oy7i4.jpg"
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Common Questions Answered"
          description="Get answers to frequently asked questions about SaasFlow features, pricing, and support"
          tag="FAQ"
          textboxLayout="default"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763835326429-tuz8ha0t.jpg"
          imageAlt="Customer support illustration"
          mediaPosition="right"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "How long does setup take?",
              content: "Most teams are up and running within 15 minutes. Our intuitive interface and pre-built templates make it incredibly fast to get started. For custom requirements, our support team can help with implementation."
            },
            {
              id: "2",
              title: "Is my data secure?",
              content: "Yes. We use bank-level encryption, SOC 2 compliance, and regular security audits. Your data is encrypted in transit and at rest, with automatic backups performed daily."
            },
            {
              id: "3",
              title: "Can I integrate with my existing tools?",
              content: "Absolutely. SaasFlow integrates with 500+ popular business applications including Slack, Salesforce, HubSpot, and more. We also provide API access for custom integrations."
            },
            {
              id: "4",
              title: "Do you offer a free trial?",
              content: "Yes, we offer a 14-day free trial with full access to all features. No credit card required to start exploring what SaasFlow can do for your team."
            },
            {
              id: "5",
              title: "What support options are available?",
              content: "We provide email support for all plans. Professional and Enterprise plans include priority support and phone access. Knowledge base and community forums are available 24/7."
            },
            {
              id: "6",
              title: "Can I change or cancel my plan anytime?",
              content: "Yes. You can upgrade, downgrade, or cancel your subscription anytime without penalties. Changes take effect at the start of your next billing cycle."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Newsletter"
          tagIcon={Mail}
          title="Stay Updated with Product News"
          description="Subscribe to our newsletter and be the first to know about new features, updates, and exclusive resources for optimizing your workflows."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763835317486-gjvv4my8.jpg"
          imageAlt="SaasFlow dashboard interface"
          mediaPosition="right"
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe"
          termsText="We respect your privacy. Unsubscribe anytime. For details, see our privacy policy."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="SaasFlow"
          copyrightText="© 2025 SaasFlow. All rights reserved."
          columns={[
            {
              title: "Product",
              items: [
                {
                  label: "Features",
                  href: "features"
                },
                {
                  label: "Pricing",
                  href: "pricing"
                },
                {
                  label: "Security",
                  href: "#"
                },
                {
                  label: "Integrations",
                  href: "#"
                }
              ]
            },
            {
              title: "Company",
              items: [
                {
                  label: "About",
                  href: "#"
                },
                {
                  label: "Blog",
                  href: "#"
                },
                {
                  label: "Careers",
                  href: "#"
                },
                {
                  label: "Contact",
                  href: "contact"
                }
              ]
            },
            {
              title: "Legal",
              items: [
                {
                  label: "Privacy Policy",
                  href: "#"
                },
                {
                  label: "Terms of Service",
                  href: "#"
                },
                {
                  label: "Data Processing",
                  href: "#"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}