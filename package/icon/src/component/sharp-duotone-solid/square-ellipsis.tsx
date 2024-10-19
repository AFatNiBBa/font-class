
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-ellipsis` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-ellipsis?s=sharp-duotone-solid square-ellipsis}
 * @preview ![square-ellipsis](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDAgNDgwbDQ0OCAwIDAtNDQ4TDAgMzJ6TTk2IDIyNGw2NCAwIDAgNjQtNjQgMCAwLTY0em05NiAwbDY0IDAgMCA2NC02NCAwIDAtNjR6bTk2IDBsNjQgMCAwIDY0LTY0IDAgMC02NHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTM1MiAyODhsLTY0IDAgMC02NCA2NCAwIDAgNjR6bS05NiAwbC02NCAwIDAtNjQgNjQgMCAwIDY0ek05NiAyODhsMC02NCA2NCAwIDAgNjQtNjQgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const SquareEllipsis: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zM96 224l64 0 0 64-64 0 0-64zm96 0l64 0 0 64-64 0 0-64zm96 0l64 0 0 64-64 0 0-64z" />
            <path d="M352 288l-64 0 0-64 64 0 0 64zm-96 0l-64 0 0-64 64 0 0 64zM96 288l0-64 64 0 0 64-64 0z" />
    </Icon>
);

export default SquareEllipsis;