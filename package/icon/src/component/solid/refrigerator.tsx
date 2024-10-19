
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `refrigerator` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/refrigerator?s=solid refrigerator}
 * @preview ![refrigerator](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0wIDE2MFY2NEMwIDI4LjY1NCAyOC42NTQgMCA2NCAwSDMyMEMzNTUuMzQ2IDAgMzg0IDI4LjY1NCAzODQgNjRWMTYwSDMyMFY4MEMzMjAgNzEuMiAzMTIuOCA2NCAzMDQgNjRIMzA0QzI5NS4yIDY0IDI4OCA3MS4yIDI4OCA4MFYxNjBIMFpNMzIwIDE5MlYzNjhDMzIwIDM3Ni44IDMxMi44IDM4NCAzMDQgMzg0SDMwNEMyOTUuMiAzODQgMjg4IDM3Ni44IDI4OCAzNjhWMTkySDBWNDgwQzAgNDk3LjY3MyAxNC4zMjcgNTEyIDMyIDUxMkgzNTJDMzY5LjY3MyA1MTIgMzg0IDQ5Ny42NzMgMzg0IDQ4MFYxOTJIMzIwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Refrigerator(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M0 160V64C0 28.654 28.654 0 64 0H320C355.346 0 384 28.654 384 64V160H320V80C320 71.2 312.8 64 304 64H304C295.2 64 288 71.2 288 80V160H0ZM320 192V368C320 376.8 312.8 384 304 384H304C295.2 384 288 376.8 288 368V192H0V480C0 497.673 14.327 512 32 512H352C369.673 512 384 497.673 384 480V192H320Z" />
        </Icon>
    </>
}