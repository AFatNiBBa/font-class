
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `toggle-on` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/toggle-on?s=regular toggle-on}
 * @preview ![toggle-on](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgNjRIMTkyQzg1Ljk2MSA2NCAwIDE0OS45NjEgMCAyNTZTODUuOTYxIDQ0OCAxOTIgNDQ4SDM4NEM0OTAuMDM5IDQ0OCA1NzYgMzYyLjAzOSA1NzYgMjU2UzQ5MC4wMzkgNjQgMzg0IDY0Wk0zODQgNDAwSDE5MkMxMTIuNTk4IDQwMCA0OCAzMzUuNDAyIDQ4IDI1NlMxMTIuNTk4IDExMiAxOTIgMTEySDM4NEM0NjMuNDAyIDExMiA1MjggMTc2LjU5OCA1MjggMjU2UzQ2My40MDIgNDAwIDM4NCA0MDBaTTM4NCAxNjBDMzMwLjk4IDE2MCAyODggMjAyLjk4IDI4OCAyNTZTMzMwLjk4IDM1MiAzODQgMzUyUzQ4MCAzMDkuMDIgNDgwIDI1NlM0MzcuMDIgMTYwIDM4NCAxNjBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function ToggleOn(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M384 64H192C85.961 64 0 149.961 0 256S85.961 448 192 448H384C490.039 448 576 362.039 576 256S490.039 64 384 64ZM384 400H192C112.598 400 48 335.402 48 256S112.598 112 192 112H384C463.402 112 528 176.598 528 256S463.402 400 384 400ZM384 160C330.98 160 288 202.98 288 256S330.98 352 384 352S480 309.02 480 256S437.02 160 384 160Z" />
        </Icon>
    </>
}