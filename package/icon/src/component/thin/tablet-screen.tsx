
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `tablet-screen` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/tablet-screen?s=thin tablet-screen}
 * @preview ![tablet-screen](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNzYgNDU2SDI3MkMyNzYuNDA2IDQ1NiAyODAgNDUyLjQyMiAyODAgNDQ4UzI3Ni40MDYgNDQwIDI3MiA0NDBIMTc2QzE3MS41OTQgNDQwIDE2OCA0NDMuNTc4IDE2OCA0NDhTMTcxLjU5NCA0NTYgMTc2IDQ1NlpNNDAwIDBINDhDMjEuNSAwIDAgMjEuNSAwIDQ4VjQ2NEMwIDQ5MC41IDIxLjUgNTEyIDQ4IDUxMkg0MDBDNDI2LjUgNTEyIDQ0OCA0OTAuNSA0NDggNDY0VjQ4QzQ0OCAyMS41IDQyNi41IDAgNDAwIDBaTTQzMiA0NjRDNDMyIDQ4MS42NDUgNDE3LjY0NSA0OTYgNDAwIDQ5Nkg0OEMzMC4zNTUgNDk2IDE2IDQ4MS42NDUgMTYgNDY0VjQwMEg0MzJWNDY0Wk00MzIgMzg0SDE2VjQ4QzE2IDMwLjM1NSAzMC4zNTUgMTYgNDggMTZINDAwQzQxNy42NDUgMTYgNDMyIDMwLjM1NSA0MzIgNDhWMzg0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function TabletScreen(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M176 456H272C276.406 456 280 452.422 280 448S276.406 440 272 440H176C171.594 440 168 443.578 168 448S171.594 456 176 456ZM400 0H48C21.5 0 0 21.5 0 48V464C0 490.5 21.5 512 48 512H400C426.5 512 448 490.5 448 464V48C448 21.5 426.5 0 400 0ZM432 464C432 481.645 417.645 496 400 496H48C30.355 496 16 481.645 16 464V400H432V464ZM432 384H16V48C16 30.355 30.355 16 48 16H400C417.645 16 432 30.355 432 48V384Z" />
        </Icon>
    </>
}