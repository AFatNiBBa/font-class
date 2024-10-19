
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `square-o` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-o?s=solid square-o}
 * @preview ![square-o](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjQgMTc2QzE3OS44OTEgMTc2IDE0NCAyMTEuODkxIDE0NCAyNTZTMTc5Ljg5MSAzMzYgMjI0IDMzNlMzMDQgMzAwLjEwOSAzMDQgMjU2UzI2OC4xMDkgMTc2IDIyNCAxNzZaTTM4NCAzMkg2NEMyOC42NTQgMzIgMCA2MC42NTQgMCA5NlY0MTZDMCA0NTEuMzQ2IDI4LjY1NCA0ODAgNjQgNDgwSDM4NEM0MTkuMzQ4IDQ4MCA0NDggNDUxLjM0NiA0NDggNDE2Vjk2QzQ0OCA2MC42NTQgNDE5LjM0OCAzMiAzODQgMzJaTTIyNCAzODRDMTUzLjQyMiAzODQgOTYgMzI2LjU3OCA5NiAyNTZTMTUzLjQyMiAxMjggMjI0IDEyOFMzNTIgMTg1LjQyMiAzNTIgMjU2UzI5NC41NzggMzg0IDIyNCAzODRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function SquareO(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M224 176C179.891 176 144 211.891 144 256S179.891 336 224 336S304 300.109 304 256S268.109 176 224 176ZM384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.348 480 448 451.346 448 416V96C448 60.654 419.348 32 384 32ZM224 384C153.422 384 96 326.578 96 256S153.422 128 224 128S352 185.422 352 256S294.578 384 224 384Z" />
        </Icon>
    </>
}