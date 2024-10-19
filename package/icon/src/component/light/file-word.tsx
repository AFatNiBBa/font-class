
import { Icon } from "../../index";

/**
 * A component that renders the `file-word` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/file-word?s=light file-word}
 * @preview ![file-word](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNzcuMTQxIDI1MC4wNjJMMTMzLjE0MSAzNjAuMDc4TDExMS42ODggMjUyLjg1OUMxMDkuOTY5IDI0NC4yMDMgMTAxLjU3OCAyMzguNTMxIDkyLjg1OSAyNDAuMzEzQzg0LjIwMyAyNDIuMDQ3IDc4LjU3OCAyNTAuNDY5IDgwLjMxMiAyNTkuMTQxTDExMi4zMTIgNDE5LjE0MUMxMTMuNzAzIDQyNi4wNzggMTE5LjQ4NCA0MzEuMjgxIDEyNi41MzEgNDMxLjkzN0MxMzMuNzgxIDQzMi41OTQgMTQwLjIzNCA0MjguNTE2IDE0Mi44NTkgNDIxLjkzN0wxOTIgMjk5LjA3OEwyNDEuMTQxIDQyMS45MzhDMjQzLjU5NCA0MjguMDYyIDI0OS41IDQzMiAyNTYgNDMyQzI1Ni40ODQgNDMyIDI1Ni45NjkgNDMxLjk4NCAyNTcuNDY5IDQzMS45MzhDMjY0LjUxNiA0MzEuMjgxIDI3MC4yOTcgNDI2LjA3OCAyNzEuNjg3IDQxOS4xNDFMMzAzLjY4NyAyNTkuMTQxQzMwNS40MjIgMjUwLjQ2OSAyOTkuNzk3IDI0Mi4wNDcgMjkxLjE0MSAyNDAuMzEzQzI4Mi4zNTkgMjM4LjUgMjc0LjAzMSAyNDQuMTg4IDI3Mi4zMTIgMjUyLjg1OUwyNTAuODU5IDM2MC4wNzhMMjA2Ljg1OSAyNTAuMDYyQzIwMS45ODQgMjM3LjkwNiAxODIuMDE2IDIzNy45MDYgMTc3LjE0MSAyNTAuMDYyWk0zNjUuMjU2IDEyNS4yNTRMMjU4Ljc0NiAxOC43NDZDMjQ2Ljc0NCA2Ljc0MiAyMzAuNDY1IDAgMjEzLjQ5IDBINjRDMjguNjU0IDAgMCAyOC42NTQgMCA2NFY0NDhDMCA0ODMuMzQ2IDI4LjY1NCA1MTIgNjQgNTEySDMyMEMzNTUuMzQ4IDUxMiAzODQgNDgzLjM0NiAzODQgNDQ4VjE3MC41MUMzODQgMTUzLjUzNSAzNzcuMjU4IDEzNy4yNTggMzY1LjI1NiAxMjUuMjU0Wk0yMjQgMzQuMDc2QzIyOC40NzcgMzUuNjQzIDIzMi42NjYgMzcuOTIyIDIzNi4xMTkgNDEuMzc1TDM0Mi42MjcgMTQ3Ljg3OUMzNDYuMDggMTUxLjMzMiAzNDguMzU3IDE1NS41MjMgMzQ5LjkyNCAxNjBIMjQwQzIzMS4xODggMTYwIDIyNCAxNTIuODI4IDIyNCAxNDRWMzQuMDc2Wk0zNTIgNDQ4QzM1MiA0NjUuNjQ1IDMzNy42NDUgNDgwIDMyMCA0ODBINjRDNDYuMzU1IDQ4MCAzMiA0NjUuNjQ1IDMyIDQ0OFY2NEMzMiA0Ni4zNTUgNDYuMzU1IDMyIDY0IDMySDE5MlYxNDRDMTkyIDE3MC40NjkgMjEzLjUzMSAxOTIgMjQwIDE5MkgzNTJWNDQ4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
const FileWord: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M177.141 250.062L133.141 360.078L111.688 252.859C109.969 244.203 101.578 238.531 92.859 240.313C84.203 242.047 78.578 250.469 80.312 259.141L112.312 419.141C113.703 426.078 119.484 431.281 126.531 431.937C133.781 432.594 140.234 428.516 142.859 421.937L192 299.078L241.141 421.938C243.594 428.062 249.5 432 256 432C256.484 432 256.969 431.984 257.469 431.938C264.516 431.281 270.297 426.078 271.687 419.141L303.687 259.141C305.422 250.469 299.797 242.047 291.141 240.313C282.359 238.5 274.031 244.188 272.312 252.859L250.859 360.078L206.859 250.062C201.984 237.906 182.016 237.906 177.141 250.062ZM365.256 125.254L258.746 18.746C246.744 6.742 230.465 0 213.49 0H64C28.654 0 0 28.654 0 64V448C0 483.346 28.654 512 64 512H320C355.348 512 384 483.346 384 448V170.51C384 153.535 377.258 137.258 365.256 125.254ZM224 34.076C228.477 35.643 232.666 37.922 236.119 41.375L342.627 147.879C346.08 151.332 348.357 155.523 349.924 160H240C231.188 160 224 152.828 224 144V34.076ZM352 448C352 465.645 337.645 480 320 480H64C46.355 480 32 465.645 32 448V64C32 46.355 46.355 32 64 32H192V144C192 170.469 213.531 192 240 192H352V448Z" />
    </Icon>
);

export default FileWord;