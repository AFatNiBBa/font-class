
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `spoon` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/spoon?s=duotone spoon}
 * @preview ![spoon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ0OS45NzYgMjY1LjEyMUM0NDkuNDcyIDI2NS42MjUgNDQ4Ljk2OCAyNjYuMTI1IDQ0OC40NjEgMjY2LjYxN0M0MDUuNDc0IDMwOC41NTEgMzQxLjMzOCAzMTMuODgzIDI5MC4wMDggMjg3LjU2M0wyMjQuMDg2IDIyMS42NDlDMTk3Ljc1MiAxNzAuMzIgMjAzLjA4NCAxMDYuMTcxIDI0NS4wMjMgNjMuMTc5QzI0NS41MTcgNjIuNjcxIDI0Ni4wMTUgNjIuMTY3IDI0Ni41MTkgNjEuNjYzQzMxMC44MDggLTIuNjI2IDQyMi45MzMgLTIzLjY3MyA0NzkuMDYgMzIuNTc3QzUzNS4zMTQgODguNzAzIDUxNC4yNjcgMjAwLjgzMiA0NDkuOTc2IDI2NS4xMjFaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTI5MC4zNjcgMjg3LjU2M0w4Mi45NzMgNTAzLjc1MUM3OC4wNTkgNTA4LjkwOCA3MS4yNzIgNTExLjkgNjQuMTIyIDUxMS45OThDNTcuMDE4IDUxMi4wOTUgNTAuMTM1IDUwOS4yOTggNDUuMSA1MDQuMjYzTDcuNzM5IDQ2Ni45QzIuNzA0IDQ2MS44NjggLTAuMDk1IDQ1NC45ODIgMC4wMDIgNDQ3Ljg4QzAuMSA0NDAuNzI4IDMuMDkyIDQzMy45NDIgOC4yNDkgNDI5LjAyOEwyMjQuNDQ2IDIyMS42NDlMMjkwLjM2NyAyODcuNTYzWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Spoon(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M449.976 265.121C449.472 265.625 448.968 266.125 448.461 266.617C405.474 308.551 341.338 313.883 290.008 287.563L224.086 221.649C197.752 170.32 203.084 106.171 245.023 63.179C245.517 62.671 246.015 62.167 246.519 61.663C310.808 -2.626 422.933 -23.673 479.06 32.577C535.314 88.703 514.267 200.832 449.976 265.121Z" />
            <path d="M290.367 287.563L82.973 503.751C78.059 508.908 71.272 511.9 64.122 511.998C57.018 512.095 50.135 509.298 45.1 504.263L7.739 466.9C2.704 461.868 -0.095 454.982 0.002 447.88C0.1 440.728 3.092 433.942 8.249 429.028L224.446 221.649L290.367 287.563Z" />
        </Icon>
    </>
}