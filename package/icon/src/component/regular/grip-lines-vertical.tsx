
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `grip-lines-vertical` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/grip-lines-vertical?s=regular grip-lines-vertical}
 * @preview ![grip-lines-vertical](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMiAzMkgzMkMxOC44IDMyIDggNDIuOCA4IDU2VjQ1NkM4IDQ2OS4yIDE4LjggNDgwIDMyIDQ4MEgzMkM0NS4yIDQ4MCA1NiA0NjkuMiA1NiA0NTZWNTZDNTYgNDIuOCA0NS4yIDMyIDMyIDMyWk0xNjAgMzJIMTYwQzE0Ni44IDMyIDEzNiA0Mi44IDEzNiA1NlY0NTZDMTM2IDQ2OS4yIDE0Ni44IDQ4MCAxNjAgNDgwSDE2MEMxNzMuMiA0ODAgMTg0IDQ2OS4yIDE4NCA0NTZWNTZDMTg0IDQyLjggMTczLjIgMzIgMTYwIDMyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function GripLinesVertical(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 192 512" {...props}>
            <path d="M32 32H32C18.8 32 8 42.8 8 56V456C8 469.2 18.8 480 32 480H32C45.2 480 56 469.2 56 456V56C56 42.8 45.2 32 32 32ZM160 32H160C146.8 32 136 42.8 136 56V456C136 469.2 146.8 480 160 480H160C173.2 480 184 469.2 184 456V56C184 42.8 173.2 32 160 32Z" />
        </Icon>
    </>
}