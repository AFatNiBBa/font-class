
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `code-commit` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/code-commit?s=regular code-commit}
 * @preview ![code-commit](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MTYgMjMySDQ3Ny41ODJDNDY1LjkyNCAxNTUuMTA5IDQwMC4xNDUgOTYgMzIwIDk2UzE3NC4wNzYgMTU1LjEwOSAxNjIuNDE4IDIzMkgyNEMxMC43NSAyMzIgMCAyNDIuNzUgMCAyNTZTMTAuNzUgMjgwIDI0IDI4MEgxNjIuNDE4QzE3NC4wNzYgMzU2Ljg5MSAyMzkuODU1IDQxNiAzMjAgNDE2UzQ2NS45MjQgMzU2Ljg5MSA0NzcuNTgyIDI4MEg2MTZDNjI5LjI1IDI4MCA2NDAgMjY5LjI1IDY0MCAyNTZTNjI5LjI1IDIzMiA2MTYgMjMyWk0zMjAgMzY4QzI1OC4yNDIgMzY4IDIwOCAzMTcuNzU4IDIwOCAyNTZTMjU4LjI0MiAxNDQgMzIwIDE0NFM0MzIgMTk0LjI0MiA0MzIgMjU2UzM4MS43NTggMzY4IDMyMCAzNjhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CodeCommit(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M616 232H477.582C465.924 155.109 400.145 96 320 96S174.076 155.109 162.418 232H24C10.75 232 0 242.75 0 256S10.75 280 24 280H162.418C174.076 356.891 239.855 416 320 416S465.924 356.891 477.582 280H616C629.25 280 640 269.25 640 256S629.25 232 616 232ZM320 368C258.242 368 208 317.758 208 256S258.242 144 320 144S432 194.242 432 256S381.758 368 320 368Z" />
        </Icon>
    </>
}