
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `split` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/split?s=solid split}
 * @preview ![split](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDQuOTU5IDM4Mi45NTNDNTE0LjM0NiAzOTIuMzQgNTE0LjM0NiA0MDcuNTU5IDUwNC45NTkgNDE2Ljk0NUw0MjQuOTU5IDQ5Ni45MjJDNDA5LjgzIDUxMi4wNDMgMzgzLjk2OSA1MDEuMzI4IDM4My45NjkgNDc5LjkzOFY0NDBIMzIwQzMwOC41NjIgNDQwIDI5Ny42ODggNDM1LjEyNSAyOTAuMDk0IDQyNi41NjJMMTc0LjAzOSAyOTZINDBDMTcuOTA4IDI5NiAwIDI3OC4wOTQgMCAyNTZTMTcuOTA4IDIxNiA0MCAyMTZIMTc0LjAzOUwyOTAuMDk0IDg1LjQzOEMyOTcuNjg4IDc2Ljg3NSAzMDguNTYyIDcyIDMyMCA3MkgzODMuOTY5VjMyLjA2MkMzODMuOTY5IDEwLjY3MiA0MDkuODMgLTAuMDQ3IDQyNC45NTkgMTUuMDc4TDUwNC45NTkgOTUuMDU1QzUxNC4zNDYgMTA0LjQzOCA1MTQuMzQ2IDExOS42NTYgNTA0Ljk1OSAxMjkuMDQ3TDQyNC45NjUgMjA5LjAxNkM0MDkuODM0IDIyNC4xNDEgMzgzLjk2OSAyMTMuNDIyIDM4My45NjkgMTkyLjAzMVYxNTJIMzM3Ljk2OUwyNDUuNTIgMjU2TDMzNy45NjkgMzYwSDM4My45NjlWMzE5Ljk2OUMzODMuOTY5IDI5OC41NzQgNDA5LjgzNCAyODcuODU5IDQyNC45NjUgMzAyLjk4NEw1MDQuOTU5IDM4Mi45NTNaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Split(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M504.959 382.953C514.346 392.34 514.346 407.559 504.959 416.945L424.959 496.922C409.83 512.043 383.969 501.328 383.969 479.938V440H320C308.562 440 297.688 435.125 290.094 426.562L174.039 296H40C17.908 296 0 278.094 0 256S17.908 216 40 216H174.039L290.094 85.438C297.688 76.875 308.562 72 320 72H383.969V32.062C383.969 10.672 409.83 -0.047 424.959 15.078L504.959 95.055C514.346 104.438 514.346 119.656 504.959 129.047L424.965 209.016C409.834 224.141 383.969 213.422 383.969 192.031V152H337.969L245.52 256L337.969 360H383.969V319.969C383.969 298.574 409.834 287.859 424.965 302.984L504.959 382.953Z" />
        </Icon>
    </>
}