
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `wifi-weak` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/wifi-weak?s=light wifi-weak}
 * @preview ![wifi-weak](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjAuMDAxIDM1MkMyODQuNjU1IDM1MiAyNTYgMzgwLjY1MiAyNTYgNDE2UzI4NC42NTUgNDgwIDMyMC4wMDEgNDgwUzM4NC4wMDIgNDUxLjM0OCAzODQuMDAyIDQxNlMzNTUuMzQ3IDM1MiAzMjAuMDAxIDM1MlpNMzIwLjAwMSA0NDhDMzAyLjM1NiA0NDggMjg4LjAwMSA0MzMuNjQ1IDI4OC4wMDEgNDE2UzMwMi4zNTYgMzg0IDMyMC4wMDEgMzg0UzM1Mi4wMDIgMzk4LjM1NSAzNTIuMDAyIDQxNlMzMzcuNjQ2IDQ0OCAzMjAuMDAxIDQ0OFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function WifiWeak(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M320.001 352C284.655 352 256 380.652 256 416S284.655 480 320.001 480S384.002 451.348 384.002 416S355.347 352 320.001 352ZM320.001 448C302.356 448 288.001 433.645 288.001 416S302.356 384 320.001 384S352.002 398.355 352.002 416S337.646 448 320.001 448Z" />
        </Icon>
    </>
}