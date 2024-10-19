
import { Icon, generic } from "../../index";

/**
 * A component that renders the `car-battery` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/car-battery?s=sharp-duotone-solid car-battery}
 * @preview ![car-battery](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDk2bDgwIDAgMTI4IDAgOTYgMCAxMjggMCA4MCAwIDAgMzUyTDAgNDQ4IDAgOTZ6TTgwIDIyNGwwIDMyIDE2IDAgOTYgMCAxNiAwIDAtMzItMTYgMC05NiAwLTE2IDB6bTIyNCAwbDAgMzIgMTYgMCAzMiAwIDAgMzIgMCAxNiAzMiAwIDAtMTYgMC0zMiAzMiAwIDE2IDAgMC0zMi0xNiAwLTMyIDAgMC0zMiAwLTE2LTMyIDAgMCAxNiAwIDMyLTMyIDAtMTYgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTgwIDY0SDIwOFY5Nkg4MFY2NHptMjI0IDBINDMyVjk2SDMwNFY2NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const CarBattery: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 96l80 0 128 0 96 0 128 0 80 0 0 352L0 448 0 96zM80 224l0 32 16 0 96 0 16 0 0-32-16 0-96 0-16 0zm224 0l0 32 16 0 32 0 0 32 0 16 32 0 0-16 0-32 32 0 16 0 0-32-16 0-32 0 0-32 0-16-32 0 0 16 0 32-32 0-16 0z" />
            <path d="M80 64H208V96H80V64zm224 0H432V96H304V64z" />
    </Icon>
);

export default CarBattery;