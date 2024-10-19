
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `rev` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/rev?s=brands rev}
 * @preview ![rev](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yODkuNjcgMjc0Ljg5YTY1LjU3IDY1LjU3IDAgMSAxLTY1LjU2LTY1LjU2IDY1LjY0IDY1LjY0IDAgMCAxIDY1LjU2IDY1LjU2em0xMzkuNTUtNS4wNWgtLjEzYTIwNC42OSAyMDQuNjkgMCAwIDAtNzQuMzItMTUzbC00NS4zOCAyNi4yYTE1Ny4wNyAxNTcuMDcgMCAwIDEgNzEuODEgMTMxLjg0QzM4MS4yIDM2MS41IDMxMC43MyA0MzIgMjI0LjExIDQzMlM2NyAzNjEuNSA2NyAyNzQuODhjMC04MS44OCA2My0xNDkuMjcgMTQzLTE1Ni40M3YzOS4xMmwxMDguNzctNjIuNzlMMjEwIDMydjM4LjMyYy0xMDYuNyA3LjI1LTE5MSA5Ni0xOTEgMjA0LjU3IDAgMTExLjU5IDg5LjEyIDIwMi4yOSAyMDAuMDYgMjA1di4xMWgyMTAuMTZWMjY5Ljg0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Rev(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M289.67 274.89a65.57 65.57 0 1 1-65.56-65.56 65.64 65.64 0 0 1 65.56 65.56zm139.55-5.05h-.13a204.69 204.69 0 0 0-74.32-153l-45.38 26.2a157.07 157.07 0 0 1 71.81 131.84C381.2 361.5 310.73 432 224.11 432S67 361.5 67 274.88c0-81.88 63-149.27 143-156.43v39.12l108.77-62.79L210 32v38.32c-106.7 7.25-191 96-191 204.57 0 111.59 89.12 202.29 200.06 205v.11h210.16V269.84z" />
        </Icon>
    </>
}