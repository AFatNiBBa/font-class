
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-e` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-e?s=solid circle-e}
 * @preview ![circle-e](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUxIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ5IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTI5NiAyMzJDMzA5LjI1IDIzMiAzMjAgMjQyLjc1IDMyMCAyNTZTMzA5LjI1IDI4MCAyOTYgMjgwSDIwOFYzMzZIMzI4QzM0MS4yNSAzMzYgMzUyIDM0Ni43NSAzNTIgMzYwUzM0MS4yNSAzODQgMzI4IDM4NEgxODRDMTcwLjc1IDM4NCAxNjAgMzczLjI1IDE2MCAzNjBWMTUyQzE2MCAxMzguNzUgMTcwLjc1IDEyOCAxODQgMTI4SDMyOEMzNDEuMjUgMTI4IDM1MiAxMzguNzUgMzUyIDE1MlMzNDEuMjUgMTc2IDMyOCAxNzZIMjA4VjIzMkgyOTZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CircleE(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM296 232C309.25 232 320 242.75 320 256S309.25 280 296 280H208V336H328C341.25 336 352 346.75 352 360S341.25 384 328 384H184C170.75 384 160 373.25 160 360V152C160 138.75 170.75 128 184 128H328C341.25 128 352 138.75 352 152S341.25 176 328 176H208V232H296Z" />
        </Icon>
    </>
}