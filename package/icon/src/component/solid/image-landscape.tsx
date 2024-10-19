
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `image-landscape` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/image-landscape?s=solid image-landscape}
 * @preview ![image-landscape](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MjggNjRINDhDMjEuNDkgNjQgMCA4NS40OSAwIDExMlY0MDBDMCA0MjYuNTEgMjEuNDkgNDQ4IDQ4IDQ0OEg1MjhDNTU0LjUxIDQ0OCA1NzYgNDI2LjUxIDU3NiA0MDBWMTEyQzU3NiA4NS40OSA1NTQuNTEgNjQgNTI4IDY0Wk0xNzUuOTg0IDE2MEMxOTMuNjYgMTYwIDIwNy45ODQgMTc0LjMyOCAyMDcuOTg0IDE5MlMxOTMuNjYgMjI0IDE3NS45ODQgMjI0QzE1OC4zMTIgMjI0IDE0My45ODQgMjA5LjY3MiAxNDMuOTg0IDE5MlMxNTguMzEyIDE2MCAxNzUuOTg0IDE2MFpNNDQ2LjEwOSAzNzUuNTUxQzQ0My4zMiAzODAuNzU0IDQzNy44OTggMzg0IDQzMiAzODRIMTQ0QzEzNy45NzcgMzg0IDEzMi40NjkgMzgwLjYyMSAxMjkuNzM4IDM3NS4yNUMxMjcuMDA4IDM2OS44ODMgMTI3LjUyMyAzNjMuNDM4IDEzMS4wNyAzNTguNTc0TDIwMS4wNyAyNjIuNTc0QzIwNC4wODYgMjU4LjQ0MSAyMDguODkxIDI1NiAyMTQgMjU2QzIxOS4xMDkgMjU2IDIyMy45MTQgMjU4LjQ0MSAyMjYuOTMgMjYyLjU3NEwyNDkuMjgxIDI5My4yMzRMMzEyLjAyMyAxOTkuMTI1QzMxNC45ODggMTk0LjY3MiAzMTkuOTg0IDE5MiAzMjUuMzM2IDE5MkMzMzAuNjg0IDE5MiAzMzUuNjggMTk0LjY3MiAzMzguNjQ4IDE5OS4xMjVMNDQ1LjMxMiAzNTkuMTI1QzQ0OC41ODYgMzY0LjAzNSA0NDguODkxIDM3MC4zNDggNDQ2LjEwOSAzNzUuNTUxWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ImageLandscape(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M528 64H48C21.49 64 0 85.49 0 112V400C0 426.51 21.49 448 48 448H528C554.51 448 576 426.51 576 400V112C576 85.49 554.51 64 528 64ZM175.984 160C193.66 160 207.984 174.328 207.984 192S193.66 224 175.984 224C158.312 224 143.984 209.672 143.984 192S158.312 160 175.984 160ZM446.109 375.551C443.32 380.754 437.898 384 432 384H144C137.977 384 132.469 380.621 129.738 375.25C127.008 369.883 127.523 363.438 131.07 358.574L201.07 262.574C204.086 258.441 208.891 256 214 256C219.109 256 223.914 258.441 226.93 262.574L249.281 293.234L312.023 199.125C314.988 194.672 319.984 192 325.336 192C330.684 192 335.68 194.672 338.648 199.125L445.312 359.125C448.586 364.035 448.891 370.348 446.109 375.551Z" />
        </Icon>
    </>
}