
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `compact-disc` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/compact-disc?s=thin compact-disc}
 * @preview ![compact-disc](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTUuOTk5QzEyMy40NTEgMTUuOTk5IDE2IDEyMy40NSAxNiAyNTUuOTk5UzEyMy40NTEgNDk1Ljk5OSAyNTYgNDk1Ljk5OVM0OTYgMzg4LjU0OCA0OTYgMjU1Ljk5OVMzODguNTQ5IDE1Ljk5OSAyNTYgMTUuOTk5Wk0yNTYgNDc5Ljk5OUMxMzIuNDg2IDQ3OS45OTkgMzIgMzc5LjUxMiAzMiAyNTUuOTk5UzEzMi40ODYgMzEuOTk5IDI1NiAzMS45OTlTNDgwIDEzMi40ODUgNDgwIDI1NS45OTlTMzc5LjUxNCA0NzkuOTk5IDI1NiA0NzkuOTk5Wk0yNTYgMTU5Ljk5OUMyMDIuOTggMTU5Ljk5OSAxNjAgMjAyLjk3OSAxNjAgMjU1Ljk5OVMyMDIuOTggMzUxLjk5OSAyNTYgMzUxLjk5OVMzNTIgMzA5LjAxOCAzNTIgMjU1Ljk5OVMzMDkuMDIgMTU5Ljk5OSAyNTYgMTU5Ljk5OVpNMjU2IDMzNS45OTlDMjExLjg4OSAzMzUuOTk5IDE3NiAzMDAuMTEgMTc2IDI1NS45OTlTMjExLjg4OSAxNzUuOTk5IDI1NiAxNzUuOTk5UzMzNiAyMTEuODg3IDMzNiAyNTUuOTk5UzMwMC4xMTEgMzM1Ljk5OSAyNTYgMzM1Ljk5OVpNMjY0IDc5Ljk5OUMyNjQgNzUuNTc3IDI2MC40MDYgNzEuOTk5IDI1NiA3MS45OTlDMTU0LjUzMSA3MS45OTkgNzIgMTU0LjU0NiA3MiAyNTUuOTk5QzcyIDI2MC40MjEgNzUuNTk0IDI2My45OTkgODAgMjYzLjk5OVM4OCAyNjAuNDIxIDg4IDI1NS45OTlDODggMTYzLjM1OCAxNjMuMzc1IDg3Ljk5OSAyNTYgODcuOTk5QzI2MC40MDYgODcuOTk5IDI2NCA4NC40MjEgMjY0IDc5Ljk5OVpNMjU2IDIzOS45OTlDMjQ3LjE2NCAyMzkuOTk5IDI0MCAyNDcuMTYzIDI0MCAyNTUuOTk5QzI0MCAyNjQuODM1IDI0Ny4xNjQgMjcxLjk5OSAyNTYgMjcxLjk5OVMyNzIgMjY0LjgzNSAyNzIgMjU1Ljk5OUMyNzIgMjQ3LjE2MyAyNjQuODM2IDIzOS45OTkgMjU2IDIzOS45OTlaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CompactDisc(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 15.999C123.451 15.999 16 123.45 16 255.999S123.451 495.999 256 495.999S496 388.548 496 255.999S388.549 15.999 256 15.999ZM256 479.999C132.486 479.999 32 379.512 32 255.999S132.486 31.999 256 31.999S480 132.485 480 255.999S379.514 479.999 256 479.999ZM256 159.999C202.98 159.999 160 202.979 160 255.999S202.98 351.999 256 351.999S352 309.018 352 255.999S309.02 159.999 256 159.999ZM256 335.999C211.889 335.999 176 300.11 176 255.999S211.889 175.999 256 175.999S336 211.887 336 255.999S300.111 335.999 256 335.999ZM264 79.999C264 75.577 260.406 71.999 256 71.999C154.531 71.999 72 154.546 72 255.999C72 260.421 75.594 263.999 80 263.999S88 260.421 88 255.999C88 163.358 163.375 87.999 256 87.999C260.406 87.999 264 84.421 264 79.999ZM256 239.999C247.164 239.999 240 247.163 240 255.999C240 264.835 247.164 271.999 256 271.999S272 264.835 272 255.999C272 247.163 264.836 239.999 256 239.999Z" />
        </Icon>
    </>
}