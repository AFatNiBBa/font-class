
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `vimeo-square` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/vimeo-square?s=brands vimeo-square}
 * @preview ![vimeo-square](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MDAgMzJINDhDMjEuNSAzMiAwIDUzLjUgMCA4MHYzNTJjMCAyNi41IDIxLjUgNDggNDggNDhoMzUyYzI2LjUgMCA0OC0yMS41IDQ4LTQ4VjgwYzAtMjYuNS0yMS41LTQ4LTQ4LTQ4em0tMTYuMiAxNDkuNmMtMS40IDMxLjEtMjMuMiA3My44LTY1LjMgMTI3LjktNDMuNSA1Ni41LTgwLjMgODQuOC0xMTAuNCA4NC44LTE4LjcgMC0zNC40LTE3LjItNDcuMy01MS42LTI1LjItOTIuMy0zNS45LTE0Ni40LTU2LjctMTQ2LjQtMi40IDAtMTAuOCA1LTI1LjEgMTUuMUw2NCAxOTJjMzYuOS0zMi40IDcyLjEtNjguNCA5NC4xLTcwLjQgMjQuOS0yLjQgNDAuMiAxNC42IDQ2IDUxLjEgMjAuNSAxMjkuNiAyOS42IDE0OS4yIDY2LjggOTAuNSAxMy40LTIxLjIgMjAuNi0zNy4yIDIxLjUtNDguMyAzLjQtMzIuOC0yNS42LTMwLjYtNDUuMi0yMi4yIDE1LjctNTEuNSA0NS44LTc2LjUgOTAuMS03NS4xIDMyLjkgMSA0OC40IDIyLjQgNDYuNSA2NHoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function VimeoSquare(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-16.2 149.6c-1.4 31.1-23.2 73.8-65.3 127.9-43.5 56.5-80.3 84.8-110.4 84.8-18.7 0-34.4-17.2-47.3-51.6-25.2-92.3-35.9-146.4-56.7-146.4-2.4 0-10.8 5-25.1 15.1L64 192c36.9-32.4 72.1-68.4 94.1-70.4 24.9-2.4 40.2 14.6 46 51.1 20.5 129.6 29.6 149.2 66.8 90.5 13.4-21.2 20.6-37.2 21.5-48.3 3.4-32.8-25.6-30.6-45.2-22.2 15.7-51.5 45.8-76.5 90.1-75.1 32.9 1 48.4 22.4 46.5 64z" />
        </Icon>
    </>
}