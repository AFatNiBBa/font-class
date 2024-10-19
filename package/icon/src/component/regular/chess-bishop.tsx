
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `chess-bishop` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/chess-bishop?s=regular chess-bishop}
 * @preview ![chess-bishop](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yOTYgNDY0SDI0QzEwLjc0NSA0NjQgMCA0NzQuNzQ1IDAgNDg4VjQ4OEMwIDUwMS4yNTUgMTAuNzQ1IDUxMiAyNCA1MTJIMjk2QzMwOS4yNTUgNTEyIDMyMCA1MDEuMjU1IDMyMCA0ODhWNDg4QzMyMCA0NzQuNzQ1IDMwOS4yNTUgNDY0IDI5NiA0NjRaTTAgMzA0QzAgMzU1LjYyNSAzMC4xMjUgMzg5LjI1IDY0IDQwMFY0MzJIMTEyVjM2NC44NzVMNzguNSAzNTQuMjVDNjMuNzUgMzQ5LjUgNDggMzMzLjg3NSA0OCAzMDRDNDggMjI5LjM3NSAxMTQuMTI1IDEzOC4yNSAxNDkuMzc1IDEwMi4xMjVDMTU1LjM3NSA5NiAxNjUuMzc1IDk1Ljg3NSAxNzEuNjI1IDEwMS44NzVDMTg0LjI1IDExMy43NSAyMDUuNjI1IDEzNy41IDIzMC44NzUgMTgzLjI1TDE2NC43NSAyNDkuMzc1QzE1OC41IDI1NS42MjUgMTU4LjUgMjY1Ljc1IDE2NC43NSAyNzJMMTc2IDI4My4yNUMxODIuMjUgMjg5LjUgMTkyLjM3NSAyODkuNSAxOTguNjI1IDI4My4yNUwyNTMgMjI5QzI2NC4zNzUgMjU2Ljc1IDI3MiAyODMuNSAyNzIgMzA0QzI3MiAzMzMuODc1IDI1Ni4yNSAzNDkuNSAyNDEuNSAzNTQuMjVMMjA4IDM2NC44NzVWNDMySDI1NlY0MDBDMjg5Ljg3NSAzODkuMjUgMzIwIDM1NS42MjUgMzIwIDMwNEMzMjAgMjMwLjYyNSAyNTIuMjUgMTA2Ljc1IDE5OS4zNzUgNjIuNUMyMTMuMzc1IDU5LjEyNSAyMjQgNDcgMjI0IDMyQzIyNCAxNC4zNzUgMjA5LjYyNSAwIDE5MiAwSDEyOEMxMTAuMzc1IDAgOTYgMTQuMzc1IDk2IDMyQzk2IDQ3IDEwNi42MjUgNTkuMTI1IDEyMC42MjUgNjIuNUM2Ny43NSAxMDYuNzUgMCAyMzAuNjI1IDAgMzA0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ChessBishop(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M296 464H24C10.745 464 0 474.745 0 488V488C0 501.255 10.745 512 24 512H296C309.255 512 320 501.255 320 488V488C320 474.745 309.255 464 296 464ZM0 304C0 355.625 30.125 389.25 64 400V432H112V364.875L78.5 354.25C63.75 349.5 48 333.875 48 304C48 229.375 114.125 138.25 149.375 102.125C155.375 96 165.375 95.875 171.625 101.875C184.25 113.75 205.625 137.5 230.875 183.25L164.75 249.375C158.5 255.625 158.5 265.75 164.75 272L176 283.25C182.25 289.5 192.375 289.5 198.625 283.25L253 229C264.375 256.75 272 283.5 272 304C272 333.875 256.25 349.5 241.5 354.25L208 364.875V432H256V400C289.875 389.25 320 355.625 320 304C320 230.625 252.25 106.75 199.375 62.5C213.375 59.125 224 47 224 32C224 14.375 209.625 0 192 0H128C110.375 0 96 14.375 96 32C96 47 106.625 59.125 120.625 62.5C67.75 106.75 0 230.625 0 304Z" />
        </Icon>
    </>
}