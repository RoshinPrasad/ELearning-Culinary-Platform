import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Cookies from 'js-cookie';

const MentorProfile = () => {
  const [mentorDetails, setMentorDetails] = useState({
    fullName: '',
    email: '',
    age: '',
    address: '',
  });

  useEffect(() => {
    const userObj = Cookies.get('userDetails');
    if (userObj) {
      const { name, email, age, address } = JSON.parse(userObj);
      setMentorDetails({
        fullName: name,
        email: email,
        age: age,
        address: address,
      });
    }
  }, []);

  return (
    <Container>
      <Wrapper>
        <Section>
          <Overlap>
            <DivShape>
              {/* Removed spans and shapes for brevity */}
            </DivShape>
            <Img className="div-separator" alt="Div separator" src="div-separator.svg" />
          </Overlap>
        </Section>
        <Section2>
          <DivJustifyContent>
            <DivOrderLg>
              <Team />
            </DivOrderLg>
            <DivOrderLg2>
              <Link>
                <Connect>CONNECT</Connect>
              </Link>
              <MessageWrapper>
                <Message>MESSAGE</Message>
              </MessageWrapper>
            </DivOrderLg2>
            <DivOrderLg3>
              {/* Removed TextWrappers for brevity */}
            </DivOrderLg3>
          </DivJustifyContent>
          <DivMt>
            <DivColLg>
              <Paragraph2>
                An artist of considerable range, Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick
                <br />
                Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a
                <br />
                solid groove structure. An artist of considerable range.
              </Paragraph2>
              {/* Removed LinkShowMore for brevity */}
            </DivColLg>
          </DivMt>
        </Section2>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

const Wrapper = styled.div`
  background-color: #ffffff;
  height: 1002px;
  width: 1440px;
`;

const Section = styled.div`
  height: 580px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1440px;
`;

const DivMt = styled.div`
left: 0;
`;

const DivColLg = styled.div`
left: 0;
`;

const Paragraph2 = styled.p`
left: 0;
`;

const Overlap = styled.div`
  height: 580px;
  position: relative;
`;

const DivShape = styled.div`
  background: linear-gradient(180deg, rgb(119, 149, 248) 15%, rgb(103, 114, 229) 70%, rgb(85, 90, 191) 94%);
  height: 580px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1440px;
`;

const Span = styled.div`
  background-color: #ffffff1a;
  border-radius: 60px;
  height: 120px;
  left: -58px;
  position: absolute;
  top: 0;
  width: 120px;
`;

const Div = styled.div`
  background-color: #ffffff1a;
  border-radius: 60px;
  height: 120px;
  left: 1262px;
  position: absolute;
  top: 58px;
  width: 120px;
`;

const OverlapGroup = styled.div`
  height: 160px;
  left: 1219px;
  position: absolute;
  top: 280px;
  width: 139px;
`;

const Span2 = styled.div`
  background-color: #ffffff4c;
  border-radius: 60px;
  height: 120px;
  left: 19px;
  position: absolute;
  top: 0;
  width: 120px;
`;

const Span3 = styled.div`
  background-color: #ffffff26;
  border-radius: 60px;
  height: 120px;
  left: 0;
  position: absolute;
  top: 40px;
  width: 120px;
`;

const Span4 = styled.div`
  background-color: #ffffff0d;
  border-radius: 60px;
  height: 120px;
  left: 14px;
  position: absolute;
  top: 220px;
  width: 120px;
`;

const Span5 = styled.div`
  background-color: #ffffff26;
  border-radius: 100px;
  height: 200px;
  left: 144px;
  position: absolute;
  top: 255px;
  width: 200px;
`;

const Span6 = styled.div`
  background-color: #ffffff0a;
  border-radius: 60px;
  height: 120px;
  left: 802px;
  position: absolute;
  top: 170px;
  width: 120px;
`;

const Img = styled.img`
  height: 80px;
  left: 0;
  position: absolute;
  top: 500px;
  width: 1440px;
`;

const Section2 = styled.div`
  background-color: #ffffff;
  border: 1px solid;
  border-color: #0000000d;
  border-radius: 4px;
  box-shadow: 0px 5px 15px #00000012, 0px 15px 35px #32325d1a;
  height: 581px;
  left: 215px;
  position: absolute;
  top: 344px;
  width: 1010px;
`;

const DivJustifyContent = styled.div`
  height: 110px;
  left: 10px;
  position: absolute;
  top: 1px;
  width: 990px;
`;

const DivOrderLg = styled.div`
  height: 110px;
  left: 371px;
  position: absolute;
  top: 0;
  width: 248px;
`;

const Team = styled.div`
  background-image: url(./team-4-800x800-23007132-jpg.png);
  background-position: 50% 50%;
  background-size: cover;
  border-radius: 90px;
  box-shadow: 0px 5px 15px #00000012, 0px 15px 35px #32325d1a;
  height: 180px;
  left: 34px;
  position: relative;
  top: -54px;
  width: 180px;
`;

const DivOrderLg2 = styled.div`
  height: 76px;
  left: 619px;
  position: absolute;
  top: 17px;
  width: 330px;
`;

const Link = styled.div`
  background-color: #11cdef;
  border: 1px solid;
  border-radius: 4px;
  box-shadow: 0px 1px 3px #00000014, 0px 4px 6px #32325d1c;
  height: 28px;
  left: 126px;
  position: absolute;
  top: 24px;
  width: 77px;
`;

const Connect = styled.div`
  color: #ffffff;
  font-family: "Open Sans-SemiBold", Helvetica;
  font-size: 12px;
  font-weight: 600;
  height: 17px;
  left: 9px;
  letter-spacing: 0.3px;
  line-height: 18px;
  position: absolute;
  text-align: center;
  top: 4px;
  white-space: nowrap;
  width: 59px;
`;

const MessageWrapper = styled.div`
  background-color: #172b4d;
  border: 1px solid;
  border-radius: 4px;
  box-shadow: 0px 1px 3px #00000014, 0px 4px 6px #32325d1c;
  height: 28px;
  left: 227px;
  position: absolute;
  top: 24px;
  width: 74px;
`;

const Message = styled.div`
  color: #ffffff;
  font-family: "Open Sans-SemiBold", Helvetica;
  font-size: 12px;
  font-weight: 600;
  height: 17px;
  left: 9px;
  letter-spacing: 0.3px;
  line-height: 18px;
  position: absolute;
  text-align: center;
  top: 4px;
  white-space: nowrap;
  width: 57px;
`;

const DivOrderLg3 = styled.div`
  height: 110px;
  left: 41px;
  position: absolute;
  top: 0;
  width: 330px;
`;

const TextWrapper = styled.div`
  color: #525f7f;
  font-family: "Open Sans-Bold", Helvetica;
  font-size: 17.6px;
  font-weight: 700;
  height: 24px;
  left: 52px;
  letter-spacing: 0.44px;
  line-height: 26.4px;
  position: absolute;
  text-align: center;
  top: 30px;
  white-space: nowrap;
  width: 21px;
`;

const TextWrapper2 = styled.div`
  color: #adb5bd;
  font-family: "Open Sans-Regular", Helvetica;
  font-size: 14px;
  font-weight: 400;
  height: 19px;
  left: 38px;
  letter-spacing: 0;
  line-height: 21px;
  position: absolute;
  text-align: center;
  top: 58px;
  white-space: nowrap;
  width: 49px;
`;

const TextWrapper3 = styled.div`
  color: #525f7f;
  font-family: "Open Sans-Bold", Helvetica;
  font-size: 17.6px;
  font-weight: 700;
  height: 24px;
  left: 143px;
  letter-spacing: 0.44px;
  line-height: 26.4px;
  position: absolute;
  text-align: center;
  top: 30px;
  white-space: nowrap;
  width: 21px;
`;

const TextWrapper4 = styled.div`
  color: #adb5bd;
  font-family: "Open Sans-Regular", Helvetica;
  font-size: 14px;
  font-weight: 400;
  height: 19px;
  left: 131px;
  letter-spacing: 0;
  line-height: 21px;
  position: absolute;
  text-align: center;
  top: 58px;
  white-space: nowrap;
  width: 46px;
`;

const TextWrapper5 = styled.div`
  color: #525f7f;
  font-family: "Open Sans-Bold", Helvetica;
  font-size: 17.6px;
  font-weight: 700;
  height: 24px;
  left: 245px;
  letter-spacing: 0.44px;
  line-height: 26.4px;
  position: absolute;
  text-align: center;
  top: 30px;
  white-space: nowrap;
  width: 21px;
`;

const TextWrapper6 = styled.div`
  color: #adb5bd;
  font-family: "Open Sans-Regular", Helvetica;
  font-size: 14px;
  font-weight: 400;
  height: 19px;
  left: 220px;
  letter-spacing: 0;
  line-height: 21px;`
;

export default MentorProfile;