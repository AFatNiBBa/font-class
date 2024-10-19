
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `unsplash` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/unsplash?s=brands unsplash}
 * @preview ![unsplash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDgsMjMwLjE3VjQ4MEgwVjIzMC4xN0gxNDEuMTNWMzU1LjA5SDMwNi44N1YyMzAuMTdaTTMwNi44NywzMkgxNDEuMTNWMTU2LjkxSDMwNi44N1oiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Unsplash(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M448,230.17V480H0V230.17H141.13V355.09H306.87V230.17ZM306.87,32H141.13V156.91H306.87Z" />
        </Icon>
    </>
}