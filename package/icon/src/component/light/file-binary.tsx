
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `file-binary` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/file-binary?s=light file-binary}
 * @preview ![file-binary](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNjUuMjU2IDEyNS4yNTRMMjU4Ljc0NiAxOC43NDZDMjQ2Ljc0NCA2Ljc0MiAyMzAuNDY1IDAgMjEzLjQ5IDBINjRDMjguNjU0IDAgMCAyOC42NTQgMCA2NFY0NDhDMCA0ODMuMzQ2IDI4LjY1NCA1MTIgNjQgNTEySDMyMEMzNTUuMzQ4IDUxMiAzODQgNDgzLjM0NiAzODQgNDQ4VjE3MC41MUMzODQgMTUzLjUzNSAzNzcuMjU4IDEzNy4yNTggMzY1LjI1NiAxMjUuMjU0Wk0yMjQgMzQuMDc2QzIyOC40NzcgMzUuNjQzIDIzMi42NjYgMzcuOTIyIDIzNi4xMTkgNDEuMzc1TDM0Mi42MjcgMTQ3Ljg3OUMzNDYuMDggMTUxLjMzMiAzNDguMzU3IDE1NS41MjMgMzQ5LjkyNCAxNjBIMjQwQzIzMS4xODggMTYwIDIyNCAxNTIuODI4IDIyNCAxNDRWMzQuMDc2Wk0zNTIgNDQ4QzM1MiA0NjUuNjQ1IDMzNy42NDUgNDgwIDMyMCA0ODBINjRDNDYuMzU1IDQ4MCAzMiA0NjUuNjQ1IDMyIDQ0OFY2NEMzMiA0Ni4zNTUgNDYuMzU1IDMyIDY0IDMySDE5MlYxNDRDMTkyIDE3MC40NjkgMjEzLjUzMSAxOTIgMjQwIDE5MkgzNTJWNDQ4Wk0yMjQgMjcyQzIyNCAyODAuODQ0IDIzMS4xNTYgMjg4IDI0MCAyODhIMjU2VjM4NEgyNDBDMjMxLjE1NiAzODQgMjI0IDM5MS4xNTYgMjI0IDQwMFMyMzEuMTU2IDQxNiAyNDAgNDE2SDMwNEMzMTIuODQ0IDQxNiAzMjAgNDA4Ljg0NCAzMjAgNDAwUzMxMi44NDQgMzg0IDMwNCAzODRIMjg4VjI3MkMyODggMjYzLjE1NiAyODAuODQ0IDI1NiAyNzIgMjU2SDI0MEMyMzEuMTU2IDI1NiAyMjQgMjYzLjE1NiAyMjQgMjcyWk0xNDQgMjU2SDExMkM4NS41MzEgMjU2IDY0IDI3Ny41MzEgNjQgMzA0VjM2OEM2NCAzOTQuNDY5IDg1LjUzMSA0MTYgMTEyIDQxNkgxNDRDMTcwLjQ2OSA0MTYgMTkyIDM5NC40NjkgMTkyIDM2OFYzMDRDMTkyIDI3Ny41MzEgMTcwLjQ2OSAyNTYgMTQ0IDI1NlpNMTYwIDM2OEMxNjAgMzc2LjgyOCAxNTIuODEyIDM4NCAxNDQgMzg0SDExMkMxMDMuMTg4IDM4NCA5NiAzNzYuODI4IDk2IDM2OFYzMDRDOTYgMjk1LjE3MiAxMDMuMTg4IDI4OCAxMTIgMjg4SDE0NEMxNTIuODEyIDI4OCAxNjAgMjk1LjE3MiAxNjAgMzA0VjM2OFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function FileBinary(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M365.256 125.254L258.746 18.746C246.744 6.742 230.465 0 213.49 0H64C28.654 0 0 28.654 0 64V448C0 483.346 28.654 512 64 512H320C355.348 512 384 483.346 384 448V170.51C384 153.535 377.258 137.258 365.256 125.254ZM224 34.076C228.477 35.643 232.666 37.922 236.119 41.375L342.627 147.879C346.08 151.332 348.357 155.523 349.924 160H240C231.188 160 224 152.828 224 144V34.076ZM352 448C352 465.645 337.645 480 320 480H64C46.355 480 32 465.645 32 448V64C32 46.355 46.355 32 64 32H192V144C192 170.469 213.531 192 240 192H352V448ZM224 272C224 280.844 231.156 288 240 288H256V384H240C231.156 384 224 391.156 224 400S231.156 416 240 416H304C312.844 416 320 408.844 320 400S312.844 384 304 384H288V272C288 263.156 280.844 256 272 256H240C231.156 256 224 263.156 224 272ZM144 256H112C85.531 256 64 277.531 64 304V368C64 394.469 85.531 416 112 416H144C170.469 416 192 394.469 192 368V304C192 277.531 170.469 256 144 256ZM160 368C160 376.828 152.812 384 144 384H112C103.188 384 96 376.828 96 368V304C96 295.172 103.188 288 112 288H144C152.812 288 160 295.172 160 304V368Z" />
        </Icon>
    </>
}