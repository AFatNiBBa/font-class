
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-shelter` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-shelter?s=sharp-duotone-solid person-shelter}
 * @preview ![person-shelter](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMTkuNSAzNjEuOGw0Mi4zIDIyLjggMTEuNC0yMS4xTDIwMCAzMTMuNSAyMDAgNDg4bDAgMjQgNDggMCAwLTI0IDAtODggMTYgMCAwIDg4IDAgMjQgNDggMCAwLTI0IDAtMTc0LjUgMjYuOSA0OS45IDExLjQgMjEuMSA0Mi4zLTIyLjgtMTEuNC0yMS4xLTU2LTEwNEwzMTguMyAyMjQgMzA0IDIyNGwtOTYgMC0xNC4zIDAtNi44IDEyLjYtNTYgMTA0LTExLjQgMjEuMXpNMjE2IDE2OGE0MCA0MCAwIDEgMCA4MCAwIDQwIDQwIDAgMSAwIC04MCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNjQgNTEybDAtMzMwLjYgMTkyLTEwOCAxOTIgMTA4TDQ0OCA1MTJsNjQgMCAwLTM2OEwyNTYgMCAwIDE0NCAwIDUxMmw2NCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const PersonShelter: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M119.5 361.8l42.3 22.8 11.4-21.1L200 313.5 200 488l0 24 48 0 0-24 0-88 16 0 0 88 0 24 48 0 0-24 0-174.5 26.9 49.9 11.4 21.1 42.3-22.8-11.4-21.1-56-104L318.3 224 304 224l-96 0-14.3 0-6.8 12.6-56 104-11.4 21.1zM216 168a40 40 0 1 0 80 0 40 40 0 1 0 -80 0z" />
            <path d="M64 512l0-330.6 192-108 192 108L448 512l64 0 0-368L256 0 0 144 0 512l64 0z" />
    </Icon>
);

export default PersonShelter;