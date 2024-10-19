
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `diagram-venn` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-venn?s=duotone diagram-venn}
 * @preview ![diagram-venn](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1NiAyNTZDMjU2IDIwMy45MzQgMjgxLjM3NSAxNTguMDUxIDMyMCAxMjguODE0QzMwMS4zMzYgMTE0LjY4OCAyNzkuODYzIDEwNC4xMDcgMjU2LjExOSA5OS4yNDhDMjE2LjUgMTM5LjY1MiAxOTIgMTk0Ljk0MSAxOTIgMjU2UzIxNi41MDIgMzcyLjM0NiAyNTYuMTIxIDQxMi43NTJDMjc5Ljg2NSA0MDcuODk1IDMwMS4zMzYgMzk3LjMxMiAzMjAgMzgzLjE4NkMyODEuMzc1IDM1My45NDkgMjU2IDMwOC4wNjYgMjU2IDI1NlpNNDE2IDMyQzM4MS41OTQgMzIgMzQ5LjEyOSAzOS45ODQgMzIwIDUzLjg0NkMzNDMuODMyIDY1LjE4NiAzNjUuMzg5IDgwLjQ2NyAzODMuNjc4IDk5LjA3QzQyMy40MiAxMzkuNDggNDQ4IDE5NC44NCA0NDggMjU2QzQ0OCAzMTguOTc3IDQyMS42OTcgMzc1LjU0NSAzNzkuODI4IDQxNi4yMDdDMzcyLjAyOSA0MjMuNzgxIDM2My44NzUgNDMwLjk4OCAzNTUuMDMxIDQzNy4zNDZDMzU0LjYyMyA0MzcuNjQxIDM1NC4yNjggNDM3Ljk5OCAzNTMuODU3IDQzOC4yOTFDMzUzLjg2MSA0MzguMjkxIDM1My44NjMgNDM4LjI5MyAzNTMuODY3IDQzOC4yOTNDMzQzLjIyNSA0NDUuODM4IDMzMS44OTggNDUyLjQ5MiAzMjAgNDU4LjE1NEMzNDkuMTI5IDQ3Mi4wMTYgMzgxLjU5NCA0ODAgNDE2IDQ4MEM1MzkuNzEzIDQ4MCA2NDAgMzc5LjcxMSA2NDAgMjU2UzUzOS43MTMgMzIgNDE2IDMyWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0yMjQgMzJDMTAwLjI4OSAzMiAwIDEzMi4yODkgMCAyNTZTMTAwLjI4OSA0ODAgMjI0IDQ4MEMzNDcuNzEzIDQ4MCA0NDggMzc5LjcxMSA0NDggMjU2UzM0Ny43MTMgMzIgMjI0IDMyWk0yNTcuNjE3IDI3MkgzODIuMzgzQzM4MC42NzggMjg4Ljg1NyAzNzYuOTg0IDMwNS4wOSAzNzAuNDM5IDMyMEgyNjkuNTYxQzI3NC42MjEgMzMxLjUzMyAyODEuMzAzIDM0Mi4wNzQgMjg4LjgxNCAzNTJIMzUxLjE4NkMzMjEuOTQ5IDM5MC42MjUgMjc2LjA2NiA0MTYgMjI0IDQxNkMxMzUuNzc1IDQxNiA2NCAzNDQuMjI1IDY0IDI1NlMxMzUuNzc1IDk2IDIyNCA5NkMyNzYuMDY2IDk2IDMyMS45NDkgMTIxLjM3NSAzNTEuMTg2IDE2MEgyODguODE0QzI4MS4zMDMgMTY5LjkyNiAyNzQuNjIxIDE4MC40NjcgMjY5LjU2MSAxOTJIMzcwLjQzOUMzNzYuOTg0IDIwNi45MSAzODAuNjc4IDIyMy4xNDMgMzgyLjM4MyAyNDBIMjU3LjYxN0MyNTcuMDc2IDI0NS4zMzggMjU2IDI1MC41MjEgMjU2IDI1NlMyNTcuMDc2IDI2Ni42NjIgMjU3LjYxNyAyNzJaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function DiagramVenn(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path class={generic.secondary} d="M256 256C256 203.934 281.375 158.051 320 128.814C301.336 114.688 279.863 104.107 256.119 99.248C216.5 139.652 192 194.941 192 256S216.502 372.346 256.121 412.752C279.865 407.895 301.336 397.312 320 383.186C281.375 353.949 256 308.066 256 256ZM416 32C381.594 32 349.129 39.984 320 53.846C343.832 65.186 365.389 80.467 383.678 99.07C423.42 139.48 448 194.84 448 256C448 318.977 421.697 375.545 379.828 416.207C372.029 423.781 363.875 430.988 355.031 437.346C354.623 437.641 354.268 437.998 353.857 438.291C353.861 438.291 353.863 438.293 353.867 438.293C343.225 445.838 331.898 452.492 320 458.154C349.129 472.016 381.594 480 416 480C539.713 480 640 379.711 640 256S539.713 32 416 32Z" />
            <path d="M224 32C100.289 32 0 132.289 0 256S100.289 480 224 480C347.713 480 448 379.711 448 256S347.713 32 224 32ZM257.617 272H382.383C380.678 288.857 376.984 305.09 370.439 320H269.561C274.621 331.533 281.303 342.074 288.814 352H351.186C321.949 390.625 276.066 416 224 416C135.775 416 64 344.225 64 256S135.775 96 224 96C276.066 96 321.949 121.375 351.186 160H288.814C281.303 169.926 274.621 180.467 269.561 192H370.439C376.984 206.91 380.678 223.143 382.383 240H257.617C257.076 245.338 256 250.521 256 256S257.076 266.662 257.617 272Z" />
        </Icon>
    </>
}