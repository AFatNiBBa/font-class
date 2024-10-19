
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `bookmark` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bookmark?s=regular bookmark}
 * @preview ![bookmark](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMzYgMEg0OEMyMS40OSAwIDAgMjEuNDkyIDAgNDhWNDc5LjkxNEMwIDUwNC42MDkgMjYuNzkxIDUxOS45OTYgNDguMTIzIDUwNy41NTVMMTkyIDQyMy42MjVMMzM1Ljg3NyA1MDcuNTU1QzM1Ny4yMDkgNTE5Ljk5NiAzODQgNTA0LjYwOSAzODQgNDc5LjkxNFY0OEMzODQgMjEuNDkyIDM2Mi41MSAwIDMzNiAwWk0zMzYgNDUyTDE5MiAzNjhMNDggNDUyVjU0QzQ4IDUwLjYyNSA1MC42MjUgNDggNTMuOTk5IDQ4SDMzMEMzMzMuMzc1IDQ4IDMzNiA1MC42MjUgMzM2IDU0VjQ1MloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Bookmark(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M336 0H48C21.49 0 0 21.492 0 48V479.914C0 504.609 26.791 519.996 48.123 507.555L192 423.625L335.877 507.555C357.209 519.996 384 504.609 384 479.914V48C384 21.492 362.51 0 336 0ZM336 452L192 368L48 452V54C48 50.625 50.625 48 53.999 48H330C333.375 48 336 50.625 336 54V452Z" />
        </Icon>
    </>
}