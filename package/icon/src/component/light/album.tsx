
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `album` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/album?s=light album}
 * @preview ![album](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjQgMjMyQzIxMC43NSAyMzIgMjAwIDI0Mi43NSAyMDAgMjU2UzIxMC43NSAyODAgMjI0IDI4MFMyNDggMjY5LjI1IDI0OCAyNTZTMjM3LjI1IDIzMiAyMjQgMjMyWk0zODQgMzJINjRDMjguODAxIDMyIDAgNjAuNzk5IDAgOTZWNDE2QzAgNDUxLjE5OSAyOC44MDEgNDgwIDY0IDQ4MEgzODRDNDE5LjE5OSA0ODAgNDQ4IDQ1MS4xOTkgNDQ4IDQxNlY5NkM0NDggNjAuNzk5IDQxOS4xOTkgMzIgMzg0IDMyWk00MTYgNDE2QzQxNiA0MzMuNjQ1IDQwMS42NDUgNDQ4IDM4NCA0NDhINjRDNDYuMzU1IDQ0OCAzMiA0MzMuNjQ1IDMyIDQxNlY5NkMzMiA3OC4zNTUgNDYuMzU1IDY0IDY0IDY0SDM4NEM0MDEuNjQ1IDY0IDQxNiA3OC4zNTUgNDE2IDk2VjQxNlpNMjI0IDk2QzEzNS43NSA5NiA2NCAxNjcuNzUgNjQgMjU2UzEzNS43NSA0MTYgMjI0IDQxNlMzODQgMzQ0LjI1IDM4NCAyNTZTMzEyLjI1IDk2IDIyNCA5NlpNMjI0IDM4NEMxNTMuNDIgMzg0IDk2IDMyNi41NzggOTYgMjU2Qzk2IDE4NS40MiAxNTMuNDIgMTI4IDIyNCAxMjhTMzUyIDE4NS40MiAzNTIgMjU2QzM1MiAzMjYuNTc4IDI5NC41OCAzODQgMjI0IDM4NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Album(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M224 232C210.75 232 200 242.75 200 256S210.75 280 224 280S248 269.25 248 256S237.25 232 224 232ZM384 32H64C28.801 32 0 60.799 0 96V416C0 451.199 28.801 480 64 480H384C419.199 480 448 451.199 448 416V96C448 60.799 419.199 32 384 32ZM416 416C416 433.645 401.645 448 384 448H64C46.355 448 32 433.645 32 416V96C32 78.355 46.355 64 64 64H384C401.645 64 416 78.355 416 96V416ZM224 96C135.75 96 64 167.75 64 256S135.75 416 224 416S384 344.25 384 256S312.25 96 224 96ZM224 384C153.42 384 96 326.578 96 256C96 185.42 153.42 128 224 128S352 185.42 352 256C352 326.578 294.58 384 224 384Z" />
        </Icon>
    </>
}