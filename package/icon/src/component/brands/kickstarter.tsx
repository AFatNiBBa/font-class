
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `kickstarter` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/kickstarter?s=brands kickstarter}
 * @preview ![kickstarter](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MDAgNDgwSDQ4Yy0yNi40IDAtNDgtMjEuNi00OC00OFY4MGMwLTI2LjQgMjEuNi00OCA0OC00OGgzNTJjMjYuNCAwIDQ4IDIxLjYgNDggNDh2MzUyYzAgMjYuNC0yMS42IDQ4LTQ4IDQ4ek0xOTkuNiAxNzguNWMwLTMwLjctMTcuNi00NS4xLTM5LjctNDUuMS0yNS44IDAtNDAgMTkuOC00MCA0NC41djE1NC44YzAgMjUuOCAxMy43IDQ1LjYgNDAuNSA0NS42IDIxLjUgMCAzOS4yLTE0IDM5LjItNDUuNnYtNDEuOGw2MC42IDc1LjdjMTIuMyAxNC45IDM5IDE2LjggNTUuOCAwIDE0LjYtMTUuMSAxNC44LTM2LjggNC01MC40bC00OS4xLTYyLjggNDAuNS01OC43YzkuNC0xMy41IDkuNS0zNC41LTUuNi00OS4xLTE2LjQtMTUuOS00NC42LTE3LjMtNjEuNCA3bC00NC44IDY0Ljd2LTM4Ljh6Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Kickstarter(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M400 480H48c-26.4 0-48-21.6-48-48V80c0-26.4 21.6-48 48-48h352c26.4 0 48 21.6 48 48v352c0 26.4-21.6 48-48 48zM199.6 178.5c0-30.7-17.6-45.1-39.7-45.1-25.8 0-40 19.8-40 44.5v154.8c0 25.8 13.7 45.6 40.5 45.6 21.5 0 39.2-14 39.2-45.6v-41.8l60.6 75.7c12.3 14.9 39 16.8 55.8 0 14.6-15.1 14.8-36.8 4-50.4l-49.1-62.8 40.5-58.7c9.4-13.5 9.5-34.5-5.6-49.1-16.4-15.9-44.6-17.3-61.4 7l-44.8 64.7v-38.8z" />
        </Icon>
    </>
}