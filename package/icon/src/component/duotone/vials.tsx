
import { Icon, generic } from "../../index";

/**
 * A component that renders the `vials` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vials?s=duotone vials}
 * @preview ![vials](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDY0QzAgNDYuMyAxNC4zIDMyIDMyIDMybDU2IDAgNDggMCA1NiAwYzE3LjcgMCAzMiAxNC4zIDMyIDMycy0xNC4zIDMyLTMyIDMybDAgMzA0YzAgNDQuMi0zNS44IDgwLTgwIDgwcy04MC0zNS44LTgwLTgwTDMyIDk2QzE0LjMgOTYgMCA4MS43IDAgNjR6TTg4IDk2bDAgMTYwIDAgMTQ0YzAgMTMuMyAxMC43IDI0IDI0IDI0czI0LTEwLjcgMjQtMjRsMC0xNDQgMC0xNjBMODggOTZ6TTI4OCA2NGMwLTE3LjcgMTQuMy0zMiAzMi0zMmw1NiAwIDQ4IDAgNTYgMGMxNy43IDAgMzIgMTQuMyAzMiAzMnMtMTQuMyAzMi0zMiAzMmwwIDMwNGMwIDQ0LjItMzUuOCA4MC04MCA4MHMtODAtMzUuOC04MC04MGwwLTMwNGMtMTcuNyAwLTMyLTE0LjMtMzItMzJ6bTg4IDMybDAgMTYwIDAgMTQ0YzAgMTMuMyAxMC43IDI0IDI0IDI0czI0LTEwLjcgMjQtMjRsMC0xNDQgMC0xNjAtNDggMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTEzNiAyNTZsLTQ4IDAgMCAxNDRjMCAxMy4zIDEwLjcgMjQgMjQgMjRzMjQtMTAuNyAyNC0yNGwwLTE0NHptMjg4IDBsLTQ4IDAgMCAxNDRjMCAxMy4zIDEwLjcgMjQgMjQgMjRzMjQtMTAuNyAyNC0yNGwwLTE0NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Vials: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 64C0 46.3 14.3 32 32 32l56 0 48 0 56 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 304c0 44.2-35.8 80-80 80s-80-35.8-80-80L32 96C14.3 96 0 81.7 0 64zM88 96l0 160 0 144c0 13.3 10.7 24 24 24s24-10.7 24-24l0-144 0-160L88 96zM288 64c0-17.7 14.3-32 32-32l56 0 48 0 56 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 304c0 44.2-35.8 80-80 80s-80-35.8-80-80l0-304c-17.7 0-32-14.3-32-32zm88 32l0 160 0 144c0 13.3 10.7 24 24 24s24-10.7 24-24l0-144 0-160-48 0z" />
            <path d="M136 256l-48 0 0 144c0 13.3 10.7 24 24 24s24-10.7 24-24l0-144zm288 0l-48 0 0 144c0 13.3 10.7 24 24 24s24-10.7 24-24l0-144z" />
    </Icon>
);

export default Vials;