
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-fragile` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-fragile?s=sharp-duotone-solid square-fragile}
 * @preview ![square-fragile](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDAgNDgwbDQ0OCAwIDAtNDQ4TDAgMzJ6TTEyOCA5Nmw0OCAwIDY0IDAgODAgMCAwIDExMmMwIDQ3LjYtMzQuNiA4Ny4xLTgwIDk0LjdsMCA4MS4zIDY0IDAgMCAzMi0xNjAgMCAwLTMyIDY0IDAgMC04MS4zYy00NS40LTcuNi04MC00Ny4xLTgwLTk0LjdsMC0xMTJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xNzYgOTZsLTQ4IDAgMCAxMTJjMCA0Ny42IDM0LjYgODcuMSA4MCA5NC43bDAgODEuMy02NCAwIDAgMzIgMTYwIDAgMC0zMi02NCAwIDAtODEuM2M0NS40LTcuNiA4MC00Ny4xIDgwLTk0LjdsMC0xMTItODAgMCAzMiA2NC00OCAzMiAzMiA2NC04MC02NCAzMi0zMkwxNzYgOTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const SquareFragile: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zM128 96l48 0 64 0 80 0 0 112c0 47.6-34.6 87.1-80 94.7l0 81.3 64 0 0 32-160 0 0-32 64 0 0-81.3c-45.4-7.6-80-47.1-80-94.7l0-112z" />
            <path d="M176 96l-48 0 0 112c0 47.6 34.6 87.1 80 94.7l0 81.3-64 0 0 32 160 0 0-32-64 0 0-81.3c45.4-7.6 80-47.1 80-94.7l0-112-80 0 32 64-48 32 32 64-80-64 32-32L176 96z" />
    </Icon>
);

export default SquareFragile;