
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `fonticons` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/fonticons?s=brands fonticons}
 * @preview ![fonticons](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0wIDMydjQ0OGg0NDhWMzJ6bTE4NyAxNDAuOWMtMTguNCAwLTE5IDkuOS0xOSAyNy40djIzLjNjMCAyLjQtMy41IDQuNC0uNiA0LjRoNjcuNGwtMTEuMSAzNy4zSDE2OHYxMTIuOWMwIDUuOC0yIDYuNyAzLjIgNy4zbDQzLjUgNC4xdjI1LjFIODRWMzg5bDIxLjMtMmM1LjItLjYgNi43LTIuMyA2LjctNy45VjI2Ny43YzAtMi4zLTIuOS0yLjMtNS44LTIuM0g4NFYyMjhoMjh2LTIxYzAtNDkuNiAyNi41LTcwIDc3LjMtNzAgMzQuMSAwIDY0LjcgOC4yIDY0LjcgNTIuOGwtNTAuNyA2LjFjLjMtMTguNy00LjQtMjMtMTYuMy0yM3ptNzQuMyAyNDEuOHYtMjUuMWwyMC40LTIuNmM1LjItLjYgNy42LTEuNyA3LjYtNy4zVjI3MS44YzAtNC4xLTIuOS02LjctNi43LTcuOWwtMjQuMi02LjQgNi43LTI5LjVoODAuMnYxNTEuN2MwIDUuOC0yLjYgNi40IDIuOSA3LjNsMTUuNyAyLjZ2MjUuMXptODAuOC0yNTUuNWw5IDMzLjItNy4zIDcuMy0zMS4yLTE2LjYtMzEuMiAxNi42LTcuMy03LjMgOS0zMy4yLTIxLjgtMjQuMiAzLjUtOS42aDI3LjdsMTUuNS0yOGg5LjNsMTUuNSAyOGgyNy43bDMuNSA5LjZ6Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Fonticons(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M0 32v448h448V32zm187 140.9c-18.4 0-19 9.9-19 27.4v23.3c0 2.4-3.5 4.4-.6 4.4h67.4l-11.1 37.3H168v112.9c0 5.8-2 6.7 3.2 7.3l43.5 4.1v25.1H84V389l21.3-2c5.2-.6 6.7-2.3 6.7-7.9V267.7c0-2.3-2.9-2.3-5.8-2.3H84V228h28v-21c0-49.6 26.5-70 77.3-70 34.1 0 64.7 8.2 64.7 52.8l-50.7 6.1c.3-18.7-4.4-23-16.3-23zm74.3 241.8v-25.1l20.4-2.6c5.2-.6 7.6-1.7 7.6-7.3V271.8c0-4.1-2.9-6.7-6.7-7.9l-24.2-6.4 6.7-29.5h80.2v151.7c0 5.8-2.6 6.4 2.9 7.3l15.7 2.6v25.1zm80.8-255.5l9 33.2-7.3 7.3-31.2-16.6-31.2 16.6-7.3-7.3 9-33.2-21.8-24.2 3.5-9.6h27.7l15.5-28h9.3l15.5 28h27.7l3.5 9.6z" />
        </Icon>
    </>
}