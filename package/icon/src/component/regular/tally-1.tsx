
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `tally-1` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/tally-1?s=regular tally-1}
 * @preview ![tally-1](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NiA1NlY0NTZDNTYgNDY5LjI1IDQ1LjI1IDQ4MCAzMiA0ODBTOCA0NjkuMjUgOCA0NTZWNTZDOCA0Mi43NSAxOC43NSAzMiAzMiAzMlM1NiA0Mi43NSA1NiA1NloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Tally_1(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M56 56V456C56 469.25 45.25 480 32 480S8 469.25 8 456V56C8 42.75 18.75 32 32 32S56 42.75 56 56Z" />
        </Icon>
    </>
}