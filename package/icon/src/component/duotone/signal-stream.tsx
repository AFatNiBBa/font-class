
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `signal-stream` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/signal-stream?s=duotone signal-stream}
 * @preview ![signal-stream](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTY0IDI1NkM2NCAyMDQuNDk2IDgwLjk4NCAxNTYuMDkgMTEzLjEyNSAxMTYuMDI3QzEyNC4xNzIgMTAyLjI0NiAxMjEuOTY5IDgyLjA5IDEwOC4xNzIgNzEuMDI3Qzk0LjQyMiA2MC4wNTkgNzQuMjgxIDYyLjIxNSA2My4xODcgNzUuOTY1QzIyLjQzOCAxMjYuNzc3IDAgMTkwLjcxNSAwIDI1NkMwIDMyMS4yODEgMjIuNDM4IDM4NS4yMTkgNjMuMTg4IDQzNi4wMzFDNjkuNTE2IDQ0My45MDYgNzguNzk3IDQ0OCA4OC4xNzIgNDQ4Qzk1LjIwMyA0NDggMTAyLjI2NiA0NDUuNjg4IDEwOC4xNzIgNDQwLjk2OUMxMjEuOTY5IDQyOS45MDYgMTI0LjE3MiA0MDkuNzUgMTEzLjEyNSAzOTUuOTY5QzgwLjk4NCAzNTUuOTA2IDY0IDMwNy41IDY0IDI1NlpNNTEyLjgxMiA3NS45NjVDNTAxLjcxOSA2Mi4xODQgNDgxLjU3OCA1OS45OTYgNDY3LjgyOCA3MS4wMjdDNDU0LjAzMSA4Mi4wOSA0NTEuODI4IDEwMi4yNDYgNDYyLjg3NSAxMTYuMDI3QzQ5NS4wMTYgMTU2LjA5IDUxMiAyMDQuNDk2IDUxMiAyNTZDNTEyIDMwNy41IDQ5NS4wMTYgMzU1LjkwNiA0NjIuODc1IDM5NS45NjlDNDUxLjgyOCA0MDkuNzUgNDU0LjAzMSA0MjkuOTA2IDQ2Ny44MjggNDQwLjk2OUM0NzMuNzM0IDQ0NS42ODggNDgwLjc5NyA0NDggNDg3LjgyOCA0NDhDNDk3LjIwMyA0NDggNTA2LjQ4NCA0NDMuOTA2IDUxMi44MTIgNDM2LjAzMUM1NTMuNTYyIDM4NS4yMTkgNTc2IDMyMS4yODEgNTc2IDI1NkM1NzYgMTkwLjcxNSA1NTMuNTYyIDEyNi43NzcgNTEyLjgxMiA3NS45NjVaTTM5Mi4yNTEgMTQ5Ljk3MkMzODIuMjg5IDE1OC43MjIgMzgxLjMwNCAxNzMuODc4IDM5MC4wNjEgMTgzLjg0N0M0MjUuMDMxIDIyMy42MjggNDI1LjAzMSAyODguMzc3IDM5MC4wNjEgMzI4LjE1OEMzODEuMzA0IDMzOC4xMjYgMzgyLjI4OSAzNTMuMjgyIDM5Mi4yNTEgMzYyLjAzMkMzOTYuODE4IDM2Ni4wMzIgNDAyLjQ2MyAzNjguMDAxIDQwOC4wOTQgMzY4LjAwMUM0MTQuNzcxIDM2OC4wMDEgNDIxLjQxOCAzNjUuMjUxIDQyNi4xNTcgMzU5Ljg0NUM0NzYuNDg0IDMwMi41OTUgNDc2LjQ4NCAyMDkuNDA5IDQyNi4xNTcgMTUyLjE2QzQxNy40MyAxNDIuMTkxIDQwMi4yNiAxNDEuMjIyIDM5Mi4yNTEgMTQ5Ljk3MlpNMTgzLjc0OSAxNDkuOTcyQzE3My43NTYgMTQxLjIyMiAxNTguNTg2IDE0Mi4yMjIgMTQ5Ljg0MyAxNTIuMTZDOTkuNTE2IDIwOS40MDkgOTkuNTE2IDMwMi41OTUgMTQ5Ljg0MyAzNTkuODQ1QzE1NC41ODIgMzY1LjI1MSAxNjEuMjI5IDM2OC4wMDEgMTY3LjkwNiAzNjguMDAxQzE3My41MjEgMzY4LjAwMSAxNzkuMTgyIDM2Ni4wMzIgMTgzLjc0OSAzNjIuMDMyQzE5My43MTEgMzUzLjI4MiAxOTQuNjk2IDMzOC4xMjYgMTg1LjkzOSAzMjguMTU4QzE1MC45NjkgMjg4LjM3NyAxNTAuOTY5IDIyMy42MjggMTg1LjkzOSAxODMuODQ3QzE5NC42OTYgMTczLjg3OCAxOTMuNzExIDE1OC43MjIgMTgzLjc0OSAxNDkuOTcyWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0yODggMjAwQzI1Ny4xMjUgMjAwIDIzMiAyMjUuMTI1IDIzMiAyNTZTMjU3LjEyNSAzMTIgMjg4IDMxMlMzNDQgMjg2Ljg3NSAzNDQgMjU2UzMxOC44NzUgMjAwIDI4OCAyMDBaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function SignalStream(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path class={generic.secondary} d="M64 256C64 204.496 80.984 156.09 113.125 116.027C124.172 102.246 121.969 82.09 108.172 71.027C94.422 60.059 74.281 62.215 63.187 75.965C22.438 126.777 0 190.715 0 256C0 321.281 22.438 385.219 63.188 436.031C69.516 443.906 78.797 448 88.172 448C95.203 448 102.266 445.688 108.172 440.969C121.969 429.906 124.172 409.75 113.125 395.969C80.984 355.906 64 307.5 64 256ZM512.812 75.965C501.719 62.184 481.578 59.996 467.828 71.027C454.031 82.09 451.828 102.246 462.875 116.027C495.016 156.09 512 204.496 512 256C512 307.5 495.016 355.906 462.875 395.969C451.828 409.75 454.031 429.906 467.828 440.969C473.734 445.688 480.797 448 487.828 448C497.203 448 506.484 443.906 512.812 436.031C553.562 385.219 576 321.281 576 256C576 190.715 553.562 126.777 512.812 75.965ZM392.251 149.972C382.289 158.722 381.304 173.878 390.061 183.847C425.031 223.628 425.031 288.377 390.061 328.158C381.304 338.126 382.289 353.282 392.251 362.032C396.818 366.032 402.463 368.001 408.094 368.001C414.771 368.001 421.418 365.251 426.157 359.845C476.484 302.595 476.484 209.409 426.157 152.16C417.43 142.191 402.26 141.222 392.251 149.972ZM183.749 149.972C173.756 141.222 158.586 142.222 149.843 152.16C99.516 209.409 99.516 302.595 149.843 359.845C154.582 365.251 161.229 368.001 167.906 368.001C173.521 368.001 179.182 366.032 183.749 362.032C193.711 353.282 194.696 338.126 185.939 328.158C150.969 288.377 150.969 223.628 185.939 183.847C194.696 173.878 193.711 158.722 183.749 149.972Z" />
            <path d="M288 200C257.125 200 232 225.125 232 256S257.125 312 288 312S344 286.875 344 256S318.875 200 288 200Z" />
        </Icon>
    </>
}