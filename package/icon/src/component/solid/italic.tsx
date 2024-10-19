
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `italic` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/italic?s=solid italic}
 * @preview ![italic](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgNzJDMzg0IDk0LjA5NCAzNjYuMDk0IDExMiAzNDQgMTEySDI5NC4yMjNMMTc2LjE5OSA0MDBIMjE2QzIzOC4wOTQgNDAwIDI1NiA0MTcuOTA2IDI1NiA0NDBTMjM4LjA5NCA0ODAgMjE2IDQ4MEg0MEMxNy45MDYgNDgwIDAgNDYyLjA5NCAwIDQ0MFMxNy45MDYgNDAwIDQwIDQwMEg4OS43NzdMMjA3LjgwMSAxMTJIMTY4QzE0NS45MDYgMTEyIDEyOCA5NC4wOTQgMTI4IDcyUzE0NS45MDYgMzIgMTY4IDMySDM0NEMzNjYuMDk0IDMyIDM4NCA0OS45MDYgMzg0IDcyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Italic(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M384 72C384 94.094 366.094 112 344 112H294.223L176.199 400H216C238.094 400 256 417.906 256 440S238.094 480 216 480H40C17.906 480 0 462.094 0 440S17.906 400 40 400H89.777L207.801 112H168C145.906 112 128 94.094 128 72S145.906 32 168 32H344C366.094 32 384 49.906 384 72Z" />
        </Icon>
    </>
}