function App() {
  return (
    <main>
      <h1>이현진</h1>

      <ul className="list-none pl-0 mt-8">
        <li>
          <b>이메일:</b> freejak5520@gmail.com
        </li>

        <li>
          <b>연락처:</b> 010-0000-0000
        </li>

        <li>
          <b>GitHub:</b> https://github.com/freejak5520
        </li>

        <li>
          <b>블로그:</b> https://velog.io/@freejak5520
        </li>
      </ul>

      <div className="mt-8">
        <h2>소개</h2>

        <p className="mt-6">
          {`더 나은 사용자 경험과 개발자 경험을 중요한 가치로 여기는 프론트엔드 개발자입니다.
이를 위해 동료와의 협업 방식 개선, 개발 환경 및 경험 향상, 문서화의 중요성을 인식하고 적극적으로 기여해 왔으며, 이러한 활동을 통해 반복적인 업무의 비효율을 줄이고 동료들의 문제를 해결했을 때, 그리고 긍정적인 피드백을 받을 때 큰 보람과 동기부여를 얻습니다.

2020년 스타트업 창업 멤버로 개발을 시작해, 서비스 기획부터 개발, 배포, 운영까지 전 과정을 경험했습니다.
이 경험을 바탕으로 CI/CD 자동화, 협업 프로세스 개선 등 다양한 개발 및 운영 과정에서 문제를 발견하고 주도적으로 개선해 왔으며, 실제로 배포 시간 약 40% 단축, CI/CD 비용 약 80% 감소, 사내 개발 문서 활성화 등의 성과를 냈습니다.`}
        </p>
      </div>

      <div className="mt-8">
        <h2>기술 스택</h2>

        <ul className="mt-6">
          <li>TypeScript, JavaScript, React, Next.js</li>
          <li>styled-components, Emotion, TailwindCSS, SWR, React Hook Form</li>
          <li>Vite, Storybook, Chromatic, CircleCI, AWS ECS, CloudWatch</li>
        </ul>
      </div>

      <div className="mt-8">
        <h2>경력</h2>

        <div className="mt-6">
          <h3>벨루가브루어리</h3>
          <p>2024. 07. ~ 재직 중</p>
          <p>프로덕션팀 | 프론트엔드 엔지니어 | 정규직</p>

          <p className="mt-6">
            B2B 온라인 주류 유통, 발주 플랫폼{" "}
            <a href="https://business.veluga.kr/" target="_blank">
              <b className="underline">벨루가 비즈니스</b>
            </a>{" "}
            로 주류 유통 혁신에 도전하는 스타트업입니다.
          </p>

          <div className="mt-8 flex gap-6">
            <div className="w-[125px]">
              <h4>
                <a href="https://business.veluga.kr/" target="_blank">
                  <b className="underline">벨루가 비즈니스</b>
                </a>
              </h4>

              <p>2024. 07. ~</p>
            </div>
            <div className="">
              <p>
                후기와 실제 발주, 판매 데이터를 이용해 주류를 판매하는 상점들과
                공급사에게 정보를 제공하고, 온라인으로 발주할 수 있는 중계
                플랫폼을 제공합니다.
              </p>

              <ul className="mt-6">
                <li>후기 작성, 주류 인포그래픽 등의 신규 기능 구현</li>
                <li>
                  CI/CD 워크플로우 개선으로 서비스 배포 시간을 기존 약 13분에서
                  8분대로 감소, CircleCI 월간 비용이 직전 6개월 내 월 최대 비용
                  대비 약 80% 감소(
                  <a
                    className="underline font-bold"
                    href="https://velog.io/@freejak5520/TIL-CICD-%EA%B0%9C%EC%84%A0-%EC%A7%84%ED%96%89Next.js-CircleCI-Yarn-berry"
                    target="_blank"
                  >
                    블로그
                  </a>
                  )
                </li>
                <li>
                  AWS CloudWatch Container Insights 지표를 이용한 대시보드
                  만들고 모니터링해서 이를 근거로 서비스에 사용하는 Task size를
                  1/2로 절약
                </li>
                <li>
                  AWS CloudWatch, SNS, Lambda, Slack을 사용한 ECS 리소스
                  사용량에 대한 알림을 구현하고, 실제로 크롤링으로 인한
                  비정상적인 사용량 증가를 빠르게 인지하고 대처
                </li>
                <li>
                  주류 상세페이지 canonical URL을 개선해 구글 서치 콘솔 기준
                  1만건 이상 존재하던 '표준이 없는 중복 페이지 색인 문제'를 약
                  1,500건으로 줄이고 현재도 지속적으로 감소 중
                </li>
                <li>
                  업무 내용 공유 및 개발 가이드를 위한 개발 문서 작성
                  (프론트엔드 16개, 인프라 7개 문서 작성)
                </li>
                <li>
                  Storybook, Chromatic 도입으로 컴포넌트 주도 개발 도입 및 협업
                  과정 개선
                </li>
                <li>
                  레거시 모달 시스템을 개선하고, 기존 모달 컨텐츠 문서화 및 개발
                  가이드 작성으로 동료 개발자의 개발 경험 향상
                </li>
                <li>
                  레거시 코드에 타입스크립트 도입 및 생성형 AI를 사용해 API 응답
                  데이터에 대한 타입 작성
                </li>
              </ul>

              <p className="mt-6">
                기술 스택: Next.js, TypeScript, SWR, React Hook Form,
                styled-components, Storybook, Chromatic, CircleCI, ECS
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h3>오피지지(OP.GG)</h3>
          <p>2022. 06. ~ 2024. 06. (2년)</p>
          <p>Gigs cell | Backend Engineer | 정규직</p>

          <p className="mt-6">
            게이머들을 위한 전적 검색, 커뮤니티 플랫폼을 만드는 OP.GG에서 1:1
            게임 강의 중계 플랫폼 Gigs 서비스와 어드민 대시보드 개발을
            진행했습니다.
          </p>

          <div className="mt-8 flex gap-6">
            <div className="w-[125px]">
              <h4>Gigs 어드민 대시보드</h4>
              <p>2022. 06. ~ 2024. 05.</p>
            </div>
            <div>
              <ul>
                <li>Gigs 서비스의 백오피스 대시보드 풀스택 개발 진행</li>
                <li>
                  회원, 강의 진행, 결제 등의 데이터 그래프 모니터링 대시보드
                  구현
                </li>
                <li>
                  전문가 가상 전화번호 발급 및 관리 기능, 콜로그를 사용해서 통화
                  종료 후 안내 문자 발송 기능 구현
                </li>
                <li>
                  월별 세금계산서 발행 자동화 및 발행 상태 모니터링 페이지 구현
                </li>
              </ul>

              <p className="mt-6">
                기술 스택: PHP, Laravel, Vite, React, TypeScript, React Query,
                React Hook Form, Emotion
              </p>
            </div>
          </div>

          <div className="mt-8 flex gap-6">
            <div className="w-[125px]">
              <h4>
                <a
                  className="underline"
                  href="https://gigs.op.gg/"
                  target="_blank"
                >
                  Gigs
                </a>
              </h4>
              <p>2022. 06. ~ 2024. 05.</p>
            </div>
            <div>
              <ul>
                <li>1:1 게임 강의 중계 플랫폼 Gigs의 프론트엔드 개발 진행</li>
                <li>
                  Pusher channels, REST API를 이용한 실시간 채팅 기능 프론트엔드
                  구현
                </li>
                <li>
                  Markdown 문서로 작성하고 관리할 수 있는 서비스 가이드 및 약관
                  페이지 구현
                </li>
              </ul>

              <p>
                기술 스택: Next.js, TypeScript, React Query, React Hook Form,
                Emotion
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h3>주식회사 오지티(OGT Inc.)</h3>
          <p>2020. 09. ~ 2022. 05. (1년 9개월)</p>
          <p>개발자 | 정규직</p>

          <p className="mt-6">
            1:1 매칭 게임 과외 중계 플랫폼 OGT에서 서비스의 개발과 운영을
            담당했습니다.
          </p>

          <div className="mt-8 flex gap-6">
            <div className="w-[125px]">
              <h4>전문가 중계 플랫폼</h4>
              <p>2021. 09. ~ 2022. 03.</p>
            </div>
            <div>
              <ul>
                <li>
                  전문가 매칭, 재능 마켓 플랫폼을 React를 이용해 개발 진행
                </li>
              </ul>
              <p className="mt-6">
                기술 스택: React, TypeScript, React Query, React Hook Form,
                Storybook, CSS Module
              </p>
            </div>
          </div>

          <div className="mt-8 flex gap-6">
            <div className="w-[125px]">
              <h4>OGT.GG</h4>
              <p>2020. 09. ~ 2022. 05.</p>
            </div>
            <div>
              <ul>
                <li>
                  1:1 게임 강의 중계 플랫폼 OGT(Online Game Tutor) 개발 및 출시
                </li>
                <li>Django, MySQL을 사용해 서버 구현</li>
                <li>Django Template과 jQuery로 웹 서비스 구현</li>
              </ul>
              <p className="mt-6">
                기술 스택: Python, Django, MySQL, JavaScript, jQuery
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
