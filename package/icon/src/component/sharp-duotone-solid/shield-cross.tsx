
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shield-cross` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shield-cross?s=sharp-duotone-solid shield-cross}
 * @preview ![shield-cross](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNi42IDExM2wxLjItMjAuNUwzNi45IDg1IDIyNCAxMi40YzAgNDkuMiAwIDk4LjQgMCAxNDcuNmMtNjkgMC0xMzguMSAwLTIwNy4xIDBjLTEuMS0xNy4zLTEuMS0zMy4yLS4zLTQ3em05IDExMWM2Ni4xIDAgMTMyLjMgMCAxOTguNCAwYzAgOTAuOSAwIDE4MS45IDAgMjczLjVjLS4zLS4yLS42LS4zLTEtLjVDMTM2LjggNDUzLjQgODQuMiAzODMuOSA1My45IDMxMy45QzQwLjcgMjgzLjYgMzEuNiAyNTMgMjUuNiAyMjR6TTI4OCAxMi40QzM1MC40IDM2LjYgNDEyLjcgNjAuOCA0NzUuMSA4NWwxOS4yIDcuNCAxLjIgMjAuNWMuOCAxMy44IC44IDI5LjctLjMgNDdjLTY5LjEgMC0xMzguMSAwLTIwNy4xIDBjMC00OS4yIDAtOTguNCAwLTE0Ny42ek0yODggMjI0YzY2LjEgMCAxMzIuMyAwIDE5OC40IDBjLTYgMjktMTUuMSA1OS42LTI4LjMgODkuOUM0MjcuNyAzODQuMSAzNzQuOCA0NTMuOSAyODggNDk3LjVjMC05MS4yIDAtMTgyLjMgMC0yNzMuNXoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI4OCAxMi40TDI2Ny42IDQuNSAyNTYgMCAyNDQuNCA0LjUgMjI0IDEyLjQgMjI0IDE2MCAxNi45IDE2MGMxLjMgMTkuOCA0IDQxLjQgOC43IDY0TDIyNCAyMjRsMCAyNzMuNWM2LjMgMy4xIDEyLjcgNi4xIDE5LjMgOUwyNTYgNTEybDEyLjctNS41YzYuNi0yLjkgMTMtNS45IDE5LjMtOUwyODggMjI0bDE5OC40IDBjNC43LTIyLjYgNy40LTQ0LjIgOC43LTY0TDI4OCAxNjBsMC0xNDcuNnoiLz48L3N2Zz4=|width=32|height=32)
 */
const ShieldCross: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M16.6 113l1.2-20.5L36.9 85 224 12.4c0 49.2 0 98.4 0 147.6c-69 0-138.1 0-207.1 0c-1.1-17.3-1.1-33.2-.3-47zm9 111c66.1 0 132.3 0 198.4 0c0 90.9 0 181.9 0 273.5c-.3-.2-.6-.3-1-.5C136.8 453.4 84.2 383.9 53.9 313.9C40.7 283.6 31.6 253 25.6 224zM288 12.4C350.4 36.6 412.7 60.8 475.1 85l19.2 7.4 1.2 20.5c.8 13.8 .8 29.7-.3 47c-69.1 0-138.1 0-207.1 0c0-49.2 0-98.4 0-147.6zM288 224c66.1 0 132.3 0 198.4 0c-6 29-15.1 59.6-28.3 89.9C427.7 384.1 374.8 453.9 288 497.5c0-91.2 0-182.3 0-273.5z" />
            <path d="M288 12.4L267.6 4.5 256 0 244.4 4.5 224 12.4 224 160 16.9 160c1.3 19.8 4 41.4 8.7 64L224 224l0 273.5c6.3 3.1 12.7 6.1 19.3 9L256 512l12.7-5.5c6.6-2.9 13-5.9 19.3-9L288 224l198.4 0c4.7-22.6 7.4-44.2 8.7-64L288 160l0-147.6z" />
    </Icon>
);

export default ShieldCross;