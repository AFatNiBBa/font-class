
import { Icon, generic } from "../../index";

/**
 * A component that renders the `plus` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/plus?s=duotone plus}
 * @preview ![plus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTIyNCA0NjRDMjAxLjkwNiA0NjQgMTg0IDQ0Ni4wOTQgMTg0IDQyNFY4OEMxODQgNjUuOTA2IDIwMS45MDYgNDggMjI0IDQ4UzI2NCA2NS45MDYgMjY0IDg4VjQyNEMyNjQgNDQ2LjA5NCAyNDYuMDk0IDQ2NCAyMjQgNDY0WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0zOTIgMjk2SDU2QzMzLjkwNiAyOTYgMTYgMjc4LjA5NCAxNiAyNTZTMzMuOTA2IDIxNiA1NiAyMTZIMzkyQzQxNC4wOTQgMjE2IDQzMiAyMzMuOTA2IDQzMiAyNTZTNDE0LjA5NCAyOTYgMzkyIDI5NloiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
const Plus: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M224 464C201.906 464 184 446.094 184 424V88C184 65.906 201.906 48 224 48S264 65.906 264 88V424C264 446.094 246.094 464 224 464Z" />
            <path d="M392 296H56C33.906 296 16 278.094 16 256S33.906 216 56 216H392C414.094 216 432 233.906 432 256S414.094 296 392 296Z" />
    </Icon>
);

export default Plus;