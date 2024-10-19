
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `square-xmark` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-xmark?s=light square-xmark}
 * @preview ![square-xmark](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMzJINjRDMjguNjU0IDMyIDAgNjAuNjU0IDAgOTZWNDE2QzAgNDUxLjM0NiAyOC42NTQgNDgwIDY0IDQ4MEgzODRDNDE5LjM0NiA0ODAgNDQ4IDQ1MS4zNDYgNDQ4IDQxNlY5NkM0NDggNjAuNjU0IDQxOS4zNDYgMzIgMzg0IDMyWk00MTYgNDE2QzQxNiA0MzMuNjQ1IDQwMS42NDUgNDQ4IDM4NCA0NDhINjRDNDYuMzU1IDQ0OCAzMiA0MzMuNjQ1IDMyIDQxNlY5NkMzMiA3OC4zNTUgNDYuMzU1IDY0IDY0IDY0SDM4NEM0MDEuNjQ1IDY0IDQxNiA3OC4zNTUgNDE2IDk2VjQxNlpNMjk5LjMxMiAxODAuNjg4QzI5My4wNjIgMTc0LjQzOCAyODIuOTM3IDE3NC40MzggMjc2LjY4OCAxODAuNjg4TDIyNCAyMzMuMzc1TDE3MS4zMTIgMTgwLjY4OEMxNjUuMDYyIDE3NC40MzggMTU0LjkzNyAxNzQuNDM4IDE0OC42ODggMTgwLjY4OFMxNDIuNDM4IDE5Ny4wNjMgMTQ4LjY4OCAyMDMuMzEyTDIwMS4zNzUgMjU2TDE0OC42ODggMzA4LjY4OEMxNDIuNDM4IDMxNC45MzggMTQyLjQzOCAzMjUuMDYzIDE0OC42ODggMzMxLjMxMkMxNTQuOTM0IDMzNy41NTkgMTY1LjA1OSAzMzcuNTY2IDE3MS4zMTIgMzMxLjMxMkwyMjQgMjc4LjYyNUwyNzYuNjg4IDMzMS4zMTJDMjgyLjkzNCAzMzcuNTU5IDI5My4wNTkgMzM3LjU2NiAyOTkuMzEyIDMzMS4zMTJDMzA1LjU2MiAzMjUuMDYyIDMwNS41NjIgMzE0LjkzNyAyOTkuMzEyIDMwOC42ODhMMjQ2LjYyNSAyNTZMMjk5LjMxMiAyMDMuMzEyQzMwNS41NjIgMTk3LjA2MiAzMDUuNTYyIDE4Ni45MzggMjk5LjMxMiAxODAuNjg4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function SquareXmark(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V96C448 60.654 419.346 32 384 32ZM416 416C416 433.645 401.645 448 384 448H64C46.355 448 32 433.645 32 416V96C32 78.355 46.355 64 64 64H384C401.645 64 416 78.355 416 96V416ZM299.312 180.688C293.062 174.438 282.937 174.438 276.688 180.688L224 233.375L171.312 180.688C165.062 174.438 154.937 174.438 148.688 180.688S142.438 197.063 148.688 203.312L201.375 256L148.688 308.688C142.438 314.938 142.438 325.063 148.688 331.312C154.934 337.559 165.059 337.566 171.312 331.312L224 278.625L276.688 331.312C282.934 337.559 293.059 337.566 299.312 331.312C305.562 325.062 305.562 314.937 299.312 308.688L246.625 256L299.312 203.312C305.562 197.062 305.562 186.938 299.312 180.688Z" />
        </Icon>
    </>
}