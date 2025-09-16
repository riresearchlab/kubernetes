import React from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, Terminal } from "lucide-react";

interface AdvancedTopicsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  topic: string;
  subtopic: string;
  data: {
    title: string;
    description: string;
    definition: string;
    detailedDescription: string;
    useCases: string[];
    commands: {
      description: string;
      command: string;
      output?: string;
    }[];
    examples: {
      title: string;
      code: string;
      description?: string;
    }[];
    outputs?: {
      title: string;
      content: string;
      description?: string;
    }[];
  };
}

export const AdvancedTopicsModal: React.FC<AdvancedTopicsModalProps> = ({
  open,
  onOpenChange,
  topic,
  subtopic,
  data,
}) => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
              <Terminal className="w-5 h-5 text-white" />
            </div>
            {data.title}
          </DialogTitle>
          <DialogDescription className="text-lg">
            {data.description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Definition */}
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-4 rounded-lg border border-primary/20">
            <h3 className="text-lg font-semibold mb-3">Definition</h3>
            <p className="text-muted-foreground leading-relaxed">
              {data.definition}
            </p>
          </div>

          {/* Detailed Description */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Description</h3>
            <p className="text-muted-foreground leading-relaxed">
              {data.detailedDescription}
            </p>
          </div>

          {/* Use Cases */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Use Cases</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {data.useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800"
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm text-green-700 dark:text-green-300">
                    {useCase}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Commands */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Commands</h3>
            <div className="space-y-4">
              {data.commands.map((cmd, index) => (
                <div
                  key={index}
                  className="border border-border/50 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="p-4 bg-gradient-to-r from-muted/50 to-muted/30 border-b border-border/50">
                    <p className="text-sm font-medium text-foreground">
                      {cmd.description}
                    </p>
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm relative group">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-cyan-400 font-semibold">
                          $ {cmd.command}
                        </span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6 opacity-50 hover:opacity-100"
                          onClick={() => copyToClipboard(cmd.command)}
                        >
                          <Copy className="h-3 w-3" />
                        </Button>
                      </div>
                      {cmd.output && (
                        <div className="text-gray-300 mt-2">
                          <pre className="whitespace-pre-wrap">{cmd.output}</pre>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Examples */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Examples</h3>
            <div className="space-y-4">
              {data.examples.map((example, index) => (
                <Card key={index} className="border-border/50">
                  <CardContent className="p-4">
                    <h4 className="font-medium mb-2">{example.title}</h4>
                    {example.description && (
                      <p className="text-sm text-muted-foreground mb-3">
                        {example.description}
                      </p>
                    )}
                    <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm relative">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-gray-400">YAML/Configuration</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6 opacity-50 hover:opacity-100"
                          onClick={() => copyToClipboard(example.code)}
                        >
                          <Copy className="h-3 w-3" />
                        </Button>
                      </div>
                      <pre className="text-gray-300 whitespace-pre-wrap">
                        {example.code}
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Outputs */}
          {data.outputs && data.outputs.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Outputs</h3>
              <div className="space-y-4">
                {data.outputs.map((output, index) => (
                  <Card key={index} className="border-border/50">
                    <CardContent className="p-4">
                      <h4 className="font-medium mb-2">{output.title}</h4>
                      {output.description && (
                        <p className="text-sm text-muted-foreground mb-3">
                          {output.description}
                        </p>
                      )}
                      <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm">
                        <pre className="text-gray-300 whitespace-pre-wrap">
                          {output.content}
                        </pre>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};