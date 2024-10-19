
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `folder-magnifying-glass` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/folder-magnifying-glass?s=light folder-magnifying-glass}
 * @preview ![folder-magnifying-glass](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00ODAgOTZIMzA0TDI1OC43NDYgNTAuNzQ2QzI0Ni43NDIgMzguNzQyIDIzMC40NjUgMzIgMjEzLjQ5IDMySDk2QzYwLjY1NCAzMiAzMiA2MC42NTYgMzIgOTZWNDE2QzMyIDQ1MS4zNDQgNjAuNjU0IDQ4MCA5NiA0ODBINDgwQzUxNS4zNDYgNDgwIDU0NCA0NTEuMzQ0IDU0NCA0MTZWMTYwQzU0NCAxMjQuNjU2IDUxNS4zNDYgOTYgNDgwIDk2Wk01MTIgNDE2QzUxMiA0MzMuNjQ1IDQ5Ny42NDUgNDQ4IDQ4MCA0NDhIOTZDNzguMzU1IDQ0OCA2NCA0MzMuNjQ1IDY0IDQxNlY5NkM2NCA3OC4zNTUgNzguMzU1IDY0IDk2IDY0SDIxMy40OUMyMjIuMDM5IDY0IDIzMC4wNzQgNjcuMzI4IDIzNi4xMTcgNzMuMzc1TDI5MC43NDYgMTI4SDQ4MEM0OTcuNjQ1IDEyOCA1MTIgMTQyLjM1NSA1MTIgMTYwVjQxNlpNMzUwLjA4MiAzMjcuNDU3QzM2MS4yNjYgMzExLjc2MiAzNjggMjkyLjY5OSAzNjggMjcyQzM2OCAyMTkuMDYyIDMyNC45MzggMTc2IDI3MiAxNzZTMTc2IDIxOS4wNjIgMTc2IDI3MlMyMTkuMDYyIDM2OCAyNzIgMzY4QzI5Mi42OTkgMzY4IDMxMS43NjIgMzYxLjI2NiAzMjcuNDU3IDM1MC4wODJMMzg4LjY4NyA0MTEuMzEyQzM5MS44MTIgNDE0LjQzOCAzOTUuOTA2IDQxNiA0MDAgNDE2UzQwOC4xODggNDE0LjQzOCA0MTEuMzEyIDQxMS4zMTJDNDE3LjU2MiA0MDUuMDYyIDQxNy41NjIgMzk0LjkzNyA0MTEuMzEyIDM4OC42ODhMMzUwLjA4MiAzMjcuNDU3Wk0yNzIgMzM2QzIzNi43MTkgMzM2IDIwOCAzMDcuMjgxIDIwOCAyNzJTMjM2LjcxOSAyMDggMjcyIDIwOFMzMzYgMjM2LjcxOSAzMzYgMjcyUzMwNy4yODEgMzM2IDI3MiAzMzZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function FolderMagnifyingGlass(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M480 96H304L258.746 50.746C246.742 38.742 230.465 32 213.49 32H96C60.654 32 32 60.656 32 96V416C32 451.344 60.654 480 96 480H480C515.346 480 544 451.344 544 416V160C544 124.656 515.346 96 480 96ZM512 416C512 433.645 497.645 448 480 448H96C78.355 448 64 433.645 64 416V96C64 78.355 78.355 64 96 64H213.49C222.039 64 230.074 67.328 236.117 73.375L290.746 128H480C497.645 128 512 142.355 512 160V416ZM350.082 327.457C361.266 311.762 368 292.699 368 272C368 219.062 324.938 176 272 176S176 219.062 176 272S219.062 368 272 368C292.699 368 311.762 361.266 327.457 350.082L388.687 411.312C391.812 414.438 395.906 416 400 416S408.188 414.438 411.312 411.312C417.562 405.062 417.562 394.937 411.312 388.688L350.082 327.457ZM272 336C236.719 336 208 307.281 208 272S236.719 208 272 208S336 236.719 336 272S307.281 336 272 336Z" />
        </Icon>
    </>
}