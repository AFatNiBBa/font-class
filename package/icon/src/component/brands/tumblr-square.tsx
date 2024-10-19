
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `tumblr-square` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/tumblr-square?s=brands tumblr-square}
 * @preview ![tumblr-square](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MDAgMzJINDhDMjEuNSAzMiAwIDUzLjUgMCA4MHYzNTJjMCAyNi41IDIxLjUgNDggNDggNDhoMzUyYzI2LjUgMCA0OC0yMS41IDQ4LTQ4VjgwYzAtMjYuNS0yMS41LTQ4LTQ4LTQ4em0tODIuMyAzNjQuMmMtOC41IDkuMS0zMS4yIDE5LjgtNjAuOSAxOS44LTc1LjUgMC05MS45LTU1LjUtOTEuOS04Ny45di05MGgtMjkuN2MtMy40IDAtNi4yLTIuOC02LjItNi4ydi00Mi41YzAtNC41IDIuOC04LjUgNy4xLTEwIDM4LjgtMTMuNyA1MC45LTQ3LjUgNTIuNy03My4yLjUtNi45IDQuMS0xMC4yIDEwLTEwLjJoNDQuM2MzLjQgMCA2LjIgMi44IDYuMiA2LjJ2NzJoNTEuOWMzLjQgMCA2LjIgMi44IDYuMiA2LjJ2NTEuMWMwIDMuNC0yLjggNi4yLTYuMiA2LjJoLTUyLjFWMzIxYzAgMjEuNCAxNC44IDMzLjUgNDIuNSAyMi40IDMtMS4yIDUuNi0yIDgtMS40IDIuMi41IDMuNiAyLjEgNC42IDQuOWwxMy44IDQwLjJjMSAzLjIgMiA2LjctLjMgOS4xeiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function TumblrSquare(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-82.3 364.2c-8.5 9.1-31.2 19.8-60.9 19.8-75.5 0-91.9-55.5-91.9-87.9v-90h-29.7c-3.4 0-6.2-2.8-6.2-6.2v-42.5c0-4.5 2.8-8.5 7.1-10 38.8-13.7 50.9-47.5 52.7-73.2.5-6.9 4.1-10.2 10-10.2h44.3c3.4 0 6.2 2.8 6.2 6.2v72h51.9c3.4 0 6.2 2.8 6.2 6.2v51.1c0 3.4-2.8 6.2-6.2 6.2h-52.1V321c0 21.4 14.8 33.5 42.5 22.4 3-1.2 5.6-2 8-1.4 2.2.5 3.6 2.1 4.6 4.9l13.8 40.2c1 3.2 2 6.7-.3 9.1z" />
        </Icon>
    </>
}