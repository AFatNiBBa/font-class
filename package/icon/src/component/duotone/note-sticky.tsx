
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `note-sticky` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/note-sticky?s=duotone note-sticky}
 * @preview ![note-sticky](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ0OCA4MFYzMjBIMzg0Vjk2SDY0VjQxNkgyODhWNDgwSDQ4QzIxLjQ5IDQ4MCAwIDQ1OC41MSAwIDQzMlY4MEMwIDUzLjQ5IDIxLjQ5IDMyIDQ4IDMySDQwMEM0MjYuNTEgMzIgNDQ4IDUzLjQ5IDQ0OCA4MFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNDQ4IDMyMFYzMjUuNDlDNDQ4IDM0Mi40NjMgNDQxLjI1OCAzNTguNzQyIDQyOS4yNTQgMzcwLjc0NEwzMzguNzQ2IDQ2MS4yNTRDMzI2Ljc0MiA0NzMuMjU2IDMxMC40NjUgNDgwIDI5My40OSA0ODBIMjg4VjM1MkMyODggMzM0LjMyNiAzMDIuMzI4IDMyMCAzMjAgMzIwSDQ0OFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function NoteSticky(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path class={generic.secondary} d="M448 80V320H384V96H64V416H288V480H48C21.49 480 0 458.51 0 432V80C0 53.49 21.49 32 48 32H400C426.51 32 448 53.49 448 80Z" />
            <path d="M448 320V325.49C448 342.463 441.258 358.742 429.254 370.744L338.746 461.254C326.742 473.256 310.465 480 293.49 480H288V352C288 334.326 302.328 320 320 320H448Z" />
        </Icon>
    </>
}