
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `link-slash` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/link-slash?s=duotone link-slash}
 * @preview ![link-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI2NSAzNzQuNTkyQzI5Mi42MDUgNDAyLjE5NyAzMjguNzg1IDQxNiAzNjQuOTY1IDQxNkMzNzYuOTQ5IDQxNiAzODguODA3IDQxMy45MTggNDAwLjQ3OSA0MTAuODg5TDIyNC4xNjYgMjcyLjY5OUMyMjMuNDYzIDMwOS41MDIgMjM2Ljg2OSAzNDYuNDYxIDI2NSAzNzQuNTkyWk0yMzMuNjM1IDM4Ny4zODFMMTk1LjY3NiA0MjUuMzRDMTgxLjA2MiA0MzkuOTUzIDE2MS42MzMgNDQ4IDE0MC45NjcgNDQ4QzEyMC4yOTkgNDQ4IDEwMC44NjcgNDM5Ljk1MyA4Ni4yNTQgNDI1LjMzOEM3MS42NDEgNDEwLjcyNSA2My41OTIgMzkxLjI5NSA2My41OTIgMzcwLjYyOVM3MS42NDEgMzMwLjUzMyA4Ni4yNTQgMzE1LjkyTDE3MS4wODIgMjMxLjA5NEwxMjAuMzQyIDE5MS4zMjZMNDEgMjcwLjY2NEMtMTQuMjA5IDMyNS44NzMgLTE0LjIwOSA0MTUuMzg1IDQxIDQ3MC41OTRDNjguNjA0IDQ5OC4xOTcgMTA0Ljc4NSA1MTIgMTQwLjk2NyA1MTJDMTc3LjE0NiA1MTIgMjEzLjMyNiA0OTguMTk3IDI0MC45MzIgNDcwLjU5NEwyODQuMjg3IDQyNy4yMzhDMjY5LjE3NiA0MTkuMjI3IDI1NC44MTYgNDA5LjY1OCAyNDIuMzc3IDM5Ny4yMTlDMjM5LjIzIDM5NC4wNzIgMjM2LjQ3OSAzOTAuNzAxIDIzMy42MzUgMzg3LjM4MVpNMjc0LjIyNSA5NkMyNDQuNjIzIDk2IDIxNS4yOTUgMTA1Ljc1MiAxOTAuMzkxIDEyNC4yM0wyNDMuOTQzIDE2Ni4yMDNDMjUzLjQgMTYyLjE3OCAyNjMuNjM3IDE2MCAyNzQuMjI1IDE2MEMyOTQuODkxIDE2MCAzMTQuMzIgMTY4LjA0OSAzMjguOTM0IDE4Mi42NjRDMzQzLjU0OSAxOTcuMjc3IDM1MS41OTYgMjE2LjcwNyAzNTEuNTk2IDIzNy4zNzNDMzUxLjU5NiAyNDEuNTM5IDM1MS4wMzkgMjQ1LjYwMiAzNTAuMzk2IDI0OS42MzlMNDAzLjgyIDI5MS41MTJDNDI1LjMwNyAyNDAuMjMgNDE1Ljk0MSAxNzkuMTYgMzc0LjE4OSAxMzcuNDA4QzM0Ni41ODQgMTA5LjgwMyAzMTAuNDA0IDk2IDI3NC4yMjUgOTZaTTU5OC4xODggNDEuNDA2QzU3MC41ODQgMTMuODAzIDUzNC40MDIgMCA0OTguMjIzIDBTNDI1Ljg2MyAxMy44MDMgMzk4LjI1OCA0MS40MDZMMzU0LjkwMiA4NC43NjJDMzcwLjAxNCA5Mi43NzMgMzg0LjM3MyAxMDIuMzQyIDM5Ni44MTIgMTE0Ljc4MUMzOTkuOTU5IDExNy45MjggNDAyLjcxMSAxMjEuMjk5IDQwNS41NTUgMTI0LjYxOUw0NDMuNTE0IDg2LjY2QzQ1OC4xMjcgNzIuMDQ3IDQ3Ny41NTcgNjQgNDk4LjIyMyA2NFM1MzguMzIgNzIuMDQ3IDU1Mi45MzQgODYuNjYyQzU2Ny41NDcgMTAxLjI3NSA1NzUuNTk2IDEyMC43MDUgNTc1LjU5NiAxNDEuMzcxUzU2Ny41NDcgMTgxLjQ2NyA1NTIuOTM0IDE5Ni4wOEw0MzMuOTE0IDMxNS4wOThMNDg0LjY1NCAzNTQuODY3TDU5OC4xODcgMjQxLjMzNkM2NTMuMzk2IDE4Ni4xMjcgNjUzLjM5NiA5Ni42MTUgNTk4LjE4OCA0MS40MDZaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTI0LjAzMiAwQzI5LjE4OSAwIDM0LjQwNyAxLjY3MiAzOC44MTQgNS4xMDlMNjMwLjgxMSA0NjkuMTAyQzY0MS4yNDkgNDc3LjI3NCA2NDMuMDYxIDQ5Mi4zNjcgNjM0Ljg3NCA1MDIuODA1QzYyNi43NDkgNTEzLjIxMSA2MTEuNjg2IDUxNS4wODYgNjAxLjE4NiA1MDYuODgzTDkuMTg5IDQyLjg5Qy0xLjI0OSAzNC43MTggLTMuMDYxIDE5LjYyNSA1LjEyNiA5LjE4N0M5Ljg0NSAzLjE1NiAxNi45MDcgMCAyNC4wMzIgMFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function LinkSlash(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path opacity={.4} d="M265 374.592C292.605 402.197 328.785 416 364.965 416C376.949 416 388.807 413.918 400.479 410.889L224.166 272.699C223.463 309.502 236.869 346.461 265 374.592ZM233.635 387.381L195.676 425.34C181.062 439.953 161.633 448 140.967 448C120.299 448 100.867 439.953 86.254 425.338C71.641 410.725 63.592 391.295 63.592 370.629S71.641 330.533 86.254 315.92L171.082 231.094L120.342 191.326L41 270.664C-14.209 325.873 -14.209 415.385 41 470.594C68.604 498.197 104.785 512 140.967 512C177.146 512 213.326 498.197 240.932 470.594L284.287 427.238C269.176 419.227 254.816 409.658 242.377 397.219C239.23 394.072 236.479 390.701 233.635 387.381ZM274.225 96C244.623 96 215.295 105.752 190.391 124.23L243.943 166.203C253.4 162.178 263.637 160 274.225 160C294.891 160 314.32 168.049 328.934 182.664C343.549 197.277 351.596 216.707 351.596 237.373C351.596 241.539 351.039 245.602 350.396 249.639L403.82 291.512C425.307 240.23 415.941 179.16 374.189 137.408C346.584 109.803 310.404 96 274.225 96ZM598.188 41.406C570.584 13.803 534.402 0 498.223 0S425.863 13.803 398.258 41.406L354.902 84.762C370.014 92.773 384.373 102.342 396.812 114.781C399.959 117.928 402.711 121.299 405.555 124.619L443.514 86.66C458.127 72.047 477.557 64 498.223 64S538.32 72.047 552.934 86.662C567.547 101.275 575.596 120.705 575.596 141.371S567.547 181.467 552.934 196.08L433.914 315.098L484.654 354.867L598.187 241.336C653.396 186.127 653.396 96.615 598.188 41.406Z" />
            <path d="M24.032 0C29.189 0 34.407 1.672 38.814 5.109L630.811 469.102C641.249 477.274 643.061 492.367 634.874 502.805C626.749 513.211 611.686 515.086 601.186 506.883L9.189 42.89C-1.249 34.718 -3.061 19.625 5.126 9.187C9.845 3.156 16.907 0 24.032 0Z" />
        </Icon>
    </>
}