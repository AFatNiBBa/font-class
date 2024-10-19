
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `window-restore` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/window-restore?s=solid window-restore}
 * @preview ![window-restore](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjAgMTI4SDY0QzI4LjY1NCAxMjggMCAxNTYuNjUyIDAgMTkyVjQ0OEMwIDQ4My4zNDQgMjguNjU0IDUxMiA2NCA1MTJIMzIwQzM1NS4zNDYgNTEyIDM4NCA0ODMuMzQ0IDM4NCA0NDhWMTkyQzM4NCAxNTkuNzIzIDM1Ny42ODQgMTI4IDMyMCAxMjhaTTMyMCAyNTZINjRWMTkySDMyMFYyNTZaTTQ0OCAwSDE5MkMxNTYuNjU0IDAgMTI4IDI4LjY1MiAxMjggNjRWOTZIMTkyVjY0SDQ0OFYzMjBINDE2VjM4NEg0NDhDNDgzLjM0NiAzODQgNTEyIDM1NS4zNDQgNTEyIDMyMFY2NEM1MTIgMjguNjUyIDQ4My4zNDYgMCA0NDggMFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function WindowRestore(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M320 128H64C28.654 128 0 156.652 0 192V448C0 483.344 28.654 512 64 512H320C355.346 512 384 483.344 384 448V192C384 159.723 357.684 128 320 128ZM320 256H64V192H320V256ZM448 0H192C156.654 0 128 28.652 128 64V96H192V64H448V320H416V384H448C483.346 384 512 355.344 512 320V64C512 28.652 483.346 0 448 0Z" />
        </Icon>
    </>
}