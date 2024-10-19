
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `tablet-screen-button` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/tablet-screen-button?s=light tablet-screen-button}
 * @preview ![tablet-screen-button](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMEg2NEMyOC42NTQgMCAwIDI4LjY1NCAwIDY0VjQ0OEMwIDQ4My4zNDYgMjguNjU0IDUxMiA2NCA1MTJIMzg0QzQxOS4zNDYgNTEyIDQ0OCA0ODMuMzQ2IDQ0OCA0NDhWNjRDNDQ4IDI4LjY1NCA0MTkuMzQ2IDAgMzg0IDBaTTQxNiA0NDhDNDE2IDQ2NS42NDUgNDAxLjY0NSA0ODAgMzg0IDQ4MEg2NEM0Ni4zNTUgNDgwIDMyIDQ2NS42NDUgMzIgNDQ4VjM1Mkg0MTZWNDQ4Wk00MTYgMzIwSDMyVjY0QzMyIDQ2LjM1NSA0Ni4zNTUgMzIgNjQgMzJIMzg0QzQwMS42NDUgMzIgNDE2IDQ2LjM1NSA0MTYgNjRWMzIwWk0yMjQgNDQwQzIzNy4zMTIgNDQwIDI0OCA0MjkuMzEyIDI0OCA0MTZTMjM3LjMxMiAzOTIgMjI0IDM5MlMyMDAgNDAyLjY4OCAyMDAgNDE2UzIxMC42ODggNDQwIDIyNCA0NDBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function TabletScreenButton(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M384 0H64C28.654 0 0 28.654 0 64V448C0 483.346 28.654 512 64 512H384C419.346 512 448 483.346 448 448V64C448 28.654 419.346 0 384 0ZM416 448C416 465.645 401.645 480 384 480H64C46.355 480 32 465.645 32 448V352H416V448ZM416 320H32V64C32 46.355 46.355 32 64 32H384C401.645 32 416 46.355 416 64V320ZM224 440C237.312 440 248 429.312 248 416S237.312 392 224 392S200 402.688 200 416S210.688 440 224 440Z" />
        </Icon>
    </>
}