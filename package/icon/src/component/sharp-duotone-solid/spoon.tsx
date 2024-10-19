
import { Icon, generic } from "../../index";

/**
 * A component that renders the `spoon` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/spoon?s=sharp-duotone-solid spoon}
 * @preview ![spoon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yMjQgMTYwLjJsMCAzOS42YzcuMiA3LjIgMTQuMyAxNC4zIDIxLjUgMjEuNWMyLjIgMi4yIDQuNCA0LjQgNi42IDYuNmMxMC43IDEwLjcgMjEuMyAyMS4zIDMyIDMyYzIuMiAyLjIgNC40IDQuNCA2LjYgNi42TDMxMi4yIDI4OGwzOS42IDBDNDMyIDI4OCA1MTIgMTkyIDUxMiA5NmMwLTUzLTQzLTk2LTk2LTk2QzMyMCAwIDIyNCA4MCAyMjQgMTYwLjJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yNDUuNSAyMjEuM2w2LjYgNi42IDMyIDMyIDYuNiA2LjZMNzAuNiA0ODYuNiA0OCA1MDkuMyAyLjcgNDY0bDIyLjYtMjIuNkwyNDUuNSAyMjEuM3oiLz48L3N2Zz4=|width=32|height=32)
 */
const Spoon: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M224 160.2l0 39.6c7.2 7.2 14.3 14.3 21.5 21.5c2.2 2.2 4.4 4.4 6.6 6.6c10.7 10.7 21.3 21.3 32 32c2.2 2.2 4.4 4.4 6.6 6.6L312.2 288l39.6 0C432 288 512 192 512 96c0-53-43-96-96-96C320 0 224 80 224 160.2z" />
            <path d="M245.5 221.3l6.6 6.6 32 32 6.6 6.6L70.6 486.6 48 509.3 2.7 464l22.6-22.6L245.5 221.3z" />
    </Icon>
);

export default Spoon;