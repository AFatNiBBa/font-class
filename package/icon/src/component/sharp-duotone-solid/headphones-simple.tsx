
import { Icon, generic } from "../../index";

/**
 * A component that renders the `headphones-simple` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/headphones-simple?s=sharp-duotone-solid headphones-simple}
 * @preview ![headphones-simple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI4OEwwIDM5MmwwIDI0IDQ4IDAgMC0yNCAwLTEwNEM0OCAxNzMuMSAxNDEuMSA4MCAyNTYgODBzMjA4IDkzLjEgMjA4IDIwOGwwIDEwNCAwIDI0IDQ4IDAgMC0yNCAwLTEwNEM1MTIgMTQ2LjYgMzk3LjQgMzIgMjU2IDMyUzAgMTQ2LjYgMCAyODh6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xOTIgMjg4TDgwIDI4OGwwIDE5MiAxMTIgMCAwLTE5MnptMTI4IDBsMCAxOTIgMTEyIDAgMC0xOTItMTEyIDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const HeadphonesSimple: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 288L0 392l0 24 48 0 0-24 0-104C48 173.1 141.1 80 256 80s208 93.1 208 208l0 104 0 24 48 0 0-24 0-104C512 146.6 397.4 32 256 32S0 146.6 0 288z" />
            <path d="M192 288L80 288l0 192 112 0 0-192zm128 0l0 192 112 0 0-192-112 0z" />
    </Icon>
);

export default HeadphonesSimple;