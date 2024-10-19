
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `face-flushed` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/face-flushed?s=regular face-flushed}
 * @preview ![face-flushed](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNjAgMjAwQzE0Ni42NjYgMjAwIDEzNiAyMTAuNzUgMTM2IDIyNFMxNDYuNjY2IDI0OCAxNjAgMjQ4UzE4NCAyMzcuMjUgMTg0IDIyNFMxNzMuMzM0IDIwMCAxNjAgMjAwWk0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUxIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ5IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTI1NiA0NDhDMTUwLjEzMSA0NDggNjQgMzYxLjg2OSA2NCAyNTZTMTUwLjEzMSA2NCAyNTYgNjRTNDQ4IDE1MC4xMzEgNDQ4IDI1NlMzNjEuODY5IDQ0OCAyNTYgNDQ4Wk0yMzIgMjI0QzIzMiAxODQuMTc0IDE5OS44NDIgMTUyIDE2MC4wNTUgMTUyQzEyMC4yNjYgMTUyIDg4IDE4NC4xNzQgODggMjI0Qzg4IDI2My44MjQgMTIwLjI2NiAyOTYgMTYwLjA1NSAyOTZDMTk5Ljg0MiAyOTYgMjMyIDI2My44MjQgMjMyIDIyNFpNMTYwLjA1NSAyNjRDMTM3Ljk2OSAyNjQgMTIwIDI0Ni4wNTUgMTIwIDIyNEMxMjAgMjAxLjk0MyAxMzcuOTY5IDE4NCAxNjAuMDU1IDE4NEMxODIuMDggMTg0IDIwMCAyMDEuOTQzIDIwMCAyMjRDMjAwIDI0Ni4wNTUgMTgyLjA4IDI2NCAxNjAuMDU1IDI2NFpNMzUyIDIwMEMzMzguNjY2IDIwMCAzMjggMjEwLjc1IDMyOCAyMjRTMzM4LjY2NiAyNDggMzUyIDI0OFMzNzYgMjM3LjI1IDM3NiAyMjRTMzY1LjMzNCAyMDAgMzUyIDIwMFpNMzUyLjA1NSAxNTJDMzEyLjI2NiAxNTIgMjgwIDE4NC4xNzQgMjgwIDIyNEMyODAgMjYzLjgyNCAzMTIuMjY2IDI5NiAzNTIuMDU1IDI5NkMzOTEuODQyIDI5NiA0MjQgMjYzLjgyNCA0MjQgMjI0QzQyNCAxODQuMTc0IDM5MS44NDIgMTUyIDM1Mi4wNTUgMTUyWk0zNTIuMDU1IDI2NEMzMjkuOTY5IDI2NCAzMTIgMjQ2LjA1NSAzMTIgMjI0QzMxMiAyMDEuOTQzIDMyOS45NjkgMTg0IDM1Mi4wNTUgMTg0QzM3NC4wOCAxODQgMzkyIDIwMS45NDMgMzkyIDIyNEMzOTIgMjQ2LjA1NSAzNzQuMDggMjY0IDM1Mi4wNTUgMjY0Wk0zMTIuMDMzIDMzNS45OUgxOTkuOTY3QzE4Ni43NjggMzM1Ljk5IDE3NS45OSAzNDYuNzQgMTc1Ljk5IDM1OS45OVMxODYuNzY4IDM4My45OSAxOTkuOTY3IDM4My45OUgzMTIuMDMzQzMyNS4yMzIgMzgzLjk5IDMzNi4wMSAzNzMuMjQgMzM2LjAxIDM1OS45OVMzMjUuMjMyIDMzNS45OSAzMTIuMDMzIDMzNS45OVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function FaceFlushed(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M160 200C146.666 200 136 210.75 136 224S146.666 248 160 248S184 237.25 184 224S173.334 200 160 200ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 448C150.131 448 64 361.869 64 256S150.131 64 256 64S448 150.131 448 256S361.869 448 256 448ZM232 224C232 184.174 199.842 152 160.055 152C120.266 152 88 184.174 88 224C88 263.824 120.266 296 160.055 296C199.842 296 232 263.824 232 224ZM160.055 264C137.969 264 120 246.055 120 224C120 201.943 137.969 184 160.055 184C182.08 184 200 201.943 200 224C200 246.055 182.08 264 160.055 264ZM352 200C338.666 200 328 210.75 328 224S338.666 248 352 248S376 237.25 376 224S365.334 200 352 200ZM352.055 152C312.266 152 280 184.174 280 224C280 263.824 312.266 296 352.055 296C391.842 296 424 263.824 424 224C424 184.174 391.842 152 352.055 152ZM352.055 264C329.969 264 312 246.055 312 224C312 201.943 329.969 184 352.055 184C374.08 184 392 201.943 392 224C392 246.055 374.08 264 352.055 264ZM312.033 335.99H199.967C186.768 335.99 175.99 346.74 175.99 359.99S186.768 383.99 199.967 383.99H312.033C325.232 383.99 336.01 373.24 336.01 359.99S325.232 335.99 312.033 335.99Z" />
        </Icon>
    </>
}