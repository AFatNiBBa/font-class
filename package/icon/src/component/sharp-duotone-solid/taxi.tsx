
import { Icon, generic } from "../../index";

/**
 * A component that renders the `taxi` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/taxi?s=sharp-duotone-solid taxi}
 * @preview ![taxi](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQzMmw5NiAwIDAgODBMMCA1MTJsMC04MHpNMTA5LjEgMjI0YzExLjItMzIgMjIuNC02NCAzMy42LTk2bDIyNi42IDAgMzMuNiA5Ni0yOTMuOCAwek0xNjAgMEwzNTIgMGwwIDY0TDE2MCA2NGwwLTY0ek00MTYgNDMybDk2IDAgMCA4MC05NiAwIDAtODB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xMjAgNjRMOTcuMyA2NCA4OS44IDg1LjQgNDEuMyAyMjQgMCAyMjQgMCA0MzJsNTEyIDAgMC0yMDgtNDEuMyAwTDQyMi4yIDg1LjQgNDE0LjcgNjQgMzkyIDY0IDEyMCA2NHpNNDAyLjkgMjI0bC0yOTMuOCAwIDMzLjYtOTYgMjI2LjYgMCAzMy42IDk2ek02NCAzMjBhMzIgMzIgMCAxIDEgNjQgMCAzMiAzMiAwIDEgMSAtNjQgMHptMzUyLTMyYTMyIDMyIDAgMSAxIDAgNjQgMzIgMzIgMCAxIDEgMC02NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Taxi: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 432l96 0 0 80L0 512l0-80zM109.1 224c11.2-32 22.4-64 33.6-96l226.6 0 33.6 96-293.8 0zM160 0L352 0l0 64L160 64l0-64zM416 432l96 0 0 80-96 0 0-80z" />
            <path d="M120 64L97.3 64 89.8 85.4 41.3 224 0 224 0 432l512 0 0-208-41.3 0L422.2 85.4 414.7 64 392 64 120 64zM402.9 224l-293.8 0 33.6-96 226.6 0 33.6 96zM64 320a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm352-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default Taxi;