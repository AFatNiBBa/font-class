
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `right` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/right?s=duotone right}
 * @preview ![right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTIyNCAzMjBIMzJDMTQuMzI2IDMyMCAwIDMwNS42NzIgMCAyODhWMjI0QzAgMjA2LjMyNiAxNC4zMjYgMTkyIDMyIDE5MkgyMjRWMzIwWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik00NDggMjU2QzQ0OCAyNjQuMTg4IDQ0NC44NzUgMjcyLjM3NSA0MzguNjI1IDI3OC42MjVMMjc4LjYyNSA0MzguNjI1QzI2OS40NjkgNDQ3Ljc4MSAyNTUuNzE5IDQ1MC41MTYgMjQzLjc1IDQ0NS41NjJDMjMxLjc5NyA0NDAuNjA5IDIyNCA0MjguOTM4IDIyNCA0MTZWOTZDMjI0IDgzLjA2MiAyMzEuNzk3IDcxLjM5MSAyNDMuNzUgNjYuNDM4QzI1NS43MTkgNjEuNDg0IDI2OS40NjkgNjQuMjE5IDI3OC42MjUgNzMuMzc1TDQzOC42MjUgMjMzLjM3NUM0NDQuODc1IDIzOS42MjUgNDQ4IDI0Ny44MTIgNDQ4IDI1NloiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Right(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path class={generic.secondary} d="M224 320H32C14.326 320 0 305.672 0 288V224C0 206.326 14.326 192 32 192H224V320Z" />
            <path d="M448 256C448 264.188 444.875 272.375 438.625 278.625L278.625 438.625C269.469 447.781 255.719 450.516 243.75 445.562C231.797 440.609 224 428.938 224 416V96C224 83.062 231.797 71.391 243.75 66.438C255.719 61.484 269.469 64.219 278.625 73.375L438.625 233.375C444.875 239.625 448 247.812 448 256Z" />
        </Icon>
    </>
}