
import { Icon, generic } from "../../index";

/**
 * A component that renders the `lollipop` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lollipop?s=sharp-duotone-solid lollipop}
 * @preview ![lollipop](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMDMuMiAzNDguNWMxNy41LTEyLjUgMzIuOC0yNy44IDQ1LjMtNDUuM0w1MTAuNiA0NjUuNGwtNDUuMyA0NS4zTDMwMy4yIDM0OC41eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNDggMTkyYzAgNTcuNCA0Ni42IDEwNCAxMDQgMTA0bDggMGM1MyAwIDk2LTQzIDk2LTk2bDAtOGMwLTM1LjMtMjguNy02NC02NC02NHMtNjQgMjguNy02NCA2NGMwIDEzLjMgMTAuNyAyNCAyNCAyNHMyNC0xMC43IDI0LTI0bDAtMTYgNDggMCAwIDE2YzAgMzkuOC0zMi4yIDcyLTcyIDcycy03Mi0zMi4yLTcyLTcyYzAtNjEuOSA1MC4xLTExMiAxMTItMTEyczExMiA1MC4xIDExMiAxMTJsMCA4YzAgNjEuNi0zOC43IDExNC4yLTkzLjIgMTM0LjhDMjgxLjQgMzI1LjYgMzM2IDI2NS4yIDMzNiAxOTJjMC03OS41LTY0LjUtMTQ0LTE0NC0xNDRTNDggMTEyLjUgNDggMTkyek0wIDE5MmExOTIgMTkyIDAgMSAxIDM4NCAwQTE5MiAxOTIgMCAxIDEgMCAxOTJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const Lollipop: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M303.2 348.5c17.5-12.5 32.8-27.8 45.3-45.3L510.6 465.4l-45.3 45.3L303.2 348.5z" />
            <path d="M48 192c0 57.4 46.6 104 104 104l8 0c53 0 96-43 96-96l0-8c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 13.3 10.7 24 24 24s24-10.7 24-24l0-16 48 0 0 16c0 39.8-32.2 72-72 72s-72-32.2-72-72c0-61.9 50.1-112 112-112s112 50.1 112 112l0 8c0 61.6-38.7 114.2-93.2 134.8C281.4 325.6 336 265.2 336 192c0-79.5-64.5-144-144-144S48 112.5 48 192zM0 192a192 192 0 1 1 384 0A192 192 0 1 1 0 192z" />
    </Icon>
);

export default Lollipop;