
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `g` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/g?s=regular g}
 * @preview ![g](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjQgNDgwQzE2NC4xNzIgNDgwIDEwNy45MjIgNDU2LjY4OCA2NS42MDkgNDE0LjM3NVMwIDMxNS44NDQgMCAyNTZTMjMuMjk3IDEzOS45MzggNjUuNjA5IDk3LjYyNVMxNjQuMTcyIDMyIDIyNCAzMlMzNDAuMDc4IDU1LjMxMiAzODIuMzkxIDk3LjYyNUMzOTQuODkxIDExMC4xMjUgMzk0Ljg5MSAxMzAuMzc1IDM4Mi4zOTEgMTQyLjg3NVMzNDkuNjQxIDE1NS4zNzUgMzM3LjE0MSAxNDIuODc1QzMwNi45MjIgMTEyLjY1NiAyNjYuNzM0IDk2IDIyNCA5NlMxNDEuMDc4IDExMi42NTYgMTEwLjg1OSAxNDIuODc1UzY0IDIxMy4yODEgNjQgMjU2UzgwLjY0MSAzMzguOTA2IDExMC44NTkgMzY5LjEyNVMxODEuMjY2IDQxNiAyMjQgNDE2UzMwNi45MjIgMzk5LjM0NCAzMzcuMTQxIDM2OS4xMjVDMzU2LjQ4NCAzNDkuNzgxIDM3MC44OTEgMzI3Ljc1IDM3OC45NTMgMzA1LjQ2OUgyMjRDMjA2LjMyOCAzMDUuNDY5IDE5MiAyOTEuMTU2IDE5MiAyNzMuNDY5UzIwNi4zMjggMjQxLjQ2OSAyMjQgMjQxLjQ2OUg0MTZDNDMzLjY3MiAyNDEuNDY5IDQ0OCAyNTUuNzgxIDQ0OCAyNzMuNDY5VjI5MC45MDZDNDQ4IDI5Mi44NDQgNDQ3LjgyOCAyOTQuNzgxIDQ0Ny40NjkgMjk2LjY4OEM0MzkuODEyIDMzOC4yODEgNDE2LjcwMyAzODAuMDk0IDM4Mi4zOTEgNDE0LjM3NUMzNDAuMDc4IDQ1Ni42ODggMjgzLjgyOCA0ODAgMjI0IDQ4MFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function G(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M224 480C164.172 480 107.922 456.688 65.609 414.375S0 315.844 0 256S23.297 139.938 65.609 97.625S164.172 32 224 32S340.078 55.312 382.391 97.625C394.891 110.125 394.891 130.375 382.391 142.875S349.641 155.375 337.141 142.875C306.922 112.656 266.734 96 224 96S141.078 112.656 110.859 142.875S64 213.281 64 256S80.641 338.906 110.859 369.125S181.266 416 224 416S306.922 399.344 337.141 369.125C356.484 349.781 370.891 327.75 378.953 305.469H224C206.328 305.469 192 291.156 192 273.469S206.328 241.469 224 241.469H416C433.672 241.469 448 255.781 448 273.469V290.906C448 292.844 447.828 294.781 447.469 296.688C439.812 338.281 416.703 380.094 382.391 414.375C340.078 456.688 283.828 480 224 480Z" />
        </Icon>
    </>
}