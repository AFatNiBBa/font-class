
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `mobile-screen-button` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/mobile-screen-button?s=solid mobile-screen-button}
 * @preview ![mobile-screen-button](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMDQgMEg4MEM0NC42NTQgMCAxNiAyOC42NTQgMTYgNjRWNDQ4QzE2IDQ4My4zNDYgNDQuNjU0IDUxMiA4MCA1MTJIMzA0QzMzOS4zNDYgNTEyIDM2OCA0ODMuMzQ2IDM2OCA0NDhWNjRDMzY4IDI4LjY1NCAzMzkuMzQ2IDAgMzA0IDBaTTE5MiA0ODBDMTc0LjI1IDQ4MCAxNjAgNDY1Ljc1IDE2MCA0NDhTMTc0LjI1IDQxNiAxOTIgNDE2UzIyNCA0MzAuMjUgMjI0IDQ0OFMyMDkuNzUgNDgwIDE5MiA0ODBaTTMwNCA2NFYzODRIODBWNjRIMzA0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function MobileScreenButton(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M304 0H80C44.654 0 16 28.654 16 64V448C16 483.346 44.654 512 80 512H304C339.346 512 368 483.346 368 448V64C368 28.654 339.346 0 304 0ZM192 480C174.25 480 160 465.75 160 448S174.25 416 192 416S224 430.25 224 448S209.75 480 192 480ZM304 64V384H80V64H304Z" />
        </Icon>
    </>
}