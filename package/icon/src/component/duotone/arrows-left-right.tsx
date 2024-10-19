
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrows-left-right` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-left-right?s=duotone arrows-left-right}
 * @preview ![arrows-left-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yNTYgMjI0bDAgNjQgMTQ2LjcgMC00MS40IDQxLjRjLTEyLjUgMTIuNS0xMi41IDMyLjggMCA0NS4zYzYuMiA2LjIgMTQuNCA5LjQgMjIuNiA5LjRzMTYuNC0zLjEgMjIuNi05LjRsOTYtOTZjNi4yLTYuMiA5LjQtMTQuNCA5LjQtMjIuNnMtMy4xLTE2LjQtOS40LTIyLjZsLTk2LTk2Yy02LjItNi4yLTE0LjQtOS40LTIyLjYtOS40cy0xNi40IDMuMS0yMi42IDkuNGMtMTIuNSAxMi41LTEyLjUgMzIuOCAwIDQ1LjNMNDAyLjcgMjI0IDI1NiAyMjR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik05LjQgMjMzLjRjLTEyLjUgMTIuNS0xMi41IDMyLjggMCA0NS4zbDk2IDk2YzEyLjUgMTIuNSAzMi44IDEyLjUgNDUuMyAwczEyLjUtMzIuOCAwLTQ1LjNMMTA5LjMgMjg4IDI1NiAyODhsMC02NC0xNDYuNyAwIDQxLjQtNDEuNGMxMi41LTEyLjUgMTIuNS0zMi44IDAtNDUuM3MtMzIuOC0xMi41LTQ1LjMgMGwtOTYgOTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const ArrowsLeftRight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M256 224l0 64 146.7 0-41.4 41.4c-12.5 12.5-12.5 32.8 0 45.3c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4l96-96c6.2-6.2 9.4-14.4 9.4-22.6s-3.1-16.4-9.4-22.6l-96-96c-6.2-6.2-14.4-9.4-22.6-9.4s-16.4 3.1-22.6 9.4c-12.5 12.5-12.5 32.8 0 45.3L402.7 224 256 224z" />
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 256 288l0-64-146.7 0 41.4-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-96 96z" />
    </Icon>
);

export default ArrowsLeftRight;