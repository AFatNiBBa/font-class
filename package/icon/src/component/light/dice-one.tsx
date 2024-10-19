
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `dice-one` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/dice-one?s=light dice-one}
 * @preview ![dice-one](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMzJINjRDMjguNjI1IDMyIDAgNjAuNjI1IDAgOTZWNDE2QzAgNDUxLjM3NSAyOC42MjUgNDgwIDY0IDQ4MEgzODRDNDE5LjM3NSA0ODAgNDQ4IDQ1MS4zNzUgNDQ4IDQxNlY5NkM0NDggNjAuNjI1IDQxOS4zNzUgMzIgMzg0IDMyWk00MTYgNDE2QzQxNiA0MzMuNjI1IDQwMS42MjUgNDQ4IDM4NCA0NDhINjRDNDYuMzc1IDQ0OCAzMiA0MzMuNjI1IDMyIDQxNlY5NkMzMiA3OC4zNzUgNDYuMzc1IDY0IDY0IDY0SDM4NEM0MDEuNjI1IDY0IDQxNiA3OC4zNzUgNDE2IDk2VjQxNlpNMjI0IDIzMkMyMTAuNzUgMjMyIDIwMCAyNDIuNzUgMjAwIDI1NkMyMDAgMjY5LjI1IDIxMC43NSAyODAgMjI0IDI4MFMyNDggMjY5LjI1IDI0OCAyNTZDMjQ4IDI0Mi43NSAyMzcuMjUgMjMyIDIyNCAyMzJaICI+PC9wYXRoPjwvc3ZnPg==|width=32|height=32)
 */
export default function DiceOne(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M384 32H64C28.625 32 0 60.625 0 96V416C0 451.375 28.625 480 64 480H384C419.375 480 448 451.375 448 416V96C448 60.625 419.375 32 384 32ZM416 416C416 433.625 401.625 448 384 448H64C46.375 448 32 433.625 32 416V96C32 78.375 46.375 64 64 64H384C401.625 64 416 78.375 416 96V416ZM224 232C210.75 232 200 242.75 200 256C200 269.25 210.75 280 224 280S248 269.25 248 256C248 242.75 237.25 232 224 232Z " />
        </Icon>
    </>
}