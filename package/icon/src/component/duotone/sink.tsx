
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sink` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sink?s=duotone sink}
 * @preview ![sink](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyMGMwIDE3LjcgMTQuMyAzMiAzMiAzMmw0NDggMGMxNy43IDAgMzItMTQuMyAzMi0zMnMtMTQuMy0zMi0zMi0zMmwtODAgMC00OCAwLTY0IDAtNjQgMC02NCAwLTQ4IDAtODAgMGMtMTcuNyAwLTMyIDE0LjMtMzIgMzJ6bTMyIDY0bDAgMzJjMCA1MyA0MyA5NiA5NiA5NmwyNTYgMGM1MyAwIDk2LTQzIDk2LTk2bDAtMzJMMzIgMzg0eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjg4IDk2YzAtMTcuNyAxNC4zLTMyIDMyLTMyczMyIDE0LjMgMzIgMzJzMTQuMyAzMiAzMiAzMnMzMi0xNC4zIDMyLTMyYzAtNTMtNDMtOTYtOTYtOTZzLTk2IDQzLTk2IDk2bDAgMTkyIDY0IDAgMC0xOTJ6TTU2IDIwOGMtMTMuMyAwLTI0IDEwLjctMjQgMjRzMTAuNyAyNCAyNCAyNGw0OCAwYzQuNCAwIDggMy42IDggOGwwIDI0IDQ4IDAgMC0yNGMwLTMwLjktMjUuMS01Ni01Ni01NmwtNDggMHptMzQ0IDU2YzAtNC40IDMuNi04IDgtOGw1NiAwYzEzLjMgMCAyNC0xMC43IDI0LTI0cy0xMC43LTI0LTI0LTI0bC01NiAwYy0zMC45IDAtNTYgMjUuMS01NiA1NmwwIDI0IDQ4IDAgMC0yNHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Sink: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 320c0 17.7 14.3 32 32 32l448 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-80 0-48 0-64 0-64 0-64 0-48 0-80 0c-17.7 0-32 14.3-32 32zm32 64l0 32c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-32L32 384z" />
            <path d="M288 96c0-17.7 14.3-32 32-32s32 14.3 32 32s14.3 32 32 32s32-14.3 32-32c0-53-43-96-96-96s-96 43-96 96l0 192 64 0 0-192zM56 208c-13.3 0-24 10.7-24 24s10.7 24 24 24l48 0c4.4 0 8 3.6 8 8l0 24 48 0 0-24c0-30.9-25.1-56-56-56l-48 0zm344 56c0-4.4 3.6-8 8-8l56 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-56 0c-30.9 0-56 25.1-56 56l0 24 48 0 0-24z" />
    </Icon>
);

export default Sink;