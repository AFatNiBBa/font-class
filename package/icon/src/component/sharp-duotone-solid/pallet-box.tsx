
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pallet-box` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pallet-box?s=sharp-duotone-solid pallet-box}
 * @preview ![pallet-box](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyMGwwIDY0IDMyIDAgMzIgMCAwIDY0LTMyIDBMMCA0NDhsMCA2NCAzMiAwIDY0IDAgMjI0IDAgMjI0IDAgNjQgMCAzMiAwIDAtNjQtMzIgMC0zMiAwIDAtNjQgMzIgMCAzMiAwIDAtNjQtMzIgMC02NCAwLTIyNCAwTDk2IDMyMGwtNjQgMEwwIDMyMHptMTI4IDY0bDE2MCAwIDAgNjQtMTYwIDAgMC02NHpNMjU2IDBsMCAxMjggNjQtNDggNjQgNDhMMzg0IDAgMjU2IDB6bTk2IDM4NGwxNjAgMCAwIDY0LTE2MCAwIDAtNjR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yNTYgMEwxMjggMGwwIDI1NiAzODQgMEw1MTIgMCAzODQgMGwwIDEyOEwzMjAgODBsLTY0IDQ4TDI1NiAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const PalletBox: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 320l0 64 32 0 32 0 0 64-32 0L0 448l0 64 32 0 64 0 224 0 224 0 64 0 32 0 0-64-32 0-32 0 0-64 32 0 32 0 0-64-32 0-64 0-224 0L96 320l-64 0L0 320zm128 64l160 0 0 64-160 0 0-64zM256 0l0 128 64-48 64 48L384 0 256 0zm96 384l160 0 0 64-160 0 0-64z" />
            <path d="M256 0L128 0l0 256 384 0L512 0 384 0l0 128L320 80l-64 48L256 0z" />
    </Icon>
);

export default PalletBox;