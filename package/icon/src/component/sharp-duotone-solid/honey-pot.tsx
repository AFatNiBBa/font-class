
import { Icon, generic } from "../../index";

/**
 * A component that renders the `honey-pot` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/honey-pot?s=sharp-duotone-solid honey-pot}
 * @preview ![honey-pot](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDIyNGw0NDggMGMwIDUwLjQtMTAuNSA5My0yNS41IDEyOGwtMzk3IDBDMTAuNSAzMTcgMCAyNzQuNCAwIDIyNHpNMTI4IDMybDQ4IDAgMCAxMDQgMCAyNC00OCAwIDAtMjQgMC0xMDR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik02NCAzMmw2NCAwIDAgMTA0IDAgMjQgNDggMCAwLTI0IDAtMTA0IDIwOCAwIDMyIDAgMCA2NC0zMiAwYzM4LjkgMjkuMiA2NCA3NS43IDY0IDEyOEwwIDIyNGMwLTUyLjMgMjUuMS05OC44IDY0LTEyOEwzMiA5NmwwLTY0IDMyIDB6TTI1LjUgMzUybDM5NyAwQzM4NS4yIDQzOS4zIDMyMCA0ODAgMzIwIDQ4MGwtMTkyIDBzLTY1LjItNDAuNy0xMDIuNS0xMjh6Ii8+PC9zdmc+|width=32|height=32)
 */
const HoneyPot: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 224l448 0c0 50.4-10.5 93-25.5 128l-397 0C10.5 317 0 274.4 0 224zM128 32l48 0 0 104 0 24-48 0 0-24 0-104z" />
            <path d="M64 32l64 0 0 104 0 24 48 0 0-24 0-104 208 0 32 0 0 64-32 0c38.9 29.2 64 75.7 64 128L0 224c0-52.3 25.1-98.8 64-128L32 96l0-64 32 0zM25.5 352l397 0C385.2 439.3 320 480 320 480l-192 0s-65.2-40.7-102.5-128z" />
    </Icon>
);

export default HoneyPot;