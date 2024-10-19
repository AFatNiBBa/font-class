
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `ellipsis` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/ellipsis?s=thin ellipsis}
 * @preview ![ellipsis](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik05NiAyNDBDODcuMTY0IDI0MCA4MCAyNDcuMTY0IDgwIDI1NlM4Ny4xNjQgMjcyIDk2IDI3MkMxMDQuODM4IDI3MiAxMTIgMjY0LjgzNiAxMTIgMjU2UzEwNC44MzggMjQwIDk2IDI0MFpNMjU2IDI0MEMyNDcuMTY0IDI0MCAyNDAgMjQ3LjE2NCAyNDAgMjU2UzI0Ny4xNjQgMjcyIDI1NiAyNzJDMjY0LjgzOCAyNzIgMjcyIDI2NC44MzYgMjcyIDI1NlMyNjQuODM4IDI0MCAyNTYgMjQwWk00MTYgMjQwQzQwNy4xNjQgMjQwIDQwMCAyNDcuMTY0IDQwMCAyNTZTNDA3LjE2NCAyNzIgNDE2IDI3MkM0MjQuODM4IDI3MiA0MzIgMjY0LjgzNiA0MzIgMjU2UzQyNC44MzggMjQwIDQxNiAyNDBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Ellipsis(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M96 240C87.164 240 80 247.164 80 256S87.164 272 96 272C104.838 272 112 264.836 112 256S104.838 240 96 240ZM256 240C247.164 240 240 247.164 240 256S247.164 272 256 272C264.838 272 272 264.836 272 256S264.838 240 256 240ZM416 240C407.164 240 400 247.164 400 256S407.164 272 416 272C424.838 272 432 264.836 432 256S424.838 240 416 240Z" />
        </Icon>
    </>
}