
import { Icon, generic } from "../../index";

/**
 * A component that renders the `minimize` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/minimize?s=sharp-duotone-solid minimize}
 * @preview ![minimize](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQ1Nmw1NiA1NiA4NC04NCA1MiA1MiAzMi0zMiAwLTE2MEw2NCAyODggMzIgMzIwbDUyIDUyTDAgNDU2ek0yODggNjRsMCAxNjAgMTYwIDAgMzItMzItNTItNTIgODQtODRMNDU2IDAgMzcyIDg0IDMyMCAzMiAyODggNjR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yMjQgNjRMMTkyIDMyIDE0MCA4NCA1NiAwIDAgNTZsODQgODRMMzIgMTkybDMyIDMyIDE2MCAwIDAtMTYwem02NCAzODRsMzIgMzIgNTItNTIgODQgODQgNTYtNTYtODQtODQgNTItNTItMzItMzItMTYwIDAgMCAxNjB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Minimize: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 456l56 56 84-84 52 52 32-32 0-160L64 288 32 320l52 52L0 456zM288 64l0 160 160 0 32-32-52-52 84-84L456 0 372 84 320 32 288 64z" />
            <path d="M224 64L192 32 140 84 56 0 0 56l84 84L32 192l32 32 160 0 0-160zm64 384l32 32 52-52 84 84 56-56-84-84 52-52-32-32-160 0 0 160z" />
    </Icon>
);

export default Minimize;