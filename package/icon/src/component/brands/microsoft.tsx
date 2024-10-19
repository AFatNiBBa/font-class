
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `microsoft` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/microsoft?s=brands microsoft}
 * @preview ![microsoft](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0wIDMyaDIxNC42djIxNC42SDBWMzJ6bTIzMy40IDBINDQ4djIxNC42SDIzMy40VjMyek0wIDI2NS40aDIxNC42VjQ4MEgwVjI2NS40em0yMzMuNCAwSDQ0OFY0ODBIMjMzLjRWMjY1LjR6Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Microsoft(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M0 32h214.6v214.6H0V32zm233.4 0H448v214.6H233.4V32zM0 265.4h214.6V480H0V265.4zm233.4 0H448V480H233.4V265.4z" />
        </Icon>
    </>
}