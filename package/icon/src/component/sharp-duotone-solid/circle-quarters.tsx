
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-quarters` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-quarters?s=sharp-duotone-solid circle-quarters}
 * @preview ![circle-quarters](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMjAuMiAxMjAuMkwyNTYgMjU2IDM5MS44IDEyMC4yQzM1NyA4NS41IDMwOSA2NCAyNTYgNjRzLTEwMSAyMS41LTEzNS44IDU2LjJ6bTAgMjcxLjVDMTU1IDQyNi41IDIwMyA0NDggMjU2IDQ0OHMxMDEtMjEuNSAxMzUuOC01Ni4yTDI1NiAyNTYgMTIwLjIgMzkxLjh6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yNTYgNjRhMTkyIDE5MiAwIDEgMSAwIDM4NCAxOTIgMTkyIDAgMSAxIDAtMzg0em0wIDQ0OEEyNTYgMjU2IDAgMSAwIDI1NiAwYTI1NiAyNTYgMCAxIDAgMCA1MTJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const CircleQuarters: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M120.2 120.2L256 256 391.8 120.2C357 85.5 309 64 256 64s-101 21.5-135.8 56.2zm0 271.5C155 426.5 203 448 256 448s101-21.5 135.8-56.2L256 256 120.2 391.8z" />
            <path d="M256 64a192 192 0 1 1 0 384 192 192 0 1 1 0-384zm0 448A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
    </Icon>
);

export default CircleQuarters;