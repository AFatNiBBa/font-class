
import { Icon, generic } from "../../index";

/**
 * A component that renders the `suitcase-rolling` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/suitcase-rolling?s=sharp-duotone-solid suitcase-rolling}
 * @preview ![suitcase-rolling](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCA0ODBsMCAzMiA2NCAwIDAtMzItNjQgMHpNOTYgMGwwIDI0IDAgODAgMCAyNCA0OCAwIDAtMjQgMC01NiA5NiAwIDAgNTYgMCAyNCA0OCAwIDAtMjQgMC04MCAwLTI0TDI2NCAwIDEyMCAwIDk2IDB6TTI1NiA0ODBsMCAzMiA2NCAwIDAtMzItNjQgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTM4NCAxMjhMMCAxMjggMCA0ODBsMzg0IDAgMC0zNTJ6TTExMiAyMjRsMTYwIDAgMTYgMCAwIDMyLTE2IDAtMTYwIDAtMTYgMCAwLTMyIDE2IDB6bTAgMTI4bDE2MCAwIDE2IDAgMCAzMi0xNiAwLTE2MCAwLTE2IDAgMC0zMiAxNiAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const SuitcaseRolling: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M64 480l0 32 64 0 0-32-64 0zM96 0l0 24 0 80 0 24 48 0 0-24 0-56 96 0 0 56 0 24 48 0 0-24 0-80 0-24L264 0 120 0 96 0zM256 480l0 32 64 0 0-32-64 0z" />
            <path d="M384 128L0 128 0 480l384 0 0-352zM112 224l160 0 16 0 0 32-16 0-160 0-16 0 0-32 16 0zm0 128l160 0 16 0 0 32-16 0-160 0-16 0 0-32 16 0z" />
    </Icon>
);

export default SuitcaseRolling;