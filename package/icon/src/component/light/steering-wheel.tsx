
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `steering-wheel` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/steering-wheel?s=light steering-wheel}
 * @preview ![steering-wheel](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUxIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ5IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTI1NiA0OEMzNzAuNjkxIDQ4IDQ2NCAxNDEuMzA5IDQ2NCAyNTZIMzY2LjQzOEMzNTguOTMgMjE5LjUgMzI2LjU5OCAxOTIgMjg3Ljk2OSAxOTJIMjI0LjAzMUMxODUuNDAyIDE5MiAxNTMuMDcgMjE5LjUgMTQ1LjU2MiAyNTZINDhDNDggMTQxLjMwOSAxNDEuMzA5IDQ4IDI1NiA0OFpNMjU2IDM0MkMyNTMuODIgMzQyIDI1MS44ODMgMzQxLjI1IDI1MC4zMDkgMzM5Ljc1TDE4Mi44NTkgMjcyLjI1QzE3OC4yNTggMjY3LjYyNSAxNzYuOTI2IDI2MC42MjUgMTc5LjM0OCAyNTQuNUMxODYuMjUgMjM2LjYyNSAyMDMuNjg4IDIyNCAyMjQuMDMxIDIyNEgyODcuOTY5QzMwOC4zMTMgMjI0IDMyNS43NSAyMzYuNjI1IDMzMi42NTIgMjU0LjVDMzM1LjA3NCAyNjAuNjI1IDMzMy43NDIgMjY3LjYyNSAzMjkuMTQxIDI3Mi4yNUwyNjEuNjkxIDMzOS43NUMyNjAuMTE3IDM0MS4yNSAyNTguMTggMzQyIDI1NiAzNDJaTTUwLjcyMyAyODhIMTUzLjMxMkwyNDAuMDE2IDM3NC42MjVWNDYzLjE4OUMxNDMuNDg4IDQ1NS43OTcgNjUuMzkxIDM4Mi4zNDIgNTAuNzIzIDI4OFpNMjcxLjk4NCA0NjMuMTg5VjM3NC42MjVMMzU4LjY4OCAyODhINDYxLjI3N0M0NDYuNjA5IDM4Mi4zNDIgMzY4LjUxMiA0NTUuNzk3IDI3MS45ODQgNDYzLjE4OVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function SteeringWheel(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 48C370.691 48 464 141.309 464 256H366.438C358.93 219.5 326.598 192 287.969 192H224.031C185.402 192 153.07 219.5 145.562 256H48C48 141.309 141.309 48 256 48ZM256 342C253.82 342 251.883 341.25 250.309 339.75L182.859 272.25C178.258 267.625 176.926 260.625 179.348 254.5C186.25 236.625 203.688 224 224.031 224H287.969C308.313 224 325.75 236.625 332.652 254.5C335.074 260.625 333.742 267.625 329.141 272.25L261.691 339.75C260.117 341.25 258.18 342 256 342ZM50.723 288H153.312L240.016 374.625V463.189C143.488 455.797 65.391 382.342 50.723 288ZM271.984 463.189V374.625L358.688 288H461.277C446.609 382.342 368.512 455.797 271.984 463.189Z" />
        </Icon>
    </>
}