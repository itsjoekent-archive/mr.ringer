import styled from 'styled-components';
import marksy from 'marksy';
import { createElement } from 'react';
import { chalkUnderlineStyle } from './sharedStyles';

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 64px;
`;

const SectionParagraph = styled.p`
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

const SectionAnchor = styled.a`
  display: inline-block;
  ${({ theme }) => theme.font}
  font-size: ${({ theme }) => theme.fontSizes.body};
  font-weight: 400;
  letter-spacing: ${({ theme }) => theme.letterSpacing};
  line-height: ${({ theme }) => theme.lineHeight};
  color: ${({ theme }) => theme.colors.light};
  cursor: pointer;
  text-decoration: none;
  ${chalkUnderlineStyle}

  &:hover {
    color: ${({ theme }) => theme.colors.complimentary};
  }
`;

const compileMarkdown = marksy({
  createElement,
  elements: {
    p: SectionParagraph,
    a: SectionAnchor,
  },
});

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

export default function Section(props) {
  const { id, title, composition } = props;

  return (
    <SectionContainer>
      <Title id={id}>{title}</Title>
      {composition &&
        composition.map(({ type, content }) => {
          const key = JSON.stringify(content);

          if (type === 'markdown') {
            return (
              <React.Fragment key={key}>
                {compileMarkdown(content).tree}
              </React.Fragment>
            );
          }

          return null;
        })}
    </SectionContainer>
  );
}
