
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `dashcube` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/dashcube?s=brands dashcube}
 * @preview ![dashcube](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjYuNiAxMDRIMTEwLjRjLTUxLjEgMC05MS4yIDQzLjMtOTEuMiA5My41VjQyN2MwIDUwLjUgNDAuMSA4NSA5MS4yIDg1aDIyNy4yYzUxLjEgMCA5MS4yLTM0LjUgOTEuMi04NVYwTDMyNi42IDEwNHpNMTUzLjkgNDE2LjVjLTE3LjcgMC0zMi40LTE1LjEtMzIuNC0zMi44VjI0MC44YzAtMTcuNyAxNC43LTMyLjUgMzIuNC0zMi41aDE0MC43YzE3LjcgMCAzMiAxNC44IDMyIDMyLjV2MTIzLjVsNTEuMSA1Mi4zSDE1My45eiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Dashcube(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M326.6 104H110.4c-51.1 0-91.2 43.3-91.2 93.5V427c0 50.5 40.1 85 91.2 85h227.2c51.1 0 91.2-34.5 91.2-85V0L326.6 104zM153.9 416.5c-17.7 0-32.4-15.1-32.4-32.8V240.8c0-17.7 14.7-32.5 32.4-32.5h140.7c17.7 0 32 14.8 32 32.5v123.5l51.1 52.3H153.9z" />
        </Icon>
    </>
}