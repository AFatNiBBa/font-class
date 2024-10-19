
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-turn-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-turn-right?s=sharp-duotone-solid arrow-turn-right}
 * @preview ![arrow-turn-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE5MmwwIDMyTDAgNDQ4bDAgMzIgNjQgMCAwLTMyIDAtMTkyIDMyMi43IDAgMzItMzItMzItMzJMMzIgMTkyIDAgMTkyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzM2IDM5Ny4zbDIyLjYtMjIuNiAxMjgtMTI4TDUwOS4zIDIyNGwtMjIuNi0yMi42LTEyOC0xMjhMMzM2IDUwLjcgMjkwLjcgOTZsMjIuNiAyMi42TDQxOC43IDIyNCAzMTMuNCAzMjkuNCAyOTAuNyAzNTIgMzM2IDM5Ny4zeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ArrowTurnRight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 192l0 32L0 448l0 32 64 0 0-32 0-192 322.7 0 32-32-32-32L32 192 0 192z" />
            <path d="M336 397.3l22.6-22.6 128-128L509.3 224l-22.6-22.6-128-128L336 50.7 290.7 96l22.6 22.6L418.7 224 313.4 329.4 290.7 352 336 397.3z" />
    </Icon>
);

export default ArrowTurnRight;