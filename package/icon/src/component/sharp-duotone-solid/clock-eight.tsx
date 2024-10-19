
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clock-eight` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-eight?s=sharp-duotone-solid clock-eight}
 * @preview ![clock-eight](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6bTEyNi43IDU3LjNjNi43LTQuNCAxMy4zLTguOSAyMC0xMy4zYzI4LjQtMTkgNTYuOS0zNy45IDg1LjMtNTYuOWMwLTQxLjEgMC04Mi4xIDAtMTIzLjJjMC04IDAtMTYgMC0yNGw0OCAwYzAgOCAwIDE2IDAgMjRjMCA0NS4zIDAgOTAuNyAwIDEzNmMwIDQuMyAwIDguNiAwIDEyLjhMMjY5LjMgMjc2Yy0zMiAyMS4zLTY0IDQyLjctOTYgNjRjLTYuNyA0LjQtMTMuMyA4LjktMjAgMTMuM2wtMjYuNi0zOS45eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjgwIDk2bDAgMjQgMCAxMzYgMCAxMi44TDI2OS4zIDI3NmwtOTYgNjQtMjAgMTMuMy0yNi42LTM5LjkgMjAtMTMuM0wyMzIgMjQzLjIgMjMyIDEyMGwwLTI0IDQ4IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const ClockEight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm126.7 57.3c6.7-4.4 13.3-8.9 20-13.3c28.4-19 56.9-37.9 85.3-56.9c0-41.1 0-82.1 0-123.2c0-8 0-16 0-24l48 0c0 8 0 16 0 24c0 45.3 0 90.7 0 136c0 4.3 0 8.6 0 12.8L269.3 276c-32 21.3-64 42.7-96 64c-6.7 4.4-13.3 8.9-20 13.3l-26.6-39.9z" />
            <path d="M280 96l0 24 0 136 0 12.8L269.3 276l-96 64-20 13.3-26.6-39.9 20-13.3L232 243.2 232 120l0-24 48 0z" />
    </Icon>
);

export default ClockEight;