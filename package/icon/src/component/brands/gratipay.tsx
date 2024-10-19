
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `gratipay` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/gratipay?s=brands gratipay}
 * @preview ![gratipay](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OTYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNDggOEMxMTEuMSA4IDAgMTE5LjEgMCAyNTZzMTExLjEgMjQ4IDI0OCAyNDggMjQ4LTExMS4xIDI0OC0yNDhTMzg0LjkgOCAyNDggOHptMTE0LjYgMjI2LjRsLTExMyAxNTIuNy0xMTIuNy0xNTIuN2MtOC43LTExLjktMTkuMS01MC40IDEzLjYtNzIgMjguMS0xOC4xIDU0LjYtNC4yIDY4LjUgMTEuOSAxNS45IDE3LjkgNDYuNiAxNi45IDYxLjcgMCAxMy45LTE2LjEgNDAuNC0zMCA2OC4xLTExLjkgMzIuOSAyMS42IDIyLjYgNjAgMTMuOCA3MnoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Gratipay(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 496 512" {...props}>
            <path d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm114.6 226.4l-113 152.7-112.7-152.7c-8.7-11.9-19.1-50.4 13.6-72 28.1-18.1 54.6-4.2 68.5 11.9 15.9 17.9 46.6 16.9 61.7 0 13.9-16.1 40.4-30 68.1-11.9 32.9 21.6 22.6 60 13.8 72z" />
        </Icon>
    </>
}