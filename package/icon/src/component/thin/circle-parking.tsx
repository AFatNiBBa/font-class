
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-parking` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-parking?s=thin circle-parking}
 * @preview ![circle-parking](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yODggMTI4SDE4NEMxNzkuNTc4IDEyOCAxNzYgMTMxLjU3OCAxNzYgMTM2VjM3NkMxNzYgMzgwLjQyMiAxNzkuNTc4IDM4NCAxODQgMzg0UzE5MiAzODAuNDIyIDE5MiAzNzZWMzIwSDI4OEMzNDAuOTM4IDMyMCAzODQgMjc2LjkzOCAzODQgMjI0UzM0MC45MzggMTI4IDI4OCAxMjhaTTI4OCAzMDRIMTkyVjE0NEgyODhDMzMyLjEwOSAxNDQgMzY4IDE3OS44OTEgMzY4IDIyNFMzMzIuMTA5IDMwNCAyODggMzA0Wk0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUxIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ5IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTI1NiA0ODBDMTMyLjQ4NiA0ODAgMzIgMzc5LjUxNCAzMiAyNTZTMTMyLjQ4NiAzMiAyNTYgMzJTNDgwIDEzMi40ODYgNDgwIDI1NlMzNzkuNTE0IDQ4MCAyNTYgNDgwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CircleParking(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M288 128H184C179.578 128 176 131.578 176 136V376C176 380.422 179.578 384 184 384S192 380.422 192 376V320H288C340.938 320 384 276.938 384 224S340.938 128 288 128ZM288 304H192V144H288C332.109 144 368 179.891 368 224S332.109 304 288 304ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 480C132.486 480 32 379.514 32 256S132.486 32 256 32S480 132.486 480 256S379.514 480 256 480Z" />
        </Icon>
    </>
}