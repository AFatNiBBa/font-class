
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-user` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-user?s=sharp-duotone-solid square-user}
 * @preview ![square-user](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMybDY0IDAgMzIwIDAgNjQgMCAwIDY0IDAgMzIwIDAgNjQtNjQgMEw2NCA0ODAgMCA0ODBsMC02NEwwIDk2IDAgMzJ6TTgwIDQxNmwyODggMC0zMi05Ni0yMjQgMEw4MCA0MTZ6bTcyLTIxNmE3MiA3MiAwIDEgMCAxNDQgMCA3MiA3MiAwIDEgMCAtMTQ0IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yMjQgMTI4YTcyIDcyIDAgMSAxIDAgMTQ0IDcyIDcyIDAgMSAxIDAtMTQ0ek04MCA0MTZsMzItOTYgMjI0IDAgMzIgOTZMODAgNDE2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const SquareUser: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32l64 0 320 0 64 0 0 64 0 320 0 64-64 0L64 480 0 480l0-64L0 96 0 32zM80 416l288 0-32-96-224 0L80 416zm72-216a72 72 0 1 0 144 0 72 72 0 1 0 -144 0z" />
            <path d="M224 128a72 72 0 1 1 0 144 72 72 0 1 1 0-144zM80 416l32-96 224 0 32 96L80 416z" />
    </Icon>
);

export default SquareUser;