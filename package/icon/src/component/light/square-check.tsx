
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `square-check` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-check?s=light square-check}
 * @preview ![square-check](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMzJINjRDMjguNjU0IDMyIDAgNjAuNjU0IDAgOTZWNDE2QzAgNDUxLjM0NiAyOC42NTQgNDgwIDY0IDQ4MEgzODRDNDE5LjM0NiA0ODAgNDQ4IDQ1MS4zNDYgNDQ4IDQxNlY5NkM0NDggNjAuNjU0IDQxOS4zNDYgMzIgMzg0IDMyWk00MTYgNDE2QzQxNiA0MzMuNjQ1IDQwMS42NDUgNDQ4IDM4NCA0NDhINjRDNDYuMzU1IDQ0OCAzMiA0MzMuNjQ1IDMyIDQxNlY5NkMzMiA3OC4zNTUgNDYuMzU1IDY0IDY0IDY0SDM4NEM0MDEuNjQ1IDY0IDQxNiA3OC4zNTUgNDE2IDk2VjQxNlpNMzA4LjY4OCAxODAuNjg4TDE5MiAyOTcuMzc1TDEzOS4zMTIgMjQ0LjY4OEMxMzMuMDYyIDIzOC40MzggMTIyLjkzNyAyMzguNDM4IDExNi42ODggMjQ0LjY4OFMxMTAuNDM4IDI2MS4wNjMgMTE2LjY4OCAyNjcuMzEyTDE4MC42ODggMzMxLjMxMkMxODMuODEyIDMzNC40MzggMTg3LjkwNiAzMzYgMTkyIDMzNlMyMDAuMTg4IDMzNC40MzggMjAzLjMxMiAzMzEuMzEyTDMzMS4zMTIgMjAzLjMxMkMzMzcuNTYyIDE5Ny4wNjIgMzM3LjU2MiAxODYuOTM3IDMzMS4zMTIgMTgwLjY4OFMzMTQuOTM4IDE3NC40MzggMzA4LjY4OCAxODAuNjg4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function SquareCheck(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V96C448 60.654 419.346 32 384 32ZM416 416C416 433.645 401.645 448 384 448H64C46.355 448 32 433.645 32 416V96C32 78.355 46.355 64 64 64H384C401.645 64 416 78.355 416 96V416ZM308.688 180.688L192 297.375L139.312 244.688C133.062 238.438 122.937 238.438 116.688 244.688S110.438 261.063 116.688 267.312L180.688 331.312C183.812 334.438 187.906 336 192 336S200.188 334.438 203.312 331.312L331.312 203.312C337.562 197.062 337.562 186.937 331.312 180.688S314.938 174.438 308.688 180.688Z" />
        </Icon>
    </>
}