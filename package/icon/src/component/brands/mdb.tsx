
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `mdb` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/mdb?s=brands mdb}
 * @preview ![mdb](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNy4zNyAxNjAuNDFMNyAzNTJoNDMuOTFsNS41OS03OS44M0w4NC40MyAzNTJoNDQuNzFsMjUuNTQtNzcuNDMgNC43OSA3Ny40M0gyMDVsLTEyLjc5LTE5MS41OUgxNDYuN0wxMDYgMjc3Ljc0IDYzLjY3IDE2MC40MXptMjgxIDBoLTQ3LjlWMzUyaDQ3LjlzOTUgLjggOTQuMi05NS43OWMtLjc4LTk0LjIxLTk0LjE4LTk1Ljc4LTk0LjE4LTk1Ljc4em0tMS4yIDE0Ni40NlYyMDQuNzhzNDYgNC4yNyA0Ni44IDUwLjU3LTQ2Ljc4IDUxLjU0LTQ2Ljc4IDUxLjU0em0yMzguMjktNzQuMjRhNTYuMTYgNTYuMTYgMCAwIDAgOC0zOC4zMWMtNS4zNC0zNS43Ni01NS4wOC0zNC4zMi01NS4wOC0zNC4zMmgtNTEuOXYxOTEuNThINDgyczg3IDQuNzkgODctNjMuODVjMC00My4xNC0zMy41Mi01NS4wOC0zMy41Mi01NS4wOHptLTUxLjktMzEuOTRzMTMuNTctMS41OSAxNiA5LjU5YzEuNDMgNi42Ni00IDEyLTQgMTJoLTEydi0yMS41N3ptLS4xIDEwOS40NmwuMS0yNC45MlYyNjdoLjA4czQxLjU4LTQuNzMgNDEuMTkgMjIuNDNjLS4zMyAyNS42NS00MS4zNSAyMC43NC00MS4zNSAyMC43NHoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Mdb(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M17.37 160.41L7 352h43.91l5.59-79.83L84.43 352h44.71l25.54-77.43 4.79 77.43H205l-12.79-191.59H146.7L106 277.74 63.67 160.41zm281 0h-47.9V352h47.9s95 .8 94.2-95.79c-.78-94.21-94.18-95.78-94.18-95.78zm-1.2 146.46V204.78s46 4.27 46.8 50.57-46.78 51.54-46.78 51.54zm238.29-74.24a56.16 56.16 0 0 0 8-38.31c-5.34-35.76-55.08-34.32-55.08-34.32h-51.9v191.58H482s87 4.79 87-63.85c0-43.14-33.52-55.08-33.52-55.08zm-51.9-31.94s13.57-1.59 16 9.59c1.43 6.66-4 12-4 12h-12v-21.57zm-.1 109.46l.1-24.92V267h.08s41.58-4.73 41.19 22.43c-.33 25.65-41.35 20.74-41.35 20.74z" />
        </Icon>
    </>
}