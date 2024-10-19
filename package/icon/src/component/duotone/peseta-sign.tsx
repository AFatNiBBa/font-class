
import { Icon, generic } from "../../index";

/**
 * A component that renders the `peseta-sign` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/peseta-sign?s=duotone peseta-sign}
 * @preview ![peseta-sign](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE5MmMwIDE3LjcgMTQuMyAzMiAzMiAzMmwwLTY0Yy0xNy43IDAtMzIgMTQuMy0zMiAzMnptOTYtMzJsMCA2NCAxODYuNSAwYzMuNS0xMCA1LjUtMjAuOCA1LjUtMzJzLTEuOS0yMi01LjUtMzJMOTYgMTYwem0yNTIuOCAwYzIuMSAxMC4zIDMuMiAyMSAzLjIgMzJjMCAxLjQgMCAyLjctLjEgNC4xcy0uMSAyLjctLjIgNC4xYy0uMSAyLjctLjMgNS40LS42IDguMWMtLjUgNS4zLTEuMyAxMC42LTIuNCAxNS44bDMuMiAwYzE3LjcgMCAzMi0xNC4zIDMyLTMycy0xNC4zLTMyLTMyLTMybC0zLjIgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTMyIDY0YzAtMTcuNyAxNC4zLTMyIDMyLTMybDEyOCAwYzg4LjQgMCAxNjAgNzEuNiAxNjAgMTYwcy03MS42IDE2MC0xNjAgMTYwbC05NiAwIDAgOTZjMCAxNy43LTE0LjMgMzItMzIgMzJzLTMyLTE0LjMtMzItMzJsMC0xMjhMMzIgNjR6TTk2IDI4OGw5NiAwYzUzIDAgOTYtNDMgOTYtOTZzLTQzLTk2LTk2LTk2TDk2IDk2bDAgMTkyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const PesetaSign: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 192c0 17.7 14.3 32 32 32l0-64c-17.7 0-32 14.3-32 32zm96-32l0 64 186.5 0c3.5-10 5.5-20.8 5.5-32s-1.9-22-5.5-32L96 160zm252.8 0c2.1 10.3 3.2 21 3.2 32c0 1.4 0 2.7-.1 4.1s-.1 2.7-.2 4.1c-.1 2.7-.3 5.4-.6 8.1c-.5 5.3-1.3 10.6-2.4 15.8l3.2 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-3.2 0z" />
            <path d="M32 64c0-17.7 14.3-32 32-32l128 0c88.4 0 160 71.6 160 160s-71.6 160-160 160l-96 0 0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-128L32 64zM96 288l96 0c53 0 96-43 96-96s-43-96-96-96L96 96l0 192z" />
    </Icon>
);

export default PesetaSign;