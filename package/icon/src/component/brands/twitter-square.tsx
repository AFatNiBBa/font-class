
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `twitter-square` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/twitter-square?s=brands twitter-square}
 * @preview ![twitter-square](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MDAgMzJINDhDMjEuNSAzMiAwIDUzLjUgMCA4MHYzNTJjMCAyNi41IDIxLjUgNDggNDggNDhoMzUyYzI2LjUgMCA0OC0yMS41IDQ4LTQ4VjgwYzAtMjYuNS0yMS41LTQ4LTQ4LTQ4em0tNDguOSAxNTguOGMuMiAyLjguMiA1LjcuMiA4LjUgMCA4Ni43LTY2IDE4Ni42LTE4Ni42IDE4Ni42LTM3LjIgMC03MS43LTEwLjgtMTAwLjctMjkuNCA1LjMuNiAxMC40LjggMTUuOC44IDMwLjcgMCA1OC45LTEwLjQgODEuNC0yOC0yOC44LS42LTUzLTE5LjUtNjEuMy00NS41IDEwLjEgMS41IDE5LjIgMS41IDI5LjYtMS4yLTMwLTYuMS01Mi41LTMyLjUtNTIuNS02NC40di0uOGM4LjcgNC45IDE4LjkgNy45IDI5LjYgOC4zYTY1LjQ0NyA2NS40NDcgMCAwIDEtMjkuMi01NC42YzAtMTIuMiAzLjItMjMuNCA4LjktMzMuMSAzMi4zIDM5LjggODAuOCA2NS44IDEzNS4yIDY4LjYtOS4zLTQ0LjUgMjQtODAuNiA2NC04MC42IDE4LjkgMCAzNS45IDcuOSA0Ny45IDIwLjcgMTQuOC0yLjggMjktOC4zIDQxLjYtMTUuOC00LjkgMTUuMi0xNS4yIDI4LTI4LjggMzYuMSAxMy4yLTEuNCAyNi01LjEgMzcuOC0xMC4yLTguOSAxMy4xLTIwLjEgMjQuNy0zMi45IDM0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function TwitterSquare(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z" />
        </Icon>
    </>
}