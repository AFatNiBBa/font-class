
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `arrow-up-from-line` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-from-line?s=solid arrow-up-from-line}
 * @preview ![arrow-up-from-line](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik04Ni42MjUgMjE0LjYyNUwxNjAgMTQxLjI1VjMyMEMxNjAgMzM3LjY4OCAxNzQuMzEyIDM1MiAxOTIgMzUyUzIyNCAzMzcuNjg4IDIyNCAzMjBWMTQxLjI1TDI5Ny4zNzUgMjE0LjYyNUMzMDMuNjI1IDIyMC44NzUgMzExLjgxMiAyMjQgMzIwIDIyNFMzMzYuMzc1IDIyMC44NzUgMzQyLjYyNSAyMTQuNjI1QzM1NS4xMjUgMjAyLjEyNSAzNTUuMTI1IDE4MS44NzUgMzQyLjYyNSAxNjkuMzc1TDIxNC42MjUgNDEuMzc1QzIwMi4xMjUgMjguODc1IDE4MS44NzUgMjguODc1IDE2OS4zNzUgNDEuMzc1TDQxLjM3NSAxNjkuMzc1QzI4Ljg3NSAxODEuODc1IDI4Ljg3NSAyMDIuMTI1IDQxLjM3NSAyMTQuNjI1Uzc0LjEyNSAyMjcuMTI1IDg2LjYyNSAyMTQuNjI1Wk0zNTIgNDE2SDMyQzE0LjMxMiA0MTYgMCA0MzAuMzEyIDAgNDQ4UzE0LjMxMiA0ODAgMzIgNDgwSDM1MkMzNjkuNjg4IDQ4MCAzODQgNDY1LjY4OCAzODQgNDQ4UzM2OS42ODggNDE2IDM1MiA0MTZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function ArrowUpFromLine(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M86.625 214.625L160 141.25V320C160 337.688 174.312 352 192 352S224 337.688 224 320V141.25L297.375 214.625C303.625 220.875 311.812 224 320 224S336.375 220.875 342.625 214.625C355.125 202.125 355.125 181.875 342.625 169.375L214.625 41.375C202.125 28.875 181.875 28.875 169.375 41.375L41.375 169.375C28.875 181.875 28.875 202.125 41.375 214.625S74.125 227.125 86.625 214.625ZM352 416H32C14.312 416 0 430.312 0 448S14.312 480 32 480H352C369.688 480 384 465.688 384 448S369.688 416 352 416Z" />
        </Icon>
    </>
}