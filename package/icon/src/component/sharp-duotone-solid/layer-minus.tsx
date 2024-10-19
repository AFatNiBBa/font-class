
import { Icon, generic } from "../../index";

/**
 * A component that renders the `layer-minus` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/layer-minus?s=sharp-duotone-solid layer-minus}
 * @preview ![layer-minus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NkwyODggMzg0IDU3NiAyNTYgMjg4IDEyOCAwIDI1NnpNMCAzODRMMjg4IDUxMiA1NzYgMzg0IDQ3MS40IDMzNy41IDI4OCA0MTkgMTA0LjYgMzM3LjUgMCAzODR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zODQgNTZsMjQgMCAxMTIgMCAyNCAwIDAgNDgtMjQgMC0xMTIgMC0yNCAwIDAtNDh6Ii8+PC9zdmc+|width=32|height=32)
 */
const LayerMinus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 256L288 384 576 256 288 128 0 256zM0 384L288 512 576 384 471.4 337.5 288 419 104.6 337.5 0 384z" />
            <path d="M384 56l24 0 112 0 24 0 0 48-24 0-112 0-24 0 0-48z" />
    </Icon>
);

export default LayerMinus;