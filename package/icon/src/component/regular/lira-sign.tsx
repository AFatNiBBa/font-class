
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `lira-sign` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/lira-sign?s=regular lira-sign}
 * @preview ![lira-sign](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjAgNDU2QzMyMCA0NjkuMjUgMzA5LjI1IDQ4MCAyOTYgNDgwSDI0QzE0LjkwNiA0ODAgNi41OTQgNDc0Ljg3NSAyLjUzMSA0NjYuNzE5Qy0xLjUzMSA0NTguNTk0IC0wLjY1NiA0NDguODc1IDQuODEzIDQ0MS41OTRDMjYuMjIzIDQxMy4wNDcgNDAuMDQ3IDM3OS4yMTMgNDUuMzgzIDM0NEgyNEMxMC43NSAzNDQgMCAzMzMuMjUgMCAzMjBTMTAuNzUgMjk2IDI0IDI5Nkg0OFYyNDhIMjRDMTAuNzUgMjQ4IDAgMjM3LjI1IDAgMjI0UzEwLjc1IDIwMCAyNCAyMDBINDhWMTU5LjI1QzQ4IDg5LjA5NCAxMDUuMDk0IDMyIDE3NS4yNSAzMkMxODkgMzIgMjAyLjU2MyAzNC4yMTkgMjE1LjUzMSAzOC41NjJMMjk1LjU5NCA2NS4yMTlDMzA4LjE1NiA2OS40MDYgMzE0Ljk2OSA4MyAzMTAuNzgxIDk1LjU5NEMzMDYuNTYzIDEwOC4xNTYgMjkzLjA2MyAxMTQuODEyIDI4MC40MDYgMTEwLjc4MUwyMDAuMzEzIDg0LjA5NEMxOTIuMjE5IDgxLjM3NSAxODMuODEzIDgwIDE3NS4yNSA4MEMxMzEuNTYzIDgwIDk2IDExNS41NjIgOTYgMTU5LjI1VjIwMEgyMzJDMjQ1LjI1IDIwMCAyNTYgMjEwLjc1IDI1NiAyMjRTMjQ1LjI1IDI0OCAyMzIgMjQ4SDk2VjI5NkgyMzJDMjQ1LjI1IDI5NiAyNTYgMzA2Ljc1IDI1NiAzMjBTMjQ1LjI1IDM0NCAyMzIgMzQ0SDkzLjk2OUM5MC4xNzggMzc0LjYxNyA4MS4wNjcgNDA0LjUyIDY3LjA5NCA0MzJIMjk2QzMwOS4yNSA0MzIgMzIwIDQ0Mi43NSAzMjAgNDU2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function LiraSign(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M320 456C320 469.25 309.25 480 296 480H24C14.906 480 6.594 474.875 2.531 466.719C-1.531 458.594 -0.656 448.875 4.813 441.594C26.223 413.047 40.047 379.213 45.383 344H24C10.75 344 0 333.25 0 320S10.75 296 24 296H48V248H24C10.75 248 0 237.25 0 224S10.75 200 24 200H48V159.25C48 89.094 105.094 32 175.25 32C189 32 202.563 34.219 215.531 38.562L295.594 65.219C308.156 69.406 314.969 83 310.781 95.594C306.563 108.156 293.063 114.812 280.406 110.781L200.313 84.094C192.219 81.375 183.813 80 175.25 80C131.563 80 96 115.562 96 159.25V200H232C245.25 200 256 210.75 256 224S245.25 248 232 248H96V296H232C245.25 296 256 306.75 256 320S245.25 344 232 344H93.969C90.178 374.617 81.067 404.52 67.094 432H296C309.25 432 320 442.75 320 456Z" />
        </Icon>
    </>
}