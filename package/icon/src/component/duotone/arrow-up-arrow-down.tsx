
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-up-arrow-down` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-arrow-down?s=duotone arrow-up-arrow-down}
 * @preview ![arrow-up-arrow-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yODggMzUyYzAgOC4yIDMuMSAxNi40IDkuNCAyMi42bDk2IDk2YzYuMiA2LjIgMTQuNCA5LjQgMjIuNiA5LjRzMTYuNC0zLjEgMjIuNi05LjRsOTYtOTZjNi4yLTYuMiA5LjQtMTQuNCA5LjQtMjIuNnMtMy4xLTE2LjQtOS40LTIyLjZjLTEyLjUtMTIuNS0zMi44LTEyLjUtNDUuMyAwTDQ0OCAzNzAuNyA0NDggNjRjMC0xNy43LTE0LjMtMzItMzItMzJzLTMyIDE0LjMtMzIgMzJsMCAzMDYuNy00MS40LTQxLjRjLTEyLjUtMTIuNS0zMi44LTEyLjUtNDUuMyAwYy02LjIgNi4yLTkuNCAxNC40LTkuNCAyMi42eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTM3LjQgNDEuNGMxMi41LTEyLjUgMzIuOC0xMi41IDQ1LjMgMGw5NiA5NmMxMi41IDEyLjUgMTIuNSAzMi44IDAgNDUuM3MtMzIuOCAxMi41LTQ1LjMgMEwxOTIgMTQxLjMgMTkyIDQ0OGMwIDE3LjctMTQuMyAzMi0zMiAzMnMtMzItMTQuMy0zMi0zMmwwLTMwNi43TDg2LjYgMTgyLjZjLTEyLjUgMTIuNS0zMi44IDEyLjUtNDUuMyAwcy0xMi41LTMyLjggMC00NS4zbDk2LTk2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ArrowUpArrowDown: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M288 352c0 8.2 3.1 16.4 9.4 22.6l96 96c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4l96-96c6.2-6.2 9.4-14.4 9.4-22.6s-3.1-16.4-9.4-22.6c-12.5-12.5-32.8-12.5-45.3 0L448 370.7 448 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7-41.4-41.4c-12.5-12.5-32.8-12.5-45.3 0c-6.2 6.2-9.4 14.4-9.4 22.6z" />
            <path d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l96 96c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L192 141.3 192 448c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-306.7L86.6 182.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l96-96z" />
    </Icon>
);

export default ArrowUpArrowDown;