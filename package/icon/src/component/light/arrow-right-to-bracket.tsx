
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `arrow-right-to-bracket` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-right-to-bracket?s=light arrow-right-to-bracket}
 * @preview ![arrow-right-to-bracket](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNTIgMjU2QzM1MiAyNTEuOTA2IDM1MC40MzggMjQ3LjgxMiAzNDcuMzEyIDI0NC42ODhMMjAzLjMxMiAxMDAuNjg4QzE5Ny4wNjIgOTQuNDM4IDE4Ni45MzcgOTQuNDM4IDE4MC42ODggMTAwLjY4OFMxNzQuNDM4IDExNy4wNjMgMTgwLjY4OCAxMjMuMzEyTDI5Ny4zNzUgMjQwSDE2QzcuMTU2IDI0MCAwIDI0Ny4xNTYgMCAyNTZTNy4xNTYgMjcyIDE2IDI3MkgyOTcuMzc1TDE4MC42ODggMzg4LjY4OEMxNzQuNDM4IDM5NC45MzggMTc0LjQzOCA0MDUuMDYzIDE4MC42ODggNDExLjMxMlMxOTcuMDYzIDQxNy41NjIgMjAzLjMxMiA0MTEuMzEyTDM0Ny4zMTIgMjY3LjMxMkMzNTAuNDM4IDI2NC4xODggMzUyIDI2MC4wOTQgMzUyIDI1NlpNNDMyIDMySDMzNkMzMjcuMTU2IDMyIDMyMCAzOS4xNTYgMzIwIDQ4UzMyNy4xNTYgNjQgMzM2IDY0SDQzMkM0NTguNDY5IDY0IDQ4MCA4NS41MzEgNDgwIDExMlY0MDBDNDgwIDQyNi40NjkgNDU4LjQ2OSA0NDggNDMyIDQ0OEgzMzZDMzI3LjE1NiA0NDggMzIwIDQ1NS4xNTYgMzIwIDQ2NFMzMjcuMTU2IDQ4MCAzMzYgNDgwSDQzMkM0NzYuMTI1IDQ4MCA1MTIgNDQ0LjEyNSA1MTIgNDAwVjExMkM1MTIgNjcuODc1IDQ3Ni4xMjUgMzIgNDMyIDMyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ArrowRightToBracket(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M352 256C352 251.906 350.438 247.812 347.312 244.688L203.312 100.688C197.062 94.438 186.937 94.438 180.688 100.688S174.438 117.063 180.688 123.312L297.375 240H16C7.156 240 0 247.156 0 256S7.156 272 16 272H297.375L180.688 388.688C174.438 394.938 174.438 405.063 180.688 411.312S197.063 417.562 203.312 411.312L347.312 267.312C350.438 264.188 352 260.094 352 256ZM432 32H336C327.156 32 320 39.156 320 48S327.156 64 336 64H432C458.469 64 480 85.531 480 112V400C480 426.469 458.469 448 432 448H336C327.156 448 320 455.156 320 464S327.156 480 336 480H432C476.125 480 512 444.125 512 400V112C512 67.875 476.125 32 432 32Z" />
        </Icon>
    </>
}