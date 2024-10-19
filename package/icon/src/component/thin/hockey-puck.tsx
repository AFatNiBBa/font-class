
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `hockey-puck` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hockey-puck?s=thin hockey-puck}
 * @preview ![hockey-puck](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgODBDMTEyLjQ1MyA4MCAwIDEyMi4xNTYgMCAxNzZWMzM2QzAgMzg5Ljg0NCAxMTIuNDUzIDQzMiAyNTYgNDMyUzUxMiAzODkuODQ0IDUxMiAzMzZWMTc2QzUxMiAxMjIuMTU2IDM5OS41NDcgODAgMjU2IDgwWk0yNTYgOTZDMzk5LjU2MiA5NiA0OTYgMTM3LjM3NSA0OTYgMTc2UzM5OS41NjIgMjU2IDI1NiAyNTZTMTYgMjE0LjYyNSAxNiAxNzZTMTEyLjQzOCA5NiAyNTYgOTZaTTQ5NiAzMzZDNDk2IDM3NC42MjUgMzk5LjU2MiA0MTYgMjU2IDQxNlMxNiAzNzQuNjI1IDE2IDMzNlYyMDkuNzM0QzUxLjcxNyAyNDYuNDI2IDE0NC4zMDkgMjcyIDI1NiAyNzJTNDYwLjI4MyAyNDYuNDI2IDQ5NiAyMDkuNzM0VjMzNloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function HockeyPuck(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 80C112.453 80 0 122.156 0 176V336C0 389.844 112.453 432 256 432S512 389.844 512 336V176C512 122.156 399.547 80 256 80ZM256 96C399.562 96 496 137.375 496 176S399.562 256 256 256S16 214.625 16 176S112.438 96 256 96ZM496 336C496 374.625 399.562 416 256 416S16 374.625 16 336V209.734C51.717 246.426 144.309 272 256 272S460.283 246.426 496 209.734V336Z" />
        </Icon>
    </>
}