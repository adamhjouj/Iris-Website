import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FeatureTab } from "./FeatureTab";
import { FeatureContent } from "./FeatureContent";
import { features } from "@/config/features";

export const FeaturesSection = () => {
  return (
    <section className="container px-4 py-24">
      {/* Header Section */}
      <div className="max-w-4xl mb-24" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <h2 className="text-7xl md:text-8xl font-black mb-10 tracking-tight text-left leading-tight" style={{textAlign: 'center'}}>
          <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
            Revolutionary Computer
          </span>
          <br />
          <span className="text-gradient font-black">Control Features</span>
        </h2>
        <p className="text-2xl md:text-3xl text-gray-200 text-left leading-relaxed font-semibold max-w-4xl">
          Experience cutting-edge AI technology that transforms how you interact with your computer using voice and gestures.
        </p>
      </div>

      <Tabs defaultValue={features[0].title} className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Left side - Tab triggers */}
          <div className="md:col-span-5 space-y-3">
            <TabsList className="flex flex-col w-full bg-transparent h-auto p-0 space-y-3">
              {features.map((feature) => (
                <TabsTrigger
                  key={feature.title}
                  value={feature.title}
                  className="w-full data-[state=active]:shadow-none data-[state=active]:bg-transparent"
                >
                  <FeatureTab
                    title={feature.title}
                    description={feature.description}
                    icon={feature.icon}
                    isActive={false}
                  />
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          
        </div>
      </Tabs>
    </section>
  );
};