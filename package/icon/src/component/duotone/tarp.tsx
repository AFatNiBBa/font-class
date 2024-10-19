
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tarp` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tarp?s=duotone tarp}
 * @preview ![tarp](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDEyOEwwIDM4NGMwIDM1LjMgMjguNyA2NCA2NCA2NGwzNTIgMCAwLTEyOGMwLTE3LjcgMTQuMy0zMiAzMi0zMmwxMjggMCAwLTE2MGMwLTM1LjMtMjguNy02NC02NC02NEw2NCA2NEMyOC43IDY0IDAgOTIuNyAwIDEyOHptMTI4IDMyYTMyIDMyIDAgMSAxIC02NCAwIDMyIDMyIDAgMSAxIDY0IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik01NzYgMjg4TDQxNiA0NDhsMC0xMjhjMC0xNy43IDE0LjMtMzIgMzItMzJsMTI4IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Tarp: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 128L0 384c0 35.3 28.7 64 64 64l352 0 0-128c0-17.7 14.3-32 32-32l128 0 0-160c0-35.3-28.7-64-64-64L64 64C28.7 64 0 92.7 0 128zm128 32a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
            <path d="M576 288L416 448l0-128c0-17.7 14.3-32 32-32l128 0z" />
    </Icon>
);

export default Tarp;