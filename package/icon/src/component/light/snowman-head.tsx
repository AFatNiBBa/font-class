
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `snowman-head` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/snowman-head?s=light snowman-head}
 * @preview ![snowman-head](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MzIgMTkySDM1My44MTJIOTEuMTA5SDE2QzcuMTU2IDE5MiAwIDE5OS4xNTYgMCAyMDhTNy4xNTYgMjI0IDE2IDIyNEg2MS4zOThDMzUuNDYzIDI1OC40NDUgMjAuOTIyIDMwMC41MjEgMjAuOTIyIDM0NEMyMC45MjIgNDA2LjQwNiA0OS4zMTIgNDY0LjEyNSA5OC44MTIgNTAyLjM0NEMxMDYuODU5IDUwOC41NjIgMTE3LjIzNCA1MTIgMTI4IDUxMkgzMTYuOTIyQzMyNy42ODggNTEyIDMzOC4wNjIgNTA4LjU2MiAzNDYuMTA5IDUwMi4zNDRDMzk1LjYwOSA0NjQuMTI1IDQyNCA0MDYuNDA2IDQyNCAzNDRDNDI0IDMwMC41MjEgNDA5LjQ1OSAyNTguNDQ1IDM4My41MjMgMjI0SDQzMkM0NDAuODQ0IDIyNCA0NDggMjE2Ljg0NCA0NDggMjA4UzQ0MC44NDQgMTkyIDQzMiAxOTJaTTM5MiAzNDRDMzkyIDM5Ni40MDYgMzY4LjE0MSA0NDQuOTA2IDMyNi41NDcgNDc3LjAzMUMzMjQuMDYyIDQ3OC45MzggMzIwLjY0MSA0ODAgMzE2LjkyMiA0ODBIMTI4QzEyNC4yODEgNDgwIDEyMC44NTkgNDc4LjkzOCAxMTguMzc1IDQ3Ny4wMzFDNzYuNzgxIDQ0NC45MDYgNTIuOTIyIDM5Ni40MzggNTIuOTIyIDM0NEM1Mi45MjIgMjk4Ljk2OSA3MS4zNDQgMjU1LjU5NCAxMDMuNjQxIDIyNEgzNDEuMjgxQzM3My41NzggMjU1LjU5NCAzOTIgMjk4Ljk2OSAzOTIgMzQ0Wk04MCAxNjBDODguODQ0IDE2MCA5NiAxNTIuODQ0IDk2IDE0NFY0OEM5NiAzOS4xODggMTAzLjE3MiAzMiAxMTIgMzJIMzM2QzM0NC44MjggMzIgMzUyIDM5LjE4OCAzNTIgNDhWMTQ0QzM1MiAxNTIuODQ0IDM1OS4xNTYgMTYwIDM2OCAxNjBTMzg0IDE1Mi44NDQgMzg0IDE0NFY0OEMzODQgMjEuNTMxIDM2Mi40NjkgMCAzMzYgMEgxMTJDODUuNTMxIDAgNjQgMjEuNTMxIDY0IDQ4VjE0NEM2NCAxNTIuODQ0IDcxLjE1NiAxNjAgODAgMTYwWk0xNDQgMjgwQzEzMC43NDYgMjgwIDEyMCAyOTAuNzQ2IDEyMCAzMDRTMTMwLjc0NiAzMjggMTQ0IDMyOEMxNTcuMjU2IDMyOCAxNjggMzE3LjI1NCAxNjggMzA0UzE1Ny4yNTYgMjgwIDE0NCAyODBaTTMwNCAyODBDMjkwLjc0NiAyODAgMjgwIDI5MC43NDYgMjgwIDMwNFMyOTAuNzQ2IDMyOCAzMDQgMzI4QzMxNy4yNTYgMzI4IDMyOCAzMTcuMjU0IDMyOCAzMDRTMzE3LjI1NiAyODAgMzA0IDI4MFpNMjI0IDMyMEMxOTQuNTk0IDMyMCAxNzAuNjcyIDM0My45MzggMTcwLjY3MiAzNzMuMzQ0QzE3MC42NzIgMzk3LjE4OCAyMDEuNDIyIDQ0My40NjkgMjEwLjg0NCA0NTcuMDk0QzIxMy44MjggNDYxLjQwNiAyMTguNzUgNDY0IDIyNCA0NjRTMjM0LjE3MiA0NjEuNDA2IDIzNy4xNTYgNDU3LjA5NEMyNDYuNTc4IDQ0My40NjkgMjc3LjMyOCAzOTcuMTg4IDI3Ny4zMjggMzczLjM0NEMyNzcuMzI4IDM0My45MzggMjUzLjQwNiAzMjAgMjI0IDMyMFpNMjI0IDQxOC41OTRDMjEyLjI5NyAzOTkuMzc1IDIwMi42NzIgMzgwLjIxOSAyMDIuNjcyIDM3My4zNDRDMjAyLjY3MiAzNjEuMzc1IDIxMi4wNDcgMzUyIDIyNCAzNTJTMjQ1LjMyOCAzNjEuMzc1IDI0NS4zMjggMzczLjM0NEMyNDUuMzI4IDM4MC4yMTkgMjM1LjcwMyAzOTkuMzc1IDIyNCA0MTguNTk0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function SnowmanHead(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M432 192H353.812H91.109H16C7.156 192 0 199.156 0 208S7.156 224 16 224H61.398C35.463 258.445 20.922 300.521 20.922 344C20.922 406.406 49.312 464.125 98.812 502.344C106.859 508.562 117.234 512 128 512H316.922C327.688 512 338.062 508.562 346.109 502.344C395.609 464.125 424 406.406 424 344C424 300.521 409.459 258.445 383.523 224H432C440.844 224 448 216.844 448 208S440.844 192 432 192ZM392 344C392 396.406 368.141 444.906 326.547 477.031C324.062 478.938 320.641 480 316.922 480H128C124.281 480 120.859 478.938 118.375 477.031C76.781 444.906 52.922 396.438 52.922 344C52.922 298.969 71.344 255.594 103.641 224H341.281C373.578 255.594 392 298.969 392 344ZM80 160C88.844 160 96 152.844 96 144V48C96 39.188 103.172 32 112 32H336C344.828 32 352 39.188 352 48V144C352 152.844 359.156 160 368 160S384 152.844 384 144V48C384 21.531 362.469 0 336 0H112C85.531 0 64 21.531 64 48V144C64 152.844 71.156 160 80 160ZM144 280C130.746 280 120 290.746 120 304S130.746 328 144 328C157.256 328 168 317.254 168 304S157.256 280 144 280ZM304 280C290.746 280 280 290.746 280 304S290.746 328 304 328C317.256 328 328 317.254 328 304S317.256 280 304 280ZM224 320C194.594 320 170.672 343.938 170.672 373.344C170.672 397.188 201.422 443.469 210.844 457.094C213.828 461.406 218.75 464 224 464S234.172 461.406 237.156 457.094C246.578 443.469 277.328 397.188 277.328 373.344C277.328 343.938 253.406 320 224 320ZM224 418.594C212.297 399.375 202.672 380.219 202.672 373.344C202.672 361.375 212.047 352 224 352S245.328 361.375 245.328 373.344C245.328 380.219 235.703 399.375 224 418.594Z" />
        </Icon>
    </>
}