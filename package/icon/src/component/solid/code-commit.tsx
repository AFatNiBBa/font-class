
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `code-commit` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/code-commit?s=solid code-commit}
 * @preview ![code-commit](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MDggMjI0SDQ3Ni43NzVDNDYxLjk0NyAxNTAuOTY5IDM5Ny40MDQgOTYgMzIwIDk2UzE3OC4wNTMgMTUwLjk2OSAxNjMuMjI1IDIyNEgzMkMxNC4zMjYgMjI0IDAgMjM4LjMyOCAwIDI1NlMxNC4zMjYgMjg4IDMyIDI4OEgxNjMuMjI1QzE3OC4wNTMgMzYxLjAzMSAyNDIuNTk2IDQxNiAzMjAgNDE2UzQ2MS45NDcgMzYxLjAzMSA0NzYuNzc1IDI4OEg2MDhDNjI1LjY3NCAyODggNjQwIDI3My42NzIgNjQwIDI1NlM2MjUuNjc0IDIyNCA2MDggMjI0Wk0zMjAgMzM2QzI3NS44ODkgMzM2IDI0MCAzMDAuMTA5IDI0MCAyNTZTMjc1Ljg4OSAxNzYgMzIwIDE3NlM0MDAgMjExLjg5MSA0MDAgMjU2UzM2NC4xMTEgMzM2IDMyMCAzMzZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CodeCommit(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M608 224H476.775C461.947 150.969 397.404 96 320 96S178.053 150.969 163.225 224H32C14.326 224 0 238.328 0 256S14.326 288 32 288H163.225C178.053 361.031 242.596 416 320 416S461.947 361.031 476.775 288H608C625.674 288 640 273.672 640 256S625.674 224 608 224ZM320 336C275.889 336 240 300.109 240 256S275.889 176 320 176S400 211.891 400 256S364.111 336 320 336Z" />
        </Icon>
    </>
}