
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `envelope-dot` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/envelope-dot?s=solid envelope-dot}
 * @preview ![envelope-dot](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MTIgMEM0NzYuNjU0IDAgNDQ4IDI4LjY1NCA0NDggNjRTNDc2LjY1NCAxMjggNTEyIDEyOEM1NDcuMzQ4IDEyOCA1NzYgOTkuMzQ2IDU3NiA2NFM1NDcuMzQ4IDAgNTEyIDBaTTQ4LjI4NyAxNDUuMzA1TDI2MC40NjkgMzEwLjM1OUMyNzYuNjYyIDMyMi45NTUgMjk5LjMzOCAzMjIuOTU1IDMxNS41MzEgMzEwLjM1OUw1MDkuMTg2IDE1OS43MTdDNDU3LjQ5OCAxNTguMTkxIDQxNiAxMTYuMDU3IDQxNiA2NEg4MEM1My40OSA2NCAzMiA4NS40OSAzMiAxMTJDMzIgMTI1LjAyIDM4LjAxIDEzNy4zMTEgNDguMjg3IDE0NS4zMDVaTTI4OCAzNTIuMDc4QzI3MS40NjkgMzUyLjA3OCAyNTQuOTM4IDM0Ni41OTQgMjQwLjg0NCAzMzUuNjA5TDMyIDE3My4xNVY0MDBDMzIgNDI2LjUxIDUzLjQ5IDQ0OCA4MCA0NDhINDk2QzUyMi41MSA0NDggNTQ0IDQyNi41MSA1NDQgNDAwVjE3My4xNUwzMzUuMTU2IDMzNS42MDlDMzIxLjA2MiAzNDYuNTk0IDMwNC41MzEgMzUyLjA3OCAyODggMzUyLjA3OFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function EnvelopeDot(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M512 0C476.654 0 448 28.654 448 64S476.654 128 512 128C547.348 128 576 99.346 576 64S547.348 0 512 0ZM48.287 145.305L260.469 310.359C276.662 322.955 299.338 322.955 315.531 310.359L509.186 159.717C457.498 158.191 416 116.057 416 64H80C53.49 64 32 85.49 32 112C32 125.02 38.01 137.311 48.287 145.305ZM288 352.078C271.469 352.078 254.938 346.594 240.844 335.609L32 173.15V400C32 426.51 53.49 448 80 448H496C522.51 448 544 426.51 544 400V173.15L335.156 335.609C321.062 346.594 304.531 352.078 288 352.078Z" />
        </Icon>
    </>
}