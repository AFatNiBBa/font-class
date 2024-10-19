
import { Icon, generic } from "../../index";

/**
 * A component that renders the `warehouse` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/warehouse?s=sharp-duotone-solid warehouse}
 * @preview ![warehouse](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMjggMjI0bDAgODAgMzg0IDAgMC04MC0zODQgMHptMCAxMTJsMCA2NCAzODQgMCAwLTY0LTM4NCAwem0wIDk2bDAgODAgMzg0IDAgMC04MC0zODQgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTAgMTI4VjUxMkg5NlYxOTJINTQ0VjUxMmg5NlYxMjhMMzIwIDAgMCAxMjh6Ii8+PC9zdmc+|width=32|height=32)
 */
const Warehouse: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M128 224l0 80 384 0 0-80-384 0zm0 112l0 64 384 0 0-64-384 0zm0 96l0 80 384 0 0-80-384 0z" />
            <path d="M0 128V512H96V192H544V512h96V128L320 0 0 128z" />
    </Icon>
);

export default Warehouse;