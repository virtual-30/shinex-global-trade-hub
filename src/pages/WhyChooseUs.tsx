
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Shield, 
  Globe, 
  Clock, 
  Award, 
  Users, 
  TrendingUp, 
  CheckCircle,
  Star,
  Truck,
  HeadphonesIcon,
  FileText,
  Zap
} from "lucide-react";

const WhyChooseUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Header Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Why Choose SHINEX INTERNATIONAL?</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Discover what sets us apart in the global trade industry. Our commitment to excellence, 
            innovation, and customer satisfaction makes us the preferred choice for businesses worldwide.
          </p>
        </div>
      </section>

      {/* Main Advantages */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Competitive Advantages</h2>
            <p className="text-xl text-gray-600">What makes us the right partner for your business</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-amber-100 hover:border-amber-200 transition-all hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Premium Quality Assurance</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every product undergoes rigorous quality testing in our state-of-the-art laboratory. 
                  We maintain international standards including HACCP, ISO, and FDA compliance.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-amber-100 hover:border-amber-200 transition-all hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Global Reach & Experience</h3>
                <p className="text-gray-600 leading-relaxed">
                  With clients in 25+ countries, we understand diverse market requirements and 
                  international trade regulations, ensuring smooth business operations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-amber-100 hover:border-amber-200 transition-all hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Timely Delivery</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our efficient logistics network and strong supplier relationships ensure 
                  on-time delivery, every time. We understand that time is money in business.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-amber-100 hover:border-amber-200 transition-all hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Industry Expertise</h3>
                <p className="text-gray-600 leading-relaxed">
                  Years of experience in egg powder production and international trade have given us 
                  deep insights into market trends and customer needs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-amber-100 hover:border-amber-200 transition-all hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Customer-Centric Approach</h3>
                <p className="text-gray-600 leading-relaxed">
                  We build long-term partnerships by understanding your unique requirements and 
                  providing customized solutions that add value to your business.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-amber-100 hover:border-amber-200 transition-all hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Competitive Pricing</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our efficient operations and strong supplier relationships allow us to offer 
                  competitive pricing without compromising on quality.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Uncompromising Quality Standards</h2>
              <p className="text-lg text-gray-700 mb-8">
                Quality is not just a promise at SHINEX INTERNATIONAL - it's our foundation. Every step 
                of our process is designed to ensure the highest standards of excellence.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">HACCP Certified Processing</h4>
                    <p className="text-gray-700">Hazard Analysis Critical Control Points system ensures food safety.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">ISO Quality Management</h4>
                    <p className="text-gray-700">International Organization for Standardization compliance.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Advanced Laboratory Testing</h4>
                    <p className="text-gray-700">Microbiological, chemical, and physical parameter testing.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Traceability Systems</h4>
                    <p className="text-gray-700">Complete batch tracking from raw material to final product.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&w=600&q=80" 
                alt="Quality control laboratory" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Excellence */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Excellence</h2>
            <p className="text-xl text-gray-600">Comprehensive support throughout your business journey</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HeadphonesIcon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-3">24/7 Customer Support</h3>
                <p className="text-gray-600 text-sm">
                  Round-the-clock assistance for all your queries and requirements.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Express Shipping</h3>
                <p className="text-gray-600 text-sm">
                  Fast and secure delivery options with real-time tracking.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Documentation Support</h3>
                <p className="text-gray-600 text-sm">
                  Complete assistance with all import/export documentation.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Quick Response</h3>
                <p className="text-gray-600 text-sm">
                  Rapid quotations and order processing for urgent requirements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Real feedback from satisfied customers worldwide</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "SHINEX INTERNATIONAL has been our trusted partner for egg powder supplies. Their 
                  consistent quality and reliable delivery have helped our business grow significantly."
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">Sarah Johnson</p>
                  <p className="text-gray-600 text-sm">Food Manufacturer, USA</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Excellent service and premium quality products. Their team is professional and always 
                  ready to accommodate our specific requirements. Highly recommended!"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">Michael Chen</p>
                  <p className="text-gray-600 text-sm">Pharmaceutical Company, Singapore</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "The import services provided by SHINEX are exceptional. They handle everything from 
                  sourcing to delivery, making our procurement process seamless and efficient."
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">Ahmed Al-Rashid</p>
                  <p className="text-gray-600 text-sm">Trading Company, UAE</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience the SHINEX Difference?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of satisfied customers worldwide who trust SHINEX INTERNATIONAL for their 
            business needs. Let's discuss how we can help your business grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700">
              <Link to="/contact">Start Your Partnership</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900">
              <Link to="/products">View Our Products</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhyChooseUs;
