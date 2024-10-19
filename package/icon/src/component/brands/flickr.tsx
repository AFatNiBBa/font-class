
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `flickr` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/flickr?s=brands flickr}
 * @preview ![flickr](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MDAgMzJINDhDMjEuNSAzMiAwIDUzLjUgMCA4MHYzNTJjMCAyNi41IDIxLjUgNDggNDggNDhoMzUyYzI2LjUgMCA0OC0yMS41IDQ4LTQ4VjgwYzAtMjYuNS0yMS41LTQ4LTQ4LTQ4ek0xNDQuNSAzMTljLTM1LjEgMC02My41LTI4LjQtNjMuNS02My41czI4LjQtNjMuNSA2My41LTYzLjUgNjMuNSAyOC40IDYzLjUgNjMuNS0yOC40IDYzLjUtNjMuNSA2My41em0xNTkgMGMtMzUuMSAwLTYzLjUtMjguNC02My41LTYzLjVzMjguNC02My41IDYzLjUtNjMuNSA2My41IDI4LjQgNjMuNSA2My41LTI4LjQgNjMuNS02My41IDYzLjV6Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Flickr(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM144.5 319c-35.1 0-63.5-28.4-63.5-63.5s28.4-63.5 63.5-63.5 63.5 28.4 63.5 63.5-28.4 63.5-63.5 63.5zm159 0c-35.1 0-63.5-28.4-63.5-63.5s28.4-63.5 63.5-63.5 63.5 28.4 63.5 63.5-28.4 63.5-63.5 63.5z" />
        </Icon>
    </>
}