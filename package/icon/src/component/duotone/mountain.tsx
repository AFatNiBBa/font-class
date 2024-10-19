
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `mountain` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/mountain?s=duotone mountain}
 * @preview ![mountain](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTIwOC4xMjkgMjc1Ljc1NEwxMzcgMTgwLjkxNEwyMzIuMDU3IDMyQzI0Mi40NzUgMTUuNjcyIDI2OS43ODUgMTUuNjcyIDI4MC4yMDMgMzJMMzk0Ljk0NSAyMTEuNzU0SDI1Ni4xMjlMMjA4LjEyOSAyNzUuNzU0WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik01MDMuMTkzIDM5My43ODNDNTE0LjMwNiA0MTEuMTggNTE0Ljk0NSA0MzMuMTkzIDUwNC44NjEgNDUxLjIzNEM0OTQuOTI5IDQ2OC45NzMgNDc2LjA3OCA0ODAgNDU1LjY4NSA0ODBINTYuMzE0QzM1LjkyMSA0ODAgMTcuMDcyIDQ2OC45NzMgNy4xNCA0NTEuMjM0Qy0yLjk0NiA0MzMuMjA3IC0yLjMwNyA0MTEuMTkzIDguODA2IDM5My43ODNMMTM2Ljg3MSAxOTMuMTZMMjA4IDI4OEwyNTYgMjI0SDM5NC44MTZMNTAzLjE5MyAzOTMuNzgzWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Mountain(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M208.129 275.754L137 180.914L232.057 32C242.475 15.672 269.785 15.672 280.203 32L394.945 211.754H256.129L208.129 275.754Z" />
            <path d="M503.193 393.783C514.306 411.18 514.945 433.193 504.861 451.234C494.929 468.973 476.078 480 455.685 480H56.314C35.921 480 17.072 468.973 7.14 451.234C-2.946 433.207 -2.307 411.193 8.806 393.783L136.871 193.16L208 288L256 224H394.816L503.193 393.783Z" />
        </Icon>
    </>
}