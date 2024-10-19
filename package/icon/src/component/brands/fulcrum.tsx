
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `fulcrum` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/fulcrum?s=brands fulcrum}
 * @preview ![fulcrum](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik05NS43NSAxNjQuMTRsLTM1LjM4IDQzLjU1TDI1IDE2NC4xNGwzNS4zOC00My41NXpNMTQ0LjIzIDBsLTIwLjU0IDE5OC4xOEw3Mi43MiAyNTZsNTEgNTcuODJMMTQ0LjIzIDUxMlYzMDAuODlMMTAzLjE1IDI1Nmw0MS4wOC00NC44OXptNzkuNjcgMTY0LjE0bDM1LjM4IDQzLjU1IDM1LjM4LTQzLjU1LTM1LjM4LTQzLjU1em0tNDguNDggNDdMMjE2LjUgMjU2bC00MS4wOCA0NC44OVY1MTJMMTk2IDMxMy44MiAyNDcgMjU2bC01MS01Ny44MkwxNzUuNDIgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Fulcrum(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M95.75 164.14l-35.38 43.55L25 164.14l35.38-43.55zM144.23 0l-20.54 198.18L72.72 256l51 57.82L144.23 512V300.89L103.15 256l41.08-44.89zm79.67 164.14l35.38 43.55 35.38-43.55-35.38-43.55zm-48.48 47L216.5 256l-41.08 44.89V512L196 313.82 247 256l-51-57.82L175.42 0z" />
        </Icon>
    </>
}