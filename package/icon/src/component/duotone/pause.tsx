
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `pause` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/pause?s=duotone pause}
 * @preview ![pause](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI3MiA2NEMyNDUuNDkgNjQgMjI0IDg1LjQ5IDIyNCAxMTJWNDAwQzIyNCA0MjYuNTEgMjQ1LjQ5IDQ0OCAyNzIgNDQ4UzMyMCA0MjYuNTEgMzIwIDQwMFYxMTJDMzIwIDg1LjQ5IDI5OC41MSA2NCAyNzIgNjRaTTQ4IDY0QzIxLjQ5IDY0IDAgODUuNDkgMCAxMTJWNDAwQzAgNDI2LjUxIDIxLjQ5IDQ0OCA0OCA0NDhTOTYgNDI2LjUxIDk2IDQwMFYxMTJDOTYgODUuNDkgNzQuNTEgNjQgNDggNjRaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Pause(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path opacity={.4} d="M272 64C245.49 64 224 85.49 224 112V400C224 426.51 245.49 448 272 448S320 426.51 320 400V112C320 85.49 298.51 64 272 64ZM48 64C21.49 64 0 85.49 0 112V400C0 426.51 21.49 448 48 448S96 426.51 96 400V112C96 85.49 74.51 64 48 64Z" />
        </Icon>
    </>
}