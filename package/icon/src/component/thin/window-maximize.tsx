
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `window-maximize` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/window-maximize?s=thin window-maximize}
 * @preview ![window-maximize](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggMzJINjRDMjguNjU0IDMyIDAgNjAuNjU0IDAgOTZWNDE2QzAgNDUxLjM0NiAyOC42NTQgNDgwIDY0IDQ4MEg0NDhDNDgzLjM0NiA0ODAgNTEyIDQ1MS4zNDYgNTEyIDQxNlY5NkM1MTIgNjAuNjU0IDQ4My4zNDYgMzIgNDQ4IDMyWk00OTYgNDE2QzQ5NiA0NDIuNDY3IDQ3NC40NjcgNDY0IDQ0OCA0NjRINjRDMzcuNTMzIDQ2NCAxNiA0NDIuNDY3IDE2IDQxNlYxOTJINDk2VjQxNlpNNDk2IDE3NkgxNlY5NkMxNiA2OS41MzMgMzcuNTMzIDQ4IDY0IDQ4SDQ0OEM0NzQuNDY3IDQ4IDQ5NiA2OS41MzMgNDk2IDk2VjE3NloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function WindowMaximize(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M448 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H448C483.346 480 512 451.346 512 416V96C512 60.654 483.346 32 448 32ZM496 416C496 442.467 474.467 464 448 464H64C37.533 464 16 442.467 16 416V192H496V416ZM496 176H16V96C16 69.533 37.533 48 64 48H448C474.467 48 496 69.533 496 96V176Z" />
        </Icon>
    </>
}