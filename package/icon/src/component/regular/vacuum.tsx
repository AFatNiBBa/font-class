
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `vacuum` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/vacuum?s=regular vacuum}
 * @preview ![vacuum](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02NDAgMTIwQzYzOS44NzUgNTMuNzUgNTg2LjI1IDAuMTI1IDUyMCAwSDMwOS42MjVDMjUzLjM3NSAwIDIwNCAzOS44NzUgMTkyLjI1IDk0Ljg3NUwxMzAuMjUgMzg0SDk2QzQzIDM4NCAwIDQyNyAwIDQ4MFY0OTZDMCA1MDQuODc1IDcuMTI1IDUxMiAxNiA1MTJIMjI0QzI0MS42MjUgNTEyIDI1NiA0OTcuNjI1IDI1NiA0ODBWNDE2QzI1NiAzOTguMzc1IDI0MS42MjUgMzg0IDIyNCAzODRIMTc5LjM3NUwyMzkuMjUgMTA0Ljg3NUMyNDYuNSA3MS43NSAyNzUuNzUgNDguMTI1IDMwOS42MjUgNDhINTIwQzU1My41IDQ3Ljg3NSA1ODIuNSA3MC44NzUgNTkwLjEyNSAxMDMuNUM1OTcuNzUgMTM2IDU4MS44NzUgMTY5LjUgNTUxLjc1IDE4NC4yNUM1MTUuODc1IDE0OC4xMjUgNDY3IDEyNy44NzUgNDE2IDEyOEgzODRDMzY2LjM3NSAxMjggMzUyIDE0Mi4zNzUgMzUyIDE2MFYzMzEuMjVDMzY3IDMyMy44NzUgMzgzLjM3NSAzMjAuMTI1IDQwMCAzMjBWMTc2SDQxNkM0OTUuMzc1IDE3NiA1NjAgMjQwLjYyNSA1NjAgMzIwVjQ0OEM1NjAgNDU2Ljg3NSA1NTIuODc1IDQ2NCA1NDQgNDY0SDUwNi43NUM1MDEuNSA0ODIuMTI1IDQ5MS42MjUgNDk4LjYyNSA0NzguMjUgNTEySDU0NEM1NzkuMzc1IDUxMiA2MDggNDgzLjM3NSA2MDggNDQ4VjMyMEM2MDggMjg1LjUgNTk4LjYyNSAyNTEuNzUgNTgxIDIyMi4xMjVDNjE2LjEyNSAyMDEuMzc1IDY0MCAxNjMuNzUgNjQwIDEyMFpNMjA4IDQzMlY0NjRINTAuNzVDNTcuNSA0NDQuODc1IDc1LjYyNSA0MzIgOTYgNDMySDIwOFpNNDAwIDM1MkMzNTUuODc1IDM1MiAzMjAgMzg3Ljg3NSAzMjAgNDMyUzM1NS44NzUgNTEyIDQwMCA1MTJTNDgwIDQ3Ni4xMjUgNDgwIDQzMlM0NDQuMTI1IDM1MiA0MDAgMzUyWk00MDAgNDQ4QzM5MS4xMjUgNDQ4IDM4NCA0NDAuODc1IDM4NCA0MzJTMzkxLjEyNSA0MTYgNDAwIDQxNlM0MTYgNDIzLjEyNSA0MTYgNDMyUzQwOC44NzUgNDQ4IDQwMCA0NDhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Vacuum(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M640 120C639.875 53.75 586.25 0.125 520 0H309.625C253.375 0 204 39.875 192.25 94.875L130.25 384H96C43 384 0 427 0 480V496C0 504.875 7.125 512 16 512H224C241.625 512 256 497.625 256 480V416C256 398.375 241.625 384 224 384H179.375L239.25 104.875C246.5 71.75 275.75 48.125 309.625 48H520C553.5 47.875 582.5 70.875 590.125 103.5C597.75 136 581.875 169.5 551.75 184.25C515.875 148.125 467 127.875 416 128H384C366.375 128 352 142.375 352 160V331.25C367 323.875 383.375 320.125 400 320V176H416C495.375 176 560 240.625 560 320V448C560 456.875 552.875 464 544 464H506.75C501.5 482.125 491.625 498.625 478.25 512H544C579.375 512 608 483.375 608 448V320C608 285.5 598.625 251.75 581 222.125C616.125 201.375 640 163.75 640 120ZM208 432V464H50.75C57.5 444.875 75.625 432 96 432H208ZM400 352C355.875 352 320 387.875 320 432S355.875 512 400 512S480 476.125 480 432S444.125 352 400 352ZM400 448C391.125 448 384 440.875 384 432S391.125 416 400 416S416 423.125 416 432S408.875 448 400 448Z" />
        </Icon>
    </>
}