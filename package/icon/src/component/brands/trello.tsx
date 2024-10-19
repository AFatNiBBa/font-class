
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `trello` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/trello?s=brands trello}
 * @preview ![trello](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zOTIuMyAzMkg1Ni4xQzI1LjEgMzIgMCA1Ny4xIDAgODhjLS4xIDAgMC00IDAgMzM2IDAgMzAuOSAyNS4xIDU2IDU2IDU2aDMzNi4yYzMwLjgtLjIgNTUuNy0yNS4yIDU1LjctNTZWODhjLjEtMzAuOC0yNC44LTU1LjgtNTUuNi01NnpNMTk3IDM3MS4zYy0uMiAxNC43LTEyLjEgMjYuNi0yNi45IDI2LjZIODcuNGMtMTQuOC4xLTI2LjktMTEuOC0yNy0yNi42VjExNy4xYzAtMTQuOCAxMi0yNi45IDI2LjktMjYuOWg4Mi45YzE0LjggMCAyNi45IDEyIDI2LjkgMjYuOXYyNTQuMnptMTkzLjEtMTEyYzAgMTQuOC0xMiAyNi45LTI2LjkgMjYuOWgtODFjLTE0LjggMC0yNi45LTEyLTI2LjktMjYuOVYxMTcuMmMwLTE0LjggMTItMjYuOSAyNi44LTI2LjloODEuMWMxNC44IDAgMjYuOSAxMiAyNi45IDI2Ljl2MTQyLjF6Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Trello(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M392.3 32H56.1C25.1 32 0 57.1 0 88c-.1 0 0-4 0 336 0 30.9 25.1 56 56 56h336.2c30.8-.2 55.7-25.2 55.7-56V88c.1-30.8-24.8-55.8-55.6-56zM197 371.3c-.2 14.7-12.1 26.6-26.9 26.6H87.4c-14.8.1-26.9-11.8-27-26.6V117.1c0-14.8 12-26.9 26.9-26.9h82.9c14.8 0 26.9 12 26.9 26.9v254.2zm193.1-112c0 14.8-12 26.9-26.9 26.9h-81c-14.8 0-26.9-12-26.9-26.9V117.2c0-14.8 12-26.9 26.8-26.9h81.1c14.8 0 26.9 12 26.9 26.9v142.1z" />
        </Icon>
    </>
}