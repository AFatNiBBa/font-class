
import { Icon, generic } from "../../index";

/**
 * A component that renders the `reflect-vertical` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/reflect-vertical?s=duotone reflect-vertical}
 * @preview ![reflect-vertical](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05OC40IDE5LjhjLTUgMTItMi4yIDI1LjcgNi45IDM0LjlsMTI4IDEyOGMxMi41IDEyLjUgMzIuOCAxMi41IDQ1LjMgMGwxMjgtMTI4YzYuMS02LjEgOS40LTE0LjMgOS40LTIyLjZjMC00LjEtLjgtOC4zLTIuNC0xMi4yQzQwOC42IDcuOCAzOTYuOSAwIDM4NCAwTDEyOCAwYy0xMi45IDAtMjQuNiA3LjgtMjkuNiAxOS44em0wIDQ3Mi41YzUgMTIgMTYuNiAxOS44IDI5LjYgMTkuOGwyNTYgMGMxMi45IDAgMjQuNi03LjggMjkuNi0xOS44YzEuNi00IDIuNC04LjEgMi40LTEyLjJjMC04LjMtMy4zLTE2LjUtOS40LTIyLjZsLTEyOC0xMjhjLTEyLjUtMTIuNS0zMi44LTEyLjUtNDUuMyAwbC0xMjggMTI4Yy05LjIgOS4yLTExLjkgMjIuOS02LjkgMzQuOXoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTAgMjU2YzAtMTMuMyAxMC43LTI0IDI0LTI0bDQ2NCAwYzEzLjMgMCAyNCAxMC43IDI0IDI0cy0xMC43IDI0LTI0IDI0TDI0IDI4MGMtMTMuMyAwLTI0LTEwLjctMjQtMjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const ReflectVertical: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M98.4 19.8c-5 12-2.2 25.7 6.9 34.9l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c6.1-6.1 9.4-14.3 9.4-22.6c0-4.1-.8-8.3-2.4-12.2C408.6 7.8 396.9 0 384 0L128 0c-12.9 0-24.6 7.8-29.6 19.8zm0 472.5c5 12 16.6 19.8 29.6 19.8l256 0c12.9 0 24.6-7.8 29.6-19.8c1.6-4 2.4-8.1 2.4-12.2c0-8.3-3.3-16.5-9.4-22.6l-128-128c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9z" />
            <path d="M0 256c0-13.3 10.7-24 24-24l464 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 280c-13.3 0-24-10.7-24-24z" />
    </Icon>
);

export default ReflectVertical;