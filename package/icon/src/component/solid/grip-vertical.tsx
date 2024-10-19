
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `grip-vertical` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/grip-vertical?s=solid grip-vertical}
 * @preview ![grip-vertical](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik05NiAzMkgzMkMxNC4zNzUgMzIgMCA0Ni4zNzUgMCA2NFYxMjhDMCAxNDUuNjI1IDE0LjM3NSAxNjAgMzIgMTYwSDk2QzExMy42MjUgMTYwIDEyOCAxNDUuNjI1IDEyOCAxMjhWNjRDMTI4IDQ2LjM3NSAxMTMuNjI1IDMyIDk2IDMyWk05NiAxOTJIMzJDMTQuMzc1IDE5MiAwIDIwNi4zNzUgMCAyMjRWMjg4QzAgMzA1LjYyNSAxNC4zNzUgMzIwIDMyIDMyMEg5NkMxMTMuNjI1IDMyMCAxMjggMzA1LjYyNSAxMjggMjg4VjIyNEMxMjggMjA2LjM3NSAxMTMuNjI1IDE5MiA5NiAxOTJaTTk2IDM1MkgzMkMxNC4zNzUgMzUyIDAgMzY2LjM3NSAwIDM4NFY0NDhDMCA0NjUuNjI1IDE0LjM3NSA0ODAgMzIgNDgwSDk2QzExMy42MjUgNDgwIDEyOCA0NjUuNjI1IDEyOCA0NDhWMzg0QzEyOCAzNjYuMzc1IDExMy42MjUgMzUyIDk2IDM1MlpNMjg4IDMySDIyNEMyMDYuMzc1IDMyIDE5MiA0Ni4zNzUgMTkyIDY0VjEyOEMxOTIgMTQ1LjYyNSAyMDYuMzc1IDE2MCAyMjQgMTYwSDI4OEMzMDUuNjI1IDE2MCAzMjAgMTQ1LjYyNSAzMjAgMTI4VjY0QzMyMCA0Ni4zNzUgMzA1LjYyNSAzMiAyODggMzJaTTI4OCAxOTJIMjI0QzIwNi4zNzUgMTkyIDE5MiAyMDYuMzc1IDE5MiAyMjRWMjg4QzE5MiAzMDUuNjI1IDIwNi4zNzUgMzIwIDIyNCAzMjBIMjg4QzMwNS42MjUgMzIwIDMyMCAzMDUuNjI1IDMyMCAyODhWMjI0QzMyMCAyMDYuMzc1IDMwNS42MjUgMTkyIDI4OCAxOTJaTTI4OCAzNTJIMjI0QzIwNi4zNzUgMzUyIDE5MiAzNjYuMzc1IDE5MiAzODRWNDQ4QzE5MiA0NjUuNjI1IDIwNi4zNzUgNDgwIDIyNCA0ODBIMjg4QzMwNS42MjUgNDgwIDMyMCA0NjUuNjI1IDMyMCA0NDhWMzg0QzMyMCAzNjYuMzc1IDMwNS42MjUgMzUyIDI4OCAzNTJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function GripVertical(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M96 32H32C14.375 32 0 46.375 0 64V128C0 145.625 14.375 160 32 160H96C113.625 160 128 145.625 128 128V64C128 46.375 113.625 32 96 32ZM96 192H32C14.375 192 0 206.375 0 224V288C0 305.625 14.375 320 32 320H96C113.625 320 128 305.625 128 288V224C128 206.375 113.625 192 96 192ZM96 352H32C14.375 352 0 366.375 0 384V448C0 465.625 14.375 480 32 480H96C113.625 480 128 465.625 128 448V384C128 366.375 113.625 352 96 352ZM288 32H224C206.375 32 192 46.375 192 64V128C192 145.625 206.375 160 224 160H288C305.625 160 320 145.625 320 128V64C320 46.375 305.625 32 288 32ZM288 192H224C206.375 192 192 206.375 192 224V288C192 305.625 206.375 320 224 320H288C305.625 320 320 305.625 320 288V224C320 206.375 305.625 192 288 192ZM288 352H224C206.375 352 192 366.375 192 384V448C192 465.625 206.375 480 224 480H288C305.625 480 320 465.625 320 448V384C320 366.375 305.625 352 288 352Z" />
        </Icon>
    </>
}