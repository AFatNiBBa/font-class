
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `windows` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/windows?s=brands windows}
 * @preview ![windows](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0wIDkzLjdsMTgzLjYtMjUuM3YxNzcuNEgwVjkzLjd6bTAgMzI0LjZsMTgzLjYgMjUuM1YyNjguNEgwdjE0OS45em0yMDMuOCAyOEw0NDggNDgwVjI2OC40SDIwMy44djE3Ny45em0wLTM4MC42djE4MC4xSDQ0OFYzMkwyMDMuOCA2NS43eiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Windows(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z" />
        </Icon>
    </>
}