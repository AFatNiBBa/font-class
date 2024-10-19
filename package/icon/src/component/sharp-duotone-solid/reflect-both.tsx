
import { Icon, generic } from "../../index";

/**
 * A component that renders the `reflect-both` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/reflect-both?s=sharp-duotone-solid reflect-both}
 * @preview ![reflect-both](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDk2TDAgNDE2bDMyIDBMMTkyIDI1NiAzMiA5NiAwIDk2ek0zMjAgMjU2TDQ4MCA0MTZsMzIgMCAwLTMyMC0zMiAwTDMyMCAyNTZ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yNTYgMTkyTDk2IDMyIDk2IDAgNDE2IDBsMCAzMkwyNTYgMTkyem0wIDEyOEw0MTYgNDgwbDAgMzJMOTYgNTEybDAtMzJMMjU2IDMyMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const ReflectBoth: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 96L0 416l32 0L192 256 32 96 0 96zM320 256L480 416l32 0 0-320-32 0L320 256z" />
            <path d="M256 192L96 32 96 0 416 0l0 32L256 192zm0 128L416 480l0 32L96 512l0-32L256 320z" />
    </Icon>
);

export default ReflectBoth;