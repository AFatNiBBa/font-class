
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pen-fancy` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-fancy?s=sharp-duotone-solid pen-fancy}
 * @preview ![pen-fancy](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05LjEgNDgwLjNsODgtODhjLS43LTIuNi0xLjEtNS40LTEuMS04LjNjMC0xNy43IDE0LjMtMzIgMzItMzJzMzIgMTQuMyAzMiAzMnMtMTQuMyAzMi0zMiAzMmMtMi45IDAtNS42LS40LTguMy0xLjFsLTg4IDg4TDIyNCA0NDhjMTYtNDIuNyAzMi04NS4zIDQ4LTEyOGMtMjYuNy0yNi43LTUzLjMtNTMuMy04MC04MGMtNDIuNyAxNi04NS4zIDMyLTEyOCA0OEw5LjEgNDgwLjN6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik00MTYgMEwxOTIgMjQwbDgwIDgwTDUxMiA5NiA0MTYgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const PenFancy: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M9.1 480.3l88-88c-.7-2.6-1.1-5.4-1.1-8.3c0-17.7 14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32c-2.9 0-5.6-.4-8.3-1.1l-88 88L224 448c16-42.7 32-85.3 48-128c-26.7-26.7-53.3-53.3-80-80c-42.7 16-85.3 32-128 48L9.1 480.3z" />
            <path d="M416 0L192 240l80 80L512 96 416 0z" />
    </Icon>
);

export default PenFancy;