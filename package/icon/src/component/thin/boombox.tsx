
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `boombox` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/boombox?s=thin boombox}
 * @preview ![boombox](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NzYgMTYwVjcyQzU3NiAzMi4yOTcgNTQzLjcwMyAwIDUwNCAwSDEzNkM5Ni4yOTcgMCA2NCAzMi4yOTcgNjQgNzJWMTYwQzI4LjY1NCAxNjAgMCAxODguNjU0IDAgMjI0VjQ0OEMwIDQ4My4zNDYgMjguNjU0IDUxMiA2NCA1MTJINTc2QzYxMS4zNDYgNTEyIDY0MCA0ODMuMzQ2IDY0MCA0NDhWMjI0QzY0MCAxODguNjU0IDYxMS4zNDYgMTYwIDU3NiAxNjBaTTgwIDcyQzgwIDQxLjEyNSAxMDUuMTI1IDE2IDEzNiAxNkg1MDRDNTM0Ljg3NSAxNiA1NjAgNDEuMTI1IDU2MCA3MlYxNjBIODBWNzJaTTYyNCA0NDhDNjI0IDQ3NC40NjcgNjAyLjQ2NyA0OTYgNTc2IDQ5Nkg2NEMzNy41MzMgNDk2IDE2IDQ3NC40NjcgMTYgNDQ4VjIyNEMxNiAxOTcuNTMzIDM3LjUzMyAxNzYgNjQgMTc2SDU3NkM2MDIuNDY3IDE3NiA2MjQgMTk3LjUzMyA2MjQgMjI0VjQ0OFpNMTc2IDIyNEMxMTQuMTQ1IDIyNCA2NCAyNzQuMTQ1IDY0IDMzNlMxMTQuMTQ1IDQ0OCAxNzYgNDQ4UzI4OCAzOTcuODU1IDI4OCAzMzZTMjM3Ljg1NSAyMjQgMTc2IDIyNFpNMTc2IDQzMkMxMjMuMDY0IDQzMiA4MCAzODguOTM2IDgwIDMzNlMxMjMuMDY0IDI0MCAxNzYgMjQwUzI3MiAyODMuMDY0IDI3MiAzMzZTMjI4LjkzNiA0MzIgMTc2IDQzMlpNNDY0IDIyNEM0MDIuMTQ1IDIyNCAzNTIgMjc0LjE0NSAzNTIgMzM2UzQwMi4xNDUgNDQ4IDQ2NCA0NDhTNTc2IDM5Ny44NTUgNTc2IDMzNlM1MjUuODU1IDIyNCA0NjQgMjI0Wk00NjQgNDMyQzQxMS4wNjQgNDMyIDM2OCAzODguOTM2IDM2OCAzMzZTNDExLjA2NCAyNDAgNDY0IDI0MFM1NjAgMjgzLjA2NCA1NjAgMzM2UzUxNi45MzYgNDMyIDQ2NCA0MzJaTTI0OCAxMjBIMjAwQzE5NS41NzggMTIwIDE5MiAxMjMuNTc4IDE5MiAxMjhTMTk1LjU3OCAxMzYgMjAwIDEzNkgyNDhDMjUyLjQyMiAxMzYgMjU2IDEzMi40MjIgMjU2IDEyOFMyNTIuNDIyIDEyMCAyNDggMTIwWk0zNDQgMTIwSDI5NkMyOTEuNTc4IDEyMCAyODggMTIzLjU3OCAyODggMTI4UzI5MS41NzggMTM2IDI5NiAxMzZIMzQ0QzM0OC40MjIgMTM2IDM1MiAxMzIuNDIyIDM1MiAxMjhTMzQ4LjQyMiAxMjAgMzQ0IDEyMFpNNDQwIDEyMEgzOTJDMzg3LjU3OCAxMjAgMzg0IDEyMy41NzggMzg0IDEyOFMzODcuNTc4IDEzNiAzOTIgMTM2SDQ0MEM0NDQuNDIyIDEzNiA0NDggMTMyLjQyMiA0NDggMTI4UzQ0NC40MjIgMTIwIDQ0MCAxMjBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Boombox(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M576 160V72C576 32.297 543.703 0 504 0H136C96.297 0 64 32.297 64 72V160C28.654 160 0 188.654 0 224V448C0 483.346 28.654 512 64 512H576C611.346 512 640 483.346 640 448V224C640 188.654 611.346 160 576 160ZM80 72C80 41.125 105.125 16 136 16H504C534.875 16 560 41.125 560 72V160H80V72ZM624 448C624 474.467 602.467 496 576 496H64C37.533 496 16 474.467 16 448V224C16 197.533 37.533 176 64 176H576C602.467 176 624 197.533 624 224V448ZM176 224C114.145 224 64 274.145 64 336S114.145 448 176 448S288 397.855 288 336S237.855 224 176 224ZM176 432C123.064 432 80 388.936 80 336S123.064 240 176 240S272 283.064 272 336S228.936 432 176 432ZM464 224C402.145 224 352 274.145 352 336S402.145 448 464 448S576 397.855 576 336S525.855 224 464 224ZM464 432C411.064 432 368 388.936 368 336S411.064 240 464 240S560 283.064 560 336S516.936 432 464 432ZM248 120H200C195.578 120 192 123.578 192 128S195.578 136 200 136H248C252.422 136 256 132.422 256 128S252.422 120 248 120ZM344 120H296C291.578 120 288 123.578 288 128S291.578 136 296 136H344C348.422 136 352 132.422 352 128S348.422 120 344 120ZM440 120H392C387.578 120 384 123.578 384 128S387.578 136 392 136H440C444.422 136 448 132.422 448 128S444.422 120 440 120Z" />
        </Icon>
    </>
}