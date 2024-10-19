
import { Icon, generic } from "../../index";

/**
 * A component that renders the `car` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/car?s=sharp-duotone-solid car}
 * @preview ![car](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQwMGwwIDgwIDk2IDAgMC04MEwwIDQwMHpNMTA5LjEgMTkybDI5My44IDBMMzY5LjMgOTYgMTQyLjcgOTZjLTExLjIgMzItMjIuNCA2NC0zMy42IDk2ek00MTYgNDAwbDAgODAgOTYgMCAwLTgwLTk2IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xMjAgMzJMOTcuMyAzMiA4OS44IDUzLjQgNDEuMyAxOTIgMCAxOTIgMCA0MDBsNTEyIDAgMC0yMDgtNDEuMyAwTDQyMi4yIDUzLjQgNDE0LjcgMzIgMzkyIDMyIDEyMCAzMnpNNDAyLjkgMTkybC0yOTMuOCAwIDMzLjYtOTYgMjI2LjYgMCAzMy42IDk2ek02NCAyODhhMzIgMzIgMCAxIDEgNjQgMCAzMiAzMiAwIDEgMSAtNjQgMHptMzUyLTMyYTMyIDMyIDAgMSAxIDAgNjQgMzIgMzIgMCAxIDEgMC02NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Car: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 400l0 80 96 0 0-80L0 400zM109.1 192l293.8 0L369.3 96 142.7 96c-11.2 32-22.4 64-33.6 96zM416 400l0 80 96 0 0-80-96 0z" />
            <path d="M120 32L97.3 32 89.8 53.4 41.3 192 0 192 0 400l512 0 0-208-41.3 0L422.2 53.4 414.7 32 392 32 120 32zM402.9 192l-293.8 0 33.6-96 226.6 0 33.6 96zM64 288a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm352-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default Car;