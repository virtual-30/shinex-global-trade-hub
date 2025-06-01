
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Users, Award, Target, Heart, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Header Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">About SHINEX INTERNATIONAL</h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                Established with a vision to bridge global markets, SHINEX INTERNATIONAL has emerged as a 
                trusted name in the international trade of premium egg powder products and efficient scrap 
                material import services. Based in the heart of Hazaribagh, Jharkhand, we serve clients 
                across the globe with unwavering commitment to quality and excellence.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&w=600&q=80" 
                alt="SHINEX INTERNATIONAL facility" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              SHINEX INTERNATIONAL was founded with a simple yet powerful mission: to provide the highest 
              quality egg powder products and reliable import services to businesses worldwide. What started 
              as a small trading company in Hazaribagh has grown into a respected international business, 
              serving clients across multiple continents.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Journey</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-amber-400 pl-6">
                  <h4 className="font-semibold text-gray-900">Foundation Years</h4>
                  <p className="text-gray-700">
                    Established in Hazaribagh, Jharkhand, with a focus on understanding global market needs 
                    and building strong supplier relationships.
                  </p>
                </div>
                <div className="border-l-4 border-amber-400 pl-6">
                  <h4 className="font-semibold text-gray-900">Growth & Expansion</h4>
                  <p className="text-gray-700">
                    Expanded our product portfolio to include premium egg powder products and developed 
                    expertise in international trade logistics.
                  </p>
                </div>
                <div className="border-l-4 border-amber-400 pl-6">
                  <h4 className="font-semibold text-gray-900">Global Recognition</h4>
                  <p className="text-gray-700">
                    Today, we serve clients in over 25 countries, maintaining the highest standards of 
                    quality and customer service.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?auto=format&fit=crop&w=600&q=80" 
                alt="Our facility" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Foundation</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-2 border-amber-100 hover:border-amber-200 transition-colors">
              <CardContent className="p-8">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  To provide superior quality egg powder products and efficient import services that exceed 
                  customer expectations, while fostering long-term partnerships built on trust, reliability, 
                  and mutual growth.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-amber-100 hover:border-amber-200 transition-colors">
              <CardContent className="p-8">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lightbulb className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed">
                  To be the most trusted and preferred partner in international trade, recognized globally 
                  for our commitment to quality, innovation, and sustainable business practices that benefit 
                  all stakeholders.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-amber-100 hover:border-amber-200 transition-colors">
              <CardContent className="p-8">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Values</h3>
                <p className="text-gray-700 leading-relaxed">
                  Integrity, Excellence, Innovation, and Customer Satisfaction form the cornerstone of our 
                  business philosophy. We believe in transparent communication and ethical business practices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Do</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions for global trade</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Egg Powder Manufacturing & Export</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 p-2 rounded-full mt-1">
                    <Award className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Premium Quality Products</h4>
                    <p className="text-gray-700">
                      We specialize in producing high-grade whole egg powder, eggshell powder, egg yolk powder, 
                      and egg white powder using advanced spray-drying technology.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 p-2 rounded-full mt-1">
                    <Users className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Global Distribution</h4>
                    <p className="text-gray-700">
                      Our products reach food manufacturers, pharmaceutical companies, and nutraceutical 
                      producers across 25+ countries worldwide.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 p-2 rounded-full mt-1">
                    <Globe className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Custom Solutions</h4>
                    <p className="text-gray-700">
                      We offer customized product formulations and packaging solutions to meet specific 
                      customer requirements and industry standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Import Services</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-full mt-1">
                    <Award className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Scrap Material Sourcing</h4>
                    <p className="text-gray-700">
                      We import high-quality corrugated box scraps and paper scraps for recycling industries, 
                      ensuring consistent supply and competitive pricing.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-full mt-1">
                    <Users className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">End-to-End Logistics</h4>
                    <p className="text-gray-700">
                      From supplier identification to final delivery, we manage the complete import process 
                      including documentation, shipping, and customs clearance.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-full mt-1">
                    <Globe className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Quality Assurance</h4>
                    <p className="text-gray-700">
                      Every imported consignment undergoes rigorous quality checks to ensure materials 
                      meet specified standards and customer requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Infrastructure */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Location & Infrastructure</h2>
            <p className="text-xl text-gray-600">Strategically positioned for efficient global operations</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Hazaribagh, Jharkhand - Our Home</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our headquarters in Hazaribagh, Jharkhand, provides us with strategic advantages including 
                access to raw materials, skilled workforce, and excellent connectivity to major ports and 
                transportation networks across India.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">Processing Facilities</h4>
                  <p className="text-gray-700">State-of-the-art processing equipment with capacity to handle large-scale production while maintaining quality standards.</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">Quality Control Laboratory</h4>
                  <p className="text-gray-700">Fully equipped testing facility ensuring every batch meets international quality and safety standards.</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">Storage & Warehousing</h4>
                  <p className="text-gray-700">Climate-controlled storage facilities with adequate capacity for raw materials and finished products.</p>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=600&q=80" 
                alt="Our infrastructure" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
