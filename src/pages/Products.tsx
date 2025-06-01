
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Package, Truck, FileText } from "lucide-react";

const Products = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <section className="bg-gradient-to-br from-amber-50 to-orange-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Premium Products</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Discover our comprehensive range of high-quality egg powder products and import services, 
            designed to meet diverse industrial and commercial needs worldwide.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            
            <Card className="overflow-hidden shadow-lg">
              <div className="aspect-video">
                <img 
                  src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&w=800&q=80" 
                  alt="Premium whole egg powder" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-2xl">Whole Egg Powder</CardTitle>
                  <Badge className="bg-amber-100 text-amber-800">Premium Grade</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Our premium whole egg powder is spray-dried from fresh, high-quality eggs to preserve 
                  maximum nutritional value and functionality. Perfect for commercial food production, 
                  bakery applications, and nutritional supplements.
                </p>
                
                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-gray-900">Key Features:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">High protein content (45-50%)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Extended shelf life (2 years)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Excellent emulsification</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Easy reconstitution</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-gray-900">Applications:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    <li>Commercial bakery products (cakes, cookies, pastries)</li>
                    <li>Food manufacturing (noodles, pasta, confectionery)</li>
                    <li>Nutritional supplements and protein powders</li>
                    <li>Pet food industry</li>
                    <li>Ready-to-eat meal production</li>
                  </ul>
                </div>

                <div className="bg-amber-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Packaging Options:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 25kg multi-wall paper bags with PE liner</li>
                    <li>• 20kg aluminum foil bags</li>
                    <li>• Custom packaging available on request</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-lg">
              <div className="aspect-video">
                <img 
                  src="https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?auto=format&fit=crop&w=800&q=80" 
                  alt="High-quality eggshell powder" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-2xl">Eggshell Powder</CardTitle>
                  <Badge className="bg-green-100 text-green-800">Calcium Rich</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Our finely processed eggshell powder is a natural source of bioavailable calcium carbonate, 
                  processed under strict hygiene standards and quality controls. Ideal for pharmaceutical, 
                  nutraceutical, and agricultural applications.
                </p>
                
                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-gray-900">Key Features:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">95%+ calcium carbonate</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Ultra-fine particle size</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Microbial safe processing</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Natural and organic</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-gray-900">Applications:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    <li>Pharmaceutical tablets and capsules</li>
                    <li>Dietary calcium supplements</li>
                    <li>Animal feed additives</li>
                    <li>Organic fertilizer production</li>
                    <li>Cosmetic industry applications</li>
                    <li>Food fortification programs</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Specifications:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Mesh size: 100-200 (customizable)</li>
                    <li>• Moisture content: &lt;2%</li>
                    <li>• Microbiological tested and certified</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Egg Yolk Powder</CardTitle>
                <Badge className="w-fit bg-yellow-100 text-yellow-800">Specialty Product</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Premium spray-dried egg yolk powder with rich lecithin content, perfect for 
                  emulsification in food products and cosmetic applications.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• High lecithin content (8-10%)</li>
                  <li>• Excellent emulsifying properties</li>
                  <li>• Food and cosmetic grade</li>
                  <li>• Available in 25kg bags</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Egg White Powder</CardTitle>
                <Badge className="w-fit bg-blue-100 text-blue-800">High Protein</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Pure egg white powder with exceptional foaming and gelling properties, 
                  ideal for protein supplements and specialized food applications.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 80%+ protein content</li>
                  <li>• Superior foaming ability</li>
                  <li>• Fat-free formulation</li>
                  <li>• Instant solubility</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Custom Blends</CardTitle>
                <Badge className="w-fit bg-purple-100 text-purple-800">Made to Order</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Customized egg powder blends tailored to your specific requirements, 
                  formulated to meet exact nutritional and functional specifications.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Custom protein ratios</li>
                  <li>• Specialized functionalities</li>
                  <li>• Minimum order quantities apply</li>
                  <li>• Technical support included</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gray-900 text-white overflow-hidden">
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Import Services</h2>
                  <p className="text-gray-300 mb-6">
                    In addition to our egg powder products, SHINEX INTERNATIONAL offers comprehensive 
                    import services for various scrap materials, helping businesses worldwide with 
                    efficient and cost-effective material sourcing.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Package className="h-6 w-6 text-amber-400 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Corrugated Box Scraps</h4>
                        <p className="text-gray-400 text-sm">High-quality corrugated cardboard scraps for recycling industries</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <FileText className="h-6 w-6 text-amber-400 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Paper Scraps</h4>
                        <p className="text-gray-400 text-sm">Various grades of paper waste for paper mills and recycling</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Truck className="h-6 w-6 text-amber-400 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Complete Logistics</h4>
                        <p className="text-gray-400 text-sm">End-to-end import solutions including documentation and shipping</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=600&q=80" 
                    alt="Import services" 
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </Card>

          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Place Your Order?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Contact our team for detailed quotations, samples, and technical specifications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700">
                <Link to="/contact">Request Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/why-choose-us">Why Choose Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
