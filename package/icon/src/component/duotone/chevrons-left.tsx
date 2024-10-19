
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chevrons-left` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevrons-left?s=duotone chevrons-left}
 * @preview ![chevrons-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yMjQgMjU2YzAgOC4yIDMuMSAxNi40IDkuNCAyMi42bDE5MiAxOTJjNi4yIDYuMiAxNC40IDkuNCAyMi42IDkuNHMxNi40LTMuMSAyMi42LTkuNGMxMi41LTEyLjUgMTIuNS0zMi44IDAtNDUuM0wzMDEuMyAyNTYgNDcwLjYgODYuNmMxMi41LTEyLjUgMTIuNS0zMi44IDAtNDUuM0M0NjQuNCAzNS4xIDQ1Ni4yIDMyIDQ0OCAzMnMtMTYuNCAzLjEtMjIuNiA5LjRsLTE5MiAxOTJjLTYuMiA2LjItOS40IDE0LjQtOS40IDIyLjZ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik00MS40IDI3OC42Yy0xMi41LTEyLjUtMTIuNS0zMi44IDAtNDUuM2wxOTItMTkyYzEyLjUtMTIuNSAzMi44LTEyLjUgNDUuMyAwczEyLjUgMzIuOCAwIDQ1LjNMMTA5LjMgMjU2IDI3OC42IDQyNS40YzEyLjUgMTIuNSAxMi41IDMyLjggMCA0NS4zcy0zMi44IDEyLjUtNDUuMyAwbC0xOTItMTkyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ChevronsLeft: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M224 256c0 8.2 3.1 16.4 9.4 22.6l192 192c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4c12.5-12.5 12.5-32.8 0-45.3L301.3 256 470.6 86.6c12.5-12.5 12.5-32.8 0-45.3C464.4 35.1 456.2 32 448 32s-16.4 3.1-22.6 9.4l-192 192c-6.2 6.2-9.4 14.4-9.4 22.6z" />
            <path d="M41.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l192-192c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L109.3 256 278.6 425.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-192-192z" />
    </Icon>
);

export default ChevronsLeft;