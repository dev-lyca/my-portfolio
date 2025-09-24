export type SkillCategory = "Frontend" | "Backend" | "Tools" | "Other";

export interface Skill {
  name: string;
  proficiency: number; 
  category: SkillCategory;
  description?: string;
}
