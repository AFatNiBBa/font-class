
import { Icon, generic } from "../../index";

/**
 * A component that renders the `up-from-bracket` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-from-bracket?s=duotone up-from-bracket}
 * @preview ![up-from-bracket](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDM1MmwwIDY0YzAgNTMgNDMgOTYgOTYgOTZsMjU2IDBjNTMgMCA5Ni00MyA5Ni05NmwwLTY0YzAtMTcuNy0xNC4zLTMyLTMyLTMycy0zMiAxNC4zLTMyIDMybDAgNjRjMCAxNy43LTE0LjMgMzItMzIgMzJMOTYgNDQ4Yy0xNy43IDAtMzItMTQuMy0zMi0zMmwwLTY0YzAtMTcuNy0xNC4zLTMyLTMyLTMycy0zMiAxNC4zLTMyIDMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTk2LjcgMTEuM0w3My45IDEzNC4xYy02LjQgNi40LTkuOSAxNS05LjkgMjRDNjQgMTc2LjggNzkuMiAxOTIgOTcuOSAxOTJsNjIuMSAwIDAgMTI4YzAgMTcuNyAxNC4zIDMyIDMyIDMybDY0IDBjMTcuNyAwIDMyLTE0LjMgMzItMzJsMC0xMjggNjIuMSAwYzE4LjcgMCAzMy45LTE1LjIgMzMuOS0zMy45YzAtOS0zLjYtMTcuNi05LjktMjRMMjUxLjMgMTEuM0MyNDQuMSA0LjEgMjM0LjIgMCAyMjQgMHMtMjAuMSA0LjEtMjcuMyAxMS4zeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const UpFromBracket: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 352l0 64c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-64c0-17.7-14.3-32-32-32s-32 14.3-32 32z" />
            <path d="M196.7 11.3L73.9 134.1c-6.4 6.4-9.9 15-9.9 24C64 176.8 79.2 192 97.9 192l62.1 0 0 128c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-128 62.1 0c18.7 0 33.9-15.2 33.9-33.9c0-9-3.6-17.6-9.9-24L251.3 11.3C244.1 4.1 234.2 0 224 0s-20.1 4.1-27.3 11.3z" />
    </Icon>
);

export default UpFromBracket;