
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `toggle-off` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/toggle-off?s=regular toggle-off}
 * @preview ![toggle-off](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgNjRIMTkyQzg1Ljk2MSA2NCAwIDE0OS45NjEgMCAyNTZTODUuOTYxIDQ0OCAxOTIgNDQ4SDM4NEM0OTAuMDM5IDQ0OCA1NzYgMzYyLjAzOSA1NzYgMjU2UzQ5MC4wMzkgNjQgMzg0IDY0Wk0zODQgNDAwSDE5MkMxMTIuNTk4IDQwMCA0OCAzMzUuNDAyIDQ4IDI1NlMxMTIuNTk4IDExMiAxOTIgMTEySDM4NEM0NjMuNDAyIDExMiA1MjggMTc2LjU5OCA1MjggMjU2UzQ2My40MDIgNDAwIDM4NCA0MDBaTTE5MiAxNjBDMTM4Ljk4IDE2MCA5NiAyMDIuOTggOTYgMjU2UzEzOC45OCAzNTIgMTkyIDM1MlMyODggMzA5LjAyIDI4OCAyNTZTMjQ1LjAyIDE2MCAxOTIgMTYwWk0xOTIgMzA0QzE2NS41MzMgMzA0IDE0NCAyODIuNDY3IDE0NCAyNTZTMTY1LjUzMyAyMDggMTkyIDIwOFMyNDAgMjI5LjUzMyAyNDAgMjU2UzIxOC40NjcgMzA0IDE5MiAzMDRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function ToggleOff(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M384 64H192C85.961 64 0 149.961 0 256S85.961 448 192 448H384C490.039 448 576 362.039 576 256S490.039 64 384 64ZM384 400H192C112.598 400 48 335.402 48 256S112.598 112 192 112H384C463.402 112 528 176.598 528 256S463.402 400 384 400ZM192 160C138.98 160 96 202.98 96 256S138.98 352 192 352S288 309.02 288 256S245.02 160 192 160ZM192 304C165.533 304 144 282.467 144 256S165.533 208 192 208S240 229.533 240 256S218.467 304 192 304Z" />
        </Icon>
    </>
}