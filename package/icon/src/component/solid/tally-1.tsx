
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `tally-1` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/tally-1?s=solid tally-1}
 * @preview ![tally-1](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02NCA2NFY0NDhDNjQgNDY1LjY3MyA0OS42NzMgNDgwIDMyIDQ4MEgzMkMxNC4zMjcgNDgwIDAgNDY1LjY3MyAwIDQ0OFY2NEMwIDQ2LjMyNyAxNC4zMjcgMzIgMzIgMzJIMzJDNDkuNjczIDMyIDY0IDQ2LjMyNyA2NCA2NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Tally_1(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M64 64V448C64 465.673 49.673 480 32 480H32C14.327 480 0 465.673 0 448V64C0 46.327 14.327 32 32 32H32C49.673 32 64 46.327 64 64Z" />
        </Icon>
    </>
}