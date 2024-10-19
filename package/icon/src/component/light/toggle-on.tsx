
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `toggle-on` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/toggle-on?s=light toggle-on}
 * @preview ![toggle-on](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MTYgOTZIMTYwQzcxLjYzNSA5NiAwIDE2Ny42MzUgMCAyNTZTNzEuNjM1IDQxNiAxNjAgNDE2SDQxNkM1MDQuMzY1IDQxNiA1NzYgMzQ0LjM2NSA1NzYgMjU2UzUwNC4zNjUgOTYgNDE2IDk2Wk00MTYgMzg0SDE2MEM4OS40MiAzODQgMzIgMzI2LjU4IDMyIDI1NlM4OS40MiAxMjggMTYwIDEyOEg0MTZDNDg2LjU4IDEyOCA1NDQgMTg1LjQyIDU0NCAyNTZTNDg2LjU4IDM4NCA0MTYgMzg0Wk00MTYgMTYwQzM2Mi45OCAxNjAgMzIwIDIwMi45OCAzMjAgMjU2UzM2Mi45OCAzNTIgNDE2IDM1MlM1MTIgMzA5LjAyIDUxMiAyNTZTNDY5LjAyIDE2MCA0MTYgMTYwWk00MTYgMzIwQzM4MC43MTEgMzIwIDM1MiAyOTEuMjg5IDM1MiAyNTZTMzgwLjcxMSAxOTIgNDE2IDE5MlM0ODAgMjIwLjcxMSA0ODAgMjU2UzQ1MS4yODkgMzIwIDQxNiAzMjBaTTQxNiAyMjRDMzk4LjMyNiAyMjQgMzg0IDIzOC4zMjYgMzg0IDI1NlMzOTguMzI2IDI4OCA0MTYgMjg4UzQ0OCAyNzMuNjc0IDQ0OCAyNTZTNDMzLjY3NCAyMjQgNDE2IDIyNFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ToggleOn(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M416 96H160C71.635 96 0 167.635 0 256S71.635 416 160 416H416C504.365 416 576 344.365 576 256S504.365 96 416 96ZM416 384H160C89.42 384 32 326.58 32 256S89.42 128 160 128H416C486.58 128 544 185.42 544 256S486.58 384 416 384ZM416 160C362.98 160 320 202.98 320 256S362.98 352 416 352S512 309.02 512 256S469.02 160 416 160ZM416 320C380.711 320 352 291.289 352 256S380.711 192 416 192S480 220.711 480 256S451.289 320 416 320ZM416 224C398.326 224 384 238.326 384 256S398.326 288 416 288S448 273.674 448 256S433.674 224 416 224Z" />
        </Icon>
    </>
}