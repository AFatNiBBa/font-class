
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `whale` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/whale?s=duotone whale}
 * @preview ![whale](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ4MCAxMjguMDAxQzM4OC45MDYgMTI4LjAwMSAzMDMuMjgxIDE2My40NjkgMjM4Ljg3NSAyMjcuODc2TDE1My4yMTkgMzEwLjU2M0MxNDYuOTA2IDMxNi42NTcgMTM4LjU5NCAzMjAuMDAxIDEyOS44MTIgMzIwLjAwMUMxMTEuMTU2IDMyMC4wMDEgOTYgMzA0Ljg0NCA5NiAyODYuMTg4Qzk2IDI1NC42MzEgMTA4LjI3NyAyMjQuOTgzIDEzMC41ODIgMjAyLjY3MUwxNDAuMzkzIDE5Mi44NkwxOTcuMTM5IDIwNi40NzNDMjA3LjU2OCAyMDguNTkyIDIxOC40MzkgMjA1LjMyNSAyMjYuMDQxIDE5Ny43MjNMMjgzLjMxNiAxNDAuNDQ4QzI5Mi4zMzIgMTMxLjQzMiAyODcuNjQ4IDExNS45NjMgMjc1LjA5NiAxMTMuNDg5TDE5MS4zMjQgOTYuN0wxOTEuMzAxIDk2LjY3NkwxNzQuNTEgMTIuOTAzQzE3Mi4wMzUgMC4zNTIgMTU2LjU2OCAtNC4zMzMgMTQ3LjU1MyA0LjY4Mkw5MC4yNzcgNjEuOTU4QzgyLjY3NiA2OS41NjEgNzkuNDA2IDgwLjQzIDgxLjUyNyA5MC44NjJMOTUuMTM5IDE0Ny42MDZMNTcuMzcxIDE4NS4zNzJMNTcuMzc3IDE4NS4zNzRMNDkuMTI1IDE5My42MjZDMTcuNDM4IDIyNS4zMTMgMCAyNjcuNDM4IDAgMzEyLjI1MUMwIDQwNC43NTEgNzUuMjUgNDgwLjAwMSAxNjcuNzUgNDgwLjAwMUg1NDRDNTk2LjkzOCA0ODAuMDAxIDY0MCA0MzYuOTM4IDY0MCAzODQuMDAxVjI4OC4wMDFDNjQwIDE5OS43ODIgNTY4LjIxOSAxMjguMDAxIDQ4MCAxMjguMDAxWk0zODQgMzEyLjAwMUMzNzAuNzQ2IDMxMi4wMDEgMzYwIDMwMS4yNTQgMzYwIDI4OC4wMDFDMzYwIDI3NC43NDUgMzcwLjc0NiAyNjQuMDAxIDM4NCAyNjQuMDAxUzQwOCAyNzQuNzQ1IDQwOCAyODguMDAxQzQwOCAzMDEuMjU0IDM5Ny4yNTQgMzEyLjAwMSAzODQgMzEyLjAwMVoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMzg0IDMxMi4wMDFDMzcwLjc0NiAzMTIuMDAxIDM2MCAzMDEuMjU0IDM2MCAyODguMDAxQzM2MCAyNzQuNzQ1IDM3MC43NDYgMjY0LjAwMSAzODQgMjY0LjAwMVM0MDggMjc0Ljc0NSA0MDggMjg4LjAwMUM0MDggMzAxLjI1NCAzOTcuMjU0IDMxMi4wMDEgMzg0IDMxMi4wMDFaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Whale(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path class={generic.secondary} d="M480 128.001C388.906 128.001 303.281 163.469 238.875 227.876L153.219 310.563C146.906 316.657 138.594 320.001 129.812 320.001C111.156 320.001 96 304.844 96 286.188C96 254.631 108.277 224.983 130.582 202.671L140.393 192.86L197.139 206.473C207.568 208.592 218.439 205.325 226.041 197.723L283.316 140.448C292.332 131.432 287.648 115.963 275.096 113.489L191.324 96.7L191.301 96.676L174.51 12.903C172.035 0.352 156.568 -4.333 147.553 4.682L90.277 61.958C82.676 69.561 79.406 80.43 81.527 90.862L95.139 147.606L57.371 185.372L57.377 185.374L49.125 193.626C17.438 225.313 0 267.438 0 312.251C0 404.751 75.25 480.001 167.75 480.001H544C596.938 480.001 640 436.938 640 384.001V288.001C640 199.782 568.219 128.001 480 128.001ZM384 312.001C370.746 312.001 360 301.254 360 288.001C360 274.745 370.746 264.001 384 264.001S408 274.745 408 288.001C408 301.254 397.254 312.001 384 312.001Z" />
            <path d="M384 312.001C370.746 312.001 360 301.254 360 288.001C360 274.745 370.746 264.001 384 264.001S408 274.745 408 288.001C408 301.254 397.254 312.001 384 312.001Z" />
        </Icon>
    </>
}