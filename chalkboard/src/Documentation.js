import styled from 'styled-components';
import marksy from 'marksy';
import { createElement } from 'react';
import makeId from './makeId';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 64px;
  width: 100%;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 24px;
  padding-right: 24px;

  ${({ theme }) => theme.font}
  font-size: ${({ theme }) => theme.fontSizes.body};
  font-weight: 400;
  letter-spacing: ${({ theme }) => theme.letterSpacing};
  line-height: ${({ theme }) => theme.lineHeight};
  color: ${({ theme }) => theme.colors.light};
`;

const Title = styled.h2`
  display: block;
  ${({ theme }) => theme.font}
  font-size: ${({ theme }) => theme.fontSizes.title};
  font-weight: 700;
  letter-spacing: ${({ theme }) => theme.letterSpacing};
  line-height: ${({ theme }) => theme.lineHeight};
  color: ${({ theme }) => theme.colors.light};
  margin-top: 24px;
  margin-bottom: 24px;
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

const Code = styled.span`
  font-family: monospace;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.body};
  color: ${({ theme }) => theme.colors.lightComplimentary};
  white-space: pre;
  margin-top: 24px;
  margin-bottom: 24px;
  overflow-x: scroll;
`;

const Header3 = styled.strong`
  display: inline-block;
  ${({ theme }) => theme.font}
  font-size: ${({ theme }) => theme.fontSizes.header};
  font-weight: 700;
  letter-spacing: ${({ theme }) => theme.letterSpacing};
  line-height: ${({ theme }) => theme.lineHeight};
  color: ${({ theme }) => theme.colors.complimentary};
  margin-top: 12px;
  margin-bottom: 12px;
`;

const UnorderedList = styled.ul`
  margin-top: 0;
  margin-bottom: 12px;
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
      p: Paragraph,
      a: Anchor,
      h3: Header3,
      ul: UnorderedList,
      code: ({ code }) => <Code>{code}</Code>,
    },
  });
};

export default function Documentation(props) {
  const { markup } = props;

  return <Container>{compileMarkdown()(markup).tree}</Container>;
}
