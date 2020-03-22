import styled from 'styled-components';
import marksy from 'marksy';
import { createElement } from 'react';
import makeId from './makeId';
import content from './content';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 64px;
`;

const Title = styled.h2`
  display: block;
  ${({ theme }) => theme.font}
  font-size: ${({ theme }) => theme.fontSizes.title};
  font-weight: 700;
  letter-spacing: ${({ theme }) => theme.letterSpacing};
  line-height: ${({ theme }) => theme.lineHeight};
  color: ${({ theme }) => theme.colors.light};
  margin-bottom: 36px;
`;

const Paragraph = styled.p`
  display: inline-block;
  ${({ theme }) => theme.font}
  font-size: ${({ theme }) => theme.fontSizes.body};
  font-weight: 400;
  letter-spacing: ${({ theme }) => theme.letterSpacing};
  line-height: ${({ theme }) => theme.lineHeight};
  color: ${({ theme }) => theme.colors.light};
  text-decoration: none;
  margin-bottom: 12px;
`;

const Anchor = styled.a`
  display: inline-block;
  ${({ theme }) => theme.font}
  font-size: ${({ theme }) => theme.fontSizes.body};
  font-weight: 400;
  letter-spacing: ${({ theme }) => theme.letterSpacing};
  line-height: ${({ theme }) => theme.lineHeight};
  color: ${({ theme }) => theme.colors.lightComplimentary};
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.complimentary};
  }
`;

const compileMarkdown = () => {
  let lastH1 = null;

  return marksy({
    createElement,
    elements: {
      h1: ({ children }) => {
        const id = makeId(children.toString());
        lastH1 = id;

        return <Title id={id}>{children}</Title>;
      },
      h2: ({ children }) => {
        const id = makeId(children.toString());

        return <Title id={`${lastH1}---${id}`}>{children}</Title>;
      },
      p: Paragraph,
      a: Anchor,
    },
  });
};

export default function Documentation() {
  return <Container>{compileMarkdown()(content.markup).tree}</Container>;
}
