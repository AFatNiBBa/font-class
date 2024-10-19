
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `spinner-third` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/spinner-third?s=regular spinner-third}
 * @preview ![spinner-third](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OTYgMjU2QzQ5NiAyOTQuMjY2IDQ4Ni43ODEgMzMyLjMxMiA0NjkuMzEyIDM2Ni4wNjJDNDY1LjA2MiAzNzQuMzEyIDQ1Ni42NTYgMzc5LjAzMSA0NDcuOTY5IDM3OS4wMzFDNDQ0LjI4MSAzNzkuMDMxIDQ0MC41IDM3OC4xODcgNDM2Ljk2OSAzNzYuMzQ0QzQyNS4xODcgMzcwLjI1IDQyMC41OTQgMzU1Ljc4MSA0MjYuNjg3IDM0NEM0NDAuODQ0IDMxNi42NzIgNDQ4IDI4Ny4wNjIgNDQ4IDI1NkM0NDggMTUwLjEyNSAzNjEuODc1IDY0IDI1NiA2NEMyNDIuNzUgNjQgMjMyIDUzLjI1IDIzMiA0MFMyNDIuNzUgMTYgMjU2IDE2QzM4OC4zNDQgMTYgNDk2IDEyMy42NTYgNDk2IDI1NloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function SpinnerThird(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M496 256C496 294.266 486.781 332.312 469.312 366.062C465.062 374.312 456.656 379.031 447.969 379.031C444.281 379.031 440.5 378.187 436.969 376.344C425.187 370.25 420.594 355.781 426.687 344C440.844 316.672 448 287.062 448 256C448 150.125 361.875 64 256 64C242.75 64 232 53.25 232 40S242.75 16 256 16C388.344 16 496 123.656 496 256Z" />
        </Icon>
    </>
}