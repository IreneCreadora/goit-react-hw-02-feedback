import propTypes from 'prop-types';
import { Title, SectionStyled } from 'components/Component.styled';

const Section = ({ title, children }) => {
  return (
    <SectionStyled>
      {title && <Title>{title}</Title>}
      {children}
    </SectionStyled>
  );
};

Section.propTypes = {
  title: propTypes.string,
  children: propTypes.node.isRequired,
};

export default Section;
