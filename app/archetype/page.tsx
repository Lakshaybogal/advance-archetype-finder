"use client";

import { useState, useEffect } from "react";
import { QUESTIONS } from "@/data/questions";
import { ARCHETYPE_DESCRIPTIONS } from "@/data/description";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  ChevronRight,
  Loader2,
  School,
  Briefcase,
  GraduationCap,
  Trophy,
  Lightbulb,
  Shield,
} from "lucide-react";
import { motion } from "framer-motion";

const ARCHETYPE_MAP = {
  Sage: 0,
  Detective: 0,
  Seeker: 0,
  Strategist: 0,
  Empath: 0,
  Caregiver: 0,
  Networker: 0,
  Host: 0,
  Ruler: 0,
  Warrior: 0,
  Guardian: 0,
  Magician: 0,
  Rebel: 0,
  Outlaw: 0,
  Creator: 0,
  Explorer: 0,
  Visionary: 0,
  Prophet: 0,
  Hero: 0,
  "Chosen One": 0,
  Survivor: 0,
  Architect: 0,
  Advocate: 0,
  Hybrid: 0,
  Hunter: 0,
  Mystic: 0,
  Trickster: 0,
  Saboteur: 0,
  Shadow: 0,
  Hustler: 0,
  Polymath: 0,
};

export default function ArchetypeQuiz() {
  const [stage, setStage] = useState<
    "start" | "classSelection" | "quiz" | "result"
  >("start");
  const [questions, setQuestions] = useState<
    { question: string; options: { option: string; archetype: string[] }[] }[]
  >([]);
  const [userType, setUserType] = useState<string>("");
  const [grade, setGrade] = useState<string>("");
  const [answers, setAnswers] = useState<number[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [results, setResults] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Initialize answers array when questions change
    if (questions.length > 0) {
      setAnswers(new Array(questions.length).fill(-1));
      setCurrentQuestion(0);
    }
  }, [questions]);

  const handleUserType = (type: string) => {
    setIsLoading(true);
    setUserType(type);

    setTimeout(() => {
      if (type === "school") {
        setStage("classSelection");
      } else {
        setStage("quiz");
        const selectedQuestions = QUESTIONS[type as "college" | "working"];
        setQuestions(selectedQuestions);
      }
      setIsLoading(false);
    }, 500);
  };

  const handleGradeSelect = (grade: string) => {
    setIsLoading(true);
    setGrade(grade);

    setTimeout(() => {
      setStage("quiz");
      const selectedQuestions = QUESTIONS[grade as "6-7" | "8-10" | "11-12"];
      setQuestions(selectedQuestions);
      setIsLoading(false);
    }, 500);
  };

  const handleAnswer = (optIdx: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = optIdx;
    setAnswers(newAnswers);
  };

  const goToNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResults();
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateResults = () => {
    setIsLoading(true);

    setTimeout(() => {
      const scoreMap = { ...ARCHETYPE_MAP };
      const currentQuestions =
        userType === "school"
          ? QUESTIONS[grade as "6-7" | "8-10" | "11-12"]
          : QUESTIONS[userType as "college" | "working"];

      answers.forEach((option, idx) => {
        if (option !== -1) {
          const selectedOption = currentQuestions[idx].options[option];
          const archetypes =
            selectedOption.archetype as (keyof typeof ARCHETYPE_MAP)[];
          archetypes.forEach((arch) => {
            scoreMap[arch] += 2;
          });
        }
      });

      const sortedResults = Object.entries(scoreMap)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3);

      setResults(sortedResults.map(([arch]) => arch));
      setStage("result");
      setIsLoading(false);
    }, 1000);
  };

  const resetQuiz = () => {
    setStage("start");
    setUserType("");
    setGrade("");
    setAnswers([]);
    setCurrentQuestion(0);
    setResults([]);
    setQuestions([]);
  };

  const getProgressPercentage = () => {
    if (questions.length === 0) return 0;
    const answeredCount = answers.filter((a) => a !== -1).length;
    return (answeredCount / questions.length) * 100;
  };

  const renderUserTypeSelection = () => (
    <Card className='w-full max-w-3xl mx-auto'>
      <CardHeader className='text-center'>
        <CardTitle className='text-3xl font-bold'>
          Discover Your Archetype
        </CardTitle>
        <CardDescription className='text-lg mt-2'>
          Select your current status to begin the journey
        </CardDescription>
      </CardHeader>
      <CardContent className='grid gap-6 md:grid-cols-3 p-6'>
        <Button
          variant='outline'
          className='h-32 flex flex-col gap-3 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all'
          onClick={() => handleUserType("school")}>
          <School className='h-10 w-10 text-slate-600 dark:text-slate-400' />
          <span className='font-medium'>School Student</span>
        </Button>
        <Button
          variant='outline'
          className='h-32 flex flex-col gap-3 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all'
          onClick={() => handleUserType("college")}>
          <GraduationCap className='h-10 w-10 text-slate-600 dark:text-slate-400' />
          <span className='font-medium'>College Student</span>
        </Button>
        <Button
          variant='outline'
          className='h-32 flex flex-col gap-3 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all'
          onClick={() => handleUserType("working")}>
          <Briefcase className='h-10 w-10 text-slate-600 dark:text-slate-400' />
          <span className='font-medium'>Working Professional</span>
        </Button>
      </CardContent>
    </Card>
  );

  const renderGradeSelection = () => (
    <Card className='w-full max-w-3xl mx-auto'>
      <CardHeader className='text-center'>
        <CardTitle className='text-3xl font-bold'>Select Your Grade</CardTitle>
        <CardDescription className='text-lg mt-2'>
          Choose your current grade level
        </CardDescription>
      </CardHeader>
      <CardContent className='grid gap-6 md:grid-cols-3 p-6'>
        <Button
          variant='outline'
          className='h-24 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all'
          onClick={() => handleGradeSelect("6-7")}>
          6th - 8th Grade
        </Button>
        <Button
          variant='outline'
          className='h-24 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all'
          onClick={() => handleGradeSelect("8-10")}>
          8th - 10th Grade
        </Button>
        <Button
          variant='outline'
          className='h-24 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all'
          onClick={() => handleGradeSelect("11-12")}>
          11th - 12th Grade
        </Button>
      </CardContent>
      <CardFooter className='flex justify-between p-6'>
        <Button variant='outline' onClick={() => setStage("start")}>
          Back
        </Button>
      </CardFooter>
    </Card>
  );

  const renderQuiz = () => {
    if (questions.length === 0) return null;

    const currentQ = questions[currentQuestion];

    return (
      <Card className='w-full max-w-3xl mx-auto'>
        <CardHeader>
          <div className='flex justify-between items-center mb-2'>
            <span className='text-sm font-medium text-slate-500'>
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className='text-sm font-medium text-slate-500'>
              {Math.round(getProgressPercentage())}% Complete
            </span>
          </div>
          <Progress value={getProgressPercentage()} className='h-2' />
          <CardTitle className='text-xl mt-4'>{currentQ.question}</CardTitle>
        </CardHeader>
        <CardContent className='p-6'>
          <div className='grid gap-3'>
            {currentQ.options.map((opt, optIdx) => (
              <Button
                key={optIdx}
                variant={
                  answers[currentQuestion] === optIdx ? "default" : "outline"
                }
                className={`justify-start h-auto py-4 px-6 text-left ${
                  answers[currentQuestion] === optIdx
                    ? "border-2 border-primary"
                    : "hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
                onClick={() => {
                  handleAnswer(optIdx);
                  goToNextQuestion();
                }}>
                <div className='flex items-center gap-3'>
                  {answers[currentQuestion] === optIdx ? (
                    <CheckCircle className='h-5 w-5 flex-shrink-0' />
                  ) : (
                    <div className='h-5 w-5 rounded-full border-2 flex-shrink-0' />
                  )}
                  <span>{opt.option}</span>
                </div>
              </Button>
            ))}
          </div>
        </CardContent>
        <CardFooter className='flex justify-between p-6'>
          <Button
            variant='outline'
            onClick={goToPreviousQuestion}
            disabled={currentQuestion === 0}>
            Previous
          </Button>
          <Button
            onClick={goToNextQuestion}
            disabled={answers[currentQuestion] === -1}>
            {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
            {currentQuestion !== questions.length - 1 && (
              <ChevronRight className='ml-2 h-4 w-4' />
            )}
          </Button>
        </CardFooter>
      </Card>
    );
  };

  const renderResults = () => (
    <div className='w-full max-w-4xl mx-auto space-y-6'>
      <Card>
        <CardHeader className='text-center'>
          <CardTitle className='text-3xl font-bold'>
            Your Archetype Results
          </CardTitle>
          <CardDescription className='text-lg mt-2'>
            Based on your answers, we've identified your primary archetypes
          </CardDescription>
        </CardHeader>
        <CardContent className='p-6'>
          <div className='grid gap-6 md:grid-cols-3'>
            {results.map((archetype, index) => {
              const archetypeInfo =
                ARCHETYPE_DESCRIPTIONS[
                  archetype as keyof typeof ARCHETYPE_DESCRIPTIONS
                ];
              return (
                <Card
                  key={archetype}
                  className={`overflow-hidden border-2 ${
                    index === 0 ? "border-yellow-400" : ""
                  }`}>
                  <div
                    className={`p-4 ${
                      index === 0
                        ? "bg-yellow-50 dark:bg-yellow-950/20"
                        : "bg-slate-50 dark:bg-slate-800/50"
                    }`}>
                    <div className='flex items-center gap-3'>
                      {index === 0 ? (
                        <Trophy className='h-6 w-6 text-yellow-600' />
                      ) : index === 1 ? (
                        <Shield className='h-6 w-6 text-slate-600' />
                      ) : (
                        <Lightbulb className='h-6 w-6 text-slate-600' />
                      )}
                      <div>
                        <h3 className='font-bold text-lg'>
                          {archetypeInfo.name}
                        </h3>
                        <p className='text-sm text-slate-600 dark:text-slate-400'>
                          {index === 0
                            ? "Primary"
                            : index === 1
                            ? "Secondary"
                            : "Tertiary"}
                        </p>
                      </div>
                    </div>
                  </div>
                  <CardContent className='p-4'>
                    <p className='text-sm'>{archetypeInfo.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>
            Primary Archetype:{" "}
            {
              ARCHETYPE_DESCRIPTIONS[
                results[0] as keyof typeof ARCHETYPE_DESCRIPTIONS
              ]?.name
            }
          </CardTitle>
          <CardDescription>
            Detailed information about your dominant archetype
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue='overview' className='w-full'>
            <TabsList className='grid w-full grid-cols-4'>
              <TabsTrigger value='overview'>Overview</TabsTrigger>
              <TabsTrigger value='desire'>Traits</TabsTrigger>
              <TabsTrigger value='strengths'>Strengths</TabsTrigger>
              <TabsTrigger value='weaknesses'>Challenges</TabsTrigger>
              <TabsTrigger value='desire'>Desire</TabsTrigger>
              <TabsTrigger value='fears'>Fears</TabsTrigger>
              <TabsTrigger value='clashes'>Clashes</TabsTrigger>
              <TabsTrigger value='connects'>Connects</TabsTrigger>
            </TabsList>
            <TabsContent value='overview' className='p-4'>
              <p>
                {
                  ARCHETYPE_DESCRIPTIONS[
                    results[0] as keyof typeof ARCHETYPE_DESCRIPTIONS
                  ]?.description
                }
              </p>
            </TabsContent>
            <TabsContent value='strengths' className='p-4'>
              <div className='flex flex-wrap gap-2'>
                <Badge
                  variant='outline'
                  className='bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400 hover:bg-green-100'>
                  {
                    ARCHETYPE_DESCRIPTIONS[
                      results[0] as keyof typeof ARCHETYPE_DESCRIPTIONS
                    ]?.strengths
                  }
                </Badge>
              </div>
            </TabsContent>
            <TabsContent value='weaknesses' className='p-4'>
              <div className='flex flex-wrap gap-2'>
                <Badge
                  variant='outline'
                  className='bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400 hover:bg-red-100'>
                  {
                    ARCHETYPE_DESCRIPTIONS[
                      results[0] as keyof typeof ARCHETYPE_DESCRIPTIONS
                    ]?.weaknesses
                  }
                </Badge>
              </div>
            </TabsContent>
            <TabsContent value='desire' className='p-4'>
              <div className='border-l-4 border-primary pl-4 italic'>
                {
                  ARCHETYPE_DESCRIPTIONS[
                    results[0] as keyof typeof ARCHETYPE_DESCRIPTIONS
                  ]?.desire
                }
              </div>
            </TabsContent>
            <TabsContent value='fears' className='p-4'>
              <div className='border-l-4 border-primary pl-4 italic'>
                {
                  ARCHETYPE_DESCRIPTIONS[
                    results[0] as keyof typeof ARCHETYPE_DESCRIPTIONS
                  ]?.fear
                }
              </div>
            </TabsContent>
            <TabsContent value='clashes' className='p-4'>
              <div className='border-l-4 border-primary pl-4 italic'>
                {
                  ARCHETYPE_DESCRIPTIONS[
                    results[0] as keyof typeof ARCHETYPE_DESCRIPTIONS
                  ]?.clashes
                }
              </div>
            </TabsContent>
            <TabsContent value='connects' className='p-4'>
              <div className='border-l-4 border-primary pl-4 italic'>
                {
                  ARCHETYPE_DESCRIPTIONS[
                    results[0] as keyof typeof ARCHETYPE_DESCRIPTIONS
                  ]?.connects
                }
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Your Archetype Combination</CardTitle>
          <CardDescription>How your archetypes work together</CardDescription>
        </CardHeader>
        <CardContent>
          <p className='mb-4'>
            Your unique combination of{" "}
            {results.map((r, i) => (
              <span key={r}>
                {i > 0 && i === results.length - 1
                  ? " and "
                  : i > 0
                  ? ", "
                  : ""}
                <span className='font-medium'>
                  {
                    ARCHETYPE_DESCRIPTIONS[
                      r as keyof typeof ARCHETYPE_DESCRIPTIONS
                    ]?.name
                  }
                </span>
              </span>
            ))}{" "}
            creates a powerful blend of qualities that shape how you interact
            with the world.
          </p>
          <p>
            As a{" "}
            <span className='font-medium'>
              {
                ARCHETYPE_DESCRIPTIONS[
                  results[0] as keyof typeof ARCHETYPE_DESCRIPTIONS
                ]?.name
              }
            </span>{" "}
            with{" "}
            <span className='font-medium'>
              {
                ARCHETYPE_DESCRIPTIONS[
                  results[1] as keyof typeof ARCHETYPE_DESCRIPTIONS
                ]?.name
              }
            </span>{" "}
            and{" "}
            <span className='font-medium'>
              {
                ARCHETYPE_DESCRIPTIONS[
                  results[2] as keyof typeof ARCHETYPE_DESCRIPTIONS
                ]?.name
              }
            </span>{" "}
            influences, you bring a unique perspective that combines{" "}
            {ARCHETYPE_DESCRIPTIONS[
              results[0] as keyof typeof ARCHETYPE_DESCRIPTIONS
            ]?.strengths[0].toLowerCase()}
            ,{" "}
            {ARCHETYPE_DESCRIPTIONS[
              results[1] as keyof typeof ARCHETYPE_DESCRIPTIONS
            ]?.strengths[0].toLowerCase()}
            , and{" "}
            {ARCHETYPE_DESCRIPTIONS[
              results[2] as keyof typeof ARCHETYPE_DESCRIPTIONS
            ]?.strengths[0].toLowerCase()}
            .
          </p>
        </CardContent>
        <CardFooter className='flex justify-center p-6'>
          <Button onClick={resetQuiz}>Take Quiz Again</Button>
        </CardFooter>
      </Card>
    </div>
  );

  if (isLoading) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <div className='text-center'>
          <Loader2 className='h-12 w-12 animate-spin mx-auto text-primary' />
          <p className='mt-4 text-lg font-medium'>Processing your results...</p>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen py-12 px-4 bg-slate-50 dark:bg-slate-900'>
      <div className='container mx-auto'>
        <motion.div
          key={stage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}>
          {stage === "start" && renderUserTypeSelection()}
          {stage === "classSelection" && renderGradeSelection()}
          {stage === "quiz" && renderQuiz()}
          {stage === "result" && renderResults()}
        </motion.div>
      </div>
    </div>
  );
}
