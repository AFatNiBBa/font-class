
import { Icon, generic } from "../../index";

/**
 * A component that renders the `scalpel` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scalpel?s=duotone scalpel}
 * @preview ![scalpel](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xLjIgNTAyLjFjMi41IDYgOC4zIDkuOSAxNC44IDkuOWMxOC4xIDAgODQuMS04LjQgMTQ1LjktMzMuMUMyMjIuNSA0NTQuNiAyODggNDEwLjkgMjg4IDMzNmwwLTE2LTE2IDAtOTYgMC02LjYgMC00LjcgNC43LTE2MCAxNjBjLTQuNiA0LjYtNS45IDExLjUtMy41IDE3LjR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik00NDEuMiAwYy0yMC42IDAtNDAuMiA5LTUzLjcgMjQuNkwxNTUuOSAyOTMuNmMtNC4xIDQuNy01IDExLjQtMi40IDE3LjFzOC4zIDkuMyAxNC41IDkuM2wxMzIuOSAwYzEzLjkgMCAyNy4xLTYgMzYuMy0xNi41TDQ5My44IDEyMi45QzUwNS41IDEwOS40IDUxMiA5Mi4xIDUxMiA3NC4ybDAtMy40QzUxMiAzMS43IDQ4MC4zIDAgNDQxLjIgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Scalpel: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M1.2 502.1c2.5 6 8.3 9.9 14.8 9.9c18.1 0 84.1-8.4 145.9-33.1C222.5 454.6 288 410.9 288 336l0-16-16 0-96 0-6.6 0-4.7 4.7-160 160c-4.6 4.6-5.9 11.5-3.5 17.4z" />
            <path d="M441.2 0c-20.6 0-40.2 9-53.7 24.6L155.9 293.6c-4.1 4.7-5 11.4-2.4 17.1s8.3 9.3 14.5 9.3l132.9 0c13.9 0 27.1-6 36.3-16.5L493.8 122.9C505.5 109.4 512 92.1 512 74.2l0-3.4C512 31.7 480.3 0 441.2 0z" />
    </Icon>
);

export default Scalpel;