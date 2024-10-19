
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `opencart` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/opencart?s=brands opencart}
 * @preview ![opencart](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MjMuMyA0NDAuN2MwIDI1LjMtMjAuMyA0NS42LTQ1LjYgNDUuNnMtNDUuOC0yMC4zLTQ1LjgtNDUuNiAyMC42LTQ1LjggNDUuOC00NS44YzI1LjQgMCA0NS42IDIwLjUgNDUuNiA0NS44em0tMjUzLjktNDUuOGMtMjUuMyAwLTQ1LjYgMjAuNi00NS42IDQ1LjhzMjAuMyA0NS42IDQ1LjYgNDUuNiA0NS44LTIwLjMgNDUuOC00NS42LTIwLjUtNDUuOC00NS44LTQ1Ljh6bTI5MS43LTI3MEMxNTguOSAxMjQuOSA4MS45IDExMi4xIDAgMjUuN2MzNC40IDUxLjcgNTMuMyAxNDguOSAzNzMuMSAxNDQuMiAzMzMuMy01IDEzMCA4Ni4xIDcwLjggMTg4LjkgMTg2LjctMTY2LjcgMzE5LjQtMjMzLjkgMTcuMi0yMzMuOXoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Opencart(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M423.3 440.7c0 25.3-20.3 45.6-45.6 45.6s-45.8-20.3-45.8-45.6 20.6-45.8 45.8-45.8c25.4 0 45.6 20.5 45.6 45.8zm-253.9-45.8c-25.3 0-45.6 20.6-45.6 45.8s20.3 45.6 45.6 45.6 45.8-20.3 45.8-45.6-20.5-45.8-45.8-45.8zm291.7-270C158.9 124.9 81.9 112.1 0 25.7c34.4 51.7 53.3 148.9 373.1 144.2 333.3-5 130 86.1 70.8 188.9 186.7-166.7 319.4-233.9 17.2-233.9z" />
        </Icon>
    </>
}