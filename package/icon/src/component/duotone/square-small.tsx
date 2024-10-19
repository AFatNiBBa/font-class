
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-small` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-small?s=duotone square-small}
 * @preview ![square-small](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTMyMCAxNjBWMzUyQzMyMCAzODcuMzQ2IDI5MS4zNDYgNDE2IDI1NiA0MTZINjRDMjguNjU0IDQxNiAwIDM4Ny4zNDYgMCAzNTJWMTYwQzAgMTI0LjY1NCAyOC42NTQgOTYgNjQgOTZIMjU2QzI5MS4zNDYgOTYgMzIwIDEyNC42NTQgMzIwIDE2MFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48L3N2Zz4=|width=32|height=32)
 */
const SquareSmall: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M320 160V352C320 387.346 291.346 416 256 416H64C28.654 416 0 387.346 0 352V160C0 124.654 28.654 96 64 96H256C291.346 96 320 124.654 320 160Z" />
    </Icon>
);

export default SquareSmall;