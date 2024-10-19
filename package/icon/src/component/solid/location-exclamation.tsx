
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `location-exclamation` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/location-exclamation?s=solid location-exclamation}
 * @preview ![location-exclamation](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xOTIgMEM4Ni4zNzUgMCAwIDg2LjM2OSAwIDE5MS45ODhDMCAyNjguNzMyIDI1LjYyNSAyOTEuMjMyIDE3Mi43NSA1MDIuMzQ0QzE4Mi4zNzUgNTE1LjIxOSAyMDEuNjI1IDUxNS4yMTkgMjExLjI1IDUwMi4zNDRDMzU4LjM3NSAyOTEuMjMyIDM4NCAyNjguNzMyIDM4NCAxOTEuOTg4QzM4NCA4Ni4zNjkgMjk3LjYyNSAwIDE5MiAwWk0xNjggMTA0QzE2OCA5MC43NSAxNzguNzUgODAgMTkyIDgwUzIxNiA5MC43NSAyMTYgMTA0VjIxNkMyMTYgMjI5LjI1IDIwNS4yNSAyNDAgMTkyIDI0MFMxNjggMjI5LjI1IDE2OCAyMTZWMTA0Wk0xOTIgMzM2QzE3NC4zMjggMzM2IDE2MCAzMjEuNjcyIDE2MCAzMDRDMTYwIDI4Ni4zMjYgMTc0LjMyOCAyNzIgMTkyIDI3MlMyMjQgMjg2LjMyNiAyMjQgMzA0QzIyNCAzMjEuNjcyIDIwOS42NzIgMzM2IDE5MiAzMzZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function LocationExclamation(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M192 0C86.375 0 0 86.369 0 191.988C0 268.732 25.625 291.232 172.75 502.344C182.375 515.219 201.625 515.219 211.25 502.344C358.375 291.232 384 268.732 384 191.988C384 86.369 297.625 0 192 0ZM168 104C168 90.75 178.75 80 192 80S216 90.75 216 104V216C216 229.25 205.25 240 192 240S168 229.25 168 216V104ZM192 336C174.328 336 160 321.672 160 304C160 286.326 174.328 272 192 272S224 286.326 224 304C224 321.672 209.672 336 192 336Z" />
        </Icon>
    </>
}