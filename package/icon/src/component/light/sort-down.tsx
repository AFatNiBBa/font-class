
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `sort-down` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/sort-down?s=light sort-down}
 * @preview ![sort-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yODcuOTE1IDI4OEgzMi4wMDdDMy42NDMgMjg4IC0xMC43MjcgMzIyLjUgOS4zOTEgMzQyLjYyNUwxMzcuMzQ0IDQ3MC42MjVDMTQ5Ljg0IDQ4My4xMjUgMTcwLjIwNyA0ODMuMTI1IDE4Mi43MDMgNDcwLjYyNUwzMTAuNjU3IDM0Mi42MjVDMzMwLjY0OSAzMjIuNSAzMTYuMjggMjg4IDI4Ny45MTUgMjg4Wk0xNTkuOTYxIDQ0OEwzMi4wMDcgMzIwSDI4Ny45MTVMMTU5Ljk2MSA0NDhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function SortDown(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M287.915 288H32.007C3.643 288 -10.727 322.5 9.391 342.625L137.344 470.625C149.84 483.125 170.207 483.125 182.703 470.625L310.657 342.625C330.649 322.5 316.28 288 287.915 288ZM159.961 448L32.007 320H287.915L159.961 448Z" />
        </Icon>
    </>
}