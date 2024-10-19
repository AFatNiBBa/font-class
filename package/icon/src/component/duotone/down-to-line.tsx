
import { Icon, generic } from "../../index";

/**
 * A component that renders the `down-to-line` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down-to-line?s=duotone down-to-line}
 * @preview ![down-to-line](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQ0OGMwLTE3LjcgMTQuMy0zMiAzMi0zMmwzMjAgMGMxNy43IDAgMzIgMTQuMyAzMiAzMnMtMTQuMyAzMi0zMiAzMkwzMiA0ODBjLTE3LjcgMC0zMi0xNC4zLTMyLTMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjE5LjMgMzcyLjdMMzQyLjEgMjQ5LjljNi40LTYuNCA5LjktMTUgOS45LTI0YzAtMTguNy0xNS4yLTMzLjktMzMuOS0zMy45TDI1NiAxOTJsMC0xMjhjMC0xNy43LTE0LjMtMzItMzItMzJsLTY0IDBjLTE3LjcgMC0zMiAxNC4zLTMyIDMybDAgMTI4LTYyLjEgMEM0Ny4yIDE5MiAzMiAyMDcuMiAzMiAyMjUuOWMwIDkgMy42IDE3LjYgOS45IDI0TDE2NC43IDM3Mi43YzcuMiA3LjIgMTcuMSAxMS4zIDI3LjMgMTEuM3MyMC4xLTQuMSAyNy4zLTExLjN6Ii8+PC9zdmc+|width=32|height=32)
 */
const DownToLine: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 448c0-17.7 14.3-32 32-32l320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 480c-17.7 0-32-14.3-32-32z" />
            <path d="M219.3 372.7L342.1 249.9c6.4-6.4 9.9-15 9.9-24c0-18.7-15.2-33.9-33.9-33.9L256 192l0-128c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 128-62.1 0C47.2 192 32 207.2 32 225.9c0 9 3.6 17.6 9.9 24L164.7 372.7c7.2 7.2 17.1 11.3 27.3 11.3s20.1-4.1 27.3-11.3z" />
    </Icon>
);

export default DownToLine;