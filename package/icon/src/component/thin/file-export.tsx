
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `file-export` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/file-export?s=thin file-export}
 * @preview ![file-export](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NzMuNjU2IDI5OC45M0w0NjUuNjU2IDE5MC45M0M0NjQuMDk0IDE4OS4zNjcgNDYyLjA2MiAxODguNTg2IDQ2MCAxODguNTg2UzQ1NS45MDYgMTg5LjM2NyA0NTQuMzQ0IDE5MC45M0M0NTEuMjE5IDE5NC4wNTUgNDUxLjIxOSAxOTkuMTE3IDQ1NC4zNDQgMjAyLjI0Mkw1NDguNjg4IDI5Ni41ODZIMjAwQzE5NS41OTQgMjk2LjU4NiAxOTIgMzAwLjE2NCAxOTIgMzA0LjU4NlMxOTUuNTk0IDMxMi41ODYgMjAwIDMxMi41ODZINTQ4LjY4OEw0NTUuNTE2IDQwNS43NThDNDUyLjM5MSA0MDguODgzIDQ1Mi4zOTEgNDEzLjk0NSA0NTUuNTE2IDQxNy4wN1M0NjMuNzAzIDQyMC4xOTUgNDY2LjgyOCA0MTcuMDdMNTczLjY1NiAzMTAuMjQyQzU3Ni43ODEgMzA3LjExNyA1NzYuNzgxIDMwMi4wNTUgNTczLjY1NiAyOTguOTNaTTM3NiAzNTJDMzcxLjU4MiAzNTIgMzY4IDM1NS41ODIgMzY4IDM2MFY0NDhDMzY4IDQ3NC41MDggMzQ2LjUxIDQ5NiAzMjAgNDk2SDY0QzM3LjQ5IDQ5NiAxNiA0NzQuNTA4IDE2IDQ0OFY2NEMxNiAzNy40OTIgMzcuNDkgMTYgNjQgMTZIMjA4VjEzNkMyMDggMTU4LjA5NCAyMjUuOTA4IDE3NiAyNDggMTc2SDM2OFYyNDhDMzY4IDI1Mi40MTggMzcxLjU4MiAyNTYgMzc2IDI1NlMzODQgMjUyLjQxOCAzODQgMjQ4VjE3My4yNTRDMzg0IDE2NC43NjYgMzgwLjYyNyAxNTYuNjI1IDM3NC42MjUgMTUwLjYyMUwyMzMuMzcxIDkuMzc1QzIyNy4zNjcgMy4zNzEgMjE5LjIyNyAwIDIxMC43MzYgMEg2NEMyOC42NTQgMCAwIDI4LjY1MiAwIDY0VjQ0OEMwIDQ4My4zNDQgMjguNjU0IDUxMiA2NCA1MTJIMzIwQzM1NS4zNDYgNTEyIDM4NCA0ODMuMzQ0IDM4NCA0NDhWMzYwQzM4NCAzNTUuNTgyIDM4MC40MTggMzUyIDM3NiAzNTJaTTIyNCAyMi42MjlMMzYxLjM3NSAxNjBIMjQ4QzIzNC43ODEgMTYwIDIyNCAxNDkuMjM0IDIyNCAxMzZWMjIuNjI5WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function FileExport(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M573.656 298.93L465.656 190.93C464.094 189.367 462.062 188.586 460 188.586S455.906 189.367 454.344 190.93C451.219 194.055 451.219 199.117 454.344 202.242L548.688 296.586H200C195.594 296.586 192 300.164 192 304.586S195.594 312.586 200 312.586H548.688L455.516 405.758C452.391 408.883 452.391 413.945 455.516 417.07S463.703 420.195 466.828 417.07L573.656 310.242C576.781 307.117 576.781 302.055 573.656 298.93ZM376 352C371.582 352 368 355.582 368 360V448C368 474.508 346.51 496 320 496H64C37.49 496 16 474.508 16 448V64C16 37.492 37.49 16 64 16H208V136C208 158.094 225.908 176 248 176H368V248C368 252.418 371.582 256 376 256S384 252.418 384 248V173.254C384 164.766 380.627 156.625 374.625 150.621L233.371 9.375C227.367 3.371 219.227 0 210.736 0H64C28.654 0 0 28.652 0 64V448C0 483.344 28.654 512 64 512H320C355.346 512 384 483.344 384 448V360C384 355.582 380.418 352 376 352ZM224 22.629L361.375 160H248C234.781 160 224 149.234 224 136V22.629Z" />
        </Icon>
    </>
}