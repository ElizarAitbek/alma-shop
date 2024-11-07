import styled from "styled-components";

export default function AboutPage() {
  return (
    <AboutPageContainer>
      <ContentWrapper>
        <Title>Биз жөнүндө</Title>
        <Description>
          <p>
            <strong>Alma Shop</strong> - Кыргызстандагы алдыңкы техноплатформа,
            Apple компаниясынын бардык популярдуу продукттарын сатууга
            адистешкен. Биздин максат - заманбап технологияларды жана сапаттуу
            электроника буюмдарын өлкөбүздөгү ар бир адамга жеткиликтүү кылуу.
          </p>
          <p>
            Компаниябыздын негизги принциптери - сапат, ишенимдүүлүк жана
            кардарлар менен узак мөөнөттүү кызматташтык. Биз сизге эң жаңы
            моделдерди жана техникалык жаңылыктарды сунуштайбыз, ар бир
            продуктубуздун сапаты жана оригиналдыгы боюнча кепилдик беребиз.
          </p>
          <Subtitle>Биздин максаттар:</Subtitle>
          <ul>
            <li>
              <strong>Ишене ала турган сапат</strong> - Биз Apple компаниясынын
              эң акыркы жана популярдуу өнүмдөрүн сунуштайбыз, ар бир товар
              толугу менен текшерилип, оригиналдуу болуп саналат.
            </li>
            <li>
              <strong>Жогорку деңгээлде тейлөө</strong> - Кардарлардын
              муктаждыктарын жана күтүүлөрүн эң жогорку деңгээлде канааттандыруу
              үчүн бардык кызматтарды сапаттуу көрсөтүүгө аракет кылабыз.
            </li>
            <li>
              <strong>Икономикалык жеткиликтүүлүк</strong> - Биз жаңы жана
              инновациялык технологияларды арзан баада сунуштап, сатып
              алуучуларга жагымдуу шарттарды түзөбүз.
            </li>
            <li>
              <strong>Технологиялык жаңылануу</strong> - Жаңы өнүмдөр менен ар
              дайым жаңылап, ар бир кардарга дүйнө жүзү боюнча эң мыкты
              техникаларды алып келүүнү максат кылабыз.
            </li>
          </ul>
        </Description>
      </ContentWrapper>
    </AboutPageContainer>
  );
}

const AboutPageContainer = styled.div`
  background-color: #f9f9f9;
  color: #333;
  padding: 40px 20px;
  height: 100vh;
`;

const ContentWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  color: #0a84ff;
  margin-bottom: 20px;
`;

const Description = styled.div`
  font-size: 1.125rem;
  line-height: 1.6;
  color: #333;
  text-align: left;

  p {
    margin-bottom: 16px;
  }

  ul {
    list-style: none;
    padding-left: 0;
    font-size: 1.125rem;
    color: #666;

    li {
      margin-bottom: 12px;
      line-height: 1.5;
    }

    strong {
      font-weight: 600;
      color: #0a84ff;
    }
  }
`;

const Subtitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;
  color: #333;
  margin-top: 30px;
  margin-bottom: 20px;
`;
