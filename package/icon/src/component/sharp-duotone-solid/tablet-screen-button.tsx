
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tablet-screen-button` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tablet-screen-button?s=sharp-duotone-solid tablet-screen-button}
 * @preview ![tablet-screen-button](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMNDQ4IDBsMCA1MTJMMCA1MTIgMCAwek02NCA2NGwwIDMyMCA0OCAwIDIyNCAwIDQ4IDAgMC0zMjAtNDggMEwxMTIgNjQgNjQgNjR6TTE5MiA0NDhhMzIgMzIgMCAxIDAgNjQgMCAzMiAzMiAwIDEgMCAtNjQgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTY0IDY0SDM4NFYzODRINjRWNjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const TabletScreenButton: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 0L448 0l0 512L0 512 0 0zM64 64l0 320 48 0 224 0 48 0 0-320-48 0L112 64 64 64zM192 448a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
            <path d="M64 64H384V384H64V64z" />
    </Icon>
);

export default TabletScreenButton;