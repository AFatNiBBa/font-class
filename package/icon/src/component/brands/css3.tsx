
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `css3` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/css3?s=brands css3}
 * @preview ![css3](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00ODAgMzJsLTY0IDM2OC0yMjMuMyA4MEwwIDQwMGwxOS42LTk0LjhoODJsLTggNDAuNkwyMTAgMzkwLjJsMTM0LjEtNDQuNCAxOC44LTk3LjFIMjkuNWwxNi04MmgzMzMuN2wxMC41LTUyLjdINTYuM2wxNi4zLTgySDQ4MHoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Css3(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M480 32l-64 368-223.3 80L0 400l19.6-94.8h82l-8 40.6L210 390.2l134.1-44.4 18.8-97.1H29.5l16-82h333.7l10.5-52.7H56.3l16.3-82H480z" />
        </Icon>
    </>
}