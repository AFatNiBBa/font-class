
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-up-to-bracket` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-to-bracket?s=duotone arrow-up-to-bracket}
 * @preview ![arrow-up-to-bracket](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDk2bDAgNjRjMCAxNy43IDE0LjMgMzIgMzIgMzJzMzItMTQuMyAzMi0zMmwwLTY0YzAtMTcuNyAxNC4zLTMyIDMyLTMybDI1NiAwYzE3LjcgMCAzMiAxNC4zIDMyIDMybDAgNjRjMCAxNy43IDE0LjMgMzIgMzIgMzJzMzItMTQuMyAzMi0zMmwwLTY0YzAtNTMtNDMtOTYtOTYtOTZMOTYgMEM0MyAwIDAgNDMgMCA5NnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI0Ni42IDE2OS40Yy0xMi41LTEyLjUtMzIuOC0xMi41LTQ1LjMgMGwtMTI4IDEyOGMtMTIuNSAxMi41LTEyLjUgMzIuOCAwIDQ1LjNzMzIuOCAxMi41IDQ1LjMgMEwxOTIgMjY5LjMgMTkyIDQ4MGMwIDE3LjcgMTQuMyAzMiAzMiAzMnMzMi0xNC4zIDMyLTMybDAtMjEwLjcgNzMuNCA3My40YzEyLjUgMTIuNSAzMi44IDEyLjUgNDUuMyAwczEyLjUtMzIuOCAwLTQ1LjNsLTEyOC0xMjh6Ii8+PC9zdmc+|width=32|height=32)
 */
const ArrowUpToBracket: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 96l0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64c0-17.7 14.3-32 32-32l256 0c17.7 0 32 14.3 32 32l0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64c0-53-43-96-96-96L96 0C43 0 0 43 0 96z" />
            <path d="M246.6 169.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 269.3 192 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-210.7 73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128z" />
    </Icon>
);

export default ArrowUpToBracket;