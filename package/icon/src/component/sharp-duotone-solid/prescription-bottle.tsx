
import { Icon, generic } from "../../index";

/**
 * A component that renders the `prescription-bottle` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/prescription-bottle?s=sharp-duotone-solid prescription-bottle}
 * @preview ![prescription-bottle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiA5NmwzMjAgMCAwIDQxNkwzMiA1MTJsMC05NiAxMTIgMCAxNiAwIDAtMzItMTYgMEwzMiAzODRsMC02NCAxMTIgMCAxNiAwIDAtMzItMTYgMEwzMiAyODhsMC02NCAxMTIgMCAxNiAwIDAtMzItMTYgMEwzMiAxOTJsMC05NnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTM4NCAwTDAgMCAwIDk2bDM4NCAwIDAtOTZ6TTE0NCAxOTJMMzIgMTkybDAgMzIgMTEyIDAgMTYgMCAwLTMyLTE2IDB6bTAgOTZMMzIgMjg4bDAgMzIgMTEyIDAgMTYgMCAwLTMyLTE2IDB6bTAgOTZMMzIgMzg0bDAgMzIgMTEyIDAgMTYgMCAwLTMyLTE2IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const PrescriptionBottle: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M32 96l320 0 0 416L32 512l0-96 112 0 16 0 0-32-16 0L32 384l0-64 112 0 16 0 0-32-16 0L32 288l0-64 112 0 16 0 0-32-16 0L32 192l0-96z" />
            <path d="M384 0L0 0 0 96l384 0 0-96zM144 192L32 192l0 32 112 0 16 0 0-32-16 0zm0 96L32 288l0 32 112 0 16 0 0-32-16 0zm0 96L32 384l0 32 112 0 16 0 0-32-16 0z" />
    </Icon>
);

export default PrescriptionBottle;