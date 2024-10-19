
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-microphone-lines` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-microphone-lines?s=thin circle-microphone-lines}
 * @preview ![circle-microphone-lines](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMzIwQzI5MS4yOTcgMzIwIDMyMCAyOTEuMjk3IDMyMCAyNTZWMTYwQzMyMCAxMjQuNzAzIDI5MS4yOTcgOTYgMjU2IDk2UzE5MiAxMjQuNzAzIDE5MiAxNjBWMjU2QzE5MiAyOTEuMjk3IDIyMC43MDMgMzIwIDI1NiAzMjBaTTIwOCAxNjBDMjA4IDEzMy41MzEgMjI5LjUzMSAxMTIgMjU2IDExMlMzMDQgMTMzLjUzMSAzMDQgMTYwSDI1NkMyNTEuNTc4IDE2MCAyNDggMTYzLjU3OCAyNDggMTY4UzI1MS41NzggMTc2IDI1NiAxNzZIMzA0VjIyNEgyNTZDMjUxLjU3OCAyMjQgMjQ4IDIyNy41NzggMjQ4IDIzMlMyNTEuNTc4IDI0MCAyNTYgMjQwSDMwNFYyNTZDMzA0IDI4Mi40NjkgMjgyLjQ2OSAzMDQgMjU2IDMwNFMyMDggMjgyLjQ2OSAyMDggMjU2VjE2MFpNMzYwIDIxNkMzNTUuNTc4IDIxNiAzNTIgMjE5LjU3OCAzNTIgMjI0VjI1NkMzNTIgMzA4LjkzOCAzMDguOTM4IDM1MiAyNTYgMzUyUzE2MCAzMDguOTM4IDE2MCAyNTZWMjI0QzE2MCAyMTkuNTc4IDE1Ni40MjIgMjE2IDE1MiAyMTZTMTQ0IDIxOS41NzggMTQ0IDIyNFYyNTZDMTQ0IDMxNS4wMDggMTkwLjAzOSAzNjMuMDA4IDI0OCAzNjcuMTkxVjQxNkMyNDggNDIwLjQyMiAyNTEuNTc4IDQyNCAyNTYgNDI0UzI2NCA0MjAuNDIyIDI2NCA0MTZWMzY3LjE5MUMzMjEuOTYxIDM2My4wMDggMzY4IDMxNS4wMDggMzY4IDI1NlYyMjRDMzY4IDIxOS41NzggMzY0LjQyMiAyMTYgMzYwIDIxNlpNMjU2IDE2QzEyMy40NTEgMTYgMTYgMTIzLjQ1MyAxNiAyNTZTMTIzLjQ1MSA0OTYgMjU2IDQ5NlM0OTYgMzg4LjU0NyA0OTYgMjU2UzM4OC41NDkgMTYgMjU2IDE2Wk0yNTYgNDgwQzEzMi40ODYgNDgwIDMyIDM3OS41MTYgMzIgMjU2UzEzMi40ODYgMzIgMjU2IDMyUzQ4MCAxMzIuNDg0IDQ4MCAyNTZTMzc5LjUxNCA0ODAgMjU2IDQ4MFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CircleMicrophoneLines(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 320C291.297 320 320 291.297 320 256V160C320 124.703 291.297 96 256 96S192 124.703 192 160V256C192 291.297 220.703 320 256 320ZM208 160C208 133.531 229.531 112 256 112S304 133.531 304 160H256C251.578 160 248 163.578 248 168S251.578 176 256 176H304V224H256C251.578 224 248 227.578 248 232S251.578 240 256 240H304V256C304 282.469 282.469 304 256 304S208 282.469 208 256V160ZM360 216C355.578 216 352 219.578 352 224V256C352 308.938 308.938 352 256 352S160 308.938 160 256V224C160 219.578 156.422 216 152 216S144 219.578 144 224V256C144 315.008 190.039 363.008 248 367.191V416C248 420.422 251.578 424 256 424S264 420.422 264 416V367.191C321.961 363.008 368 315.008 368 256V224C368 219.578 364.422 216 360 216ZM256 16C123.451 16 16 123.453 16 256S123.451 496 256 496S496 388.547 496 256S388.549 16 256 16ZM256 480C132.486 480 32 379.516 32 256S132.486 32 256 32S480 132.484 480 256S379.514 480 256 480Z" />
        </Icon>
    </>
}