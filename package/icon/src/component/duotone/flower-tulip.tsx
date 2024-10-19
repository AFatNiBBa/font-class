
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `flower-tulip` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/flower-tulip?s=duotone flower-tulip}
 * @preview ![flower-tulip](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUxMS45MTQgMzM2Ljg3NUM1MDIuMDM3IDQzNSA0MDUuNjQ4IDUxMiAyODguMTMxIDUxMkgyMjMuODY5QzEwNi4zNTIgNTEyIDkuOTYzIDQzNSAwLjA4NiAzMzYuODc1Qy0wLjkxNCAzMjcuNzUgNi45NjMgMzIwIDE2LjA4OCAzMjBINjMuMzQ2QzEyNi4zNTUgMzIwIDE4My4yMzggMzQyLjI1IDIyMy45OTQgMzc3Ljg3NVYyNTZIMjg4LjAwNlYzNzcuODc1QzMyOC43NjIgMzQyLjI1IDM4NS42NDQgMzIwIDQ0OC42NTQgMzIwSDQ5NS45MTJDNTA1LjAzNyAzMjAgNTEyLjkxNCAzMjcuNzUgNTExLjkxNCAzMzYuODc1WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0yMjQuMDIgMjU2QzE1My4yNTkgMjU2IDk2IDE5OC43NSA5NiAxMjhWMzJMMTc2LjAxMiA4MEwyNTcuMTUgMEwzMzYuMDM3IDgwTDQxNi4wNDkgMzJWMTI4QzQxNi4wNDkgMTk4Ljc1IDM1OC43OSAyNTYgMjg4LjAyOSAyNTZIMjI0LjAyWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function FlowerTulip(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M511.914 336.875C502.037 435 405.648 512 288.131 512H223.869C106.352 512 9.963 435 0.086 336.875C-0.914 327.75 6.963 320 16.088 320H63.346C126.355 320 183.238 342.25 223.994 377.875V256H288.006V377.875C328.762 342.25 385.644 320 448.654 320H495.912C505.037 320 512.914 327.75 511.914 336.875Z" />
            <path d="M224.02 256C153.259 256 96 198.75 96 128V32L176.012 80L257.15 0L336.037 80L416.049 32V128C416.049 198.75 358.79 256 288.029 256H224.02Z" />
        </Icon>
    </>
}