
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-visor` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-visor?s=sharp-duotone-solid user-visor}
 * @preview ![user-visor](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMDUuMyAxNzZsMjM3LjQgMGMtMTkgNDYuOS02NSA4MC0xMTguNyA4MHMtOTkuNy0zMy4xLTExOC43LTgwek0xMjQuMSA0OEMxNDcuNSAxOC43IDE4My42IDAgMjI0IDBzNzYuNSAxOC43IDk5LjkgNDhMMTI0LjEgNDh6TTI4MCA0NTZjMTMuMy0yOS4zIDI2LjctNTguNyA0MC04OGw0MCA4OC04IDgtMjQtMjRjLTEzLjMgOC0yNi43IDE2LTQwIDI0Yy0yLjctMi43LTUuMy01LjMtOC04eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNODAgNDhsMCAxMjggMjg4IDAgMC0xMjhMODAgNDh6bTQ4IDQ4bDE2IDAgMTYwIDAgMTYgMCAwIDMyLTE2IDAtMTYwIDAtMTYgMCAwLTMyek0zODQgMzA0TDY0IDMwNCAwIDUxMmw0NDggMEwzODQgMzA0ek0zMjggNDQwbC00MCAyNC04LTggNDAtODggNDAgODgtOCA4LTI0LTI0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const UserVisor: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M105.3 176l237.4 0c-19 46.9-65 80-118.7 80s-99.7-33.1-118.7-80zM124.1 48C147.5 18.7 183.6 0 224 0s76.5 18.7 99.9 48L124.1 48zM280 456c13.3-29.3 26.7-58.7 40-88l40 88-8 8-24-24c-13.3 8-26.7 16-40 24c-2.7-2.7-5.3-5.3-8-8z" />
            <path d="M80 48l0 128 288 0 0-128L80 48zm48 48l16 0 160 0 16 0 0 32-16 0-160 0-16 0 0-32zM384 304L64 304 0 512l448 0L384 304zM328 440l-40 24-8-8 40-88 40 88-8 8-24-24z" />
    </Icon>
);

export default UserVisor;