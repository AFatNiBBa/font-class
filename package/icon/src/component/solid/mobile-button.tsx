
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `mobile-button` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/mobile-button?s=solid mobile-button}
 * @preview ![mobile-button](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjAgMEg2NEMzNy40OSAwIDE2IDIxLjQ5IDE2IDQ4VjQ2NEMxNiA0OTAuNTEgMzcuNDkgNTEyIDY0IDUxMkgzMjBDMzQ2LjUxIDUxMiAzNjggNDkwLjUxIDM2OCA0NjRWNDhDMzY4IDIxLjQ5IDM0Ni41MSAwIDMyMCAwWk0xOTIgNDY0QzE3NC4yNSA0NjQgMTYwIDQ0OS43NSAxNjAgNDMyUzE3NC4yNSA0MDAgMTkyIDQwMFMyMjQgNDE0LjI1IDIyNCA0MzJTMjA5Ljc1IDQ2NCAxOTIgNDY0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function MobileButton(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M320 0H64C37.49 0 16 21.49 16 48V464C16 490.51 37.49 512 64 512H320C346.51 512 368 490.51 368 464V48C368 21.49 346.51 0 320 0ZM192 464C174.25 464 160 449.75 160 432S174.25 400 192 400S224 414.25 224 432S209.75 464 192 464Z" />
        </Icon>
    </>
}