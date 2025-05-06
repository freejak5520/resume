import { SubInfo } from "@/components";

export default function ScreenOnlyFooter() {
  return (
    <footer className="screen-only p-12 w-auto mx-auto text-center">
      <SubInfo>
        이력서의 소스 코드는{" "}
        <a href="https://github.com/freejak5520/resume" target="_blank">
          GitHub
        </a>
        에서 확인 가능합니다.
      </SubInfo>
    </footer>
  );
}
