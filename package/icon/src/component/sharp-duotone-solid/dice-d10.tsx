
import { Icon, generic } from "../../index";

/**
 * A component that renders the `dice-d10` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dice-d10?s=sharp-duotone-solid dice-d10}
 * @preview ![dice-d10](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmwwIDEuNCAxMzkuNy0zMUwyMTUuMSAwIDE5MiAwIDAgMjU2em0xNzEtMjIuM2w4NSA1OC45IDg1LTU4LjlMMjYzLjEgMCAyNDguOSAwIDE3MSAyMzMuN3pNMjk2LjkgMGw3NS40IDIyNi4zIDEzOS43IDMxIDAtMS40TDMyMCAwIDI5Ni45IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yNDAgNTEyTDEuOSAyODkuOGwxNDYuOC0zMi42TDI0MCAzMjAuNCAyNDAgNTEyek01MTAuMSAyODkuOEwyNzIgNTEybDAtMTkxLjYgOTEuNC02My4yIDE0Ni44IDMyLjZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const DiceD10: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256l0 1.4 139.7-31L215.1 0 192 0 0 256zm171-22.3l85 58.9 85-58.9L263.1 0 248.9 0 171 233.7zM296.9 0l75.4 226.3 139.7 31 0-1.4L320 0 296.9 0z" />
            <path d="M240 512L1.9 289.8l146.8-32.6L240 320.4 240 512zM510.1 289.8L272 512l0-191.6 91.4-63.2 146.8 32.6z" />
    </Icon>
);

export default DiceD10;