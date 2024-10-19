
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `circle-microphone` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-microphone?s=thin circle-microphone}
 * @preview ![circle-microphone](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUzIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ3IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTI1NiA0ODBDMTMyLjQ4NiA0ODAgMzIgMzc5LjUxNiAzMiAyNTZTMTMyLjQ4NiAzMiAyNTYgMzJTNDgwIDEzMi40ODQgNDgwIDI1NlMzNzkuNTE0IDQ4MCAyNTYgNDgwWk0zNjAgMjE2QzM1NS41NzggMjE2IDM1MiAyMTkuNTc4IDM1MiAyMjRWMjU2QzM1MiAzMDguOTM4IDMwOC45MzggMzUyIDI1NiAzNTJTMTYwIDMwOC45MzggMTYwIDI1NlYyMjRDMTYwIDIxOS41NzggMTU2LjQyMiAyMTYgMTUyIDIxNlMxNDQgMjE5LjU3OCAxNDQgMjI0VjI1NkMxNDQgMzE1LjAwOCAxOTAuMDM5IDM2My4wMDggMjQ4IDM2Ny4xOTFWNDE2QzI0OCA0MjAuNDIyIDI1MS41NzggNDI0IDI1NiA0MjRTMjY0IDQyMC40MjIgMjY0IDQxNlYzNjcuMTkxQzMyMS45NjEgMzYzLjAwOCAzNjggMzE1LjAwOCAzNjggMjU2VjIyNEMzNjggMjE5LjU3OCAzNjQuNDIyIDIxNiAzNjAgMjE2Wk0yNTYgMzIwQzI5MS4yOTcgMzIwIDMyMCAyOTEuMjk3IDMyMCAyNTZWMTYwQzMyMCAxMjQuNzAzIDI5MS4yOTcgOTYgMjU2IDk2UzE5MiAxMjQuNzAzIDE5MiAxNjBWMjU2QzE5MiAyOTEuMjk3IDIyMC43MDMgMzIwIDI1NiAzMjBaTTIwOCAxNjBDMjA4IDEzMy41MzEgMjI5LjUzMSAxMTIgMjU2IDExMlMzMDQgMTMzLjUzMSAzMDQgMTYwVjI1NkMzMDQgMjgyLjQ2OSAyODIuNDY5IDMwNCAyNTYgMzA0UzIwOCAyODIuNDY5IDIwOCAyNTZWMTYwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CircleMicrophone(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.451 16 16 123.453 16 256S123.451 496 256 496S496 388.547 496 256S388.549 16 256 16ZM256 480C132.486 480 32 379.516 32 256S132.486 32 256 32S480 132.484 480 256S379.514 480 256 480ZM360 216C355.578 216 352 219.578 352 224V256C352 308.938 308.938 352 256 352S160 308.938 160 256V224C160 219.578 156.422 216 152 216S144 219.578 144 224V256C144 315.008 190.039 363.008 248 367.191V416C248 420.422 251.578 424 256 424S264 420.422 264 416V367.191C321.961 363.008 368 315.008 368 256V224C368 219.578 364.422 216 360 216ZM256 320C291.297 320 320 291.297 320 256V160C320 124.703 291.297 96 256 96S192 124.703 192 160V256C192 291.297 220.703 320 256 320ZM208 160C208 133.531 229.531 112 256 112S304 133.531 304 160V256C304 282.469 282.469 304 256 304S208 282.469 208 256V160Z" />
        </Icon>
    </>
}