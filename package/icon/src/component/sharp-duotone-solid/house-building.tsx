
import { Icon, generic } from "../../index";

/**
 * A component that renders the `house-building` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-building?s=sharp-duotone-solid house-building}
 * @preview ![house-building](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMjAgMEw2NDAgMGwwIDUxMi0yMjQgMCAwLTE2MCAzMiAwIDAtNjQtMzIgMCAwLTMyIDMyIDAgMC02NC02NCAwIDAgMjIuM0wzMjAgMTYxIDMyMCAwem02NCA5NmwwIDY0IDY0IDAgMC02NC02NCAwem0xMjggMGwwIDY0IDY0IDAgMC02NC02NCAwem0wIDk2bDAgNjQgNjQgMCAwLTY0LTY0IDB6bTAgOTZsMCA2NCA2NCAwIDAtNjQtNjQgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTAgNTEyTDAgMjU2IDE5MiA5NiAzODQgMjU2bDAgMjU2TDAgNTEyek0yNDAgMzY4bDAtOTYtOTYgMCAwIDk2IDk2IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const HouseBuilding: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M320 0L640 0l0 512-224 0 0-160 32 0 0-64-32 0 0-32 32 0 0-64-64 0 0 22.3L320 161 320 0zm64 96l0 64 64 0 0-64-64 0zm128 0l0 64 64 0 0-64-64 0zm0 96l0 64 64 0 0-64-64 0zm0 96l0 64 64 0 0-64-64 0z" />
            <path d="M0 512L0 256 192 96 384 256l0 256L0 512zM240 368l0-96-96 0 0 96 96 0z" />
    </Icon>
);

export default HouseBuilding;