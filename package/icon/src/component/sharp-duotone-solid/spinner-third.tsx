
import { Icon, generic } from "../../index";

/**
 * A component that renders the `spinner-third` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/spinner-third?s=sharp-duotone-solid spinner-third}
 * @preview ![spinner-third](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NkMwIDM5Ny40IDExNC42IDUxMiAyNTYgNTEyYzk0LjcgMCAxNzcuNS01MS41IDIyMS43LTEyOGwtNTUuNC0zMmMtMzMuMiA1Ny40LTk1LjIgOTYtMTY2LjMgOTZDMTUwIDQ0OCA2NCAzNjIgNjQgMjU2UzE1MCA2NCAyNTYgNjRsMC02NEMxMTQuNiAwIDAgMTE0LjYgMCAyNTZ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik00NzcuNyAzODRjMjEuOC0zNy43IDM0LjMtODEuNCAzNC4zLTEyOEM1MTIgMTE0LjYgMzk3LjQgMCAyNTYgMGwwIDY0YzEwNiAwIDE5MiA4NiAxOTIgMTkyYzAgMzUtOS40IDY3LjgtMjUuNyA5Nmw1NS40IDMyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const SpinnerThird: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256C0 397.4 114.6 512 256 512c94.7 0 177.5-51.5 221.7-128l-55.4-32c-33.2 57.4-95.2 96-166.3 96C150 448 64 362 64 256S150 64 256 64l0-64C114.6 0 0 114.6 0 256z" />
            <path d="M477.7 384c21.8-37.7 34.3-81.4 34.3-128C512 114.6 397.4 0 256 0l0 64c106 0 192 86 192 192c0 35-9.4 67.8-25.7 96l55.4 32z" />
    </Icon>
);

export default SpinnerThird;