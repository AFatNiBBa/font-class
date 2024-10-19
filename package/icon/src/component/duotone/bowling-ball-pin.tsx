
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `bowling-ball-pin` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bowling-ball-pin?s=duotone bowling-ball-pin}
 * @preview ![bowling-ball-pin](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUyMi4wNjggMTYwLjAzOUM1MjcuNzQyIDEzNS4wNjYgNTQ0IDExMS43NjIgNTQ0IDcyLjA1NUM1NDQgMjQuMDU5IDUxMiAwLjA2MiA0ODAuMDA2IDBDNDQ4IC0wLjA2MiA0MTYgMjQuMDU5IDQxNiA3Mi4wNTVDNDE2IDExMS43NjIgNDMyLjI1OCAxMzUuMDY2IDQzNy45MzIgMTYwLjAzOUg1MjIuMDY4Wk01MjEuNjA0IDE5Mi4wMzlINDM4LjM5NkM0MzcuMTk3IDIwMS4wMDggNDM0LjkwMiAyMDkuOTY5IDQzMi4xOTkgMjE4LjkzOEM0NDIuMjUyIDI0NS40MSA0NDggMjc0IDQ0OCAzMDRDNDQ4IDM1Ny44MiA0MzAuMDY2IDQwNy4zMzYgNDAwLjE0NSA0NDcuMzY3QzQwNy4xODQgNDY1LjI3MyA0MTUuMzU1IDQ4MS4xNjggNDIyLjQyMiA0OTQuNzk3QzQyNy45MzIgNTA1LjQyMiA0MzguODIgNTEyIDQ1MC43ODkgNTEySDUwOS4zMDFDNTIxLjI5NyA1MTIgNTMyLjIwNSA1MDUuMzkxIDUzNy43MDMgNDk0LjcyN0M1NTMuNzQ4IDQ2My42MTcgNTc2IDQyMS4zNzUgNTc2IDM2OC4wMTZDNTc2IDMwOS4zNTkgNTI5LjQ0NSAyNTAuNjk1IDUyMS42MDQgMTkyLjAzOVpNMTIyLjY2OCAxOTJDMTA3LjkyIDE5MiA5NiAyMDMuODc1IDk2IDIxOC42NjRDOTYgMjMzLjQ2MSAxMDcuOTIgMjQ1LjMzNiAxMjIuNjY4IDI0NS4zMzZDMTM3LjQxNCAyNDUuMzM2IDE0OS4zMzQgMjMzLjQ2MSAxNDkuMzM0IDIxOC42NjRDMTQ5LjMzNCAyMDMuODc1IDEzNy40MTQgMTkyIDEyMi42NjggMTkyWk0xOTcuMzMyIDE0Ni42NjRDMTgyLjU4NiAxNDYuNjY0IDE3MC42NjYgMTU4LjUzOSAxNzAuNjY2IDE3My4zMzJTMTgyLjU4NiAyMDAgMTk3LjMzMiAyMDBDMjEyLjA4IDIwMCAyMjQgMTg4LjEyNSAyMjQgMTczLjMzMlMyMTIuMDggMTQ2LjY2NCAxOTcuMzMyIDE0Ni42NjRaTTE5Ny4zMzIgMjM0LjY2NEMxODIuNTg2IDIzNC42NjQgMTcwLjY2NiAyNDYuNTM5IDE3MC42NjYgMjYxLjMzMlMxODIuNTg2IDI4OCAxOTcuMzMyIDI4OEMyMTIuMDggMjg4IDIyNCAyNzYuMTI1IDIyNCAyNjEuMzMyUzIxMi4wOCAyMzQuNjY0IDE5Ny4zMzIgMjM0LjY2NFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNDM3LjkzMiAxNjAuMDM5TDQzOC4zOTYgMTkyLjAzOUg1MjEuNjA0TDUyMi4wNjggMTYwLjAzOUg0MzcuOTMyWk0yMDggOTZDOTMuMTMzIDk2IDAgMTg5LjA5OCAwIDMwNFM5My4xMzMgNTEyIDIwOCA1MTJTNDE2IDQxOC45MDIgNDE2IDMwNFMzMjIuODY3IDk2IDIwOCA5NlpNMTIyLjY2OCAyNDUuMzM2QzEwNy45MiAyNDUuMzM2IDk2IDIzMy40NjEgOTYgMjE4LjY2NEM5NiAyMDMuODc1IDEwNy45MiAxOTIgMTIyLjY2OCAxOTJDMTM3LjQxNCAxOTIgMTQ5LjMzNCAyMDMuODc1IDE0OS4zMzQgMjE4LjY2NEMxNDkuMzM0IDIzMy40NjEgMTM3LjQxNCAyNDUuMzM2IDEyMi42NjggMjQ1LjMzNlpNMTk3LjMzMiAyODhDMTgyLjU4NiAyODggMTcwLjY2NiAyNzYuMTI1IDE3MC42NjYgMjYxLjMzMlMxODIuNTg2IDIzNC42NjQgMTk3LjMzMiAyMzQuNjY0QzIxMi4wOCAyMzQuNjY0IDIyNCAyNDYuNTM5IDIyNCAyNjEuMzMyUzIxMi4wOCAyODggMTk3LjMzMiAyODhaTTE5Ny4zMzIgMjAwQzE4Mi41ODYgMjAwIDE3MC42NjYgMTg4LjEyNSAxNzAuNjY2IDE3My4zMzJTMTgyLjU4NiAxNDYuNjY0IDE5Ny4zMzIgMTQ2LjY2NEMyMTIuMDggMTQ2LjY2NCAyMjQgMTU4LjUzOSAyMjQgMTczLjMzMlMyMTIuMDggMjAwIDE5Ny4zMzIgMjAwWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function BowlingBallPin(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path class={generic.secondary} d="M522.068 160.039C527.742 135.066 544 111.762 544 72.055C544 24.059 512 0.062 480.006 0C448 -0.062 416 24.059 416 72.055C416 111.762 432.258 135.066 437.932 160.039H522.068ZM521.604 192.039H438.396C437.197 201.008 434.902 209.969 432.199 218.938C442.252 245.41 448 274 448 304C448 357.82 430.066 407.336 400.145 447.367C407.184 465.273 415.355 481.168 422.422 494.797C427.932 505.422 438.82 512 450.789 512H509.301C521.297 512 532.205 505.391 537.703 494.727C553.748 463.617 576 421.375 576 368.016C576 309.359 529.445 250.695 521.604 192.039ZM122.668 192C107.92 192 96 203.875 96 218.664C96 233.461 107.92 245.336 122.668 245.336C137.414 245.336 149.334 233.461 149.334 218.664C149.334 203.875 137.414 192 122.668 192ZM197.332 146.664C182.586 146.664 170.666 158.539 170.666 173.332S182.586 200 197.332 200C212.08 200 224 188.125 224 173.332S212.08 146.664 197.332 146.664ZM197.332 234.664C182.586 234.664 170.666 246.539 170.666 261.332S182.586 288 197.332 288C212.08 288 224 276.125 224 261.332S212.08 234.664 197.332 234.664Z" />
            <path d="M437.932 160.039L438.396 192.039H521.604L522.068 160.039H437.932ZM208 96C93.133 96 0 189.098 0 304S93.133 512 208 512S416 418.902 416 304S322.867 96 208 96ZM122.668 245.336C107.92 245.336 96 233.461 96 218.664C96 203.875 107.92 192 122.668 192C137.414 192 149.334 203.875 149.334 218.664C149.334 233.461 137.414 245.336 122.668 245.336ZM197.332 288C182.586 288 170.666 276.125 170.666 261.332S182.586 234.664 197.332 234.664C212.08 234.664 224 246.539 224 261.332S212.08 288 197.332 288ZM197.332 200C182.586 200 170.666 188.125 170.666 173.332S182.586 146.664 197.332 146.664C212.08 146.664 224 158.539 224 173.332S212.08 200 197.332 200Z" />
        </Icon>
    </>
}