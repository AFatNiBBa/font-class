
import { Icon, generic } from "../../index";

/**
 * A component that renders the `rainbow` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rainbow?s=sharp-duotone-solid rainbow}
 * @preview ![rainbow](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiAzNTJsMCA5NiAwIDMyIDY0IDAgMC0zMiAwLTk2YzAtODguNCA3MS42LTE2MCAxNjAtMTYwczE2MCA3MS42IDE2MCAxNjBsMCA5NiAwIDMyIDY0IDAgMC0zMiAwLTk2YzAtMTIzLjctMTAwLjMtMjI0LTIyNC0yMjRTOTYgMjI4LjMgOTYgMzUyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNjQgMzUyQzY0IDIxMC42IDE3OC42IDk2IDMyMCA5NnMyNTYgMTE0LjYgMjU2IDI1NmwwIDk2IDAgMzIgNjQgMCAwLTMyIDAtOTZDNjQwIDE3NS4zIDQ5Ni43IDMyIDMyMCAzMlMwIDE3NS4zIDAgMzUybDAgOTYgMCAzMiA2NCAwIDAtMzIgMC05NnptMTkyIDBjMC0zNS4zIDI4LjctNjQgNjQtNjRzNjQgMjguNyA2NCA2NGwwIDk2IDAgMzIgNjQgMCAwLTMyIDAtOTZjMC03MC43LTU3LjMtMTI4LTEyOC0xMjhzLTEyOCA1Ny4zLTEyOCAxMjhsMCA5NiAwIDMyIDY0IDAgMC0zMiAwLTk2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Rainbow: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 352l0 96 0 32 64 0 0-32 0-96c0-88.4 71.6-160 160-160s160 71.6 160 160l0 96 0 32 64 0 0-32 0-96c0-123.7-100.3-224-224-224S96 228.3 96 352z" />
            <path d="M64 352C64 210.6 178.6 96 320 96s256 114.6 256 256l0 96 0 32 64 0 0-32 0-96C640 175.3 496.7 32 320 32S0 175.3 0 352l0 96 0 32 64 0 0-32 0-96zm192 0c0-35.3 28.7-64 64-64s64 28.7 64 64l0 96 0 32 64 0 0-32 0-96c0-70.7-57.3-128-128-128s-128 57.3-128 128l0 96 0 32 64 0 0-32 0-96z" />
    </Icon>
);

export default Rainbow;