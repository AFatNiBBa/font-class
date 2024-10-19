
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `file-user` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/file-user?s=light file-user}
 * @preview ![file-user](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNjUuMjU2IDEyNS4yNTRMMjU4Ljc0NiAxOC43NDZDMjQ2Ljc0NCA2Ljc0MiAyMzAuNDY1IDAgMjEzLjQ5IDBINjRDMjguNjU0IDAgMCAyOC42NTQgMCA2NFY0NDhDMCA0ODMuMzQ2IDI4LjY1NCA1MTIgNjQgNTEySDMyMEMzNTUuMzQ4IDUxMiAzODQgNDgzLjM0NiAzODQgNDQ4VjE3MC41MUMzODQgMTUzLjUzNSAzNzcuMjU4IDEzNy4yNTggMzY1LjI1NiAxMjUuMjU0Wk0yMjQgMzQuMDc2QzIyOC40NzcgMzUuNjQzIDIzMi42NjYgMzcuOTIyIDIzNi4xMTkgNDEuMzc1TDM0Mi42MjcgMTQ3Ljg3OUMzNDYuMDggMTUxLjMzMiAzNDguMzU3IDE1NS41MjMgMzQ5LjkyNCAxNjBIMjQwQzIzMS4xODggMTYwIDIyNCAxNTIuODI4IDIyNCAxNDRWMzQuMDc2Wk0yNzIgNDgwSDExMlY0NjRDMTEyIDQzNy40OSAxMzMuNDkgNDE2IDE2MCA0MTZIMjI0QzI1MC41MSA0MTYgMjcyIDQzNy40OSAyNzIgNDY0VjQ4MFpNMzUyIDQ0OEMzNTIgNDY1LjY0NSAzMzcuNjQ1IDQ4MCAzMjAgNDgwSDMwNFY0NjRDMzA0IDQxOS44MTYgMjY4LjE4NCAzODQgMjI0IDM4NEgxNjBDMTE1LjgxNiAzODQgODAgNDE5LjgxNiA4MCA0NjRWNDgwSDY0QzQ2LjM1NSA0ODAgMzIgNDY1LjY0NSAzMiA0NDhWNjRDMzIgNDYuMzU1IDQ2LjM1NSAzMiA2NCAzMkgxOTJWMTQ0QzE5MiAxNzAuNDY5IDIxMy41MzEgMTkyIDI0MCAxOTJIMzUyVjQ0OFpNMTkyIDIyNEMxNTYuNjU0IDIyNCAxMjggMjUyLjY1NCAxMjggMjg4UzE1Ni42NTQgMzUyIDE5MiAzNTJTMjU2IDMyMy4zNDYgMjU2IDI4OFMyMjcuMzQ2IDIyNCAxOTIgMjI0Wk0xOTIgMzIwQzE3NC4zNTUgMzIwIDE2MCAzMDUuNjQ1IDE2MCAyODhTMTc0LjM1NSAyNTYgMTkyIDI1NlMyMjQgMjcwLjM1NSAyMjQgMjg4UzIwOS42NDUgMzIwIDE5MiAzMjBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function FileUser(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M365.256 125.254L258.746 18.746C246.744 6.742 230.465 0 213.49 0H64C28.654 0 0 28.654 0 64V448C0 483.346 28.654 512 64 512H320C355.348 512 384 483.346 384 448V170.51C384 153.535 377.258 137.258 365.256 125.254ZM224 34.076C228.477 35.643 232.666 37.922 236.119 41.375L342.627 147.879C346.08 151.332 348.357 155.523 349.924 160H240C231.188 160 224 152.828 224 144V34.076ZM272 480H112V464C112 437.49 133.49 416 160 416H224C250.51 416 272 437.49 272 464V480ZM352 448C352 465.645 337.645 480 320 480H304V464C304 419.816 268.184 384 224 384H160C115.816 384 80 419.816 80 464V480H64C46.355 480 32 465.645 32 448V64C32 46.355 46.355 32 64 32H192V144C192 170.469 213.531 192 240 192H352V448ZM192 224C156.654 224 128 252.654 128 288S156.654 352 192 352S256 323.346 256 288S227.346 224 192 224ZM192 320C174.355 320 160 305.645 160 288S174.355 256 192 256S224 270.355 224 288S209.645 320 192 320Z" />
        </Icon>
    </>
}