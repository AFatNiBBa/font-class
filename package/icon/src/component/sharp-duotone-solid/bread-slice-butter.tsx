
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bread-slice-butter` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bread-slice-butter?s=sharp-duotone-solid bread-slice-butter}
 * @preview ![bread-slice-butter](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNjggMjg4bDg4IDg4IDg4LTg4LTg4LTg4LTg4IDg4eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMCAxOTJDMCA2NCAxOTIgMzIgMjU2IDMyczI1NiAzMiAyNTYgMTYwYzAgMzUuMy0yOC43IDY0LTY0IDY0bDAgMjI0TDY0IDQ4MGwwLTIyNGMtMzUuMyAwLTY0LTI4LjctNjQtNjR6TTI1NiAzNzZsODgtODgtODgtODgtODggODggODggODh6Ii8+PC9zdmc+|width=32|height=32)
 */
const BreadSliceButter: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M168 288l88 88 88-88-88-88-88 88z" />
            <path d="M0 192C0 64 192 32 256 32s256 32 256 160c0 35.3-28.7 64-64 64l0 224L64 480l0-224c-35.3 0-64-28.7-64-64zM256 376l88-88-88-88-88 88 88 88z" />
    </Icon>
);

export default BreadSliceButter;