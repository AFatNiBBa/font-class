
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-exclamation` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-exclamation?s=sharp-duotone-solid square-exclamation}
 * @preview ![square-exclamation](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDAgNDgwbDQ0OCAwIDAtNDQ4TDAgMzJ6bTIwMCA5Nmw0OCAwIDAgMjQgMCAxMTIgMCAyNC00OCAwIDAtMjQgMC0xMTIgMC0yNHptMCAxOTJsNDggMCAwIDQ4LTQ4IDAgMC00OHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI0OCAxNTJsMC0yNC00OCAwIDAgMjQgMCAxMTIgMCAyNCA0OCAwIDAtMjQgMC0xMTJ6bTAgMTY4bC00OCAwIDAgNDggNDggMCAwLTQ4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const SquareExclamation: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zm200 96l48 0 0 24 0 112 0 24-48 0 0-24 0-112 0-24zm0 192l48 0 0 48-48 0 0-48z" />
            <path d="M248 152l0-24-48 0 0 24 0 112 0 24 48 0 0-24 0-112zm0 168l-48 0 0 48 48 0 0-48z" />
    </Icon>
);

export default SquareExclamation;