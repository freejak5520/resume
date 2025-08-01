import { Company, List, ListItem, Section, SubInfo, Text } from "@/components";
import { Contact, ContactList } from "@/components/Contact";
import ScreenOnlyFooter from "@/components/Footer";
import { ExternalLink } from "@/components/ExternalLink";
import { Project, ProjectAside, ProjectContent } from "@/components/Project";
import { ExperienceSkills, MySkill, MySkillList } from "@/components/Skill";
import { getQueryParams } from "@/lib/utils";
import { useEffect, useState } from "react";

function App() {
  const [contact, setContact] = useState<string | null>(null);

  useEffect(() => {
    const params = getQueryParams();

    if (params.contact) {
      setContact(params.contact);
    }
  }, []);

  return (
    <>
      <main>
        <h1>이현진</h1>

        <Section>
          <ContactList>
            <Contact title="이메일">freejak5520@gmail.com</Contact>
            {contact && <Contact title="연락처">{contact}</Contact>}
            <Contact title="GitHub">
              <ExternalLink href="https://github.com/freejak5520">
                https://github.com/freejak5520
              </ExternalLink>
            </Contact>
            <Contact title="블로그">
              <ExternalLink href="https://velog.io/@freejak5520">
                https://velog.io/@freejak5520
              </ExternalLink>
            </Contact>
          </ContactList>
        </Section>

        <Section>
          <h2>소개</h2>

          <Text>
            저는 사용자 경험과 개발자 경험의 향상을 중요하게 여기는 프론트엔드
            개발자입니다.
          </Text>
          <Text>
            동료와의 협업 개선, 개발 환경 향상, 문서화 등에 적극적으로 기여하고
            있으며, 이 과정에서 반복적으로 발생하는 비효율적인 업무와 기존의
            문제를 개선하고 동료들에게 긍정적인 피드백을 받을 때 큰 보람을 얻고
            있습니다.
          </Text>
          <Text>
            2020년 스타트업 창업 멤버로 개발을 시작하여, 서비스 기획부터 개발,
            배포, 운영까지 전 과정을 경험했습니다.
          </Text>
          <Text>
            이 경험을 바탕으로 업무의 자동화, 협업 프로세스 개선 등 다양한 개발
            및 운영 과정에서 주도적으로 문제를 발견하고 개선했으며, 실제로 배포
            시간을 약 40% 단축, CI/CD 비용을 약 80% 절감, 사내 개발 문서 활성화
            등의 성과를 냈습니다.
          </Text>
        </Section>

        <Section>
          <h2>기술 스택</h2>

          <MySkillList>
            <MySkill>TypeScript, JavaScript, React, Next.js</MySkill>
            <MySkill>
              styled-components, Emotion, TailwindCSS, SWR, React Hook Form
            </MySkill>
            <MySkill>
              Vite, Storybook, Chromatic, CircleCI, AWS ECS, CloudWatch
            </MySkill>
          </MySkillList>
        </Section>

        <Section>
          <h2>경력</h2>

          <Company>
            <h3>벨루가브루어리</h3>
            <SubInfo>2024. 07. ~ 재직 중</SubInfo>
            <SubInfo>프로덕션팀 | 프론트엔드 엔지니어 | 정규직</SubInfo>

            <Text>
              B2B 온라인 주류 유통, 발주 플랫폼 <b>벨루가 비즈니스</b>로 주류
              유통 혁신에 도전하는 스타트업입니다.
            </Text>

            <Project>
              <ProjectAside>
                <h4>
                  <ExternalLink href="https://business.veluga.kr/">
                    벨루가 비즈니스
                  </ExternalLink>
                </h4>

                <SubInfo>2024. 07. ~</SubInfo>
              </ProjectAside>
              <ProjectContent>
                <Text>
                  상점에게 데이터를 이용한 주류 추천 및 쉬운 온라인 발주를 위한
                  중계 플랫폼과 상점들의 실제 판매 데이터와 통계를 제공하는 유료
                  서비스 '벨루가 파도 멤버십'을 제공합니다.
                  <br />
                  기존의 경직되어있고 규제가 강한 주류 유통 산업의 수많은 문제점
                  해결을 목표로 프론트엔드 개발을 진행하고 있습니다.
                </Text>

                <List>
                  <ListItem>
                    후기 작성, 주류 인포그래픽 등의 프론트엔드 신규 기능 구현
                  </ListItem>
                  <ListItem>
                    CI/CD 워크플로우 개선으로 서비스 배포 시간을 기존 약
                    13분에서 8분대로 감소, <br />
                    CircleCI 월간 비용이 직전 6개월 내 월 최대 비용 대비 약 80%
                    감소(
                    <ExternalLink href="https://velog.io/@freejak5520/TIL-CICD-%EA%B0%9C%EC%84%A0-%EC%A7%84%ED%96%89Next.js-CircleCI-Yarn-berry">
                      블로그
                    </ExternalLink>
                    )
                  </ListItem>
                  <ListItem>
                    AWS CloudWatch Container Insights 지표를 이용한 대시보드
                    만들고 모니터링해서 이를 근거로 서비스에 사용하는 Task
                    size를 1/2로 절감
                  </ListItem>
                  <ListItem>
                    AWS CloudWatch, SNS, Lambda, Slack을 사용한 ECS 리소스
                    사용량에 대한 알림을 구현하고, 실제로 크롤링으로 인한
                    비정상적인 사용량 증가를 빠르게 인지하고 대처
                  </ListItem>
                  <ListItem>
                    주류 상세페이지의 canonical URL을 개선해 구글 서치 콘솔 기준
                    1만 건 이상의 <code>표준이 없는 중복 페이지 색인 문제</code>
                    를 약 1,500건으로 줄이고 지속적으로 개선 중
                  </ListItem>
                  <ListItem>
                    업무 내용 공유와 개발 가이드 제공을 위한 문서 작성
                    (프론트엔드 16개, 인프라 7개 문서 작성)
                  </ListItem>
                  <ListItem>
                    Storybook, Chromatic 도입을 통한 컴포넌트 주도 개발 및 협업
                    프로세스 개선
                  </ListItem>
                  <ListItem>
                    반복적으로 작성하던 Storybook 코드 스니펫을 VSCode 확장
                    프로그램으로 제작, 사내 공유 및 마켓플레이스(
                    <ExternalLink href="https://marketplace.visualstudio.com/items?itemName=JakeLee.storybook-8-typescript-snippets">
                      링크
                    </ExternalLink>
                    ), GitHub(
                    <ExternalLink href="https://github.com/freejak5520/storybook-8-typescript-snippets">
                      링크
                    </ExternalLink>
                    )에 공개
                  </ListItem>
                  <ListItem>
                    기존 모달 콘텐츠와 개발 가이드 문서화, 레거시 모달 시스템
                    개선을 통해 프론트엔드 개발 경험 향상에 기여
                  </ListItem>
                  <ListItem>
                    레거시 코드에 타입스크립트 도입과 생성형 AI를 활용한 API
                    응답 데이터 타입 정의
                  </ListItem>
                </List>

                <ExperienceSkills>
                  기술 스택: Next.js, TypeScript, SWR, React Hook Form,
                  styled-components, Storybook, Chromatic, CircleCI, AWS ECS,
                  CloudWatch
                </ExperienceSkills>
              </ProjectContent>
            </Project>

            <Project>
              <ProjectAside>
                <h4>벨루가 어드민</h4>

                <SubInfo>2024. 07. ~</SubInfo>
              </ProjectAside>
              <ProjectContent>
                <Text>
                  이벤트, 홈 화면 배너, 광고 관리 등 서비스 운영에 필요한 관리
                  기능을 제공합니다.
                  <br />
                  관리자가 더 쉽고 안전하게 벨루가 서비스를 관리할 수 있도록
                  서비스의 프론트엔드 개발과 백엔드 개발을 담당하고 있습니다.
                </Text>

                <List>
                  <ListItem>
                    백엔드 API 개발 - 운영에 필요한 데이터를 어드민 서비스에서
                    확인할 수 있도록 프론트엔드 개발자와 협업해 기획 및 API
                    개발을 진행
                  </ListItem>
                  <ListItem>
                    일정 관리 기능 - 요구사항을 충족하는 달력 UI 컴포넌트를
                    구현,
                    <br />
                    경험을 바탕으로 달력 렌더링에 필요한 최소한의 데이터를
                    제공하는 react hook을 라이브러리로 제작하여 GitHub(
                    <ExternalLink href="https://github.com/freejak5520/use-calendar">
                      링크
                    </ExternalLink>
                    )와 npm(
                    <ExternalLink href="https://www.npmjs.com/package/@freejak5520/use-calendar">
                      링크
                    </ExternalLink>
                    ) 에 공개
                  </ListItem>
                  <ListItem>
                    서비스 홈에 노출되는 배너의 커스터마이징 기능과 Storybook
                    embed로 미리보기 구현
                  </ListItem>
                </List>

                <ExperienceSkills>
                  프론트엔드 기술 스택: React, TypeScript, SWR, React Hook Form,
                  styled-components
                </ExperienceSkills>
                <ExperienceSkills>
                  백엔드 기술 스택: Python, Django, MySQL
                </ExperienceSkills>
              </ProjectContent>
            </Project>
          </Company>

          <Company>
            <h3>오피지지(OP.GG)</h3>
            <SubInfo>
              2022. 06. ~ 2024. 06. (2년)
              <br />
              Gigs cell | Backend Engineer | 정규직
            </SubInfo>

            <Text>
              게이머를 위한 전적 검색 및 커뮤니티 플랫폼 OP.GG에서 1:1 게임 강의
              중계 플랫폼 Gigs 서비스와 어드민 대시보드 개발을 진행했습니다.
            </Text>

            <Project>
              <ProjectAside>
                <h4>Gigs 어드민 대시보드</h4>
                <SubInfo>2022. 06. ~ 2024. 05.</SubInfo>
              </ProjectAside>
              <ProjectContent>
                <List>
                  <ListItem>
                    Gigs 서비스의 백오피스 대시보드 풀스택 개발을 담당
                  </ListItem>
                  <ListItem>
                    회원, 강의 진행, 결제 데이터를 시각화한 모니터링 대시보드
                    구현
                  </ListItem>
                  <ListItem>
                    전문가용 가상 전화번호 발급/관리 기능과 콜로그를 활용한 통화
                    종료 후 안내 문자 발송 기능 구현
                  </ListItem>
                  <ListItem>
                    월별 세금계산서 자동 발행 시스템 및 발행 현황 모니터링
                    페이지 구현
                  </ListItem>
                </List>

                <ExperienceSkills>
                  기술 스택: PHP, Laravel, Vite, React, TypeScript, React Query,
                  React Hook Form, Emotion
                </ExperienceSkills>
              </ProjectContent>
            </Project>

            <Project>
              <ProjectAside>
                <h4>
                  <ExternalLink
                    className="underline"
                    href="https://gigs.op.gg/"
                  >
                    Gigs
                  </ExternalLink>
                </h4>
                <SubInfo>2022. 06. ~ 2024. 05.</SubInfo>
              </ProjectAside>
              <ProjectContent>
                <List>
                  <ListItem>
                    1:1 게임 강의 중계 플랫폼 Gigs의 프론트엔드 개발 진행
                  </ListItem>
                  <ListItem>
                    Pusher channels와 REST API를 활용한 실시간 채팅 기능의
                    프론트엔드 구현
                  </ListItem>
                  <ListItem>
                    Markdown 기반의 서비스 가이드 및 약관 페이지 구현
                  </ListItem>
                </List>

                <ExperienceSkills>
                  기술 스택: Next.js, TypeScript, React Query, React Hook Form,
                  Emotion
                </ExperienceSkills>
              </ProjectContent>
            </Project>
          </Company>

          <Company>
            <h3>주식회사 오지티(OGT Inc.)</h3>
            <SubInfo>
              2020. 09. ~ 2022. 05. (1년 9개월)
              <br />
              개발자 | 정규직
            </SubInfo>

            <Text>
              1:1 게임 강의 중계 플랫폼 OGT의 서비스 개발 및 운영을
              담당했습니다.
            </Text>

            <Project>
              <ProjectAside>
                <h4>전문가 중계 플랫폼</h4>
                <SubInfo>2021. 09. ~ 2022. 03.</SubInfo>
              </ProjectAside>
              <ProjectContent>
                <List>
                  <ListItem>
                    전문가 매칭, 재능 마켓 플랫폼을 React로 개발
                  </ListItem>
                </List>

                <ExperienceSkills>
                  기술 스택: React, TypeScript, React Query, React Hook Form,
                  Storybook, CSS Module
                </ExperienceSkills>
              </ProjectContent>
            </Project>

            <Project>
              <ProjectAside>
                <h4>OGT.GG</h4>
                <SubInfo>2020. 09. ~ 2022. 05.</SubInfo>
              </ProjectAside>
              <ProjectContent>
                <List>
                  <ListItem>
                    1:1 게임 강의 중계 플랫폼 OGT(Online Game Tutor) 개발 및
                    출시
                  </ListItem>
                  <ListItem>Django, MySQL을 사용한 서버 개발</ListItem>
                  <ListItem>Django Template과 jQuery로 웹 서비스 구현</ListItem>
                </List>

                <ExperienceSkills>
                  기술 스택: Python, Django, MySQL, JavaScript, jQuery
                </ExperienceSkills>
              </ProjectContent>
            </Project>
          </Company>
        </Section>
      </main>
      <ScreenOnlyFooter />
    </>
  );
}

export default App;
