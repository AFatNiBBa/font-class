
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `circle-arrow-up-left` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-arrow-up-left?s=regular circle-arrow-up-left}
 * @preview ![circle-arrow-up-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjUuOTM4IDE5MkgzMjMuMjk3QzMzNi41NDcgMTkyIDM0Ny4yOTcgMTgxLjI1IDM0Ny4yOTcgMTY4UzMzNi41NDcgMTQ0IDMyMy4yOTcgMTQ0SDE2OEMxNTQuNzUgMTQ0IDE0NCAxNTQuNzUgMTQ0IDE2OFYzMjMuMjgxQzE0NCAzMzYuNTMxIDE1NC43NSAzNDcuMjgxIDE2OCAzNDcuMjgxUzE5MiAzMzYuNTMxIDE5MiAzMjMuMjgxVjIyNS45MzhMMzI3LjAzMSAzNjAuOTY5QzMzMS43MTkgMzY1LjY1NiAzMzcuODU5IDM2OCAzNDQgMzY4UzM1Ni4yODEgMzY1LjY1NiAzNjAuOTY5IDM2MC45NjlDMzcwLjM0NCAzNTEuNTk0IDM3MC4zNDQgMzM2LjQwNiAzNjAuOTY5IDMyNy4wMzFMMjI1LjkzOCAxOTJaTTI1NiAxNkMxMjMuNDUxIDE2IDE2IDEyMy40NTMgMTYgMjU2UzEyMy40NTEgNDk2IDI1NiA0OTZTNDk2IDM4OC41NDcgNDk2IDI1NlMzODguNTQ5IDE2IDI1NiAxNlpNMjU2IDQ0OEMxNTAuMTMxIDQ0OCA2NCAzNjEuODY3IDY0IDI1NlMxNTAuMTMxIDY0IDI1NiA2NFM0NDggMTUwLjEzMyA0NDggMjU2UzM2MS44NjkgNDQ4IDI1NiA0NDhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CircleArrowUpLeft(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M225.938 192H323.297C336.547 192 347.297 181.25 347.297 168S336.547 144 323.297 144H168C154.75 144 144 154.75 144 168V323.281C144 336.531 154.75 347.281 168 347.281S192 336.531 192 323.281V225.938L327.031 360.969C331.719 365.656 337.859 368 344 368S356.281 365.656 360.969 360.969C370.344 351.594 370.344 336.406 360.969 327.031L225.938 192ZM256 16C123.451 16 16 123.453 16 256S123.451 496 256 496S496 388.547 496 256S388.549 16 256 16ZM256 448C150.131 448 64 361.867 64 256S150.131 64 256 64S448 150.133 448 256S361.869 448 256 448Z" />
        </Icon>
    </>
}