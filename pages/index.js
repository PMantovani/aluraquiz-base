import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export const NameInput = styled.input`
  width: 100%;
  padding: 7px 0px 7px 15px;
  background-color: transparent;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid #a68080;
  color: white;
  height: 38px;
  
  &::placeholder {
    color: #a68080;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  margin-top: 25px;
  height: 38px;
  border: 0px;
  color: ${({ theme }) => theme.colors.contrastText};
  cursor: pointer;
  
  &:not(:disabled) {
      background-color: ${({ theme }) => theme.colors.primary};
  }

  &:disabled {
    cursor: auto;
    color: #d9c1c1;
  }

`;

export default function Home() {
  // let name = 'Pedro';
  const [name, setName] = React.useState('');
  const router = useRouter();

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>

            <form onSubmit={(event) => {
              event.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >
              <NameInput
                placeholder="Seu nome de Rockstar"
                onChange={(event) => { setName(event.target.value); }}
              />
              <SubmitButton type="submit" disabled={name.length === 0}>
                Mande o seu primeiro acorde
                {' '}
                {name}
              </SubmitButton>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/PMantovani" />
    </QuizBackground>
  );
}
