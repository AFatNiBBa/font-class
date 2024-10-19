
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `text-slash` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/text-slash?s=duotone text-slash}
 * @preview ![text-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM1MiA0MTZIMzE4LjE2OEwzMzQuNDk2IDM1OC44NTVMMjY2LjUyMyAzMDUuNThMMjM0Ljk3NSA0MTZIMTkyQzE3NC4zMjggNDE2IDE2MCA0MzAuMzEyIDE2MCA0NDhTMTc0LjMyOCA0ODAgMTkyIDQ4MEgzNTJDMzY5LjY3MiA0ODAgMzg0IDQ2NS42ODggMzg0IDQ0OFMzNjkuNjcyIDQxNiAzNTIgNDE2Wk01MzYgMzJIMjAwQzE3Ny45MDYgMzIgMTYwIDQ5LjkwNiAxNjAgNzJWMTAwLjA5MkwyMjQuNjMxIDE1MC43NDhDMjMzLjc3NyAxNDMuNDIgMjQwIDEzMi42MzUgMjQwIDEyMFYxMTJIMzIxLjgzMkwyOTUuMDA0IDIwNS45MDRMMzYyLjk3NSAyNTkuMTc4TDQwNS4wMjUgMTEySDQ5NlYxMjBDNDk2IDE0Mi4wOTQgNTEzLjkwNiAxNjAgNTM2IDE2MFM1NzYgMTQyLjA5NCA1NzYgMTIwVjcyQzU3NiA0OS45MDYgNTU4LjA5NCAzMiA1MzYgMzJaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTYzNC44NzIgNTAyLjgwNUM2MjYuNzQ3IDUxMy4yMTEgNjExLjY4NSA1MTUuMDg2IDYwMS4xODUgNTA2Ljg4M0w5LjE4OSA0Mi44ODlDLTEuMjQ5IDM0LjcxNyAtMy4wNjEgMTkuNjI1IDUuMTI2IDkuMTg4QzkuODQ1IDMuMTU2IDE2LjkwNyAwIDI0LjAzMiAwQzI5LjE4OSAwIDM0LjQwNyAxLjY3MiAzOC44MTQgNS4xMDlMNjMwLjgxIDQ2OS4xMDJDNjQxLjI0NyA0NzcuMjczIDY0My4wNiA0OTIuMzY3IDYzNC44NzIgNTAyLjgwNVoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function TextSlash(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path opacity={.4} d="M352 416H318.168L334.496 358.855L266.523 305.58L234.975 416H192C174.328 416 160 430.312 160 448S174.328 480 192 480H352C369.672 480 384 465.688 384 448S369.672 416 352 416ZM536 32H200C177.906 32 160 49.906 160 72V100.092L224.631 150.748C233.777 143.42 240 132.635 240 120V112H321.832L295.004 205.904L362.975 259.178L405.025 112H496V120C496 142.094 513.906 160 536 160S576 142.094 576 120V72C576 49.906 558.094 32 536 32Z" />
            <path d="M634.872 502.805C626.747 513.211 611.685 515.086 601.185 506.883L9.189 42.889C-1.249 34.717 -3.061 19.625 5.126 9.188C9.845 3.156 16.907 0 24.032 0C29.189 0 34.407 1.672 38.814 5.109L630.81 469.102C641.247 477.273 643.06 492.367 634.872 502.805Z" />
        </Icon>
    </>
}