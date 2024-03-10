export type AppConfig = {
  nodeEnv: string;
  name: string;
  workingDirectory: string;
  frontedDomain?: string;
  backendDomain: string;
  port: number;
  apiPrefix: string;
  fallbackLanguage: string;
  headerLanguage: string;
};
