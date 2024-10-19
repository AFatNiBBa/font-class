
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-ellipsis-vertical` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-ellipsis-vertical?s=sharp-duotone-solid square-ellipsis-vertical}
 * @preview ![square-ellipsis-vertical](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDAgNDgwbDQ0OCAwIDAtNDQ4TDAgMzJ6bTE5MiA5Nmw2NCAwIDAgNjQtNjQgMCAwLTY0em0wIDk2bDY0IDAgMCA2NC02NCAwIDAtNjR6bTAgOTZsNjQgMCAwIDY0LTY0IDAgMC02NHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI1NiAxMjhsMCA2NC02NCAwIDAtNjQgNjQgMHptMCA5NmwwIDY0LTY0IDAgMC02NCA2NCAwem0wIDE2MGwtNjQgMCAwLTY0IDY0IDAgMCA2NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const SquareEllipsisVertical: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zm192 96l64 0 0 64-64 0 0-64zm0 96l64 0 0 64-64 0 0-64zm0 96l64 0 0 64-64 0 0-64z" />
            <path d="M256 128l0 64-64 0 0-64 64 0zm0 96l0 64-64 0 0-64 64 0zm0 160l-64 0 0-64 64 0 0 64z" />
    </Icon>
);

export default SquareEllipsisVertical;