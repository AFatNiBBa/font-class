
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `weight-hanging` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/weight-hanging?s=duotone weight-hanging}
 * @preview ![weight-hanging](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE2NS44NzUgMTI4QzE2Mi4yNSAxMTggMTYwIDEwNy4yNSAxNjAgOTZDMTYwIDQzIDIwMi45OTkgMCAyNTYgMFMzNTIgNDMgMzUyIDk2QzM1MiAxMDcuMjUgMzQ5Ljc1IDExOCAzNDYuMTI1IDEyOEgyNTZDMjczLjYyNiAxMjggMjg4IDExMy42MjUgMjg4IDk2UzI3My42MjYgNjQgMjU2IDY0UzIyNCA3OC4zNzUgMjI0IDk2UzIzOC4zNzQgMTI4IDI1NiAxMjhIMTY1Ljg3NVoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNDY0LjAxMiA1MTJINDcuOTg5QzE2LjM2MiA1MTIgLTYuNjQgNDc5LjEyNSAxLjczNSA0NDUuODc1TDc0Ljc0MSAxNTMuNzVDNzguNDkxIDEzOC41IDkxLjI0MSAxMjggMTA1LjYxOCAxMjhINDA2LjM4M0M0MjAuNzYgMTI4IDQzMy41MSAxMzguNSA0MzcuMjYgMTUzLjc1TDUxMC4yNjYgNDQ1Ljg3NUM1MTguNjQxIDQ3OS4xMjUgNDk1LjYzOSA1MTIgNDY0LjAxMiA1MTJaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function WeightHanging(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M165.875 128C162.25 118 160 107.25 160 96C160 43 202.999 0 256 0S352 43 352 96C352 107.25 349.75 118 346.125 128H256C273.626 128 288 113.625 288 96S273.626 64 256 64S224 78.375 224 96S238.374 128 256 128H165.875Z" />
            <path d="M464.012 512H47.989C16.362 512 -6.64 479.125 1.735 445.875L74.741 153.75C78.491 138.5 91.241 128 105.618 128H406.383C420.76 128 433.51 138.5 437.26 153.75L510.266 445.875C518.641 479.125 495.639 512 464.012 512Z" />
        </Icon>
    </>
}