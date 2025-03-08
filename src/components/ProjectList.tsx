import clsx from "clsx";
import { Link, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import nullthrows from "nullthrows";
import React from "react";

export default function ProjectList({
  projects,
  className,
}: {
  projects: ReadonlyArray<Queries.ProjectListProjectFragment>;
  className?: string;
}) {
  return (
    <ul className={clsx("grid md:grid-cols-2 xl:grid-cols-3 gap-9", className)}>
      {projects.map((project) => (
        <li key={project.id} className="contents">
          <Link
            className="hover:brightness-95 rounded-xl overflow-clip border border-gray-200 bg-white"
            to={`/projects/${project.frontmatter?.slug}/`}
          >
            <GatsbyImage
              alt="プロジェクトのイメージ画像"
              image={nullthrows(
                project.frontmatter?.image?.childImageSharp?.gatsbyImageData,
                "画像が指定されていません",
              )}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">
                {project.frontmatter?.title}
              </h3>
              <p className="mt-2 prose">{project.frontmatter?.description}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export const query = graphql`
  fragment ProjectListProject on Mdx {
    id
    frontmatter {
      date
      slug
      title
      image {
        childImageSharp {
          gatsbyImageData(
            width: 800
            height: 600
            transformOptions: { fit: INSIDE }
          )
        }
      }
      description
    }
  }
`;
