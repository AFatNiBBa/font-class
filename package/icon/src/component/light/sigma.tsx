
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `sigma` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/sigma?s=light sigma}
 * @preview ![sigma](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMzYgMTQ0VjgwSDY2LjQ5NkwyMjAuMjE3IDI0NS42NTZDMjI1LjI0OCAyNTEuNjI1IDIyNS4yNDggMjYwLjM3NSAyMjAuMjE3IDI2Ni4zNDRMNjYuNDk2IDQzMkgzMzZWMzY4QzMzNiAzNTkuMTU2IDM0My4xNTYgMzUyIDM1MiAzNTJDMzYwLjg0NCAzNTIgMzY4IDM1OS4xNTYgMzY4IDM2OFY0NDhDMzY4IDQ1Ni44NDQgMzYwLjg0NCA0NjQgMzUyIDQ2NEgzMS45OTVDMjUuNzc3IDQ2NCAyMC4wODkgNDYwLjM3NSAxNy40OTUgNDU0LjcxOUMxNC44NyA0NDkuMDk0IDE1Ljc0NSA0NDIuNDA2IDE5Ljc3NyA0MzcuNjU2TDE4Ny4wMjkgMjU2TDE5Ljc3NyA3NC4zNDRDMTUuNzQ1IDY5LjU5NCAxNC44NyA2Mi45MDYgMTcuNDk1IDU3LjI4MUMyMC4wODkgNTEuNjI1IDI1Ljc3NyA0OCAzMS45OTUgNDhIMzUyQzM2MC44NDQgNDggMzY4IDU1LjE1NiAzNjggNjRWMTQ0QzM2OCAxNTIuODQ0IDM2MC44NDQgMTYwIDM1MiAxNjBDMzQzLjE1NiAxNjAgMzM2IDE1Mi44NDQgMzM2IDE0NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Sigma(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M336 144V80H66.496L220.217 245.656C225.248 251.625 225.248 260.375 220.217 266.344L66.496 432H336V368C336 359.156 343.156 352 352 352C360.844 352 368 359.156 368 368V448C368 456.844 360.844 464 352 464H31.995C25.777 464 20.089 460.375 17.495 454.719C14.87 449.094 15.745 442.406 19.777 437.656L187.029 256L19.777 74.344C15.745 69.594 14.87 62.906 17.495 57.281C20.089 51.625 25.777 48 31.995 48H352C360.844 48 368 55.156 368 64V144C368 152.844 360.844 160 352 160C343.156 160 336 152.844 336 144Z" />
        </Icon>
    </>
}