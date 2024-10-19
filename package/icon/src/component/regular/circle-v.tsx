
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-v` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-v?s=regular circle-v}
 * @preview ![circle-v](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNzAuNzM0IDE0Ni41MzFDMzU4Ljg3NSAxNDAuNjQxIDM0NC40NjkgMTQ1LjQwNiAzMzguNTMxIDE1Ny4yNjZMMjU2IDMyMi4zMjhMMTczLjQ2OSAxNTcuMjY2QzE2Ny41NDcgMTQ1LjQwNiAxNTMuMTg4IDE0MC42NDEgMTQxLjI2NiAxNDYuNTMxQzEyOS40MDYgMTUyLjQ2OSAxMjQuNjA5IDE2Ni44NzUgMTMwLjUzMSAxNzguNzM0TDIzNC41MzEgMzg2LjczNEMyMzguNTk0IDM5NC44NTkgMjQ2LjkwNiA0MDAgMjU2IDQwMFMyNzMuNDA2IDM5NC44NTkgMjc3LjQ2OSAzODYuNzM0TDM4MS40NjkgMTc4LjczNEMzODcuMzkxIDE2Ni44NzUgMzgyLjU5NCAxNTIuNDY5IDM3MC43MzQgMTQ2LjUzMVpNMjU2IDE2QzEyMy40NTEgMTYgMTYgMTIzLjQ1MSAxNiAyNTZTMTIzLjQ1MSA0OTYgMjU2IDQ5NlM0OTYgMzg4LjU0OSA0OTYgMjU2UzM4OC41NDkgMTYgMjU2IDE2Wk0yNTYgNDQ4QzE1MC4xMzEgNDQ4IDY0IDM2MS44NjkgNjQgMjU2UzE1MC4xMzEgNjQgMjU2IDY0UzQ0OCAxNTAuMTMxIDQ0OCAyNTZTMzYxLjg2OSA0NDggMjU2IDQ0OFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CircleV(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M370.734 146.531C358.875 140.641 344.469 145.406 338.531 157.266L256 322.328L173.469 157.266C167.547 145.406 153.188 140.641 141.266 146.531C129.406 152.469 124.609 166.875 130.531 178.734L234.531 386.734C238.594 394.859 246.906 400 256 400S273.406 394.859 277.469 386.734L381.469 178.734C387.391 166.875 382.594 152.469 370.734 146.531ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 448C150.131 448 64 361.869 64 256S150.131 64 256 64S448 150.131 448 256S361.869 448 256 448Z" />
        </Icon>
    </>
}