
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { ArrowRight, Globe, Truck, Shield, Award, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 to-orange-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Premium <span className="text-amber-600">Egg Powder</span> & 
                Import Solutions
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                SHINEX INTERNATIONAL is your trusted partner in international trade, specializing in 
                high-quality whole egg powder, eggshell powder, and efficient scrap material imports. 
                Based in Hazaribagh, Jharkhand, we serve clients worldwide with excellence and reliability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700">
                  <Link to="/products">
                    Explore Products <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">Contact Us Today</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80" 
                alt="Premium egg powder products" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <Award className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Premium Quality</p>
                    <p className="text-gray-600">Certified Products</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose SHINEX INTERNATIONAL?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine years of expertise with modern technology to deliver exceptional products and services 
              that meet international standards.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 border-amber-100 hover:border-amber-200 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Global Reach</h3>
                <p className="text-gray-600">
                  Serving customers worldwide with reliable international shipping and logistics solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-amber-100 hover:border-amber-200 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Quality Assurance</h3>
                <p className="text-gray-600">
                  Rigorous quality control processes ensure every product meets the highest international standards.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-amber-100 hover:border-amber-200 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Reliable Delivery</h3>
                <p className="text-gray-600">
                  Fast and secure delivery systems with real-time tracking for complete peace of mind.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Main Products</h2>
            <p className="text-xl text-gray-600">Premium quality products for diverse industrial applications</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video">
                <img 
                  src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&w=600&q=80" 
                  alt="Whole egg powder" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-3">Whole Egg Powder</h3>
                <p className="text-gray-600 mb-4">
                  High-protein, spray-dried whole egg powder perfect for food manufacturing, 
                  bakery applications, and nutritional products. Available in bulk quantities.
                </p>
                <Button asChild variant="outline">
                  <Link to="/products">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video">
                <img 
                  src="https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?auto=format&fit=crop&w=600&q=80" 
                  alt="Eggshell powder" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-3">Eggshell Powder</h3>
                <p className="text-gray-600 mb-4">
                  Calcium-rich eggshell powder ideal for pharmaceutical, dietary supplements, 
                  and agricultural applications. Processed under strict quality controls.
                </p>
                <Button asChild variant="outline">
                  <Link to="/products">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="flex items-center justify-center mb-2">
                <Users className="h-8 w-8 mr-2" />
                <span className="text-4xl font-bold">500+</span>
              </div>
              <p className="text-amber-100">Happy Clients</p>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <Globe className="h-8 w-8 mr-2" />
                <span className="text-4xl font-bold">25+</span>
              </div>
              <p className="text-amber-100">Countries Served</p>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <Truck className="h-8 w-8 mr-2" />
                <span className="text-4xl font-bold">1000+</span>
              </div>
              <p className="text-amber-100">Successful Deliveries</p>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="h-8 w-8 mr-2" />
                <span className="text-4xl font-bold">99%</span>
              </div>
              <p className="text-amber-100">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Next Import/Export Deal?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact SHINEX INTERNATIONAL today and experience the difference of working with industry leaders.
          </p>
          <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700">
            <Link to="/contact">
              Get Quote Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
