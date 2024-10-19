
import { Icon, generic } from "../../index";

/**
 * A component that renders the `light-switch` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/light-switch?s=duotone light-switch}
 * @preview ![light-switch](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiAyNDBsMCAzMiAxOTIgMCAwLTMyTDk2IDI0MHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTAgNjRDMCAyOC43IDI4LjcgMCA2NCAwTDMyMCAwYzM1LjMgMCA2NCAyOC43IDY0IDY0bDAgMzg0YzAgMzUuMy0yOC43IDY0LTY0IDY0TDY0IDUxMmMtMzUuMyAwLTY0LTI4LjctNjQtNjRMMCA2NHptOTYgOTZsMCAxOTJjMCAzNS4zIDI4LjcgNjQgNjQgNjRsNjQgMGMzNS4zIDAgNjQtMjguNyA2NC02NGwwLTE5MmMwLTM1LjMtMjguNy02NC02NC02NGwtNjQgMGMtMzUuMyAwLTY0IDI4LjctNjQgNjR6TTIwOCA0OGExNiAxNiAwIDEgMCAtMzIgMCAxNiAxNiAwIDEgMCAzMiAwem0wIDQxNmExNiAxNiAwIDEgMCAtMzIgMCAxNiAxNiAwIDEgMCAzMiAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const LightSwitch: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M96 240l0 32 192 0 0-32L96 240z" />
            <path d="M0 64C0 28.7 28.7 0 64 0L320 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm96 96l0 192c0 35.3 28.7 64 64 64l64 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64l-64 0c-35.3 0-64 28.7-64 64zM208 48a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm0 416a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z" />
    </Icon>
);

export default LightSwitch;