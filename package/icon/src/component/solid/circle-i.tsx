
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `circle-i` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-i?s=solid circle-i}
 * @preview ![circle-i](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUxIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ5IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTMyOCAzMzZDMzQxLjI1IDMzNiAzNTIgMzQ2Ljc1IDM1MiAzNjBTMzQxLjI1IDM4NCAzMjggMzg0SDE4NEMxNzAuNzUgMzg0IDE2MCAzNzMuMjUgMTYwIDM2MFMxNzAuNzUgMzM2IDE4NCAzMzZIMjMyVjE3NkgxODRDMTcwLjc1IDE3NiAxNjAgMTY1LjI1IDE2MCAxNTJTMTcwLjc1IDEyOCAxODQgMTI4SDMyOEMzNDEuMjUgMTI4IDM1MiAxMzguNzUgMzUyIDE1MlMzNDEuMjUgMTc2IDMyOCAxNzZIMjgwVjMzNkgzMjhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CircleI(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM328 336C341.25 336 352 346.75 352 360S341.25 384 328 384H184C170.75 384 160 373.25 160 360S170.75 336 184 336H232V176H184C170.75 176 160 165.25 160 152S170.75 128 184 128H328C341.25 128 352 138.75 352 152S341.25 176 328 176H280V336H328Z" />
        </Icon>
    </>
}