
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `do-not-enter` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/do-not-enter?s=regular do-not-enter}
 * @preview ![do-not-enter](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUxIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ5IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTI1NiA0NDhDMTUwLjEzMSA0NDggNjQgMzYxLjg2OSA2NCAyNTZTMTUwLjEzMSA2NCAyNTYgNjRTNDQ4IDE1MC4xMzEgNDQ4IDI1NlMzNjEuODY5IDQ0OCAyNTYgNDQ4Wk0zNzYgMjA4SDEzNkMxMjIuNzQ2IDIwOCAxMTIgMjE4Ljc0NiAxMTIgMjMyVjI4MEMxMTIgMjkzLjI1NCAxMjIuNzQ2IDMwNCAxMzYgMzA0SDM3NkMzODkuMjU2IDMwNCA0MDAgMjkzLjI1NCA0MDAgMjgwVjIzMkM0MDAgMjE4Ljc0NiAzODkuMjU2IDIwOCAzNzYgMjA4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function DoNotEnter(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 448C150.131 448 64 361.869 64 256S150.131 64 256 64S448 150.131 448 256S361.869 448 256 448ZM376 208H136C122.746 208 112 218.746 112 232V280C112 293.254 122.746 304 136 304H376C389.256 304 400 293.254 400 280V232C400 218.746 389.256 208 376 208Z" />
        </Icon>
    </>
}