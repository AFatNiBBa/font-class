
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `file-video` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/file-video?s=thin file-video}
 * @preview ![file-video](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNzQuNjI5IDE1MC42MjVMMjMzLjM3MSA5LjM3NUMyMjcuMzcxIDMuMzcxIDIxOS4yMyAwIDIxMC43NDYgMEg2NEMyOC42NTIgMCAwIDI4LjY1MiAwIDY0VjQ0OEMwIDQ4My4zNDQgMjguNjUyIDUxMiA2NCA1MTJIMzIwQzM1NS4zNDggNTEyIDM4NCA0ODMuMzQ0IDM4NCA0NDhWMTczLjI1NEMzODQgMTY0Ljc2NiAzODAuNjI5IDE1Ni42MjkgMzc0LjYyOSAxNTAuNjI1Wk0yMjQgMjIuNjI5TDM2MS4zNzUgMTYwSDI0OEMyMzQuNzgxIDE2MCAyMjQgMTQ5LjIzNCAyMjQgMTM2VjIyLjYyOVpNMzY4IDQ0OEMzNjggNDc0LjQ2OSAzNDYuNDY5IDQ5NiAzMjAgNDk2SDY0QzM3LjUzMSA0OTYgMTYgNDc0LjQ2OSAxNiA0NDhWNjRDMTYgMzcuNTMxIDM3LjUzMSAxNiA2NCAxNkgyMDhWMTM2QzIwOCAxNTguMDYyIDIyNS45MzggMTc2IDI0OCAxNzZIMzY4VjQ0OFpNMjQwIDI4OEMyNDAgMjcwLjMyOCAyMjUuNjc0IDI1NiAyMDggMjU2SDExMkM5NC4zMjYgMjU2IDgwIDI3MC4zMjggODAgMjg4VjM4NEM4MCA0MDEuNjcyIDk0LjMyNiA0MTYgMTEyIDQxNkgyMDhDMjI1LjY3NCA0MTYgMjQwIDQwMS42NzIgMjQwIDM4NFYzNzUuNjQxTDI3OC42ODggMzk3Ljc4MUMyODEuMzEyIDM5OS4yNSAyODQuMTg4IDQwMCAyODcuMDYyIDQwMEMyODkuOTk5IDQwMCAyOTIuOTM4IDM5OS4yMTkgMjk1LjU5NCAzOTcuNjg4QzMwMC44NDQgMzk0LjYyNSAzMDQgMzg5LjE1NiAzMDQgMzgzLjA2MlYyODguOTM4QzMwNCAyODIuODEzIDMwMC44NDQgMjc3LjM0NCAyOTUuNTYyIDI3NC4yODFDMjkwLjI1IDI3MS4yMTkgMjgzLjkzOCAyNzEuMTg4IDI3OC42ODcgMjc0LjI1TDI0MCAyOTYuMzYzVjI4OFpNMjI0IDM4NEMyMjQgMzkyLjgyNCAyMTYuODIyIDQwMCAyMDggNDAwSDExMkMxMDMuMTc4IDQwMCA5NiAzOTIuODI0IDk2IDM4NFYyODhDOTYgMjc5LjE3NiAxMDMuMTc4IDI3MiAxMTIgMjcySDIwOEMyMTYuODIyIDI3MiAyMjQgMjc5LjE3NiAyMjQgMjg4VjM4NFpNMjg4IDI4OC45MzhMMjg2LjYyNSAzODMuODc1TDI0MCAzNTcuMjI3VjMxNC44NTVMMjg4IDI4OC45MzhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function FileVideo(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M374.629 150.625L233.371 9.375C227.371 3.371 219.23 0 210.746 0H64C28.652 0 0 28.652 0 64V448C0 483.344 28.652 512 64 512H320C355.348 512 384 483.344 384 448V173.254C384 164.766 380.629 156.629 374.629 150.625ZM224 22.629L361.375 160H248C234.781 160 224 149.234 224 136V22.629ZM368 448C368 474.469 346.469 496 320 496H64C37.531 496 16 474.469 16 448V64C16 37.531 37.531 16 64 16H208V136C208 158.062 225.938 176 248 176H368V448ZM240 288C240 270.328 225.674 256 208 256H112C94.326 256 80 270.328 80 288V384C80 401.672 94.326 416 112 416H208C225.674 416 240 401.672 240 384V375.641L278.688 397.781C281.312 399.25 284.188 400 287.062 400C289.999 400 292.938 399.219 295.594 397.688C300.844 394.625 304 389.156 304 383.062V288.938C304 282.813 300.844 277.344 295.562 274.281C290.25 271.219 283.938 271.188 278.687 274.25L240 296.363V288ZM224 384C224 392.824 216.822 400 208 400H112C103.178 400 96 392.824 96 384V288C96 279.176 103.178 272 112 272H208C216.822 272 224 279.176 224 288V384ZM288 288.938L286.625 383.875L240 357.227V314.855L288 288.938Z" />
        </Icon>
    </>
}