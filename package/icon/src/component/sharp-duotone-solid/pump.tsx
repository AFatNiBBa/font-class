
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pump` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pump?s=sharp-duotone-solid pump}
 * @preview ![pump](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCAyMjRsOTYgMCAwLTE2MCAxNjAgMCAwIDE2MCAzMiAwIDAgMTYwTDY0IDM4NGwwLTE2MHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE2MCAwTDEyOCAwbDAgNjQgMzIgMCAxNjAgMCAzMiAwIDAtNjRMMzIwIDAgMTYwIDB6TTY0IDIwOGwwLTMyTDAgMTc2bDAgMzJMMCAzODRsMCAzMiA2NCAwIDAtMzIgMC0xNzZ6TTQ0OCA5NmwtOTYgNjQgMCAyODggOTYgNjQgMTkyIDAgMC00MTZMNDQ4IDk2em0wIDk2bDE2IDAgOTYgMCAxNiAwIDAgMzItMTYgMC05NiAwLTE2IDAgMC0zMnptMCA5NmwxNiAwIDk2IDAgMTYgMCAwIDMyLTE2IDAtOTYgMC0xNiAwIDAtMzJ6bTAgOTZsMTYgMCA5NiAwIDE2IDAgMCAzMi0xNiAwLTk2IDAtMTYgMCAwLTMyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Pump: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 224l96 0 0-160 160 0 0 160 32 0 0 160L64 384l0-160z" />
            <path d="M160 0L128 0l0 64 32 0 160 0 32 0 0-64L320 0 160 0zM64 208l0-32L0 176l0 32L0 384l0 32 64 0 0-32 0-176zM448 96l-96 64 0 288 96 64 192 0 0-416L448 96zm0 96l16 0 96 0 16 0 0 32-16 0-96 0-16 0 0-32zm0 96l16 0 96 0 16 0 0 32-16 0-96 0-16 0 0-32zm0 96l16 0 96 0 16 0 0 32-16 0-96 0-16 0 0-32z" />
    </Icon>
);

export default Pump;