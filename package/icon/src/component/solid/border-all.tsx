
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `border-all` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/border-all?s=solid border-all}
 * @preview ![border-all](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMzJINjRDMjguOCAzMiAwIDYwLjggMCA5NlY0MTZDMCA0NTEuMiAyOC44IDQ4MCA2NCA0ODBIMzg0QzQxOS4yIDQ4MCA0NDggNDUxLjIgNDQ4IDQxNlY5NkM0NDggNjAuOCA0MTkuMiAzMiAzODQgMzJaTTM4NCA5NlYyMjRIMjU2Vjk2SDM4NFpNMTkyIDk2VjIyNEg2NFY5NkgxOTJaTTY0IDQxNlYyODhIMTkyVjQxNkg2NFpNMjU2IDQxNlYyODhIMzg0VjQxNkgyNTZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function BorderAll(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M384 32H64C28.8 32 0 60.8 0 96V416C0 451.2 28.8 480 64 480H384C419.2 480 448 451.2 448 416V96C448 60.8 419.2 32 384 32ZM384 96V224H256V96H384ZM192 96V224H64V96H192ZM64 416V288H192V416H64ZM256 416V288H384V416H256Z" />
        </Icon>
    </>
}