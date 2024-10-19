
import { Icon, generic } from "../../index";

/**
 * A component that renders the `computer` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/computer?s=sharp-duotone-solid computer}
 * @preview ![computer](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik00ODAgMzJsMCA0NDggMTYwIDAgMC00NDhMNDgwIDMyem00OCA2NGwxNiAwIDMyIDAgMTYgMCAwIDMyLTE2IDAtMzIgMC0xNiAwIDAtMzJ6bTAgNjRsMTYgMCAzMiAwIDE2IDAgMCAzMi0xNiAwLTMyIDAtMTYgMCAwLTMyem02NCAyMDhhMzIgMzIgMCAxIDEgLTY0IDAgMzIgMzIgMCAxIDEgNjQgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTM4NCA5NmwwIDIyNEw2NCAzMjAgNjQgOTZsMzIwIDB6TTY0IDMyTDAgMzIgMCA5NiAwIDMyMGwwIDY0IDY0IDAgMTE3LjMgMC0xMC43IDMyTDY0IDQxNmwwIDY0IDMyMCAwIDAtNjQtMTA2LjcgMC0xMC43LTMyTDM4NCAzODRsNjQgMCAwLTY0IDAtMjI0IDAtNjQtNjQgMEw2NCAzMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Computer: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M480 32l0 448 160 0 0-448L480 32zm48 64l16 0 32 0 16 0 0 32-16 0-32 0-16 0 0-32zm0 64l16 0 32 0 16 0 0 32-16 0-32 0-16 0 0-32zm64 208a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
            <path d="M384 96l0 224L64 320 64 96l320 0zM64 32L0 32 0 96 0 320l0 64 64 0 117.3 0-10.7 32L64 416l0 64 320 0 0-64-106.7 0-10.7-32L384 384l64 0 0-64 0-224 0-64-64 0L64 32z" />
    </Icon>
);

export default Computer;