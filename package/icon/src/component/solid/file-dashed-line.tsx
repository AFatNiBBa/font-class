
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `file-dashed-line` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/file-dashed-line?s=solid file-dashed-line}
 * @preview ![file-dashed-line](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNDMuNjI1IDI2NEMyMzguMzc1IDI2NCAyMzMuMzc1IDI2Ni4wMDEgMjI5Ljc1IDI2OS43NUMyMjYgMjczLjM3NSAyMjQgMjc4LjM3NSAyMjQgMjgzLjYyNVYyOTIuMzc1QzIyNCAyOTcuNjI1IDIyNiAzMDIuNjI1IDIyOS43NSAzMDYuMjVDMjMzLjM3NSAzMTAuMDAxIDIzOC4zNzUgMzEyIDI0My42MjUgMzEySDMzMi4zNzVDMzM3LjYyNSAzMTIgMzQyLjYyNSAzMTAuMDAxIDM0Ni4yNSAzMDYuMjVDMzUwIDMwMi42MjUgMzUyIDI5Ny42MjUgMzUyIDI5Mi4zNzVWMjgzLjYyNUMzNTIgMjc4LjM3NSAzNTAgMjczLjM3NSAzNDYuMjUgMjY5Ljc1QzM0Mi42MjUgMjY2LjAwMSAzMzcuNjI1IDI2NCAzMzIuMzc1IDI2NEgyNDMuNjI1Wk0xNjAgNjRIMzM2VjEyOEMzMzYgMTM2Ljg3NSAzNDMuMTI1IDE0NCAzNTIgMTQ0SDQxNlYyMTZINDgwVjEzMkM0ODAgMTE5LjI1IDQ3NC44NzUgMTA3IDQ2NS44NzUgOTguMDAxTDM4MiAxNC4xMjVDMzczIDUuMTI1IDM2MC44NzUgMCAzNDguMTI1IDBIMTQ0QzExNy41IDAuMTI1IDk2IDIxLjYyNSA5NiA0OC4xMjVWMjE2SDE2MFY2NFpNMTYwIDI5NlYyODBDMTYwIDI3MS4xMjUgMTUyLjg3NSAyNjQgMTQ0IDI2NEgxNkM3LjEyNSAyNjQgMCAyNzEuMTI1IDAgMjgwVjI5NkMwIDMwNC44NzUgNy4xMjUgMzEyIDE2IDMxMkgxNDRDMTUyLjg3NSAzMTIgMTYwIDMwNC44NzUgMTYwIDI5NlpNNDE2IDQ0OEgxNjBWMzYwSDk2VjQ2NEM5NiA0OTAuNSAxMTcuNSA1MTIgMTQ0IDUxMkg0MzJDNDU4LjUgNTEyIDQ4MCA0OTAuNSA0ODAgNDY0VjM2MEg0MTZWNDQ4Wk01NjAgMjY0SDQzMkM0MjMuMTI1IDI2NCA0MTYgMjcxLjEyNSA0MTYgMjgwVjI5NkM0MTYgMzA0Ljg3NSA0MjMuMTI1IDMxMiA0MzIgMzEySDU2MEM1NjguODc1IDMxMiA1NzYgMzA0Ljg3NSA1NzYgMjk2VjI4MEM1NzYgMjcxLjEyNSA1NjguODc1IDI2NCA1NjAgMjY0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function FileDashedLine(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M243.625 264C238.375 264 233.375 266.001 229.75 269.75C226 273.375 224 278.375 224 283.625V292.375C224 297.625 226 302.625 229.75 306.25C233.375 310.001 238.375 312 243.625 312H332.375C337.625 312 342.625 310.001 346.25 306.25C350 302.625 352 297.625 352 292.375V283.625C352 278.375 350 273.375 346.25 269.75C342.625 266.001 337.625 264 332.375 264H243.625ZM160 64H336V128C336 136.875 343.125 144 352 144H416V216H480V132C480 119.25 474.875 107 465.875 98.001L382 14.125C373 5.125 360.875 0 348.125 0H144C117.5 0.125 96 21.625 96 48.125V216H160V64ZM160 296V280C160 271.125 152.875 264 144 264H16C7.125 264 0 271.125 0 280V296C0 304.875 7.125 312 16 312H144C152.875 312 160 304.875 160 296ZM416 448H160V360H96V464C96 490.5 117.5 512 144 512H432C458.5 512 480 490.5 480 464V360H416V448ZM560 264H432C423.125 264 416 271.125 416 280V296C416 304.875 423.125 312 432 312H560C568.875 312 576 304.875 576 296V280C576 271.125 568.875 264 560 264Z" />
        </Icon>
    </>
}