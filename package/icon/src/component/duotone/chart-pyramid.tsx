
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chart-pyramid` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-pyramid?s=duotone chart-pyramid}
 * @preview ![chart-pyramid](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik01MSAzNTJMNDYxIDM1MiAzNjcuNyAxOTJsLTIyMy40IDBDMTEzLjIgMjQ1LjMgODIuMSAyOTguNyA1MSAzNTJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yMjEuNCA1OS43TDE0NC4zIDE5MmwyMjMuNCAwTDI5MC42IDU5LjdjLTE1LjQtMjYuNS01My43LTI2LjUtNjkuMSAwek01MSAzNTJMMTEuNCA0MTkuOEMtNC4yIDQ0Ni41IDE1LjEgNDgwIDQ1LjkgNDgwbDQyMC4xIDBjMzAuOSAwIDUwLjEtMzMuNSAzNC42LTYwLjJMNDYxIDM1MiA1MSAzNTJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const ChartPyramid: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M51 352L461 352 367.7 192l-223.4 0C113.2 245.3 82.1 298.7 51 352z" />
            <path d="M221.4 59.7L144.3 192l223.4 0L290.6 59.7c-15.4-26.5-53.7-26.5-69.1 0zM51 352L11.4 419.8C-4.2 446.5 15.1 480 45.9 480l420.1 0c30.9 0 50.1-33.5 34.6-60.2L461 352 51 352z" />
    </Icon>
);

export default ChartPyramid;