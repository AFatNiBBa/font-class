
import { Icon, generic } from "../../index";

/**
 * A component that renders the `wave-triangle` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wave-triangle?s=duotone wave-triangle}
 * @preview ![wave-triangle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNzYgMzJjMTAuMSAwIDE5LjYgNC43IDI1LjYgMTIuOEw0NjQgMzk0LjcgNTgyLjQgMjM2LjhjMTAuNi0xNC4xIDMwLjctMTcgNDQuOC02LjRzMTcgMzAuNyA2LjQgNDQuOGwtMTQ0IDE5MmMtNiA4LjEtMTUuNSAxMi44LTI1LjYgMTIuOHMtMTkuNi00LjctMjUuNi0xMi44TDE3NiAxMTcuMyA1Ny42IDI3NS4yYy0xMC42IDE0LjEtMzAuNyAxNy00NC44IDYuNHMtMTctMzAuNy02LjQtNDQuOGwxNDQtMTkyYzYtOC4xIDE1LjUtMTIuOCAyNS42LTEyLjh6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9IiIvPjwvc3ZnPg==|width=32|height=32)
 */
const WaveTriangle: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M176 32c10.1 0 19.6 4.7 25.6 12.8L464 394.7 582.4 236.8c10.6-14.1 30.7-17 44.8-6.4s17 30.7 6.4 44.8l-144 192c-6 8.1-15.5 12.8-25.6 12.8s-19.6-4.7-25.6-12.8L176 117.3 57.6 275.2c-10.6 14.1-30.7 17-44.8 6.4s-17-30.7-6.4-44.8l144-192c6-8.1 15.5-12.8 25.6-12.8z" />
    </Icon>
);

export default WaveTriangle;