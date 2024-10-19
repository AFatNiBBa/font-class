
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `xmark-to-slot` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/xmark-to-slot?s=regular xmark-to-slot}
 * @preview ![xmark-to-slot](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik05NiA0MDhINDgwQzQ5My4yNTQgNDA4IDUwNCAzOTcuMjU0IDUwNCAzODRDNTA0IDM3MC43NDIgNDkzLjI1NCAzNjAgNDgwIDM2MFY5NkM0ODAgNjAuNjUyIDQ1MS4zNDYgMzIgNDE2IDMySDE2MEMxMjQuNjU0IDMyIDk2IDYwLjY1MiA5NiA5NlYzNjBDODIuNzQ2IDM2MCA3MiAzNzAuNzQyIDcyIDM4NEM3MiAzOTcuMjU0IDgyLjc0NiA0MDggOTYgNDA4Wk0xNDQgOTZDMTQ0IDg3LjE2NCAxNTEuMTY0IDgwIDE2MCA4MEg0MTZDNDI0LjgzNiA4MCA0MzIgODcuMTY0IDQzMiA5NlYzNjBIMTQ0Vjk2Wk01MjQuNTYyIDI4OEM1MTEuMzEyIDI4OCA1MDAuNTYyIDI5OC43NSA1MDAuNTYyIDMxMlM1MTEuMzEyIDMzNiA1MjQuNTYyIDMzNkM1MjYuNDY5IDMzNiA1MjggMzM3LjUzMSA1MjggMzM5LjQyMlY0MjRDNTI4IDQyOC40MDYgNTI0LjQwNiA0MzIgNTIwIDQzMkg1NkM1MS41OTQgNDMyIDQ4IDQyOC40MDYgNDggNDI0VjMzOS40MjJDNDggMzM3LjUzMSA0OS41MzEgMzM2IDUxLjQwNiAzMzZDNjQuNjU2IDMzNiA3NS40MDYgMzI1LjI1IDc1LjQwNiAzMTJTNjQuNjU2IDI4OCA1MS40MDYgMjg4QzIzLjA2MiAyODggMCAzMTEuMDYyIDAgMzM5LjQyMlY0MjRDMCA0NTQuODc1IDI1LjEyNSA0ODAgNTYgNDgwSDUyMEM1NTAuODc1IDQ4MCA1NzYgNDU0Ljg3NSA1NzYgNDI0VjMzOS40MjJDNTc2IDMxMS4wNjIgNTUyLjkzOCAyODggNTI0LjU2MiAyODhaTTM2OC45NjkgMTM1LjAzMUMzNTkuNTk0IDEyNS42NTYgMzQ0LjQwNiAxMjUuNjU2IDMzNS4wMzEgMTM1LjAzMUwyODggMTgyLjA2MkwyNDAuOTY5IDEzNS4wMzFDMjMxLjU5NCAxMjUuNjU2IDIxNi40MDYgMTI1LjY1NiAyMDcuMDMxIDEzNS4wMzFTMTk3LjY1NiAxNTkuNTk0IDIwNy4wMzEgMTY4Ljk2OUwyNTQuMDYyIDIxNkwyMDcuMDMxIDI2My4wMzFDMTk3LjY1NiAyNzIuNDA2IDE5Ny42NTYgMjg3LjU5NCAyMDcuMDMxIDI5Ni45NjlDMjE2LjQwNCAzMDYuMzQgMjMxLjU4OCAzMDYuMzQ4IDI0MC45NjkgMjk2Ljk2OUwyODggMjQ5LjkzOEwzMzUuMDMxIDI5Ni45NjlDMzQ0LjQwNCAzMDYuMzQgMzU5LjU4OCAzMDYuMzQ4IDM2OC45NjkgMjk2Ljk2OUMzNzguMzQ0IDI4Ny41OTQgMzc4LjM0NCAyNzIuNDA2IDM2OC45NjkgMjYzLjAzMUwzMjEuOTM4IDIxNkwzNjguOTY5IDE2OC45NjlDMzc4LjM0NCAxNTkuNTk0IDM3OC4zNDQgMTQ0LjQwNiAzNjguOTY5IDEzNS4wMzFaIi8+PC9zdmc+|width=32|height=32)
 */
export default function XmarkToSlot(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M96 408H480C493.254 408 504 397.254 504 384C504 370.742 493.254 360 480 360V96C480 60.652 451.346 32 416 32H160C124.654 32 96 60.652 96 96V360C82.746 360 72 370.742 72 384C72 397.254 82.746 408 96 408ZM144 96C144 87.164 151.164 80 160 80H416C424.836 80 432 87.164 432 96V360H144V96ZM524.562 288C511.312 288 500.562 298.75 500.562 312S511.312 336 524.562 336C526.469 336 528 337.531 528 339.422V424C528 428.406 524.406 432 520 432H56C51.594 432 48 428.406 48 424V339.422C48 337.531 49.531 336 51.406 336C64.656 336 75.406 325.25 75.406 312S64.656 288 51.406 288C23.062 288 0 311.062 0 339.422V424C0 454.875 25.125 480 56 480H520C550.875 480 576 454.875 576 424V339.422C576 311.062 552.938 288 524.562 288ZM368.969 135.031C359.594 125.656 344.406 125.656 335.031 135.031L288 182.062L240.969 135.031C231.594 125.656 216.406 125.656 207.031 135.031S197.656 159.594 207.031 168.969L254.062 216L207.031 263.031C197.656 272.406 197.656 287.594 207.031 296.969C216.404 306.34 231.588 306.348 240.969 296.969L288 249.938L335.031 296.969C344.404 306.34 359.588 306.348 368.969 296.969C378.344 287.594 378.344 272.406 368.969 263.031L321.938 216L368.969 168.969C378.344 159.594 378.344 144.406 368.969 135.031Z" />
        </Icon>
    </>
}