
import { Icon, generic } from "../../index";

/**
 * A component that renders the `up-from-line` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-from-line?s=duotone up-from-line}
 * @preview ![up-from-line](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQ0OGMwLTE3LjcgMTQuMy0zMiAzMi0zMmwzMjAgMGMxNy43IDAgMzIgMTQuMyAzMiAzMnMtMTQuMyAzMi0zMiAzMkwzMiA0ODBjLTE3LjcgMC0zMi0xNC4zLTMyLTMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTY0LjcgNDMuM0w0MS45IDE2Ni4xYy02LjQgNi40LTkuOSAxNS05LjkgMjRDMzIgMjA4LjggNDcuMiAyMjQgNjUuOSAyMjRsNjIuMSAwIDAgMTI4YzAgMTcuNyAxNC4zIDMyIDMyIDMybDY0IDBjMTcuNyAwIDMyLTE0LjMgMzItMzJsMC0xMjggNjIuMSAwYzE4LjcgMCAzMy45LTE1LjIgMzMuOS0zMy45YzAtOS0zLjYtMTcuNi05LjktMjRMMjE5LjMgNDMuM0MyMTIuMSAzNi4xIDIwMi4yIDMyIDE5MiAzMnMtMjAuMSA0LjEtMjcuMyAxMS4zeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const UpFromLine: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 448c0-17.7 14.3-32 32-32l320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 480c-17.7 0-32-14.3-32-32z" />
            <path d="M164.7 43.3L41.9 166.1c-6.4 6.4-9.9 15-9.9 24C32 208.8 47.2 224 65.9 224l62.1 0 0 128c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-128 62.1 0c18.7 0 33.9-15.2 33.9-33.9c0-9-3.6-17.6-9.9-24L219.3 43.3C212.1 36.1 202.2 32 192 32s-20.1 4.1-27.3 11.3z" />
    </Icon>
);

export default UpFromLine;