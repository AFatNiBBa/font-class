
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `lastfm-square` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/lastfm-square?s=brands lastfm-square}
 * @preview ![lastfm-square](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MDAgMzJINDhDMjEuNSAzMiAwIDUzLjUgMCA4MHYzNTJjMCAyNi41IDIxLjUgNDggNDggNDhoMzUyYzI2LjUgMCA0OC0yMS41IDQ4LTQ4VjgwYzAtMjYuNS0yMS41LTQ4LTQ4LTQ4em0tOTIuMiAzMTIuOWMtNjMuNCAwLTg1LjQtMjguNi05Ny4xLTY0LjEtMTYuMy01MS0yMS41LTg0LjMtNjMtODQuMy0yMi40IDAtNDUuMSAxNi4xLTQ1LjEgNjEuMiAwIDM1LjIgMTggNTcuMiA0My4zIDU3LjIgMjguNiAwIDQ3LjYtMjEuMyA0Ny42LTIxLjNsMTEuNyAzMS45cy0xOS44IDE5LjQtNjEuMiAxOS40Yy01MS4zIDAtNzkuOS0zMC4xLTc5LjktODUuOCAwLTU3LjkgMjguNi05MiA4Mi41LTkyIDczLjUgMCA4MC44IDQxLjQgMTAwLjggMTAxLjkgOC44IDI2LjggMjQuMiA0Ni4yIDYxLjIgNDYuMiAyNC45IDAgMzguMS01LjUgMzguMS0xOS4xIDAtMTkuOS0yMS44LTIyLTQ5LjktMjguNi0zMC40LTcuMy00Mi41LTIzLjEtNDIuNS00OCAwLTQwIDMyLjMtNTIuNCA2NS4yLTUyLjQgMzcuNCAwIDYwLjEgMTMuNiA2MyA0Ni42bC0zNi43IDQuNGMtMS41LTE1LjgtMTEtMjIuNC0yOC42LTIyLjQtMTYuMSAwLTI2IDcuMy0yNiAxOS44IDAgMTEgNC44IDE3LjYgMjAuOSAyMS4zIDMyLjcgNy4xIDcxLjggMTIgNzEuOCA1Ny41LjEgMzYuNy0zMC43IDUwLjYtNzYuMSA1MC42eiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function LastfmSquare(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-92.2 312.9c-63.4 0-85.4-28.6-97.1-64.1-16.3-51-21.5-84.3-63-84.3-22.4 0-45.1 16.1-45.1 61.2 0 35.2 18 57.2 43.3 57.2 28.6 0 47.6-21.3 47.6-21.3l11.7 31.9s-19.8 19.4-61.2 19.4c-51.3 0-79.9-30.1-79.9-85.8 0-57.9 28.6-92 82.5-92 73.5 0 80.8 41.4 100.8 101.9 8.8 26.8 24.2 46.2 61.2 46.2 24.9 0 38.1-5.5 38.1-19.1 0-19.9-21.8-22-49.9-28.6-30.4-7.3-42.5-23.1-42.5-48 0-40 32.3-52.4 65.2-52.4 37.4 0 60.1 13.6 63 46.6l-36.7 4.4c-1.5-15.8-11-22.4-28.6-22.4-16.1 0-26 7.3-26 19.8 0 11 4.8 17.6 20.9 21.3 32.7 7.1 71.8 12 71.8 57.5.1 36.7-30.7 50.6-76.1 50.6z" />
        </Icon>
    </>
}