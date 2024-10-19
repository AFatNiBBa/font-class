
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `square-x` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-x?s=light square-x}
 * @preview ![square-x](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMzJINjRDMjguNjU0IDMyIDAgNjAuNjU0IDAgOTZWNDE2QzAgNDUxLjM0NiAyOC42NTQgNDgwIDY0IDQ4MEgzODRDNDE5LjM0NiA0ODAgNDQ4IDQ1MS4zNDYgNDQ4IDQxNlY5NkM0NDggNjAuNjU0IDQxOS4zNDYgMzIgMzg0IDMyWk00MTYgNDE2QzQxNiA0MzMuNjQ1IDQwMS42NDUgNDQ4IDM4NCA0NDhINjRDNDYuMzU1IDQ0OCAzMiA0MzMuNjQ1IDMyIDQxNlY5NkMzMiA3OC4zNTUgNDYuMzU1IDY0IDY0IDY0SDM4NEM0MDEuNjQ1IDY0IDQxNiA3OC4zNTUgNDE2IDk2VjQxNlpNMzMwLjQwNiAxMzEuODQ0QzMyMy43MTkgMTI2LjA5NCAzMTMuNjA5IDEyNi45MDYgMzA3Ljg1OSAxMzMuNTk0TDIyNCAyMzEuNDNMMTQwLjE0MSAxMzMuNTk0QzEzNC40MjIgMTI2LjkwNiAxMjQuMzEyIDEyNi4xNTYgMTE3LjU5NCAxMzEuODQ0QzExMC44NzUgMTM3LjU5NCAxMTAuMDk0IDE0Ny43MTkgMTE1Ljg1OSAxNTQuNDA2TDIwMi45MzkgMjU2TDExNS44NTkgMzU3LjU5NEMxMTAuMDk0IDM2NC4yODEgMTEwLjg3NSAzNzQuNDA2IDExNy41OTQgMzgwLjE1NkMxMjAuNjA5IDM4Mi43NSAxMjQuMzEyIDM4NCAxMjggMzg0QzEzMi41IDM4NCAxMzYuOTg0IDM4Mi4wOTQgMTQwLjE0MSAzNzguNDA2TDIyNCAyODAuNTdMMzA3Ljg1OSAzNzguNDA2QzMxMS4wMTYgMzgyLjA5NCAzMTUuNSAzODQgMzIwIDM4NEMzMjMuNjg4IDM4NCAzMjcuMzkxIDM4Mi43MTkgMzMwLjQwNiAzODAuMTU2QzMzNy4xMjUgMzc0LjQwNiAzMzcuOTA2IDM2NC4yODEgMzMyLjE0MSAzNTcuNTk0TDI0NS4wNjEgMjU2TDMzMi4xNDEgMTU0LjQwNkMzMzcuOTA2IDE0Ny43MTkgMzM3LjEyNSAxMzcuNTk0IDMzMC40MDYgMTMxLjg0NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function SquareX(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V96C448 60.654 419.346 32 384 32ZM416 416C416 433.645 401.645 448 384 448H64C46.355 448 32 433.645 32 416V96C32 78.355 46.355 64 64 64H384C401.645 64 416 78.355 416 96V416ZM330.406 131.844C323.719 126.094 313.609 126.906 307.859 133.594L224 231.43L140.141 133.594C134.422 126.906 124.312 126.156 117.594 131.844C110.875 137.594 110.094 147.719 115.859 154.406L202.939 256L115.859 357.594C110.094 364.281 110.875 374.406 117.594 380.156C120.609 382.75 124.312 384 128 384C132.5 384 136.984 382.094 140.141 378.406L224 280.57L307.859 378.406C311.016 382.094 315.5 384 320 384C323.688 384 327.391 382.719 330.406 380.156C337.125 374.406 337.906 364.281 332.141 357.594L245.061 256L332.141 154.406C337.906 147.719 337.125 137.594 330.406 131.844Z" />
        </Icon>
    </>
}