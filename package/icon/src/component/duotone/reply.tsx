
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `reply` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/reply?s=duotone reply}
 * @preview ![reply](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTIyNCAxMzYuMDY0QzM4NC42MjYgMTM3LjkwNyA1MTIuMDAyIDE3MC4wOTUgNTEyLjAwMiAzMjIuMzI5QzUxMi4wMDIgMzgzLjc2NyA0NzIuNDA4IDQ0NC42NDIgNDI4LjY1OCA0NzYuNDU0QzQxNS4wMDEgNDg2LjM5MiAzOTUuNTY0IDQ3My45MjMgNDAwLjU5NSA0NTcuODI5QzQ0NS45MzkgMzEyLjgxNCAzNzkuMDk1IDI3NC4zMTQgMjI0IDI3Mi4wNzlWMTM2LjA2NFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNOC4zMDkgMTg5Ljg0NUwxODQuMzEgMzcuODQ1QzE5OS43MTYgMjQuNTQ4IDIyMy45OTggMzUuMzQ1IDIyMy45OTggNTYuMDE3VjM2MC4wMDFDMjIzLjk5OCAzODAuNzA0IDE5OS42ODUgMzkxLjQ1NCAxODQuMzEgMzc4LjE1N0w4LjMwOSAyMjYuMTU3Qy0yLjc1NCAyMTYuNTk1IC0yLjc4NSAxOTkuNDA3IDguMzA5IDE4OS44NDVaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Reply(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M224 136.064C384.626 137.907 512.002 170.095 512.002 322.329C512.002 383.767 472.408 444.642 428.658 476.454C415.001 486.392 395.564 473.923 400.595 457.829C445.939 312.814 379.095 274.314 224 272.079V136.064Z" />
            <path d="M8.309 189.845L184.31 37.845C199.716 24.548 223.998 35.345 223.998 56.017V360.001C223.998 380.704 199.685 391.454 184.31 378.157L8.309 226.157C-2.754 216.595 -2.785 199.407 8.309 189.845Z" />
        </Icon>
    </>
}