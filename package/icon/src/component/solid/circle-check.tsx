
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-check` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-check?s=solid circle-check}
 * @preview ![circle-check](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUxIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ5IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTM3MS44MTIgMjExLjgxMkwyNDMuODEyIDMzOS44MTJDMjM4LjM0NCAzNDUuMjgxIDIzMS4xNTYgMzQ4IDIyNCAzNDhTMjA5LjY1NiAzNDUuMjgxIDIwNC4xODggMzM5LjgxMkwxNDAuMTg4IDI3NS44MTJDMTI5LjI4MSAyNjQuODc1IDEyOS4yODEgMjQ3LjEyNSAxNDAuMTg4IDIzNi4xODhDMTUxLjEyNSAyMjUuMjUgMTY4Ljg3NSAyMjUuMjUgMTc5LjgxMiAyMzYuMTg4TDIyNCAyODAuNDA2TDMzMi4xODggMTcyLjE4OEMzNDMuMTI1IDE2MS4yNSAzNjAuODc1IDE2MS4yNSAzNzEuODEyIDE3Mi4xODhDMzgyLjcxOSAxODMuMTI1IDM4Mi43MTkgMjAwLjg3NSAzNzEuODEyIDIxMS44MTJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CircleCheck(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM371.812 211.812L243.812 339.812C238.344 345.281 231.156 348 224 348S209.656 345.281 204.188 339.812L140.188 275.812C129.281 264.875 129.281 247.125 140.188 236.188C151.125 225.25 168.875 225.25 179.812 236.188L224 280.406L332.188 172.188C343.125 161.25 360.875 161.25 371.812 172.188C382.719 183.125 382.719 200.875 371.812 211.812Z" />
        </Icon>
    </>
}