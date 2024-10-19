
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `vuejs` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/vuejs?s=brands vuejs}
 * @preview ![vuejs](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNTYuOSA2NC4zSDI4MGwtNTYgODguNi00OC04OC42SDBMMjI0IDQ0OCA0NDggNjQuM2gtOTEuMXptLTMwMS4yIDMyaDUzLjhMMjI0IDI5NC41IDMzOC40IDk2LjNoNTMuOEwyMjQgMzg0LjUgNTUuNyA5Ni4zeiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Vuejs(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M356.9 64.3H280l-56 88.6-48-88.6H0L224 448 448 64.3h-91.1zm-301.2 32h53.8L224 294.5 338.4 96.3h53.8L224 384.5 55.7 96.3z" />
        </Icon>
    </>
}