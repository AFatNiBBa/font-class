
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `panorama` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/panorama?s=duotone panorama}
 * @preview ![panorama](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTU3OC4yMDcgNjYuMDU3TDU3OC4xOTkgNjYuMDU5QzQwOS43NzMgMTE2LjU4NiAyMzAuMjI3IDExNi41ODYgNjEuODAxIDY2LjA1OUw2MS43OTMgNjYuMDU3QzMwLjk5NiA1Ni44MTYgMCA3OS44NzkgMCAxMTIuMDMxVjQzMS45NjlDMCA0NjQuMTIxIDMwLjk5NiA0ODcuMTg0IDYxLjc5MyA0NzcuOTQzTDYxLjgwMSA0NzcuOTQxQzIzMC4yMjcgNDI3LjQxNCA0MDkuNzczIDQyNy40MTQgNTc4LjE5OSA0NzcuOTQxTDU3OC4yMDcgNDc3Ljk0M0M2MDkuMDA0IDQ4Ny4xODQgNjQwIDQ2NC4xMjEgNjQwIDQzMS45NjlWMTEyLjAzMUM2NDAgNzkuODc5IDYwOS4wMDQgNTYuODE2IDU3OC4yMDcgNjYuMDU3Wk0xMjggMjI0QzExMC4zMjggMjI0IDk2IDIwOS42NzIgOTYgMTkyUzExMC4zMjggMTYwIDEyOCAxNjBDMTQ1LjY3NiAxNjAgMTYwIDE3NC4zMjggMTYwIDE5MlMxNDUuNjc2IDIyNCAxMjggMjI0Wk00NzQuMjkzIDM4OC41NTdDNDIzLjM2MSAzODAuMjY0IDM3MS43ODkgMzc2LjA0NSAzMjAgMzc2LjA0NUMyNjkuNTUzIDM3Ni4wNDUgMjE5LjMyIDM4MC4wODggMTY5LjY3OCAzODcuOTc3QzE1NS41MzkgMzkwLjIyMyAxNDUuNTY4IDM3NC43ODMgMTUzLjg5NSAzNjMuMTM1QzE3NC44OTEgMzMzLjc1OCAyMDMuMDcyIDI5NC41NzQgMjAzLjA3MiAyOTQuNTc0QzIwNi4wODQgMjkwLjQ0MSAyMTAuODg5IDI4OCAyMTYgMjg4UzIyNS45MTYgMjkwLjQ0MSAyMjguOTI4IDI5NC41NzRMMjYxLjM4MyAzMzkuMDg2TDM1NC42ODggMTk5LjEyNUMzNTcuNjU0IDE5NC42NzIgMzYyLjY1IDE5MiAzNjggMTkyUzM3OC4zNDYgMTk0LjY3MiAzODEuMzEyIDE5OS4xMjVDMzgxLjMxMiAxOTkuMTI1IDQ1NC4wMzEgMzA4Ljk2OSA0OTAuNDE2IDM2NC4yMjVDNDk4LjEzNSAzNzUuOTQ3IDQ4OC4xNDYgMzkwLjgxMiA0NzQuMjkzIDM4OC41NTdaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTQ3NC40MzMgMzg4LjU1N0M0MjMuNTAyIDM4MC4yNjQgMzcxLjkyOSAzNzYuMDQ1IDMyMC4xNCAzNzYuMDQ1QzI2OS42OTMgMzc2LjA0NSAyMTkuNDYxIDM4MC4wODggMTY5LjgxOCAzODcuOTc3QzE1NS42NzkgMzkwLjIyMyAxNDUuNzA5IDM3NC43ODMgMTU0LjAzNSAzNjMuMTM1QzE3NS4wMzEgMzMzLjc1OCAyMDMuMjEzIDI5NC41NzQgMjAzLjIxMyAyOTQuNTc0QzIwNi4yMjQgMjkwLjQ0MSAyMTEuMDI5IDI4OCAyMTYuMTQgMjg4UzIyNi4wNTYgMjkwLjQ0MSAyMjkuMDY4IDI5NC41NzRMMjYxLjUyMyAzMzkuMDg2TDM1NC44MjggMTk5LjEyNUMzNTcuNzk1IDE5NC42NzIgMzYyLjc5MSAxOTIgMzY4LjE0IDE5MlMzNzguNDg2IDE5NC42NzIgMzgxLjQ1MyAxOTkuMTI1QzM4MS40NTMgMTk5LjEyNSA0NTQuMTcyIDMwOC45NjkgNDkwLjU1NiAzNjQuMjI1QzQ5OC4yNzUgMzc1Ljk0NyA0ODguMjg3IDM5MC44MTIgNDc0LjQzMyAzODguNTU3WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Panorama(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path opacity={.4} d="M578.207 66.057L578.199 66.059C409.773 116.586 230.227 116.586 61.801 66.059L61.793 66.057C30.996 56.816 0 79.879 0 112.031V431.969C0 464.121 30.996 487.184 61.793 477.943L61.801 477.941C230.227 427.414 409.773 427.414 578.199 477.941L578.207 477.943C609.004 487.184 640 464.121 640 431.969V112.031C640 79.879 609.004 56.816 578.207 66.057ZM128 224C110.328 224 96 209.672 96 192S110.328 160 128 160C145.676 160 160 174.328 160 192S145.676 224 128 224ZM474.293 388.557C423.361 380.264 371.789 376.045 320 376.045C269.553 376.045 219.32 380.088 169.678 387.977C155.539 390.223 145.568 374.783 153.895 363.135C174.891 333.758 203.072 294.574 203.072 294.574C206.084 290.441 210.889 288 216 288S225.916 290.441 228.928 294.574L261.383 339.086L354.688 199.125C357.654 194.672 362.65 192 368 192S378.346 194.672 381.312 199.125C381.312 199.125 454.031 308.969 490.416 364.225C498.135 375.947 488.146 390.812 474.293 388.557Z" />
            <path d="M474.433 388.557C423.502 380.264 371.929 376.045 320.14 376.045C269.693 376.045 219.461 380.088 169.818 387.977C155.679 390.223 145.709 374.783 154.035 363.135C175.031 333.758 203.213 294.574 203.213 294.574C206.224 290.441 211.029 288 216.14 288S226.056 290.441 229.068 294.574L261.523 339.086L354.828 199.125C357.795 194.672 362.791 192 368.14 192S378.486 194.672 381.453 199.125C381.453 199.125 454.172 308.969 490.556 364.225C498.275 375.947 488.287 390.812 474.433 388.557Z" />
        </Icon>
    </>
}