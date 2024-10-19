
import { Icon, generic } from "../../index";

/**
 * A component that renders the `wind-turbine` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wind-turbine?s=sharp-duotone-solid wind-turbine}
 * @preview ![wind-turbine](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMjggNDY0bDAgNDggMjQgMCAyMDggMCAyNCAwIDAtNDgtMjQgMC03MiAwIDAtMTE3LjYtNjQtOTUuMkwyMjQgNDY0bC03MiAwLTI0IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zMTcuMSAyMDIuOEwzNDAuOCA0MjUgMjE2LjEgMjM5LjUgMTEuOCAxNDguOWwyMjMtMTUuMkw0MTUuNCAyIDMxNy4xIDIwMi44ek0yNTYgMjE2YTI0IDI0IDAgMSAwIDAtNDggMjQgMjQgMCAxIDAgMCA0OHoiLz48L3N2Zz4=|width=32|height=32)
 */
const WindTurbine: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M128 464l0 48 24 0 208 0 24 0 0-48-24 0-72 0 0-117.6-64-95.2L224 464l-72 0-24 0z" />
            <path d="M317.1 202.8L340.8 425 216.1 239.5 11.8 148.9l223-15.2L415.4 2 317.1 202.8zM256 216a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default WindTurbine;