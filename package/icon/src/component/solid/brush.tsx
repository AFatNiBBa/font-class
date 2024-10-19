
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `brush` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/brush?s=solid brush}
 * @preview ![brush](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0wIDMyMEMwIDM1NS4zNzUgMjguNjI1IDM4NCA2NCAzODRIMTI4VjQ0OEMxMjggNDgzLjM3NSAxNTYuNjI1IDUxMiAxOTIgNTEyUzI1NiA0ODMuMzc1IDI1NiA0NDhWMzg0SDMyMEMzNTUuMzc1IDM4NCAzODQgMzU1LjM3NSAzODQgMzIwVjI4OEgwVjMyMFpNMTkyIDQyNEMyMDUuMjUgNDI0IDIxNiA0MzQuNzUgMjE2IDQ0OFMyMDUuMjUgNDcyIDE5MiA0NzJTMTY4IDQ2MS4yNSAxNjggNDQ4UzE3OC43NSA0MjQgMTkyIDQyNFpNMzUyIDBIMjI0TDE5MiA2NEwxNjAgMEgxMjhMOTYgNjRMNjQgMEgzMkMxNC4zNzUgMCAwIDE0LjM3NSAwIDMyVjI1NkgzODRWMzJDMzg0IDE0LjM3NSAzNjkuNjI1IDAgMzUyIDBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Brush(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M0 320C0 355.375 28.625 384 64 384H128V448C128 483.375 156.625 512 192 512S256 483.375 256 448V384H320C355.375 384 384 355.375 384 320V288H0V320ZM192 424C205.25 424 216 434.75 216 448S205.25 472 192 472S168 461.25 168 448S178.75 424 192 424ZM352 0H224L192 64L160 0H128L96 64L64 0H32C14.375 0 0 14.375 0 32V256H384V32C384 14.375 369.625 0 352 0Z" />
        </Icon>
    </>
}