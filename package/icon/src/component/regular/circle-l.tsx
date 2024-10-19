
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-l` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-l?s=regular circle-l}
 * @preview ![circle-l](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjggMzM2SDIwOFYxNTJDMjA4IDEzOC43NSAxOTcuMjUgMTI4IDE4NCAxMjhTMTYwIDEzOC43NSAxNjAgMTUyVjM2MEMxNjAgMzczLjI1IDE3MC43NSAzODQgMTg0IDM4NEgzMjhDMzQxLjI1IDM4NCAzNTIgMzczLjI1IDM1MiAzNjBTMzQxLjI1IDMzNiAzMjggMzM2Wk0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUxIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ5IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTI1NiA0NDhDMTUwLjEzMSA0NDggNjQgMzYxLjg2OSA2NCAyNTZTMTUwLjEzMSA2NCAyNTYgNjRTNDQ4IDE1MC4xMzEgNDQ4IDI1NlMzNjEuODY5IDQ0OCAyNTYgNDQ4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CircleL(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M328 336H208V152C208 138.75 197.25 128 184 128S160 138.75 160 152V360C160 373.25 170.75 384 184 384H328C341.25 384 352 373.25 352 360S341.25 336 328 336ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 448C150.131 448 64 361.869 64 256S150.131 64 256 64S448 150.131 448 256S361.869 448 256 448Z" />
        </Icon>
    </>
}