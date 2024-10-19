
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `disc-drive` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/disc-drive?s=thin disc-drive}
 * @preview ![disc-drive](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgOTZDMTY3LjYzNSA5NiA5NiAxNjcuNjM1IDk2IDI1NlMxNjcuNjM1IDQxNiAyNTYgNDE2UzQxNiAzNDQuMzY1IDQxNiAyNTZTMzQ0LjM2NSA5NiAyNTYgOTZaTTI1NiA0MDBDMTc2LjU5OCA0MDAgMTEyIDMzNS40MDIgMTEyIDI1NlMxNzYuNTk4IDExMiAyNTYgMTEyUzQwMCAxNzYuNTk4IDQwMCAyNTZTMzM1LjQwMiA0MDAgMjU2IDQwMFpNMjU2IDIyNEMyMzguMzI4IDIyNCAyMjQgMjM4LjMyNiAyMjQgMjU2UzIzOC4zMjggMjg4IDI1NiAyODhDMjczLjY3NCAyODggMjg4IDI3My42NzQgMjg4IDI1NlMyNzMuNjc0IDIyNCAyNTYgMjI0Wk0yNTYgMjcyQzI0Ny4xNzggMjcyIDI0MCAyNjQuODIyIDI0MCAyNTZTMjQ3LjE3OCAyNDAgMjU2IDI0MFMyNzIgMjQ3LjE3OCAyNzIgMjU2UzI2NC44MjIgMjcyIDI1NiAyNzJaTTUwNCA0NjRINDgwVjEwNEM0ODAgNjQuMzEyIDQ0Ny43MDMgMzIgNDA4IDMySDEwNEM2NC4yOTcgMzIgMzIgNjQuMzEyIDMyIDEwNFY0NjRIOEMzLjU3OCA0NjQgMCA0NjcuNTk0IDAgNDcyUzMuNTc4IDQ4MCA4IDQ4MEg1MDRDNTA4LjQyMiA0ODAgNTEyIDQ3Ni40MDYgNTEyIDQ3MlM1MDguNDIyIDQ2NCA1MDQgNDY0Wk00NjQgNDY0SDQ4VjEwNEM0OCA3My4xMjUgNzMuMTI1IDQ4IDEwNCA0OEg0MDhDNDM4Ljg3NSA0OCA0NjQgNzMuMTI1IDQ2NCAxMDRWNDY0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function DiscDrive(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 96C167.635 96 96 167.635 96 256S167.635 416 256 416S416 344.365 416 256S344.365 96 256 96ZM256 400C176.598 400 112 335.402 112 256S176.598 112 256 112S400 176.598 400 256S335.402 400 256 400ZM256 224C238.328 224 224 238.326 224 256S238.328 288 256 288C273.674 288 288 273.674 288 256S273.674 224 256 224ZM256 272C247.178 272 240 264.822 240 256S247.178 240 256 240S272 247.178 272 256S264.822 272 256 272ZM504 464H480V104C480 64.312 447.703 32 408 32H104C64.297 32 32 64.312 32 104V464H8C3.578 464 0 467.594 0 472S3.578 480 8 480H504C508.422 480 512 476.406 512 472S508.422 464 504 464ZM464 464H48V104C48 73.125 73.125 48 104 48H408C438.875 48 464 73.125 464 104V464Z" />
        </Icon>
    </>
}