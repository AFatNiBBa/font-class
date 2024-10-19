
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `text` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/text?s=regular text}
 * @preview ![text](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggNTZWMTM2QzQ0OCAxNDkuMjUgNDM3LjI1IDE2MCA0MjQgMTYwUzQwMCAxNDkuMjUgNDAwIDEzNlY4MEgyNDhWNDMySDI5NkMzMDkuMjUgNDMyIDMyMCA0NDIuNzUgMzIwIDQ1NlMzMDkuMjUgNDgwIDI5NiA0ODBIMTUyQzEzOC43NSA0ODAgMTI4IDQ2OS4yNSAxMjggNDU2UzEzOC43NSA0MzIgMTUyIDQzMkgyMDBWODBINDhWMTM2QzQ4IDE0OS4yNSAzNy4yNSAxNjAgMjQgMTYwUzAgMTQ5LjI1IDAgMTM2VjU2QzAgNDIuNzUgMTAuNzUgMzIgMjQgMzJINDI0QzQzNy4yNSAzMiA0NDggNDIuNzUgNDQ4IDU2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Text(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M448 56V136C448 149.25 437.25 160 424 160S400 149.25 400 136V80H248V432H296C309.25 432 320 442.75 320 456S309.25 480 296 480H152C138.75 480 128 469.25 128 456S138.75 432 152 432H200V80H48V136C48 149.25 37.25 160 24 160S0 149.25 0 136V56C0 42.75 10.75 32 24 32H424C437.25 32 448 42.75 448 56Z" />
        </Icon>
    </>
}