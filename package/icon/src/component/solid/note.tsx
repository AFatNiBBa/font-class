
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `note` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/note?s=solid note}
 * @preview ![note](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjAgNDgwTDQ0OCAzNTJIMzIwVjQ4MFpNNDAwIDMySDQ4QzIxLjQ5IDMyIDAgNTMuNDkyIDAgODBWNDMyQzAgNDU4LjUwOCAyMS40OSA0ODAgNDggNDgwSDI4OFYzNTJDMjg4IDMzNC4zMjggMzAyLjMyNiAzMjAgMzIwIDMyMEg0NDhWODBDNDQ4IDUzLjQ5MiA0MjYuNTEgMzIgNDAwIDMyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Note(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M320 480L448 352H320V480ZM400 32H48C21.49 32 0 53.492 0 80V432C0 458.508 21.49 480 48 480H288V352C288 334.328 302.326 320 320 320H448V80C448 53.492 426.51 32 400 32Z" />
        </Icon>
    </>
}