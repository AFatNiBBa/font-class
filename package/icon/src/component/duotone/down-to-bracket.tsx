
import { Icon, generic } from "../../index";

/**
 * A component that renders the `down-to-bracket` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down-to-bracket?s=duotone down-to-bracket}
 * @preview ![down-to-bracket](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDM1MmwwIDY0YzAgNTMgNDMgOTYgOTYgOTZsMjU2IDBjNTMgMCA5Ni00MyA5Ni05NmwwLTY0YzAtMTcuNy0xNC4zLTMyLTMyLTMycy0zMiAxNC4zLTMyIDMybDAgNjRjMCAxNy43LTE0LjMgMzItMzIgMzJMOTYgNDQ4Yy0xNy43IDAtMzItMTQuMy0zMi0zMmwwLTY0YzAtMTcuNy0xNC4zLTMyLTMyLTMycy0zMiAxNC4zLTMyIDMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjUxLjMgMzQwLjdMMzc0LjEgMjE3LjljNi40LTYuNCA5LjktMTUgOS45LTI0YzAtMTguNy0xNS4yLTMzLjktMzMuOS0zMy45TDI4OCAxNjBsMC0xMjhjMC0xNy43LTE0LjMtMzItMzItMzJMMTkyIDBjLTE3LjcgMC0zMiAxNC4zLTMyIDMybDAgMTI4LTYyLjEgMEM3OS4yIDE2MCA2NCAxNzUuMiA2NCAxOTMuOWMwIDkgMy42IDE3LjYgOS45IDI0TDE5Ni43IDM0MC43YzcuMiA3LjIgMTcuMSAxMS4zIDI3LjMgMTEuM3MyMC4xLTQuMSAyNy4zLTExLjN6Ii8+PC9zdmc+|width=32|height=32)
 */
const DownToBracket: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 352l0 64c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-64c0-17.7-14.3-32-32-32s-32 14.3-32 32z" />
            <path d="M251.3 340.7L374.1 217.9c6.4-6.4 9.9-15 9.9-24c0-18.7-15.2-33.9-33.9-33.9L288 160l0-128c0-17.7-14.3-32-32-32L192 0c-17.7 0-32 14.3-32 32l0 128-62.1 0C79.2 160 64 175.2 64 193.9c0 9 3.6 17.6 9.9 24L196.7 340.7c7.2 7.2 17.1 11.3 27.3 11.3s20.1-4.1 27.3-11.3z" />
    </Icon>
);

export default DownToBracket;