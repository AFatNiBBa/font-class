
import { Icon, generic } from "../../index";

/**
 * A component that renders the `location-check` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-check?s=sharp-duotone-solid location-check}
 * @preview ![location-check](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE5MkMwIDMwNCAxOTIgNTEyIDE5MiA1MTJzMTkyLTIwOCAxOTItMzIwQzM4NCA4NiAyOTggMCAxOTIgMFMwIDg2IDAgMTkyem04MS43IDMuNmMxMS4zLTExLjMgMjIuNi0yMi42IDMzLjktMzMuOWw0OS43IDQ5LjdjMzQuMy0zNC40IDY4LjctNjguNyAxMDMtMTAzYzExLjMgMTEuMyAyMi42IDIyLjYgMzMuOSAzMy45bC0xMjAgMTIwLTE3IDE3LTE3LTE3Yy0yMi4yLTIyLjItNDQuNC00NC40LTY2LjctNjYuN3oiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTMwMi4zIDE0Mi4zbC0xMjAgMTIwLTE3IDE3LTE3LTE3TDgxLjcgMTk1LjZsMzMuOS0zMy45IDQ5LjcgNDkuNyAxMDMtMTAzIDMzLjkgMzMuOXoiLz48L3N2Zz4=|width=32|height=32)
 */
const LocationCheck: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 192C0 304 192 512 192 512s192-208 192-320C384 86 298 0 192 0S0 86 0 192zm81.7 3.6c11.3-11.3 22.6-22.6 33.9-33.9l49.7 49.7c34.3-34.4 68.7-68.7 103-103c11.3 11.3 22.6 22.6 33.9 33.9l-120 120-17 17-17-17c-22.2-22.2-44.4-44.4-66.7-66.7z" />
            <path d="M302.3 142.3l-120 120-17 17-17-17L81.7 195.6l33.9-33.9 49.7 49.7 103-103 33.9 33.9z" />
    </Icon>
);

export default LocationCheck;