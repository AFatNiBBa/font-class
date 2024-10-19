
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `circle-arrow-down-right` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-arrow-down-right?s=light circle-arrow-down-right}
 * @preview ![circle-arrow-down-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yOTcuMTAyIDMxOS43MjdMMjA3Ljk1MyAzMjBDMTk5LjEwOSAzMjAuMDMxIDE5MS45NjkgMzI3LjIxOSAxOTIgMzM2LjAzMUMxOTIuMDMxIDM0NC44NzUgMTk5LjE4OCAzNTIgMjA4IDM1MkgyMDguMDQ3TDMzNi4wNDcgMzUxLjYyNUMzNDQuODU5IDM1MS41OTQgMzUyIDM0NC40MzggMzUyIDMzNS42MjVWMjA4QzM1MiAxOTkuMTU2IDM0NC44NDQgMTkyIDMzNiAxOTJTMzIwIDE5OS4xNTYgMzIwIDIwOFYyOTcuMzc1TDE4Ny4zMTIgMTY0LjY4OEMxODQuMTg4IDE2MS41NjIgMTgwLjA5NCAxNjAgMTc2IDE2MFMxNjcuODEyIDE2MS41NjIgMTY0LjY4OCAxNjQuNjg4QzE1OC40MzggMTcwLjkzOCAxNTguNDM4IDE4MS4wNjMgMTY0LjY4OCAxODcuMzEyTDI5Ny4xMDIgMzE5LjcyN1pNMjU2IDQ5NkMzODguNTQ5IDQ5NiA0OTYgMzg4LjU0NyA0OTYgMjU2UzM4OC41NDkgMTYgMjU2IDE2UzE2IDEyMy40NTMgMTYgMjU2UzEyMy40NTEgNDk2IDI1NiA0OTZaTTI1NiA0OEMzNzAuNjkxIDQ4IDQ2NCAxNDEuMzA5IDQ2NCAyNTZTMzcwLjY5MSA0NjQgMjU2IDQ2NFM0OCAzNzAuNjkxIDQ4IDI1NlMxNDEuMzA5IDQ4IDI1NiA0OFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CircleArrowDownRight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M297.102 319.727L207.953 320C199.109 320.031 191.969 327.219 192 336.031C192.031 344.875 199.188 352 208 352H208.047L336.047 351.625C344.859 351.594 352 344.438 352 335.625V208C352 199.156 344.844 192 336 192S320 199.156 320 208V297.375L187.312 164.688C184.188 161.562 180.094 160 176 160S167.812 161.562 164.688 164.688C158.438 170.938 158.438 181.063 164.688 187.312L297.102 319.727ZM256 496C388.549 496 496 388.547 496 256S388.549 16 256 16S16 123.453 16 256S123.451 496 256 496ZM256 48C370.691 48 464 141.309 464 256S370.691 464 256 464S48 370.691 48 256S141.309 48 256 48Z" />
        </Icon>
    </>
}