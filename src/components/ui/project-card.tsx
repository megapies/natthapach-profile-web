import { Project } from "../data/projects";
import { Button } from "./button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./card";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex-[0_0_100%] min-w-52 sm:flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_25%] px-4">
      <Card className="bg-[#2E2F3D] border-[#9F8466]/30 h-full flex flex-col">
        <CardHeader className="bg-[#9F8466] text-white">
          <CardTitle className="truncate" title={project.name}>{project.name}</CardTitle>
        </CardHeader>
        <CardContent className="pt-6 flex-grow overflow-hidden">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-48 object-cover mb-4 rounded-md"
          />
          <p className="line-clamp-3">{project.description}</p>
        </CardContent>
        <CardFooter>
          <a href={project.url} className="w-full">
          <Button
            variant="outline"
            className="w-full border-[#9F8466] text-[#9F8466] hover:bg-[#9F8466] hover:text-white">
            Read More
          </Button>
          </a>
        </CardFooter>
      </Card>
    </div>
  )
}