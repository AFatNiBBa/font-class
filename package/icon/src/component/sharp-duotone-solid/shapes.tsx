
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shapes` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shapes?s=sharp-duotone-solid shapes}
 * @preview ![shapes](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDM4NGExMjggMTI4IDAgMSAwIDI1NiAwQTEyOCAxMjggMCAxIDAgMCAzODR6TTE2MCAyMjRsMjU2IDBMMjg4IDAgMTYwIDIyNHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI4OCAyNzJINTEyVjQ5NkgyODhWMjcyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Shapes: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 384a128 128 0 1 0 256 0A128 128 0 1 0 0 384zM160 224l256 0L288 0 160 224z" />
            <path d="M288 272H512V496H288V272z" />
    </Icon>
);

export default Shapes;