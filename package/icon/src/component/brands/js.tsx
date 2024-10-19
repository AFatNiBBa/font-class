
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `js` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/js?s=brands js}
 * @preview ![js](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0wIDMydjQ0OGg0NDhWMzJIMHptMjQzLjggMzQ5LjRjMCA0My42LTI1LjYgNjMuNS02Mi45IDYzLjUtMzMuNyAwLTUzLjItMTcuNC02My4yLTM4LjVsMzQuMy0yMC43YzYuNiAxMS43IDEyLjYgMjEuNiAyNy4xIDIxLjYgMTMuOCAwIDIyLjYtNS40IDIyLjYtMjYuNVYyMzcuN2g0Mi4xdjE0My43em05OS42IDYzLjVjLTM5LjEgMC02NC40LTE4LjYtNzYuNy00M2wzNC4zLTE5LjhjOSAxNC43IDIwLjggMjUuNiA0MS41IDI1LjYgMTcuNCAwIDI4LjYtOC43IDI4LjYtMjAuOCAwLTE0LjQtMTEuNC0xOS41LTMwLjctMjhsLTEwLjUtNC41Yy0zMC40LTEyLjktNTAuNS0yOS4yLTUwLjUtNjMuNSAwLTMxLjYgMjQuMS01NS42IDYxLjYtNTUuNiAyNi44IDAgNDYgOS4zIDU5LjggMzMuN0wzNjggMjkwYy03LjItMTIuOS0xNS0xOC0yNy4xLTE4LTEyLjMgMC0yMC4xIDcuOC0yMC4xIDE4IDAgMTIuNiA3LjggMTcuNyAyNS45IDI1LjZsMTAuNSA0LjVjMzUuOCAxNS4zIDU1LjkgMzEgNTUuOSA2Ni4yIDAgMzcuOC0yOS44IDU4LjYtNjkuNyA1OC42eiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Js(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z" />
        </Icon>
    </>
}