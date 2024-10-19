
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `pause` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/pause?s=solid pause}
 * @preview ![pause](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNzIgNjRIMjQwQzIxMy40OSA2NCAxOTIgODUuNDkgMTkyIDExMlY0MDBDMTkyIDQyNi41MSAyMTMuNDkgNDQ4IDI0MCA0NDhIMjcyQzI5OC41MSA0NDggMzIwIDQyNi41MSAzMjAgNDAwVjExMkMzMjAgODUuNDkgMjk4LjUxIDY0IDI3MiA2NFpNODAgNjRINDhDMjEuNDkgNjQgMCA4NS40OSAwIDExMlY0MDBDMCA0MjYuNTEgMjEuNDkgNDQ4IDQ4IDQ0OEg4MEMxMDYuNTEgNDQ4IDEyOCA0MjYuNTEgMTI4IDQwMFYxMTJDMTI4IDg1LjQ5IDEwNi41MSA2NCA4MCA2NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Pause(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M272 64H240C213.49 64 192 85.49 192 112V400C192 426.51 213.49 448 240 448H272C298.51 448 320 426.51 320 400V112C320 85.49 298.51 64 272 64ZM80 64H48C21.49 64 0 85.49 0 112V400C0 426.51 21.49 448 48 448H80C106.51 448 128 426.51 128 400V112C128 85.49 106.51 64 80 64Z" />
        </Icon>
    </>
}