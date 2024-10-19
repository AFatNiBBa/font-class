
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `chromecast` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/chromecast?s=brands chromecast}
 * @preview ![chromecast](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDcuOCw2NEg2NGMtMjMuNiwwLTQyLjcsMTkuMS00Mi43LDQyLjd2NjMuOUg2NHYtNjMuOWgzODMuOHYyOTguNkgyOTguNlY0NDhINDQ4YzIzLjYsMCw0Mi43LTE5LjEsNDIuNy00Mi43VjEwNi43IEM0OTAuNyw4My4xLDQ3MS40LDY0LDQ0Ny44LDY0eiBNMjEuMywzODMuNkwyMS4zLDM4My42bDAsNjMuOWg2My45Qzg1LjIsNDEyLjIsNTYuNiwzODMuNiwyMS4zLDM4My42TDIxLjMsMzgzLjZ6IE0yMS4zLDI5OC42VjM0MSBjNTguOSwwLDEwNi42LDQ4LjEsMTA2LjYsMTA3aDQyLjdDMTcwLjcsMzY1LjYsMTAzLjcsMjk4LjcsMjEuMywyOTguNnogTTIxMy40LDQ0OGg0Mi43Yy0wLjUtMTI5LjUtMTA1LjMtMjM0LjMtMjM0LjgtMjM0LjZsMCw0Mi40IEMxMjcuMywyNTUuNiwyMTMuMywzNDIsMjEzLjQsNDQ4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Chromecast(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M447.8,64H64c-23.6,0-42.7,19.1-42.7,42.7v63.9H64v-63.9h383.8v298.6H298.6V448H448c23.6,0,42.7-19.1,42.7-42.7V106.7 C490.7,83.1,471.4,64,447.8,64z M21.3,383.6L21.3,383.6l0,63.9h63.9C85.2,412.2,56.6,383.6,21.3,383.6L21.3,383.6z M21.3,298.6V341 c58.9,0,106.6,48.1,106.6,107h42.7C170.7,365.6,103.7,298.7,21.3,298.6z M213.4,448h42.7c-0.5-129.5-105.3-234.3-234.8-234.6l0,42.4 C127.3,255.6,213.3,342,213.4,448z" />
        </Icon>
    </>
}