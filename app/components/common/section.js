import { mediaQueries } from '../../constants';

const Section = ({ section = {}, mainContainer = {}, className = '', children }) => (
  <section className={className} style={section.style}>
    <div style={mainContainer.style}>
      <style jsx>
        {`
          div {
            padding: 0 15px;
            margin: 0 auto;
          }

          @media (min-width: ${mediaQueries.S}) {
            div {
              width: auto;
            }
          }

          @media (min-width: ${mediaQueries.L}) {
            div {
              width: 960px;
            }
          }

          @media (min-width: ${mediaQueries.XL}) {
            div {
              width: 1140px;
            }
          }
        `}
      </style>
      {children}
    </div>
  </section>
);

export default Section;
