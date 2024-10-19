
import { Icon, generic } from "../../index";

/**
 * A component that renders the `turn-left-down` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turn-left-down?s=sharp-duotone-solid turn-left-down}
 * @preview ![turn-left-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNDQgMEwzODQgMGwwIDk2TDI0MCA5NmwwIDIyNC05NiAwTDE0NCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzIgMzUyTDE5MiA1MTIgMzUyIDM1MmwwLTMyTDMyIDMyMGwwIDMyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const TurnLeftDown: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M144 0L384 0l0 96L240 96l0 224-96 0L144 0z" />
            <path d="M32 352L192 512 352 352l0-32L32 320l0 32z" />
    </Icon>
);

export default TurnLeftDown;