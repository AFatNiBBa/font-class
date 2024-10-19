
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `circle-small` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-small?s=regular circle-small}
 * @preview ![circle-small](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNjAgOTZDNzEuNjM1IDk2IDAgMTY3LjYzMyAwIDI1NkMwIDM0NC4zNjUgNzEuNjM1IDQxNiAxNjAgNDE2QzI0OC4zNjcgNDE2IDMyMCAzNDQuMzY1IDMyMCAyNTZDMzIwIDE2Ny42MzMgMjQ4LjM2NyA5NiAxNjAgOTZaTTE2MCAzNjhDOTguMjQ0IDM2OCA0OCAzMTcuNzU2IDQ4IDI1NkM0OCAxOTQuMjQyIDk4LjI0NCAxNDQgMTYwIDE0NEMyMjEuNzU4IDE0NCAyNzIgMTk0LjI0MiAyNzIgMjU2QzI3MiAzMTcuNzU2IDIyMS43NTggMzY4IDE2MCAzNjhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CircleSmall(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M160 96C71.635 96 0 167.633 0 256C0 344.365 71.635 416 160 416C248.367 416 320 344.365 320 256C320 167.633 248.367 96 160 96ZM160 368C98.244 368 48 317.756 48 256C48 194.242 98.244 144 160 144C221.758 144 272 194.242 272 256C272 317.756 221.758 368 160 368Z" />
        </Icon>
    </>
}