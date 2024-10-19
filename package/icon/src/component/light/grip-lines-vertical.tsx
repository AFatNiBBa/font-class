
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `grip-lines-vertical` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/grip-lines-vertical?s=light grip-lines-vertical}
 * @preview ![grip-lines-vertical](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNiA0OFY0NjRDMTYgNDcyLjggMjMuMiA0ODAgMzIgNDgwSDMyQzQwLjggNDgwIDQ4IDQ3Mi44IDQ4IDQ2NFY0OEM0OCAzOS4yIDQwLjggMzIgMzIgMzJIMzJDMjMuMiAzMiAxNiAzOS4yIDE2IDQ4Wk0xNDQgNDhWNDY0QzE0NCA0NzIuOCAxNTEuMiA0ODAgMTYwIDQ4MEgxNjBDMTY4LjggNDgwIDE3NiA0NzIuOCAxNzYgNDY0VjQ4QzE3NiAzOS4yIDE2OC44IDMyIDE2MCAzMkgxNjBDMTUxLjIgMzIgMTQ0IDM5LjIgMTQ0IDQ4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function GripLinesVertical(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 192 512" {...props}>
            <path d="M16 48V464C16 472.8 23.2 480 32 480H32C40.8 480 48 472.8 48 464V48C48 39.2 40.8 32 32 32H32C23.2 32 16 39.2 16 48ZM144 48V464C144 472.8 151.2 480 160 480H160C168.8 480 176 472.8 176 464V48C176 39.2 168.8 32 160 32H160C151.2 32 144 39.2 144 48Z" />
        </Icon>
    </>
}