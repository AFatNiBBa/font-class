
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `delete-right` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/delete-right?s=regular delete-right}
 * @preview ![delete-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0wIDEyOFYzODRDMCA0MTkuMzc1IDI4LjYyNSA0NDggNjQgNDQ4SDM3MC43NUMzODcuNzUgNDQ4IDQwNCA0NDEuMjUgNDE2IDQyOS4yNUw1NjYuNjI1IDI3OC42MjVDNTc5LjEyNSAyNjYuMTI1IDU3OS4xMjUgMjQ1Ljg3NSA1NjYuNjI1IDIzMy4zNzVMNDE2IDgyLjc1QzQwNCA3MC43NSAzODcuNzUgNjQgMzcwLjc1IDY0SDY0QzI4LjYyNSA2NCAwIDkyLjYyNSAwIDEyOFpNNDggMTI4QzQ4IDExOS4xNzggNTUuMTc4IDExMiA2NCAxMTJIMzcwLjc1QzM3NS4wMTggMTEyIDM3OS4wMzMgMTEzLjY2NiAzODIuMDU5IDExNi42OTFMNTIxLjM2NyAyNTZMMzgyLjA1OSAzOTUuMzA5QzM3OS4wMzMgMzk4LjMzNCAzNzUuMDE4IDQwMCAzNzAuNzUgNDAwSDY0QzU1LjE3OCA0MDAgNDggMzkyLjgyMiA0OCAzODRWMTI4Wk0xNDMuMDMxIDIwOC45NjlMMTkwLjA2MiAyNTUuOTk4TDE0My4wMzEgMzAzLjAyOUMxMzMuNjU2IDMxMi40MDQgMTMzLjY1NiAzMjcuNTkyIDE0My4wMzEgMzM2Ljk2N0MxNTIuNDEyIDM0Ni4zNDggMTY3LjU5NiAzNDYuMzQgMTc2Ljk2OSAzMzYuOTY3TDIyNCAyODkuOTM2TDI3MS4wMzEgMzM2Ljk2N0MyODAuNDEyIDM0Ni4zNDggMjk1LjU5NiAzNDYuMzQgMzA0Ljk2OSAzMzYuOTY3QzMxNC4zNDQgMzI3LjU5MiAzMTQuMzQ0IDMxMi40MDQgMzA0Ljk2OSAzMDMuMDI5TDI1Ny45MzggMjU1Ljk5OEwzMDQuOTY5IDIwOC45NjlDMzE0LjM0NCAxOTkuNTk0IDMxNC4zNDQgMTg0LjQwNiAzMDQuOTY5IDE3NS4wMzFTMjgwLjQwNiAxNjUuNjU2IDI3MS4wMzEgMTc1LjAzMUwyMjQgMjIyLjA2MkwxNzYuOTY5IDE3NS4wMzFDMTY3LjU5NCAxNjUuNjU2IDE1Mi40MDYgMTY1LjY1NiAxNDMuMDMxIDE3NS4wMzFTMTMzLjY1NiAxOTkuNTk0IDE0My4wMzEgMjA4Ljk2OVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function DeleteRight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M0 128V384C0 419.375 28.625 448 64 448H370.75C387.75 448 404 441.25 416 429.25L566.625 278.625C579.125 266.125 579.125 245.875 566.625 233.375L416 82.75C404 70.75 387.75 64 370.75 64H64C28.625 64 0 92.625 0 128ZM48 128C48 119.178 55.178 112 64 112H370.75C375.018 112 379.033 113.666 382.059 116.691L521.367 256L382.059 395.309C379.033 398.334 375.018 400 370.75 400H64C55.178 400 48 392.822 48 384V128ZM143.031 208.969L190.062 255.998L143.031 303.029C133.656 312.404 133.656 327.592 143.031 336.967C152.412 346.348 167.596 346.34 176.969 336.967L224 289.936L271.031 336.967C280.412 346.348 295.596 346.34 304.969 336.967C314.344 327.592 314.344 312.404 304.969 303.029L257.938 255.998L304.969 208.969C314.344 199.594 314.344 184.406 304.969 175.031S280.406 165.656 271.031 175.031L224 222.062L176.969 175.031C167.594 165.656 152.406 165.656 143.031 175.031S133.656 199.594 143.031 208.969Z" />
        </Icon>
    </>
}