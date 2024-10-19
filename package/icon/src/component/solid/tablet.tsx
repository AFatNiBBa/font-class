
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `tablet` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/tablet?s=solid tablet}
 * @preview ![tablet](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMEg2NEMyOC42NTQgMCAwIDI4LjY1MiAwIDY0VjQ0OEMwIDQ4My4zNDYgMjguNjU0IDUxMiA2NCA1MTJIMzg0QzQxOS4zNDYgNTEyIDQ0OCA0ODMuMzQ2IDQ0OCA0NDhWNjRDNDQ4IDI4LjY1MiA0MTkuMzQ2IDAgMzg0IDBaTTI4OCA0NDhDMjg4IDQ1Ni44MzcgMjgwLjgzNyA0NjQgMjcyIDQ2NEgxNzZDMTY3LjE2MyA0NjQgMTYwIDQ1Ni44MzcgMTYwIDQ0OFY0NDhDMTYwIDQzOS4xNjMgMTY3LjE2MyA0MzIgMTc2IDQzMkgyNzJDMjgwLjgzNyA0MzIgMjg4IDQzOS4xNjMgMjg4IDQ0OFY0NDhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Tablet(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M384 0H64C28.654 0 0 28.652 0 64V448C0 483.346 28.654 512 64 512H384C419.346 512 448 483.346 448 448V64C448 28.652 419.346 0 384 0ZM288 448C288 456.837 280.837 464 272 464H176C167.163 464 160 456.837 160 448V448C160 439.163 167.163 432 176 432H272C280.837 432 288 439.163 288 448V448Z" />
        </Icon>
    </>
}