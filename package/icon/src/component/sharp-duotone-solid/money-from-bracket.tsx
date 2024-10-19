
import { Icon, generic } from "../../index";

/**
 * A component that renders the `money-from-bracket` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/money-from-bracket?s=sharp-duotone-solid money-from-bracket}
 * @preview ![money-from-bracket](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMjggOTZsMCA0MTYgMzg0IDAgMC00MTZMMTI4IDk2em02NCAyODhjMzUuMyAwIDY0IDI4LjcgNjQgNjRsLTY0IDAgMC02NHptMzItMTEyYzAtNDQuMiA0My04MCA5Ni04MHM5NiAzNS44IDk2IDgwcy00MyA4MC05NiA4MHMtOTYtMzUuOC05Ni04MHpNMzg0IDQ0OGMwLTM1LjMgMjguNy02NCA2NC02NGwwIDY0LTY0IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0wIDBMMzIgMCA2MDggMGwzMiAwIDAgMzIgMCAxMjggMCAzMi02NCAwIDAtMzIgMC05Nkw2NCA2NGwwIDk2IDAgMzJMMCAxOTJsMC0zMkwwIDMyIDAgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const MoneyFromBracket: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M128 96l0 416 384 0 0-416L128 96zm64 288c35.3 0 64 28.7 64 64l-64 0 0-64zm32-112c0-44.2 43-80 96-80s96 35.8 96 80s-43 80-96 80s-96-35.8-96-80zM384 448c0-35.3 28.7-64 64-64l0 64-64 0z" />
            <path d="M0 0L32 0 608 0l32 0 0 32 0 128 0 32-64 0 0-32 0-96L64 64l0 96 0 32L0 192l0-32L0 32 0 0z" />
    </Icon>
);

export default MoneyFromBracket;