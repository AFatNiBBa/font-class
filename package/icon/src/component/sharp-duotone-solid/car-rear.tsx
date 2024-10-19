
import { Icon, generic } from "../../index";

/**
 * A component that renders the `car-rear` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/car-rear?s=sharp-duotone-solid car-rear}
 * @preview ![car-rear](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiA0MDBsMCA4MCA5NiAwIDAtODAtOTYgMHptNzcuMS0yMDhsMjkzLjggMEwzNjkuMyA5NiAxNDIuNyA5NmMtMTEuMiAzMi0yMi40IDY0LTMzLjYgOTZ6TTM4NCA0MDBsMCA4MCA5NiAwIDAtODAtOTYgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTk3LjMgMzJMMTIwIDMybDI3MiAwIDIyLjcgMCA3LjUgMjEuNEw0NzAuNyAxOTJsNDEuMyAwIDAgMjA4TDAgNDAwIDAgMTkybDQxLjMgMEw4OS44IDUzLjQgOTcuMyAzMnptMjcyIDY0TDE0Mi43IDk2bC0zMy42IDk2IDI5My44IDBMMzY5LjMgOTZ6TTEyOCAyNTZsLTgwIDAgMCA0OCA4MCAwIDAtNDh6bTI1NiAwbDAgNDggODAgMCAwLTQ4LTgwIDB6bS02NCAxNmwtMTI4IDAgMCA2NCAxMjggMCAwLTY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CarRear: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 400l0 80 96 0 0-80-96 0zm77.1-208l293.8 0L369.3 96 142.7 96c-11.2 32-22.4 64-33.6 96zM384 400l0 80 96 0 0-80-96 0z" />
            <path d="M97.3 32L120 32l272 0 22.7 0 7.5 21.4L470.7 192l41.3 0 0 208L0 400 0 192l41.3 0L89.8 53.4 97.3 32zm272 64L142.7 96l-33.6 96 293.8 0L369.3 96zM128 256l-80 0 0 48 80 0 0-48zm256 0l0 48 80 0 0-48-80 0zm-64 16l-128 0 0 64 128 0 0-64z" />
    </Icon>
);

export default CarRear;