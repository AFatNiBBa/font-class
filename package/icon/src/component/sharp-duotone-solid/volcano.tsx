
import { Icon, generic } from "../../index";

/**
 * A component that renders the `volcano` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/volcano?s=sharp-duotone-solid volcano}
 * @preview ![volcano](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQ0MGwwIDcyIDUxMiAwIDAtNzJMNDE4LjUgMzM0LjggMzIwIDM4NGwtODAtNjRMMTI4IDM1MiA5Ni43IDMzMS4yIDAgNDQweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTYwIDE0NGw0OCAwIDMyIDQ4IDMyIDAgMzItNDggNDggMGMzNS4zIDAgNjQtMjguNyA2NC02NHMtMjguNy02NC02NC02NGMtMTUuNyAwLTMwIDUuNi00MS4yIDE1QzI5OS42IDEyLjQgMjc5LjMgMCAyNTYgMHMtNDMuNiAxMi40LTU0LjggMzFDMTkwIDIxLjYgMTc1LjcgMTYgMTYwIDE2Yy0zNS4zIDAtNjQgMjguNy02NCA2NHMyOC43IDY0IDY0IDY0em04MCAxNzZsODAgNjQgOTguNS00OS4yTDMyMCAyMjRsLTEyOCAwTDk2LjcgMzMxLjIgMTI4IDM1MmwxMTItMzJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const Volcano: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 440l0 72 512 0 0-72L418.5 334.8 320 384l-80-64L128 352 96.7 331.2 0 440z" />
            <path d="M160 144l48 0 32 48 32 0 32-48 48 0c35.3 0 64-28.7 64-64s-28.7-64-64-64c-15.7 0-30 5.6-41.2 15C299.6 12.4 279.3 0 256 0s-43.6 12.4-54.8 31C190 21.6 175.7 16 160 16c-35.3 0-64 28.7-64 64s28.7 64 64 64zm80 176l80 64 98.5-49.2L320 224l-128 0L96.7 331.2 128 352l112-32z" />
    </Icon>
);

export default Volcano;