import { ARCHETYPE_DESCRIPTIONS } from "@/data/description";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
export const renderArchetypeDetails = (archetype: string) => {
  const archetypeInfo =
    ARCHETYPE_DESCRIPTIONS[archetype as keyof typeof ARCHETYPE_DESCRIPTIONS];

  return (
    <Tabs
      defaultValue='overview'
      className='w-full flex flex-col justify-center items-center space-y-6'>
      <TabsList className=' grid grid-cols-4 gap-1 w-full gap-y-2'>
        <TabsTrigger value='overview'>Overview</TabsTrigger>
        <TabsTrigger value='desire'>Desire</TabsTrigger>
        <TabsTrigger value='traits'>Traits</TabsTrigger>
        <TabsTrigger value='strengths'>Strengths</TabsTrigger>
        <TabsTrigger value='weaknesses'>Challenges</TabsTrigger>

        <TabsTrigger value='fears'>Fears</TabsTrigger>
        <TabsTrigger value='clashes'>Clashes</TabsTrigger>
        <TabsTrigger value='connects'>Connects</TabsTrigger>
      </TabsList>

      <TabsContent value='overview' className='p-4'>
        <p>{archetypeInfo?.description}</p>
      </TabsContent>
      <TabsContent value='traits' className='p-4'>
        <div className='border-l-4 border-primary pl-4 italic'>
          {archetypeInfo?.traits}
        </div>
      </TabsContent>
      <TabsContent value='strengths' className='p-4'>
        <div className='border-l-4 border-primary pl-4 italic'>
          {archetypeInfo?.strengths}
        </div>
      </TabsContent>
      <TabsContent value='weaknesses' className='p-4'>
        <div className='border-l-4 border-primary pl-4 italic'>
          {archetypeInfo?.weaknesses}
        </div>
      </TabsContent>
      <TabsContent value='desire' className='p-4'>
        <div className='border-l-4 border-primary pl-4 italic'>
          {archetypeInfo?.desire}
        </div>
      </TabsContent>
      <TabsContent value='fears' className='p-4'>
        <div className='border-l-4 border-primary pl-4 italic'>
          {archetypeInfo?.fear}
        </div>
      </TabsContent>
      <TabsContent value='clashes' className='p-4'>
        <div className='border-l-4 border-primary pl-4 italic'>
          {archetypeInfo?.clashes}
        </div>
      </TabsContent>
      <TabsContent value='connects' className='p-4'>
        <div className='border-l-4 border-primary pl-4 italic'>
          {archetypeInfo?.connects}
        </div>
      </TabsContent>
    </Tabs>
  );
};
