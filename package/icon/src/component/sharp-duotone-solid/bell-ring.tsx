
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bell-ring` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bell-ring?s=sharp-duotone-solid bell-ring}
 * @preview ![bell-ring](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiAzNjhsMCA0OCA0NDggMCAwLTQ4LTY0LTcyIDAtODhjMC03Ny40LTU1LTE0Mi0xMjgtMTU2LjhMMjg4IDAgMjI0IDBsMCA1MS4yQzE1MSA2NiA5NiAxMzAuNiA5NiAyMDhsMCA4OEwzMiAzNjh6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xMTIuNiA0OS40QzcyLjggODcuMyA0OCAxNDAuNyA0OCAyMDBMMCAyMDBDMCAxMjcuMSAzMC41IDYxLjIgNzkuNCAxNC42bDMzLjEgMzQuOHpNMzIwIDQ0OGMwIDE3LTYuNyAzMy4zLTE4LjcgNDUuM3MtMjguMyAxOC43LTQ1LjMgMTguN3MtMzMuMy02LjctNDUuMy0xOC43cy0xOC43LTI4LjMtMTguNy00NS4zbDY0IDAgNjQgMHpNNDY0IDIwMGMwLTU5LjMtMjQuOC0xMTIuNy02NC42LTE1MC42bDMzLjEtMzQuOEM0ODEuNSA2MS4yIDUxMiAxMjcuMSA1MTIgMjAwbC00OCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const BellRing: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 368l0 48 448 0 0-48-64-72 0-88c0-77.4-55-142-128-156.8L288 0 224 0l0 51.2C151 66 96 130.6 96 208l0 88L32 368z" />
            <path d="M112.6 49.4C72.8 87.3 48 140.7 48 200L0 200C0 127.1 30.5 61.2 79.4 14.6l33.1 34.8zM320 448c0 17-6.7 33.3-18.7 45.3s-28.3 18.7-45.3 18.7s-33.3-6.7-45.3-18.7s-18.7-28.3-18.7-45.3l64 0 64 0zM464 200c0-59.3-24.8-112.7-64.6-150.6l33.1-34.8C481.5 61.2 512 127.1 512 200l-48 0z" />
    </Icon>
);

export default BellRing;