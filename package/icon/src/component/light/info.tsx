
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `info` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/info?s=light info}
 * @preview ![info](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik05NiA5NkMxMTMuNjc0IDk2IDEyOCA4MS42NzQgMTI4IDY0UzExMy42NzQgMzIgOTYgMzJTNjQgNDYuMzI2IDY0IDY0Uzc4LjMyNiA5NiA5NiA5NlpNMTc2IDQ0OEgxMTJWMTc2QzExMiAxNjcuMTU2IDEwNC44NDQgMTYwIDk2IDE2MEg0OEMzOS4xNTYgMTYwIDMyIDE2Ny4xNTYgMzIgMTc2UzM5LjE1NiAxOTIgNDggMTkySDgwVjQ0OEgxNkM3LjE1NiA0NDggMCA0NTUuMTU2IDAgNDY0UzcuMTU2IDQ4MCAxNiA0ODBIMTc2QzE4NC44NDQgNDgwIDE5MiA0NzIuODQ0IDE5MiA0NjRTMTg0Ljg0NCA0NDggMTc2IDQ0OFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Info(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 192 512" {...props}>
            <path d="M96 96C113.674 96 128 81.674 128 64S113.674 32 96 32S64 46.326 64 64S78.326 96 96 96ZM176 448H112V176C112 167.156 104.844 160 96 160H48C39.156 160 32 167.156 32 176S39.156 192 48 192H80V448H16C7.156 448 0 455.156 0 464S7.156 480 16 480H176C184.844 480 192 472.844 192 464S184.844 448 176 448Z" />
        </Icon>
    </>
}