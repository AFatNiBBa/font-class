
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `delete-right` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/delete-right?s=duotone delete-right}
 * @preview ![delete-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTAgMTI4VjM4NEMwIDQxOS4zNzUgMjguNjI1IDQ0OCA2NCA0NDhIMzcwLjc1QzM4Ny43NSA0NDggNDA0IDQ0MS4yNSA0MTYgNDI5LjI1TDU2Ni42MjUgMjc4LjYyNUM1NzkuMTI1IDI2Ni4xMjUgNTc5LjEyNSAyNDUuODc1IDU2Ni42MjUgMjMzLjM3NUw0MTYgODIuNzVDNDA0IDcwLjc1IDM4Ny43NSA2NCAzNzAuNzUgNjRINjRDMjguNjI1IDY0IDAgOTIuNjI1IDAgMTI4Wk0xOTAuMDYyIDI1NS45OThMMTQzLjAzMSAyMDguOTY5QzEzMy42NTYgMTk5LjU5NCAxMzMuNjU2IDE4NC40MDYgMTQzLjAzMSAxNzUuMDMxUzE2Ny41OTQgMTY1LjY1NiAxNzYuOTY5IDE3NS4wMzFMMjI0IDIyMi4wNjJMMjcxLjAzMSAxNzUuMDMxQzI4MC40MDYgMTY1LjY1NiAyOTUuNTk0IDE2NS42NTYgMzA0Ljk2OSAxNzUuMDMxUzMxNC4zNDQgMTk5LjU5NCAzMDQuOTY5IDIwOC45NjlMMjU3LjkzOCAyNTUuOTk4TDMwNC45NjkgMzAzLjAyOUMzMTQuMzQ0IDMxMi40MDQgMzE0LjM0NCAzMjcuNTkyIDMwNC45NjkgMzM2Ljk2N0MyOTUuNTk2IDM0Ni4zNCAyODAuNDEyIDM0Ni4zNDggMjcxLjAzMSAzMzYuOTY3TDIyNCAyODkuOTM2TDE3Ni45NjkgMzM2Ljk2N0MxNjcuNTk2IDM0Ni4zNCAxNTIuNDEyIDM0Ni4zNDggMTQzLjAzMSAzMzYuOTY3QzEzMy42NTYgMzI3LjU5MiAxMzMuNjU2IDMxMi40MDQgMTQzLjAzMSAzMDMuMDI5TDE5MC4wNjIgMjU1Ljk5OFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMTkwLjA2MyAyNTUuOTk5TDE0My4wMzEgMjA4Ljk2OEMxMzMuNjU2IDE5OS41OTMgMTMzLjY1NiAxODQuNDA2IDE0My4wMzEgMTc1LjAzMVMxNjcuNTk0IDE2NS42NTYgMTc2Ljk2OSAxNzUuMDMxTDIyNCAyMjIuMDYyTDI3MS4wMzEgMTc1LjAzMUMyODAuNDA2IDE2NS42NTYgMjk1LjU5NCAxNjUuNjU2IDMwNC45NjkgMTc1LjAzMVMzMTQuMzQ0IDE5OS41OTMgMzA0Ljk2OSAyMDguOTY4TDI1Ny45MzggMjU1Ljk5OUwzMDQuOTY5IDMwMy4wM0MzMTQuMzQ0IDMxMi40MDUgMzE0LjM0NCAzMjcuNTkyIDMwNC45NjkgMzM2Ljk2N0MyOTUuNTk2IDM0Ni4zNCAyODAuNDEyIDM0Ni4zNDggMjcxLjAzMSAzMzYuOTY3TDIyNCAyODkuOTM2TDE3Ni45NjkgMzM2Ljk2N0MxNjcuNTk2IDM0Ni4zNCAxNTIuNDEyIDM0Ni4zNDggMTQzLjAzMSAzMzYuOTY3QzEzMy42NTYgMzI3LjU5MiAxMzMuNjU2IDMxMi40MDUgMTQzLjAzMSAzMDMuMDNMMTkwLjA2MyAyNTUuOTk5WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function DeleteRight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path opacity={.4} d="M0 128V384C0 419.375 28.625 448 64 448H370.75C387.75 448 404 441.25 416 429.25L566.625 278.625C579.125 266.125 579.125 245.875 566.625 233.375L416 82.75C404 70.75 387.75 64 370.75 64H64C28.625 64 0 92.625 0 128ZM190.062 255.998L143.031 208.969C133.656 199.594 133.656 184.406 143.031 175.031S167.594 165.656 176.969 175.031L224 222.062L271.031 175.031C280.406 165.656 295.594 165.656 304.969 175.031S314.344 199.594 304.969 208.969L257.938 255.998L304.969 303.029C314.344 312.404 314.344 327.592 304.969 336.967C295.596 346.34 280.412 346.348 271.031 336.967L224 289.936L176.969 336.967C167.596 346.34 152.412 346.348 143.031 336.967C133.656 327.592 133.656 312.404 143.031 303.029L190.062 255.998Z" />
            <path d="M190.063 255.999L143.031 208.968C133.656 199.593 133.656 184.406 143.031 175.031S167.594 165.656 176.969 175.031L224 222.062L271.031 175.031C280.406 165.656 295.594 165.656 304.969 175.031S314.344 199.593 304.969 208.968L257.938 255.999L304.969 303.03C314.344 312.405 314.344 327.592 304.969 336.967C295.596 346.34 280.412 346.348 271.031 336.967L224 289.936L176.969 336.967C167.596 346.34 152.412 346.348 143.031 336.967C133.656 327.592 133.656 312.405 143.031 303.03L190.063 255.999Z" />
        </Icon>
    </>
}