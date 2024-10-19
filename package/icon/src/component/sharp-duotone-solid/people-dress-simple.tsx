
import { Icon, generic } from "../../index";

/**
 * A component that renders the `people-dress-simple` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/people-dress-simple?s=sharp-duotone-solid people-dress-simple}
 * @preview ![people-dress-simple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCA2NGE2NCA2NCAwIDEgMCAxMjggMEE2NCA2NCAwIDEgMCA2NCA2NHptMjU2IDBhNjQgNjQgMCAxIDAgMTI4IDBBNjQgNjQgMCAxIDAgMzIwIDY0eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNjQgMTYwbDEyOCAwIDY0IDIyNC02NCAwIDAgMTI4TDY0IDUxMmwwLTEyOEwwIDM4NCA2NCAxNjB6TTI1NiAzODRsNjQtMjI0IDEyOCAwIDY0IDIyNC02NCAwIDAgMTI4LTEyOCAwIDAtMTI4LTY0IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const PeopleDressSimple: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 64a64 64 0 1 0 128 0A64 64 0 1 0 64 64zm256 0a64 64 0 1 0 128 0A64 64 0 1 0 320 64z" />
            <path d="M64 160l128 0 64 224-64 0 0 128L64 512l0-128L0 384 64 160zM256 384l64-224 128 0 64 224-64 0 0 128-128 0 0-128-64 0z" />
    </Icon>
);

export default PeopleDressSimple;