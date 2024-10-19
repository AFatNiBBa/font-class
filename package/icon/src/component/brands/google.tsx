
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `google` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/google?s=brands google}
 * @preview ![google](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0ODggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00ODggMjYxLjhDNDg4IDQwMy4zIDM5MS4xIDUwNCAyNDggNTA0IDExMC44IDUwNCAwIDM5My4yIDAgMjU2UzExMC44IDggMjQ4IDhjNjYuOCAwIDEyMyAyNC41IDE2Ni4zIDY0LjlsLTY3LjUgNjQuOUMyNTguNSA1Mi42IDk0LjMgMTE2LjYgOTQuMyAyNTZjMCA4Ni41IDY5LjEgMTU2LjYgMTUzLjcgMTU2LjYgOTguMiAwIDEzNS03MC40IDE0MC44LTEwNi45SDI0OHYtODUuM2gyMzYuMWMyLjMgMTIuNyAzLjkgMjQuOSAzLjkgNDEuNHoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Google(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 488 512" {...props}>
            <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
        </Icon>
    </>
}