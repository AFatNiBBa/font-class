
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `snowman-head` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/snowman-head?s=thin snowman-head}
 * @preview ![snowman-head](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik04OCAxNzZDOTIuNDIyIDE3NiA5NiAxNzIuNDA2IDk2IDE2OFY0MEM5NiAyNi43ODEgMTA2Ljc2NiAxNiAxMjAgMTZIMzI4QzM0MS4yMzQgMTYgMzUyIDI2Ljc4MSAzNTIgNDBWMTY4QzM1MiAxNzIuNDA2IDM1NS41NzggMTc2IDM2MCAxNzZTMzY4IDE3Mi40MDYgMzY4IDE2OFY0MEMzNjggMTcuOTM4IDM1MC4wNjMgMCAzMjggMEgxMjBDOTcuOTM4IDAgODAgMTcuOTM4IDgwIDQwVjE2OEM4MCAxNzIuNDA2IDgzLjU3OCAxNzYgODggMTc2Wk00NDAgMjA4SDM1Ni40NTNIOTEuODkxSDhDMy41NzggMjA4IDAgMjExLjU5NCAwIDIxNlMzLjU3OCAyMjQgOCAyMjRINzUuMzA3QzQ3Ljc1NiAyNTguMDcgMzIgMjk5Ljc1OCAzMiAzNDRDMzIgNDA1Ljk2OSA2Mi4yNjYgNDY0LjQ2OSAxMTIuOTUzIDUwMC41QzEyMy41NjMgNTA4LjAzMSAxMzcuMDc4IDUxMiAxNTIuMDMxIDUxMkgyOTUuNUMzMTEuMjM0IDUxMiAzMjYuODU5IDUwNi43NSAzMzkuNSA0OTcuMjE5QzM5OC44MjggNDUyLjQ2OSA0MjYuNjcyIDM3OC44NDQgNDEyLjE1NiAzMDUuMTI1QzQwNi4zNDggMjc1LjUxNiAzOTIuODY3IDI0Ny45NDkgMzczLjU4MiAyMjRINDQwQzQ0NC40MjIgMjI0IDQ0OCAyMjAuNDA2IDQ0OCAyMTZTNDQ0LjQyMiAyMDggNDQwIDIwOFpNMzk2LjQ2OSAzMDguMTg4QzQwOS43ODEgMzc1Ljg3NSAzODQuMjY2IDQ0My40MDYgMzI5Ljg3NSA0ODQuNDY5QzMxOS45ODQgNDkxLjkwNiAzMDcuNzgxIDQ5NiAyOTUuNSA0OTZIMTUyLjAzMUMxNDMuOTIyIDQ5NiAxMzIuMTcyIDQ5NC41MzEgMTIyLjIxOSA0ODcuNDM4Qzc1Ljc1IDQ1NC40MzggNDggNDAwLjgxMiA0OCAzNDRDNDggMjk5LjE4OCA2NC43ODEgMjU2LjcxOSA5NS4zMjggMjI0SDM1My4wMTZDMzc1LjMyOCAyNDggMzkwLjMyOCAyNzcuMDMxIDM5Ni40NjkgMzA4LjE4OFpNMTQ0IDMyMEMxMzUuMTY0IDMyMCAxMjggMzEyLjgzNiAxMjggMzA0UzEzNS4xNjQgMjg4IDE0NCAyODhDMTUyLjgzOCAyODggMTYwIDI5NS4xNjQgMTYwIDMwNFMxNTIuODM4IDMyMCAxNDQgMzIwWk0zMDQgMzIwQzI5NS4xNjQgMzIwIDI4OCAzMTIuODM2IDI4OCAzMDRTMjk1LjE2NCAyODggMzA0IDI4OEMzMTIuODM4IDI4OCAzMjAgMjk1LjE2NCAzMjAgMzA0UzMxMi44MzggMzIwIDMwNCAzMjBaTTIyNCAzMzZDMTk3LjUzMyAzMzYgMTc2IDM1Ny41MzEgMTc2IDM4NEMxNzYgNDA0LjUyNyAyMDAuMzY3IDQ0MS45NjEgMjEwLjg0MiA0NTcuMTA1QzIxMy44MzIgNDYxLjQyMiAyMTguNzQ4IDQ2NCAyMjQgNDY0UzIzNC4xNyA0NjEuNDIyIDIzNy4xNTggNDU3LjEwNUMyNDcuNjM1IDQ0MS45NjEgMjcyIDQwNC41MjcgMjcyIDM4NEMyNzIgMzU3LjUzMSAyNTAuNDY3IDMzNiAyMjQgMzM2Wk0yMjQgNDQ4QzIyNCA0NDggMTkyIDQwMS43NSAxOTIgMzg0UzIwNi4yNSAzNTIgMjI0IDM1MlMyNTYgMzY2LjI1IDI1NiAzODRTMjI0IDQ0OCAyMjQgNDQ4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function SnowmanHead(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M88 176C92.422 176 96 172.406 96 168V40C96 26.781 106.766 16 120 16H328C341.234 16 352 26.781 352 40V168C352 172.406 355.578 176 360 176S368 172.406 368 168V40C368 17.938 350.063 0 328 0H120C97.938 0 80 17.938 80 40V168C80 172.406 83.578 176 88 176ZM440 208H356.453H91.891H8C3.578 208 0 211.594 0 216S3.578 224 8 224H75.307C47.756 258.07 32 299.758 32 344C32 405.969 62.266 464.469 112.953 500.5C123.563 508.031 137.078 512 152.031 512H295.5C311.234 512 326.859 506.75 339.5 497.219C398.828 452.469 426.672 378.844 412.156 305.125C406.348 275.516 392.867 247.949 373.582 224H440C444.422 224 448 220.406 448 216S444.422 208 440 208ZM396.469 308.188C409.781 375.875 384.266 443.406 329.875 484.469C319.984 491.906 307.781 496 295.5 496H152.031C143.922 496 132.172 494.531 122.219 487.438C75.75 454.438 48 400.812 48 344C48 299.188 64.781 256.719 95.328 224H353.016C375.328 248 390.328 277.031 396.469 308.188ZM144 320C135.164 320 128 312.836 128 304S135.164 288 144 288C152.838 288 160 295.164 160 304S152.838 320 144 320ZM304 320C295.164 320 288 312.836 288 304S295.164 288 304 288C312.838 288 320 295.164 320 304S312.838 320 304 320ZM224 336C197.533 336 176 357.531 176 384C176 404.527 200.367 441.961 210.842 457.105C213.832 461.422 218.748 464 224 464S234.17 461.422 237.158 457.105C247.635 441.961 272 404.527 272 384C272 357.531 250.467 336 224 336ZM224 448C224 448 192 401.75 192 384S206.25 352 224 352S256 366.25 256 384S224 448 224 448Z" />
        </Icon>
    </>
}