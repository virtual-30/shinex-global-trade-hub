
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Globe, MessageSquare, Send } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Header Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact SHINEX INTERNATIONAL</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Ready to start your next business venture? Get in touch with our expert team for quotations, 
            product samples, technical specifications, or any business inquiries. We're here to help 
            you succeed in global trade.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <MessageSquare className="h-6 w-6 mr-2 text-amber-600" />
                  Send Us a Message
                </CardTitle>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" placeholder="Enter your last name" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" placeholder="Enter your email address" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input id="company" placeholder="Enter your company name" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="Enter your phone number" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <Input id="country" placeholder="Enter your country" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="inquiry">Inquiry Type *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="whole-egg-powder">Whole Egg Powder</SelectItem>
                      <SelectItem value="eggshell-powder">Eggshell Powder</SelectItem>
                      <SelectItem value="egg-yolk-powder">Egg Yolk Powder</SelectItem>
                      <SelectItem value="egg-white-powder">Egg White Powder</SelectItem>
                      <SelectItem value="custom-blend">Custom Blends</SelectItem>
                      <SelectItem value="import-services">Import Services</SelectItem>
                      <SelectItem value="general">General Inquiry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Please provide details about your requirements, quantity needed, target price, delivery location, etc."
                    rows={5}
                  />
                </div>
                
                <Button className="w-full bg-amber-600 hover:bg-amber-700" size="lg">
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </Button>
                
                <p className="text-sm text-gray-600">
                  * Required fields. Your information is secure and will not be shared with third parties.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Get in Touch</CardTitle>
                  <p className="text-gray-600">
                    Multiple ways to reach our team for immediate assistance.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-amber-100 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Our Address</h4>
                      <p className="text-gray-700">
                        SHINEX INTERNATIONAL<br />
                        Hazaribagh, Jharkhand<br />
                        India
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-amber-100 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Phone Numbers</h4>
                      <p className="text-gray-700">
                        Main: +91-XXXXXXXXXX<br />
                        WhatsApp: +91-XXXXXXXXXX<br />
                        Sales: +91-XXXXXXXXXX
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-amber-100 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email Addresses</h4>
                      <p className="text-gray-700">
                        General: info@shinex.com<br />
                        Sales: sales@shinex.com<br />
                        Support: support@shinex.com
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-amber-100 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Business Hours</h4>
                      <p className="text-gray-700">
                        Monday - Friday: 9:00 AM - 6:00 PM (IST)<br />
                        Saturday: 9:00 AM - 2:00 PM (IST)<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg bg-amber-600 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Globe className="h-8 w-8 mr-3" />
                    <h3 className="text-xl font-semibold">Global Presence</h3>
                  </div>
                  <p className="mb-4">
                    While our headquarters are in Hazaribagh, Jharkhand, we serve clients in over 25 countries 
                    worldwide. Our international network ensures efficient service wherever you are.
                  </p>
                  <div className="text-amber-100">
                    <p className="font-medium">Serving clients in:</p>
                    <p className="text-sm">USA • Canada • UK • Germany • France • UAE • Singapore • Australia • Japan • South Korea • and many more...</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common questions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-3">What is the minimum order quantity?</h4>
                <p className="text-gray-700">
                  Our minimum order quantity varies by product. For egg powder products, it's typically 
                  1 MT (1000 kg). For import services, we can accommodate smaller quantities based on 
                  specific requirements.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Do you provide product samples?</h4>
                <p className="text-gray-700">
                  Yes, we provide free samples up to 500g for quality evaluation. Shipping costs may 
                  apply for international deliveries. Contact us for sample requests.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-3">What are your payment terms?</h4>
                <p className="text-gray-700">
                  We offer flexible payment terms including T/T (Telegraphic Transfer), L/C (Letter of Credit), 
                  and other mutually agreed arrangements based on order value and customer relationship.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-3">How long does delivery take?</h4>
                <p className="text-gray-700">
                  Delivery time depends on destination and shipping method. Typically 15-25 days for sea 
                  freight and 5-7 days for air freight. Express options available for urgent requirements.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Do you provide certificates?</h4>
                <p className="text-gray-700">
                  Yes, we provide all necessary certificates including Certificate of Analysis (COA), 
                  Health Certificate, Origin Certificate, and other documents as required by destination countries.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Can you customize products?</h4>
                <p className="text-gray-700">
                  Absolutely! We offer custom formulations, packaging sizes, and private labeling services. 
                  Share your specific requirements and we'll develop a solution tailored to your needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Immediate Assistance?</h2>
          <p className="text-xl text-gray-300 mb-8">
            For urgent inquiries or immediate quotes, call us directly or send a WhatsApp message. 
            Our team is ready to assist you with your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              <Phone className="h-5 w-5 mr-2" />
              Call Now: +91-XXXXXXXXXX
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900">
              <MessageSquare className="h-5 w-5 mr-2" />
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
