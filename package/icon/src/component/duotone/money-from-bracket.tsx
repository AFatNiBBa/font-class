
import { Icon, generic } from "../../index";

/**
 * A component that renders the `money-from-bracket` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/money-from-bracket?s=duotone money-from-bracket}
 * @preview ![money-from-bracket](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMjggOTZsMCAzNTJjMCAzNS4zIDI4LjcgNjQgNjQgNjRsMjU2IDBjMzUuMyAwIDY0LTI4LjcgNjQtNjRsMC0zNTJMMTI4IDk2em02NCAyODhjMzUuMyAwIDY0IDI4LjcgNjQgNjRsLTY0IDAgMC02NHptMzItMTEyYzAtNDQuMiA0My04MCA5Ni04MHM5NiAzNS44IDk2IDgwcy00MyA4MC05NiA4MHMtOTYtMzUuOC05Ni04MHpNMzg0IDQ0OGMwLTM1LjMgMjguNy02NCA2NC02NGwwIDY0LTY0IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik05NiA2NEM3OC4zIDY0IDY0IDc4LjMgNjQgOTZsMCA2NGMwIDE3LjctMTQuMyAzMi0zMiAzMnMtMzItMTQuMy0zMi0zMkwwIDk2QzAgNDMgNDMgMCA5NiAwTDU0NCAwYzUzIDAgOTYgNDMgOTYgOTZsMCA2NGMwIDE3LjctMTQuMyAzMi0zMiAzMnMtMzItMTQuMy0zMi0zMmwwLTY0YzAtMTcuNy0xNC4zLTMyLTMyLTMyTDk2IDY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const MoneyFromBracket: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M128 96l0 352c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-352L128 96zm64 288c35.3 0 64 28.7 64 64l-64 0 0-64zm32-112c0-44.2 43-80 96-80s96 35.8 96 80s-43 80-96 80s-96-35.8-96-80zM384 448c0-35.3 28.7-64 64-64l0 64-64 0z" />
            <path d="M96 64C78.3 64 64 78.3 64 96l0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32L0 96C0 43 43 0 96 0L544 0c53 0 96 43 96 96l0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64c0-17.7-14.3-32-32-32L96 64z" />
    </Icon>
);

export default MoneyFromBracket;