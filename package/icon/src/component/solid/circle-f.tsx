
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `circle-f` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-f?s=solid circle-f}
 * @preview ![circle-f](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUxIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ5IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTMyOCAxNzZIMjA4VjI0MEgyOTZDMzA5LjI1IDI0MCAzMjAgMjUwLjc1IDMyMCAyNjRTMzA5LjI1IDI4OCAyOTYgMjg4SDIwOFYzNjBDMjA4IDM3My4yNSAxOTcuMjUgMzg0IDE4NCAzODRTMTYwIDM3My4yNSAxNjAgMzYwVjE1MkMxNjAgMTM4Ljc1IDE3MC43NSAxMjggMTg0IDEyOEgzMjhDMzQxLjI1IDEyOCAzNTIgMTM4Ljc1IDM1MiAxNTJTMzQxLjI1IDE3NiAzMjggMTc2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CircleF(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM328 176H208V240H296C309.25 240 320 250.75 320 264S309.25 288 296 288H208V360C208 373.25 197.25 384 184 384S160 373.25 160 360V152C160 138.75 170.75 128 184 128H328C341.25 128 352 138.75 352 152S341.25 176 328 176Z" />
        </Icon>
    </>
}