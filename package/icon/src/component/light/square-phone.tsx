
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `square-phone` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-phone?s=light square-phone}
 * @preview ![square-phone](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMzJINjRDMjguNjU0IDMyIDAgNjAuNjU2IDAgOTZWNDE2QzAgNDUxLjM0NCAyOC42NTQgNDgwIDY0IDQ4MEgzODRDNDE5LjM0NiA0ODAgNDQ4IDQ1MS4zNDQgNDQ4IDQxNlY5NkM0NDggNjAuNjU2IDQxOS4zNDYgMzIgMzg0IDMyWk00MTYgNDE2QzQxNiA0MzMuNjQ1IDQwMS42NDUgNDQ4IDM4NCA0NDhINjRDNDYuMzU1IDQ0OCAzMiA0MzMuNjQ1IDMyIDQxNlY5NkMzMiA3OC4zNTUgNDYuMzU1IDY0IDY0IDY0SDM4NEM0MDEuNjQ1IDY0IDQxNiA3OC4zNTUgNDE2IDk2VjQxNlpNMzM3LjU2MiAyNzYuMjk3QzMzNy41MzEgMjc2LjI4MSAzMzcuNDY5IDI3Ni4yODEgMzM3LjQ1MyAyNzYuMjY2TDI4OS41OTQgMjU1Ljc1QzI3NC40MjIgMjQ5LjQyMiAyNTYuNjI1IDI1My44OTEgMjQ2LjM0NCAyNjYuNUwyMzkuNjI1IDI3NC42ODdDMjI2LjE0MSAyNjUuNSAyMTQuNTQ3IDI1My45MDYgMjA1LjM1OSAyNDAuNDM4TDIxMy42MjUgMjMzLjY1NkMyMjYuNDg0IDIyMy4wMzEgMjMwLjczNCAyMDUuNTk0IDIyNC4xNzIgMTkwLjI1TDIwMy43MDMgMTQyLjQ2OUMxOTYuNTYzIDEyNS45NTMgMTc4LjY0MSAxMTYuOTY5IDE2MS4xMjUgMTIwLjk1M0wxMTYuOTM4IDEzMS4yMDNDOTkuOTA2IDEzNS4wNzggODggMTQ5Ljk4NCA4OCAxNjcuNDY5Qzg4IDI5MS4yODEgMTg4LjcxOSAzOTIgMzEyLjUzMSAzOTJDMzI5Ljk4NCAzOTIgMzQ0LjkyMiAzODAuMTI1IDM0OC44NDQgMzYzLjEyNUwzNTkuMDQ3IDMxOC44NDRDMzYzLjA2MiAzMDEuMzQ0IDM1NC4wMzEgMjgzLjQ2OSAzMzcuNTYyIDI3Ni4yOTdaTTMxNy42NTYgMzU1LjkzOEMzMTcuMDk0IDM1OC4zNzUgMzE1LjAzMSAzNjAgMzEyLjUzMSAzNjBDMjA2LjM3NSAzNjAgMTIwIDI3My42MjUgMTIwIDE2Ny40NjlDMTIwIDE2NSAxMjEuNjI1IDE2Mi45NjkgMTI0LjA5NCAxNjIuNDA2TDE2OC4zNDQgMTUyLjE0MUMxNjguNzE5IDE1Mi4wNDcgMTY5LjA5NCAxNTIgMTY5LjQ2OSAxNTJDMTcxLjUzMSAxNTIgMTczLjQ4NCAxNTMuMjM0IDE3NC4zMTIgMTU1LjEyNUwxOTQuNzUgMjAyLjgyOEMxOTUuNzAzIDIwNS4wNjIgMTk1LjE0MSAyMDcuNDIyIDE5My4yOTcgMjA4LjkzOEwxNzQuMzEyIDIyNC41QzE2OC4zNzUgMjI5LjM3NSAxNjYuNzM0IDIzNy43ODEgMTcwLjQwNiAyNDQuNTMxQzE4NS40MDYgMjcyLjEwOSAyMDcuOTM4IDI5NC42MjUgMjM1LjUzMSAzMDkuNjU2QzI0Mi4zMTIgMzEzLjM0NCAyNTAuNzAzIDMxMS42NTYgMjU1LjU2MiAzMDUuNzVMMjcxLjE0MSAyODYuNzM0QzI3Mi41NDcgMjg1IDI3NS4xMjUgMjg0LjQwNiAyNzcuMTU2IDI4NS4yMTlMMzI0LjgxMiAzMDUuNjU2QzMyNy4xNDEgMzA2LjY4OCAzMjguNDIyIDMwOS4yMTkgMzI3Ljg1OSAzMTEuNjU2TDMxNy42NTYgMzU1LjkzOFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function SquarePhone(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M384 32H64C28.654 32 0 60.656 0 96V416C0 451.344 28.654 480 64 480H384C419.346 480 448 451.344 448 416V96C448 60.656 419.346 32 384 32ZM416 416C416 433.645 401.645 448 384 448H64C46.355 448 32 433.645 32 416V96C32 78.355 46.355 64 64 64H384C401.645 64 416 78.355 416 96V416ZM337.562 276.297C337.531 276.281 337.469 276.281 337.453 276.266L289.594 255.75C274.422 249.422 256.625 253.891 246.344 266.5L239.625 274.687C226.141 265.5 214.547 253.906 205.359 240.438L213.625 233.656C226.484 223.031 230.734 205.594 224.172 190.25L203.703 142.469C196.563 125.953 178.641 116.969 161.125 120.953L116.938 131.203C99.906 135.078 88 149.984 88 167.469C88 291.281 188.719 392 312.531 392C329.984 392 344.922 380.125 348.844 363.125L359.047 318.844C363.062 301.344 354.031 283.469 337.562 276.297ZM317.656 355.938C317.094 358.375 315.031 360 312.531 360C206.375 360 120 273.625 120 167.469C120 165 121.625 162.969 124.094 162.406L168.344 152.141C168.719 152.047 169.094 152 169.469 152C171.531 152 173.484 153.234 174.312 155.125L194.75 202.828C195.703 205.062 195.141 207.422 193.297 208.938L174.312 224.5C168.375 229.375 166.734 237.781 170.406 244.531C185.406 272.109 207.938 294.625 235.531 309.656C242.312 313.344 250.703 311.656 255.562 305.75L271.141 286.734C272.547 285 275.125 284.406 277.156 285.219L324.812 305.656C327.141 306.688 328.422 309.219 327.859 311.656L317.656 355.938Z" />
        </Icon>
    </>
}