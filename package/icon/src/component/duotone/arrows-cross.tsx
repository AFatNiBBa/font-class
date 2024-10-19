
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrows-cross` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-cross?s=duotone arrows-cross}
 * @preview ![arrows-cross](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDY0YzAgOC4yIDMuMSAxNi40IDkuNCAyMi42TDE3OC43IDI1NmMxNS4xLTE1LjEgMzAuMi0zMC4yIDQ1LjMtNDUuM0w1NC42IDQxLjRDNDguNCAzNS4xIDQwLjIgMzIgMzIgMzJzLTE2LjQgMy4xLTIyLjYgOS40UzAgNTUuOCAwIDY0ek0yMjQgMzAxLjNMMzM4LjcgNDE2IDI4OCA0MTZjLTE3LjcgMC0zMiAxNC4zLTMyIDMyczE0LjMgMzIgMzIgMzJsMTI4IDBjMTcuNyAwIDMyLTE0LjMgMzItMzJsMC0xMjhjMC0xNy43LTE0LjMtMzItMzItMzJzLTMyIDE0LjMtMzIgMzJsMCA1MC43TDI2OS4zIDI1NiAyMjQgMzAxLjN6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yNTYgNjRjMC0xNy43IDE0LjMtMzIgMzItMzJsMTI4IDBjMTcuNyAwIDMyIDE0LjMgMzIgMzJsMCAxMjhjMCAxNy43LTE0LjMgMzItMzIgMzJzLTMyLTE0LjMtMzItMzJsMC01MC43TDU0LjYgNDcwLjZjLTEyLjUgMTIuNS0zMi44IDEyLjUtNDUuMyAwcy0xMi41LTMyLjggMC00NS4zTDMzOC43IDk2IDI4OCA5NmMtMTcuNyAwLTMyLTE0LjMtMzItMzJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const ArrowsCross: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 64c0 8.2 3.1 16.4 9.4 22.6L178.7 256c15.1-15.1 30.2-30.2 45.3-45.3L54.6 41.4C48.4 35.1 40.2 32 32 32s-16.4 3.1-22.6 9.4S0 55.8 0 64zM224 301.3L338.7 416 288 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 50.7L269.3 256 224 301.3z" />
            <path d="M256 64c0-17.7 14.3-32 32-32l128 0c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-50.7L54.6 470.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L338.7 96 288 96c-17.7 0-32-14.3-32-32z" />
    </Icon>
);

export default ArrowsCross;