
import { Icon, generic } from "../../index";

/**
 * A component that renders the `curling-stone` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/curling-stone?s=duotone curling-stone}
 * @preview ![curling-stone](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyMGwwIDE2IDU3NiAwIDAtMTZjMC01My00My05Ni05Ni05Nkw5NiAyMjRjLTUzIDAtOTYgNDMtOTYgOTZ6bTAgNDhsMCAxNmMwIDUzIDQzIDk2IDk2IDk2bDM4NCAwYzUzIDAgOTYtNDMgOTYtOTZsMC0xNkwwIDM2OHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTIyNCAxMjhjMC0xNy43IDE0LjMtMzIgMzItMzJsMTI4IDBjMTcuNyAwIDMyLTE0LjMgMzItMzJzLTE0LjMtMzItMzItMzJMMjU2IDMyYy01MyAwLTk2IDQzLTk2IDk2bDAgMzJjLTM1LjMgMC02NCAyOC43LTY0IDY0bDM4NCAwYzAtMzUuMy0yOC43LTY0LTY0LTY0bC0xOTIgMCAwLTMyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CurlingStone: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 320l0 16 576 0 0-16c0-53-43-96-96-96L96 224c-53 0-96 43-96 96zm0 48l0 16c0 53 43 96 96 96l384 0c53 0 96-43 96-96l0-16L0 368z" />
            <path d="M224 128c0-17.7 14.3-32 32-32l128 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L256 32c-53 0-96 43-96 96l0 32c-35.3 0-64 28.7-64 64l384 0c0-35.3-28.7-64-64-64l-192 0 0-32z" />
    </Icon>
);

export default CurlingStone;