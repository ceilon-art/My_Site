import { ReactNode } from 'react';
import Button from '../../components/Button';

import { ProjectProps } from '../../types/Interfaces/interface';

import { Container, Text } from './styles';

function Project({ imageName, altName, functionName, description,linkName }: ProjectProps) {
  return (
    <Container>
      <img src={imageName} alt={altName} />
      <Text>
        <strong>
          - Função:
          <span> {functionName} </span>
        </strong>
        <br />
        <strong>
          - Descrição:
          <span>
            {' '}
            {description}
          </span>
        </strong>

        <Button link={linkName}>
          Ver mais
        </Button>
      </Text>
    </Container>
  );
};

export default Project;
