
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `person` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/person?s=duotone person}
 * @preview ![person](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE2MCA5NkMxODYuNTAxIDk2IDIwOC4wMDEgNzQuNSAyMDguMDAxIDQ4UzE4Ni41MDEgMCAxNjAgMFMxMTIgMjEuNSAxMTIgNDhTMTMzLjUgOTYgMTYwIDk2WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0zMTUuMTI2IDI3MS4wNDdMMjQ0LjU2MyAxNTguMDk0QzIzMi43ODIgMTM5LjI1IDIxMi40NjkgMTI4IDE5MC4yNSAxMjhIMTI5Ljc1QzEwNy41MzEgMTI4IDg3LjIxOCAxMzkuMjUgNzUuNDY4IDE1OC4wOTRMNC44NzMgMjcxLjA0N0MtNC41MDIgMjg2LjAzMSAwLjA2MSAzMDUuNzY2IDE1LjAzIDMxNS4xNDFDMzAuMDMgMzI0LjUxNiA0OS43OCAzMTkuOTUzIDU5LjEyNCAzMDQuOTUzTDg3Ljk5OSAyNTguNzcxVjQ4MEM4Ny45OTkgNDk3LjY3MiAxMDIuMzI1IDUxMiAxMTkuOTk5IDUxMlMxNTIgNDk3LjY3MiAxNTIgNDgwVjMzNkgxNjhWNDgwQzE2OCA0OTcuNjcyIDE4Mi4zMjYgNTEyIDIwMCA1MTJTMjMyLjAwMSA0OTcuNjcyIDIzMi4wMDEgNDgwVjI1OC43NTJMMjYwLjg3NiAzMDQuOTUzQzI2Ni45MzggMzE0LjY3MiAyNzcuMzc2IDMyMCAyODguMDMyIDMyMEMyOTMuODE0IDMyMCAyOTkuNjg5IDMxOC40MzggMzA0Ljk3IDMxNS4xNDFDMzE5LjkzOSAzMDUuNzY2IDMyNC41MDIgMjg2LjAzMSAzMTUuMTI2IDI3MS4wNDdaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Person(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path class={generic.secondary} d="M160 96C186.501 96 208.001 74.5 208.001 48S186.501 0 160 0S112 21.5 112 48S133.5 96 160 96Z" />
            <path d="M315.126 271.047L244.563 158.094C232.782 139.25 212.469 128 190.25 128H129.75C107.531 128 87.218 139.25 75.468 158.094L4.873 271.047C-4.502 286.031 0.061 305.766 15.03 315.141C30.03 324.516 49.78 319.953 59.124 304.953L87.999 258.771V480C87.999 497.672 102.325 512 119.999 512S152 497.672 152 480V336H168V480C168 497.672 182.326 512 200 512S232.001 497.672 232.001 480V258.752L260.876 304.953C266.938 314.672 277.376 320 288.032 320C293.814 320 299.689 318.438 304.97 315.141C319.939 305.766 324.502 286.031 315.126 271.047Z" />
        </Icon>
    </>
}