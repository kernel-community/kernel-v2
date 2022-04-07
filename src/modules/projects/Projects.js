import React from 'react';
import {Flex, Text, Image, Grid, Button} from 'theme-ui';

const projectsArray = require('../../../content/projects.json');
const projects = projectsArray.projects;

const Projects = () => {
  return (
    <Flex
      sx={{
        backgroundColor: 'surfaceAlt',
        borderRadius: 'medium',
        flexDirection: 'column',
        marginX: ['2rem', '2rem', '0rem'],
        marginTop: ['-2rem', '-4rem']
      }}>
      <Flex>
        <Grid
          id="projectContainer"
          sx={{
            gridColumnGap: ['1rem', '4rem'],
            gridRowGap: ['4rem', '6rem'],
            padding: '2rem',
            overflowX: ['scroll', 'hidden', 'hidden'],
            overflowY: 'hidden',
            gridTemplateRows: ['auto', 'auto'],
            gridAutoFlow: 'column',
            scrollBehavior: 'smooth',
            scrollbarWidth: 'none'
          }}>
          {projects.map((project, index) => (
            <Flex
              key={index}
              onClick={() => {
                window.open(project.url, '_blank');
              }}
              sx={{
                flexDirection: 'column',
                rowGap: '1rem',
                ':hover': {
                  cursor: 'pointer',
                  color: 'primary'
                },
                minWidth: '344px'
              }}>
              <Image
                sx={{borderRadius: '3%', width: '344px', height: '206px'}}
                src={project.image}
              />
              <Text sx={{fontWeight: 600, fontSize: '24px'}}>
                {project.name}
              </Text>
              <Text sx={{color: 'text'}}>{project.description}</Text>
            </Flex>
          ))}
        </Grid>
      </Flex>
      <Flex
        sx={{
          marginX: 'auto',
          marginBottom: ['-1rem', '1rem'],
          marginTop: ['0rem', '1rem'],
          textColor: 'callout',
          visibility: ['hidden', 'visible']
        }}>
        <Button
          variant="outlineSmall"
          onClick={() => {
            document.getElementById('projectContainer').scrollLeft -= 600;
          }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            height={24}
            width={24}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </Button>
        <Button
          variant="outlineSmall"
          onClick={() => {
            document.getElementById('projectContainer').scrollLeft += 600;
          }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            height={24}
            width={24}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Button>
      </Flex>
    </Flex>
  );
};

export default Projects;
