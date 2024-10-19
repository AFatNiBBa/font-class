
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sailboat` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sailboat?s=sharp-duotone-solid sailboat}
 * @preview ![sailboat](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik00OCAzNTJMMjI0IDY0bDAgMjg4TDQ4IDM1MnpNMjU2IDBMNTI4IDM1MmwtMjcyIDBMMjU2IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0wIDM4NEg1NzZMNDgwIDUxMkg5NkwwIDM4NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Sailboat: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M48 352L224 64l0 288L48 352zM256 0L528 352l-272 0L256 0z" />
            <path d="M0 384H576L480 512H96L0 384z" />
    </Icon>
);

export default Sailboat;