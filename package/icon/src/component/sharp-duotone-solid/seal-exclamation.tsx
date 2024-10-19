
import { Icon, generic } from "../../index";

/**
 * A component that renders the `seal-exclamation` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/seal-exclamation?s=sharp-duotone-solid seal-exclamation}
 * @preview ![seal-exclamation](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1Nmw3NSA3NSAwIDEwNiAxMDYgMCA3NSA3NSA3NS03NSAxMDYgMCAwLTEwNiA3NS03NS03NS03NSAwLTEwNkwzMzEgNzUgMjU2IDAgMTgxIDc1IDc1IDc1bDAgMTA2TDAgMjU2ek0yMzIgMTI4YzE2IDAgMzIgMCA0OCAwYzAgOCAwIDE2IDAgMjRjMCAzNy4zIDAgNzQuNyAwIDExMmMwIDggMCAxNiAwIDI0Yy0xNiAwLTMyIDAtNDggMGMwLTggMC0xNiAwLTI0YzAtMzcuMyAwLTc0LjcgMC0xMTJjMC04IDAtMTYgMC0yNHptMCAxOTJsNDggMGMwIDE2IDAgMzIgMCA0OGwtNDggMGMwLTE2IDAtMzIgMC00OHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI4MCAxNTJsMC0yNC00OCAwIDAgMjQgMCAxMTIgMCAyNCA0OCAwIDAtMjQgMC0xMTJ6bTAgMTY4bC00OCAwIDAgNDggNDggMCAwLTQ4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const SealExclamation: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256l75 75 0 106 106 0 75 75 75-75 106 0 0-106 75-75-75-75 0-106L331 75 256 0 181 75 75 75l0 106L0 256zM232 128c16 0 32 0 48 0c0 8 0 16 0 24c0 37.3 0 74.7 0 112c0 8 0 16 0 24c-16 0-32 0-48 0c0-8 0-16 0-24c0-37.3 0-74.7 0-112c0-8 0-16 0-24zm0 192l48 0c0 16 0 32 0 48l-48 0c0-16 0-32 0-48z" />
            <path d="M280 152l0-24-48 0 0 24 0 112 0 24 48 0 0-24 0-112zm0 168l-48 0 0 48 48 0 0-48z" />
    </Icon>
);

export default SealExclamation;