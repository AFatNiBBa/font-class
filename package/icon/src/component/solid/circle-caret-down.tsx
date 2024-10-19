
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-caret-down` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-caret-down?s=solid circle-caret-down}
 * @preview ![circle-caret-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUzIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ3IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTM3Ny41OTQgMjQ4LjM0NEwyNzMuNTk0IDM2MC4zNDRDMjY5LjA0NyAzNjUuMjE5IDI2Mi42NzIgMzY4IDI1NiAzNjhTMjQyLjk1MyAzNjUuMjE5IDIzOC40MDYgMzYwLjM0NEwxMzQuNDA2IDI0OC4zNDRDMTI3LjkyMiAyNDEuMzQ0IDEyNi4xODggMjMxLjE1NiAxMzAgMjIyLjQwNkMxMzMuODEyIDIxMy42NTYgMTQyLjQ1MyAyMDggMTUyIDIwOEgzNjBDMzY5LjU0NyAyMDggMzc4LjE4OCAyMTMuNjU2IDM4MiAyMjIuNDA2QzM4NS44MTIgMjMxLjE1NiAzODQuMDc4IDI0MS4zNDQgMzc3LjU5NCAyNDguMzQ0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CircleCaretDown(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.451 16 16 123.453 16 256S123.451 496 256 496S496 388.547 496 256S388.549 16 256 16ZM377.594 248.344L273.594 360.344C269.047 365.219 262.672 368 256 368S242.953 365.219 238.406 360.344L134.406 248.344C127.922 241.344 126.188 231.156 130 222.406C133.812 213.656 142.453 208 152 208H360C369.547 208 378.188 213.656 382 222.406C385.812 231.156 384.078 241.344 377.594 248.344Z" />
        </Icon>
    </>
}