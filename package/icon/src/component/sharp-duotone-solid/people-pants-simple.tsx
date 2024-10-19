
import { Icon, generic } from "../../index";

/**
 * A component that renders the `people-pants-simple` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/people-pants-simple?s=sharp-duotone-solid people-pants-simple}
 * @preview ![people-pants-simple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCA2NGE2NCA2NCAwIDEgMCAxMjggMEE2NCA2NCAwIDEgMCA2NCA2NHptMjU2IDBhNjQgNjQgMCAxIDAgMTI4IDBBNjQgNjQgMCAxIDAgMzIwIDY0eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzIgMTYwbDE5MiAwIDggMTkyLTQwIDAgMCAxNjBMNjQgNTEybDAtMTYwLTQwIDAgOC0xOTJ6bTI1NiAwbDE5MiAwIDggMTkyLTQwIDAgMCAxNjAtMTI4IDAgMC0xNjAtNDAgMCA4LTE5MnoiLz48L3N2Zz4=|width=32|height=32)
 */
const PeoplePantsSimple: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 64a64 64 0 1 0 128 0A64 64 0 1 0 64 64zm256 0a64 64 0 1 0 128 0A64 64 0 1 0 320 64z" />
            <path d="M32 160l192 0 8 192-40 0 0 160L64 512l0-160-40 0 8-192zm256 0l192 0 8 192-40 0 0 160-128 0 0-160-40 0 8-192z" />
    </Icon>
);

export default PeoplePantsSimple;