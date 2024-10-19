
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `plus` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/plus?s=thin plus}
 * @preview ![plus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MzIgMjU2QzQzMiAyNjAuNDIyIDQyOC40MjIgMjY0IDQyNCAyNjRIMjMyVjQ1NkMyMzIgNDYwLjQyMiAyMjguNDIyIDQ2NCAyMjQgNDY0UzIxNiA0NjAuNDIyIDIxNiA0NTZWMjY0SDI0QzE5LjU3OCAyNjQgMTYgMjYwLjQyMiAxNiAyNTZTMTkuNTc4IDI0OCAyNCAyNDhIMjE2VjU2QzIxNiA1MS41NzggMjE5LjU3OCA0OCAyMjQgNDhTMjMyIDUxLjU3OCAyMzIgNTZWMjQ4SDQyNEM0MjguNDIyIDI0OCA0MzIgMjUxLjU3OCA0MzIgMjU2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Plus(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M432 256C432 260.422 428.422 264 424 264H232V456C232 460.422 228.422 464 224 464S216 460.422 216 456V264H24C19.578 264 16 260.422 16 256S19.578 248 24 248H216V56C216 51.578 219.578 48 224 48S232 51.578 232 56V248H424C428.422 248 432 251.578 432 256Z" />
        </Icon>
    </>
}