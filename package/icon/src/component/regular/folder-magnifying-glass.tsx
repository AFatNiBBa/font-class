
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `folder-magnifying-glass` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/folder-magnifying-glass?s=regular folder-magnifying-glass}
 * @preview ![folder-magnifying-glass](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00ODAgOTZIMzA3Ljg4M0wyNTguNzQ2IDUwLjc0NkMyNDYuNzQyIDM4Ljc0MiAyMzAuNDY1IDMyIDIxMy40OSAzMkg5NkM2MC42NTQgMzIgMzIgNjAuNjU2IDMyIDk2VjQxNkMzMiA0NTEuMzQ0IDYwLjY1NCA0ODAgOTYgNDgwSDQ4MEM1MTUuMzQ2IDQ4MCA1NDQgNDUxLjM0NCA1NDQgNDE2VjE2MEM1NDQgMTI0LjY1NiA1MTUuMzQ2IDk2IDQ4MCA5NlpNNDk2IDQxNkM0OTYgNDI0LjgyNCA0ODguODIyIDQzMiA0ODAgNDMySDk2Qzg3LjE3OCA0MzIgODAgNDI0LjgyNCA4MCA0MTZWOTZDODAgODcuMTc2IDg3LjE3OCA4MCA5NiA4MEgyMTMuNDlDMjE3Ljc2NCA4MCAyMjEuNzgzIDgxLjY2NCAyMjQuODA1IDg0LjY4OEwyODggMTQ0SDQ4MEM0ODguODIyIDE0NCA0OTYgMTUxLjE3NiA0OTYgMTYwVjQxNlpNMzU0LjQyMiAzMjAuNDg0QzM2Mi44NCAzMDYuMjExIDM2OCAyODkuNzczIDM2OCAyNzJDMzY4IDIxOC45OCAzMjUuMDIgMTc2IDI3MiAxNzZTMTc2IDIxOC45OCAxNzYgMjcyUzIxOC45OCAzNjggMjcyIDM2OEMyODkuNzczIDM2OCAzMDYuMjA5IDM2Mi44NCAzMjAuNDg0IDM1NC40MjJMMzY3LjAzMSA0MDAuOTY5QzM3MS43MTkgNDA1LjY1NiAzNzcuODQ0IDQwOCAzODQgNDA4UzM5Ni4yODEgNDA1LjY1NiA0MDAuOTY5IDQwMC45NjlDNDEwLjM0NCAzOTEuNTk0IDQxMC4zNDQgMzc2LjQwNiA0MDAuOTY5IDM2Ny4wMzFMMzU0LjQyMiAzMjAuNDg0Wk0yNzIgMzIwQzI0NS41MzMgMzIwIDIyNCAyOTguNDY5IDIyNCAyNzJTMjQ1LjUzMyAyMjQgMjcyIDIyNFMzMjAgMjQ1LjUzMSAzMjAgMjcyUzI5OC40NjcgMzIwIDI3MiAzMjBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function FolderMagnifyingGlass(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M480 96H307.883L258.746 50.746C246.742 38.742 230.465 32 213.49 32H96C60.654 32 32 60.656 32 96V416C32 451.344 60.654 480 96 480H480C515.346 480 544 451.344 544 416V160C544 124.656 515.346 96 480 96ZM496 416C496 424.824 488.822 432 480 432H96C87.178 432 80 424.824 80 416V96C80 87.176 87.178 80 96 80H213.49C217.764 80 221.783 81.664 224.805 84.688L288 144H480C488.822 144 496 151.176 496 160V416ZM354.422 320.484C362.84 306.211 368 289.773 368 272C368 218.98 325.02 176 272 176S176 218.98 176 272S218.98 368 272 368C289.773 368 306.209 362.84 320.484 354.422L367.031 400.969C371.719 405.656 377.844 408 384 408S396.281 405.656 400.969 400.969C410.344 391.594 410.344 376.406 400.969 367.031L354.422 320.484ZM272 320C245.533 320 224 298.469 224 272S245.533 224 272 224S320 245.531 320 272S298.467 320 272 320Z" />
        </Icon>
    </>
}