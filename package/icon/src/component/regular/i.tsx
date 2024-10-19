
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `i` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/i?s=regular i}
 * @preview ![i](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjAgNDQ4QzMyMCA0NjUuNjg4IDMwNS42ODggNDgwIDI4OCA0ODBIMzJDMTQuMzEyIDQ4MCAwIDQ2NS42ODggMCA0NDhTMTQuMzEyIDQxNiAzMiA0MTZIMTI4Vjk2SDMyQzE0LjMxMiA5NiAwIDgxLjY4OCAwIDY0UzE0LjMxMiAzMiAzMiAzMkgyODhDMzA1LjY4OCAzMiAzMjAgNDYuMzEyIDMyMCA2NFMzMDUuNjg4IDk2IDI4OCA5NkgxOTJWNDE2SDI4OEMzMDUuNjg4IDQxNiAzMjAgNDMwLjMxMiAzMjAgNDQ4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function I(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M320 448C320 465.688 305.688 480 288 480H32C14.312 480 0 465.688 0 448S14.312 416 32 416H128V96H32C14.312 96 0 81.688 0 64S14.312 32 32 32H288C305.688 32 320 46.312 320 64S305.688 96 288 96H192V416H288C305.688 416 320 430.312 320 448Z" />
        </Icon>
    </>
}