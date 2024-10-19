
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `container-storage` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/container-storage?s=solid container-storage}
 * @preview ![container-storage](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MDggODBWNDhDNjA4IDM5LjI1IDYwMC43NSAzMiA1OTIgMzJINDhDMzkuMjUgMzIgMzIgMzkuMjUgMzIgNDhWODBDMzIgODguNzUgMzkuMjUgOTYgNDggOTZWNDE2QzM5LjI1IDQxNiAzMiA0MjMuMjUgMzIgNDMyVjQ2NEMzMiA0NzIuNzUgMzkuMjUgNDgwIDQ4IDQ4MEg1OTJDNjAwLjc1IDQ4MCA2MDggNDcyLjc1IDYwOCA0NjRWNDMyQzYwOCA0MjMuMjUgNjAwLjc1IDQxNiA1OTIgNDE2Vjk2QzYwMC43NSA5NiA2MDggODguNzUgNjA4IDgwWk0xNDQgNDE2SDExMlY5NkgxNDRWNDE2Wk0yNDAgNDE2SDIwOFY5NkgyNDBWNDE2Wk0zMzYgNDE2SDMwNFY5NkgzMzZWNDE2Wk00MzIgNDE2SDQwMFY5Nkg0MzJWNDE2Wk01MjggNDE2SDQ5NlY5Nkg1MjhWNDE2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ContainerStorage(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M608 80V48C608 39.25 600.75 32 592 32H48C39.25 32 32 39.25 32 48V80C32 88.75 39.25 96 48 96V416C39.25 416 32 423.25 32 432V464C32 472.75 39.25 480 48 480H592C600.75 480 608 472.75 608 464V432C608 423.25 600.75 416 592 416V96C600.75 96 608 88.75 608 80ZM144 416H112V96H144V416ZM240 416H208V96H240V416ZM336 416H304V96H336V416ZM432 416H400V96H432V416ZM528 416H496V96H528V416Z" />
        </Icon>
    </>
}