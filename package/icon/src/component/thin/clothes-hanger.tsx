
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `clothes-hanger` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/clothes-hanger?s=thin clothes-hanger}
 * @preview ![clothes-hanger](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MDkuMzEyIDM5Mi42NTZMMzI4LjkzNyAyMjAuMDk0TDM3MS43NSAxOTIuNzE5QzM5OS40NjkgMTc0Ljk2OSA0MTYgMTQ0Ljc1IDQxNiAxMTEuODQ0Vjk2QzQxNiA0My4wNjIgMzcyLjkzOCAwIDMyMCAwUzIyNCA0My4wNjIgMjI0IDk2QzIyNCAxMDAuNDA2IDIyNy41OTQgMTA0IDIzMiAxMDRTMjQwIDEwMC40MDYgMjQwIDk2QzI0MCA1MS44NzUgMjc1Ljg3NSAxNiAzMjAgMTZTNDAwIDUxLjg3NSA0MDAgOTZWMTExLjg0NEM0MDAgMTM5LjI1IDM4Ni4yMTkgMTY0LjQzOCAzNjMuMTI1IDE3OS4yMTlMMjkuNzE5IDM5Mi41OTRDMTEuMTI1IDQwNC41IDAgNDI0LjgxMiAwIDQ0Ny41MzFDMCA0ODMuMDk0IDI4LjkwNiA1MTIgNjQuNDY5IDUxMkg1NzUuNTMxQzYxMS4wOTQgNTEyIDY0MCA0ODMuMDk0IDY0MCA0NDcuNTMxQzY0MCA0MjQuOTY5IDYyOC41MzEgNDA0LjQ2OSA2MDkuMzEyIDM5Mi42NTZaTTU3NS41MzEgNDk2SDY0LjQ2OUMzNy43NSA0OTYgMTYgNDc0LjI1IDE2IDQ0Ni45MDZDMTYgNDMwLjI4MSAyNC4zNDQgNDE1LjAzMSAzOC4zNDQgNDA2LjA5NEwzMTQuMjE5IDIyOS41MzFDMzE0LjY4OCAyMzAgMzE1LjIxOSAyMzAuNDM4IDMxNS44MTIgMjMwLjgxMkw2MDAuOTM3IDQwNi4yODFDNjE1LjM3NSA0MTUuMTU2IDYyNCA0MzAuNTk0IDYyNCA0NDcuNTMxQzYyNCA0NzQuMjUgNjAyLjI1IDQ5NiA1NzUuNTMxIDQ5NloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ClothesHanger(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M609.312 392.656L328.937 220.094L371.75 192.719C399.469 174.969 416 144.75 416 111.844V96C416 43.062 372.938 0 320 0S224 43.062 224 96C224 100.406 227.594 104 232 104S240 100.406 240 96C240 51.875 275.875 16 320 16S400 51.875 400 96V111.844C400 139.25 386.219 164.438 363.125 179.219L29.719 392.594C11.125 404.5 0 424.812 0 447.531C0 483.094 28.906 512 64.469 512H575.531C611.094 512 640 483.094 640 447.531C640 424.969 628.531 404.469 609.312 392.656ZM575.531 496H64.469C37.75 496 16 474.25 16 446.906C16 430.281 24.344 415.031 38.344 406.094L314.219 229.531C314.688 230 315.219 230.438 315.812 230.812L600.937 406.281C615.375 415.156 624 430.594 624 447.531C624 474.25 602.25 496 575.531 496Z" />
        </Icon>
    </>
}