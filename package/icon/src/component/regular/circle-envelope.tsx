
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `circle-envelope` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-envelope?s=regular circle-envelope}
 * @preview ![circle-envelope](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDQ5IDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTUxIDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTI1NiA0NDhDMTUwLjEzMSA0NDggNjQgMzYxLjg2NyA2NCAyNTZTMTUwLjEzMSA2NCAyNTYgNjRTNDQ4IDE1MC4xMzMgNDQ4IDI1NlMzNjEuODY5IDQ0OCAyNTYgNDQ4Wk0yNTYgMjg4QzI1My45NjkgMjg4IDI1MS45NjkgMjg3LjYyNSAyNTAuMDYyIDI4Ni44NTlMMTI4IDIzOC4wMzVWMzIwQzEyOCAzMzcuNjcyIDE0Mi4zMjYgMzUyIDE2MCAzNTJIMzUyQzM2OS42NzQgMzUyIDM4NCAzMzcuNjcyIDM4NCAzMjBWMjM4LjAzNUwyNjEuOTM4IDI4Ni44NTlDMjYwLjAzMSAyODcuNjI1IDI1OC4wMzEgMjg4IDI1NiAyODhaTTM1MiAxNjBIMTYwQzE0Mi4zMjYgMTYwIDEyOCAxNzQuMzI2IDEyOCAxOTJWMjAzLjU2NkwyNTYgMjU0Ljc2NkwzODQgMjAzLjU2NlYxOTJDMzg0IDE3NC4zMjYgMzY5LjY3NCAxNjAgMzUyIDE2MFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CircleEnvelope(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.451 16 16 123.449 16 256S123.451 496 256 496S496 388.551 496 256S388.549 16 256 16ZM256 448C150.131 448 64 361.867 64 256S150.131 64 256 64S448 150.133 448 256S361.869 448 256 448ZM256 288C253.969 288 251.969 287.625 250.062 286.859L128 238.035V320C128 337.672 142.326 352 160 352H352C369.674 352 384 337.672 384 320V238.035L261.938 286.859C260.031 287.625 258.031 288 256 288ZM352 160H160C142.326 160 128 174.326 128 192V203.566L256 254.766L384 203.566V192C384 174.326 369.674 160 352 160Z" />
        </Icon>
    </>
}