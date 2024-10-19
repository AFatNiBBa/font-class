
import { Icon, generic } from "../../index";

/**
 * A component that renders the `map` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/map?s=sharp-duotone-solid map}
 * @preview ![map](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xOTIgMzJsMCAzODQgMTkyIDY0IDAtMzg0TDE5MiAzMnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTAgNDgwTDAgOTYgMTkyIDMybDAgMzg0TDAgNDgwem0zODQgMGwwLTM4NEw1NzYgMzJsMCAzODRMMzg0IDQ4MHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Map: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M192 32l0 384 192 64 0-384L192 32z" />
            <path d="M0 480L0 96 192 32l0 384L0 480zm384 0l0-384L576 32l0 384L384 480z" />
    </Icon>
);

export default Map;