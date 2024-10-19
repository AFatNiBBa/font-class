
import { Icon, generic } from "../../index";

/**
 * A component that renders the `worm` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/worm?s=sharp-duotone-solid worm}
 * @preview ![worm](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMxMkwwIDQ2NGwwIDQ4IDk2IDAgMC00OCAwLTE1MmMwLTMwLjkgMjUuMS01NiA1Ni01NnM1NiAyNS4xIDU2IDU2bDAgNDhjMCA4My45IDY4LjEgMTUyIDE1MiAxNTJzMTUyLTY4LjEgMTUyLTE1MmwwLTE2OCAwLTE2IDAtNDhMNTEyIDAgMzg0IDBjLTUzIDAtOTYgNDMtOTYgOTZzNDMgOTYgOTYgOTZsMzIgMCAwIDE2OGMwIDMwLjktMjUuMSA1Ni01NiA1NnMtNTYtMjUuMS01Ni01NmwwLTQ4YzAtODMuOS02OC4xLTE1Mi0xNTItMTUyUzAgMjI4LjEgMCAzMTJ6TTQzMiA4OGEyNCAyNCAwIDEgMSAtNDggMCAyNCAyNCAwIDEgMSA0OCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzg0IDg4YTI0IDI0IDAgMSAxIDQ4IDAgMjQgMjQgMCAxIDEgLTQ4IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Worm: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 312L0 464l0 48 96 0 0-48 0-152c0-30.9 25.1-56 56-56s56 25.1 56 56l0 48c0 83.9 68.1 152 152 152s152-68.1 152-152l0-168 0-16 0-48L512 0 384 0c-53 0-96 43-96 96s43 96 96 96l32 0 0 168c0 30.9-25.1 56-56 56s-56-25.1-56-56l0-48c0-83.9-68.1-152-152-152S0 228.1 0 312zM432 88a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z" />
            <path d="M384 88a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
    </Icon>
);

export default Worm;