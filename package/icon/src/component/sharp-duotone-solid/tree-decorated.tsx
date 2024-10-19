
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tree-decorated` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tree-decorated?s=sharp-duotone-solid tree-decorated}
 * @preview ![tree-decorated](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQ4MGwwIDMyIDQ0OCAwIDAtMzJMMzY4IDM1Mmw1NiAwIDAtMzJMMzQ0IDIwOGw0OCAwIDAtMzJMMjI0IDAgNTYgMTc2bDAgMzIgNDggMEwyNCAzMjBsMCAzMiA1NiAwTDAgNDgwek0xODQgMjg4YTI0IDI0IDAgMSAxIC00OCAwIDI0IDI0IDAgMSAxIDQ4IDB6bTk2LTEyOGEyNCAyNCAwIDEgMSAtNDggMCAyNCAyNCAwIDEgMSA0OCAwem0zMiAyNTZhMjQgMjQgMCAxIDEgLTQ4IDAgMjQgMjQgMCAxIDEgNDggMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI1NiAxODRhMjQgMjQgMCAxIDAgMC00OCAyNCAyNCAwIDEgMCAwIDQ4em0zMiAyNTZhMjQgMjQgMCAxIDAgMC00OCAyNCAyNCAwIDEgMCAwIDQ4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const TreeDecorated: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 480l0 32 448 0 0-32L368 352l56 0 0-32L344 208l48 0 0-32L224 0 56 176l0 32 48 0L24 320l0 32 56 0L0 480zM184 288a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm96-128a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm32 256a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z" />
            <path d="M256 184a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm32 256a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default TreeDecorated;