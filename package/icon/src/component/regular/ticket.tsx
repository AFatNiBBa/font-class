
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `ticket` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/ticket?s=regular ticket}
 * @preview ![ticket](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NjggMjE2SDU3NlYxMjhDNTc2IDkyLjY1MiA1NDcuMzQ2IDY0IDUxMiA2NEg2NEMyOC42NTQgNjQgMCA5Mi42NTIgMCAxMjhWMjE2SDhDMzAuMTI1IDIxNiA0OCAyMzMuODc1IDQ4IDI1NlMzMC4xMjUgMjk2IDggMjk2SDBWMzg0QzAgNDE5LjM0NiAyOC42NTQgNDQ4IDY0IDQ0OEg1MTJDNTQ3LjM0NiA0NDggNTc2IDQxOS4zNDYgNTc2IDM4NFYyOTZINTY4QzU0NS44NzUgMjk2IDUyOCAyNzguMTI1IDUyOCAyNTZTNTQ1Ljg3NSAyMTYgNTY4IDIxNlpNNTI4IDE3Ny42MjVDNDk5LjUgMTkyLjI1IDQ4MCAyMjEuODc1IDQ4MCAyNTZTNDk5LjUgMzE5Ljc1IDUyOCAzMzQuMzc1VjM4NEM1MjggMzkyLjgzNiA1MjAuODM2IDQwMCA1MTIgNDAwSDY0QzU1LjE2NCA0MDAgNDggMzkyLjgzNiA0OCAzODRWMzM0LjM3NUM3Ni41IDMxOS43NSA5NiAyOTAuMTI1IDk2IDI1NlM3Ni41IDE5Mi4yNSA0OCAxNzcuNjI1VjEyOEM0OCAxMTkuMTYyIDU1LjE2NCAxMTIgNjQgMTEySDUxMkM1MjAuODM2IDExMiA1MjggMTE5LjE2MiA1MjggMTI4VjE3Ny42MjVaTTQxNiAxNjBIMTYwQzE0Mi4zMjggMTYwIDEyOCAxNzQuMzI2IDEyOCAxOTJWMzIwQzEyOCAzMzcuNjcyIDE0Mi4zMjggMzUyIDE2MCAzNTJINDE2QzQzMy42NzQgMzUyIDQ0OCAzMzcuNjcyIDQ0OCAzMjBWMTkyQzQ0OCAxNzQuMzI2IDQzMy42NzQgMTYwIDQxNiAxNjBaTTQwMCAzMDRIMTc2VjIwOEg0MDBWMzA0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Ticket(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M568 216H576V128C576 92.652 547.346 64 512 64H64C28.654 64 0 92.652 0 128V216H8C30.125 216 48 233.875 48 256S30.125 296 8 296H0V384C0 419.346 28.654 448 64 448H512C547.346 448 576 419.346 576 384V296H568C545.875 296 528 278.125 528 256S545.875 216 568 216ZM528 177.625C499.5 192.25 480 221.875 480 256S499.5 319.75 528 334.375V384C528 392.836 520.836 400 512 400H64C55.164 400 48 392.836 48 384V334.375C76.5 319.75 96 290.125 96 256S76.5 192.25 48 177.625V128C48 119.162 55.164 112 64 112H512C520.836 112 528 119.162 528 128V177.625ZM416 160H160C142.328 160 128 174.326 128 192V320C128 337.672 142.328 352 160 352H416C433.674 352 448 337.672 448 320V192C448 174.326 433.674 160 416 160ZM400 304H176V208H400V304Z" />
        </Icon>
    </>
}