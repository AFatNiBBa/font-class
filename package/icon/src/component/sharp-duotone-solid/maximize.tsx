
import { Icon, generic } from "../../index";

/**
 * A component that renders the `maximize` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/maximize?s=sharp-duotone-solid maximize}
 * @preview ![maximize](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiAzMmwwIDE2MCAzMiAzMiA1Mi01MiA4NCA4NCA1Ni01Ni04NC04NCA1Mi01MkwxOTIgMzIgMzIgMzJ6TTI1NiAzMTJsODQgODQtNTIgNTIgMzIgMzIgMTYwIDAgMC0xNjAtMzItMzItNTIgNTItODQtODQtNTYgNTZ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik00ODAgMTkybC0zMiAzMi01Mi01MkwxNzIgMzk2bDUyIDUyLTMyIDMyTDMyIDQ4MGwwLTE2MCAzMi0zMiA1MiA1MkwzNDAgMTE2IDI4OCA2NGwzMi0zMiAxNjAgMCAwIDE2MHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Maximize: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 32l0 160 32 32 52-52 84 84 56-56-84-84 52-52L192 32 32 32zM256 312l84 84-52 52 32 32 160 0 0-160-32-32-52 52-84-84-56 56z" />
            <path d="M480 192l-32 32-52-52L172 396l52 52-32 32L32 480l0-160 32-32 52 52L340 116 288 64l32-32 160 0 0 160z" />
    </Icon>
);

export default Maximize;