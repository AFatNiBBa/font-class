
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bold` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bold?s=sharp-duotone-solid bold}
 * @preview ![bold](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMybDMyIDAgNDggMCAxNiAwIDEyOCAwYzcwLjcgMCAxMjggNTcuMyAxMjggMTI4YzAgMzEuMy0xMS4zIDYwLjEtMzAgODIuM2MzNy4xIDIyLjQgNjIgNjMuMSA2MiAxMDkuN2MwIDcwLjctNTcuMyAxMjgtMTI4IDEyOEw5NiA0ODBsLTE2IDAtNDggMEwwIDQ4MGwwLTY0IDMyIDAgMTYgMCAwLTE2MEw0OCA5NiAzMiA5NiAwIDk2IDAgMzJ6TTIyNCAyMjRjMzUuMyAwIDY0LTI4LjcgNjQtNjRzLTI4LjctNjQtNjQtNjRMMTEyIDk2bDAgMTI4IDExMiAwek0xMTIgMjg4bDAgMTI4IDE0NCAwYzM1LjMgMCA2NC0yOC43IDY0LTY0cy0yOC43LTY0LTY0LTY0bC0zMiAwLTExMiAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSIiLz48L3N2Zz4=|width=32|height=32)
 */
const Bold: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 32l32 0 48 0 16 0 128 0c70.7 0 128 57.3 128 128c0 31.3-11.3 60.1-30 82.3c37.1 22.4 62 63.1 62 109.7c0 70.7-57.3 128-128 128L96 480l-16 0-48 0L0 480l0-64 32 0 16 0 0-160L48 96 32 96 0 96 0 32zM224 224c35.3 0 64-28.7 64-64s-28.7-64-64-64L112 96l0 128 112 0zM112 288l0 128 144 0c35.3 0 64-28.7 64-64s-28.7-64-64-64l-32 0-112 0z" />
    </Icon>
);

export default Bold;