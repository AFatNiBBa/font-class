
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `circle-xmark` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-xmark?s=regular circle-xmark}
 * @preview ![circle-xmark](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUxIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ5IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTI1NiA0NDhDMTUwLjEzMSA0NDggNjQgMzYxLjg2OSA2NCAyNTZTMTUwLjEzMSA2NCAyNTYgNjRTNDQ4IDE1MC4xMzEgNDQ4IDI1NlMzNjEuODY5IDQ0OCAyNTYgNDQ4Wk0zMzYuOTY5IDE3NS4wMzFDMzI3LjU5NCAxNjUuNjU2IDMxMi40MDYgMTY1LjY1NiAzMDMuMDMxIDE3NS4wMzFMMjU2IDIyMi4wNjJMMjA4Ljk2OSAxNzUuMDMxQzE5OS41OTQgMTY1LjY1NiAxODQuNDA2IDE2NS42NTYgMTc1LjAzMSAxNzUuMDMxUzE2NS42NTYgMTk5LjU5NCAxNzUuMDMxIDIwOC45NjlMMjIyLjA2MiAyNTUuOTk4TDE3NS4wMzEgMzAzLjAyOUMxNjUuNjU2IDMxMi40MDQgMTY1LjY1NiAzMjcuNTkyIDE3NS4wMzEgMzM2Ljk2N0MxODQuNDA0IDM0Ni4zNCAxOTkuNTg4IDM0Ni4zNDggMjA4Ljk2OSAzMzYuOTY3TDI1NiAyODkuOTM2TDMwMy4wMzEgMzM2Ljk2N0MzMTIuNDA0IDM0Ni4zNCAzMjcuNTg4IDM0Ni4zNDggMzM2Ljk2OSAzMzYuOTY3QzM0Ni4zNDQgMzI3LjU5MiAzNDYuMzQ0IDMxMi40MDQgMzM2Ljk2OSAzMDMuMDI5TDI4OS45MzggMjU1Ljk5OEwzMzYuOTY5IDIwOC45NjlDMzQ2LjM0NCAxOTkuNTk0IDM0Ni4zNDQgMTg0LjQwNiAzMzYuOTY5IDE3NS4wMzFaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CircleXmark(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 448C150.131 448 64 361.869 64 256S150.131 64 256 64S448 150.131 448 256S361.869 448 256 448ZM336.969 175.031C327.594 165.656 312.406 165.656 303.031 175.031L256 222.062L208.969 175.031C199.594 165.656 184.406 165.656 175.031 175.031S165.656 199.594 175.031 208.969L222.062 255.998L175.031 303.029C165.656 312.404 165.656 327.592 175.031 336.967C184.404 346.34 199.588 346.348 208.969 336.967L256 289.936L303.031 336.967C312.404 346.34 327.588 346.348 336.969 336.967C346.344 327.592 346.344 312.404 336.969 303.029L289.938 255.998L336.969 208.969C346.344 199.594 346.344 184.406 336.969 175.031Z" />
        </Icon>
    </>
}