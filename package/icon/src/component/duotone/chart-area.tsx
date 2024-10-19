
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chart-area` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-area?s=duotone chart-area}
 * @preview ![chart-area](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDY0TDAgNDAwYzAgNDQuMiAzNS44IDgwIDgwIDgwbDQwMCAwYzE3LjcgMCAzMi0xNC4zIDMyLTMycy0xNC4zLTMyLTMyLTMyTDgwIDQxNmMtOC44IDAtMTYtNy4yLTE2LTE2TDY0IDY0YzAtMTcuNy0xNC4zLTMyLTMyLTMyUzAgNDYuMyAwIDY0eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNDQ4IDM1MkgxNjBjLTE3LjcgMC0zMi0xNC4zLTMyLTMyVjIzNmMwLTcuOCAyLjgtMTUuMiA3LjktMjEuMWw3OS40LTkwLjhjMTMtMTQuOCAzNi4xLTE0LjUgNDguNyAuNmwzOS4yIDQ3YzkgMTAuOCAyNS40IDExLjYgMzUuNCAxLjZsMjEtMjFjMTMuMi0xMy4yIDM0LjgtMTIuNCA0Ni45IDEuOEw0NzIuMyAyMzFjNSA1LjggNy43IDEzLjIgNy43IDIwLjhWMzIwYzAgMTcuNy0xNC4zIDMyLTMyIDMyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ChartArea: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 64L0 400c0 44.2 35.8 80 80 80l400 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 416c-8.8 0-16-7.2-16-16L64 64c0-17.7-14.3-32-32-32S0 46.3 0 64z" />
            <path d="M448 352H160c-17.7 0-32-14.3-32-32V236c0-7.8 2.8-15.2 7.9-21.1l79.4-90.8c13-14.8 36.1-14.5 48.7 .6l39.2 47c9 10.8 25.4 11.6 35.4 1.6l21-21c13.2-13.2 34.8-12.4 46.9 1.8L472.3 231c5 5.8 7.7 13.2 7.7 20.8V320c0 17.7-14.3 32-32 32z" />
    </Icon>
);

export default ChartArea;