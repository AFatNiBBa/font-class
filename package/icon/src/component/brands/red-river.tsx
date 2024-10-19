
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `red-river` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/red-river?s=brands red-river}
 * @preview ![red-river](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNTMuMiAzMkg5NC44QzQyLjQgMzIgMCA3NC40IDAgMTI2Ljh2MjU4LjRDMCA0MzcuNiA0Mi40IDQ4MCA5NC44IDQ4MGgyNTguNGM1Mi40IDAgOTQuOC00Mi40IDk0LjgtOTQuOFYxMjYuOGMwLTUyLjQtNDIuNC05NC44LTk0LjgtOTQuOHpNMTQ0LjkgMjAwLjl2NTYuM2MwIDI3LTIxLjkgNDguOS00OC45IDQ4LjlWMTUxLjljMC0xMy4yIDEwLjctMjMuOSAyMy45LTIzLjloMTU0LjJjMCAyNy0yMS45IDQ4LjktNDguOSA0OC45aC01Ni4zYy0xMi4zLS42LTI0LjYgMTEuNi0yNCAyNHptMTc2LjMgNzJoLTU2LjNjLTEyLjMtLjYtMjQuNiAxMS42LTI0IDI0djU2LjNjMCAyNy0yMS45IDQ4LjktNDguOSA0OC45VjI0Ny45YzAtMTMuMiAxMC43LTIzLjkgMjMuOS0yMy45aDE1NC4yYzAgMjctMjEuOSA0OC45LTQ4LjkgNDguOXoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function RedRiver(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M353.2 32H94.8C42.4 32 0 74.4 0 126.8v258.4C0 437.6 42.4 480 94.8 480h258.4c52.4 0 94.8-42.4 94.8-94.8V126.8c0-52.4-42.4-94.8-94.8-94.8zM144.9 200.9v56.3c0 27-21.9 48.9-48.9 48.9V151.9c0-13.2 10.7-23.9 23.9-23.9h154.2c0 27-21.9 48.9-48.9 48.9h-56.3c-12.3-.6-24.6 11.6-24 24zm176.3 72h-56.3c-12.3-.6-24.6 11.6-24 24v56.3c0 27-21.9 48.9-48.9 48.9V247.9c0-13.2 10.7-23.9 23.9-23.9h154.2c0 27-21.9 48.9-48.9 48.9z" />
        </Icon>
    </>
}