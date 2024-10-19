
import { Icon, generic } from "../../index";

/**
 * A component that renders the `map-pin` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/map-pin?s=sharp-duotone-solid map-pin}
 * @preview ![map-pin](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMjggMjg0LjRjNS4xIDEuMiAxMC40IDIuMSAxNS44IDIuN2MyLjcgLjMgNS4zIC41IDguMSAuN2MxLjMgLjEgMi43IC4xIDQuMSAuMmMxLjIgMCAyLjUgLjEgNCAuMWMxMSAwIDIxLjctMS4yIDMyLTMuNkwxOTIgNDgwbDAgMzItNjQgMCAwLTMyIDAtMTk1LjZ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xNjAgMjg4QTE0NCAxNDQgMCAxIDAgMTYwIDBhMTQ0IDE0NCAwIDEgMCAwIDI4OHpNOTYgMTQ0bC0zMiAwYzAtNTMgNDMtOTYgOTYtOTZsMCAzMmMtMzUuMyAwLTY0IDI4LjctNjQgNjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const MapPin: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M128 284.4c5.1 1.2 10.4 2.1 15.8 2.7c2.7 .3 5.3 .5 8.1 .7c1.3 .1 2.7 .1 4.1 .2c1.2 0 2.5 .1 4 .1c11 0 21.7-1.2 32-3.6L192 480l0 32-64 0 0-32 0-195.6z" />
            <path d="M160 288A144 144 0 1 0 160 0a144 144 0 1 0 0 288zM96 144l-32 0c0-53 43-96 96-96l0 32c-35.3 0-64 28.7-64 64z" />
    </Icon>
);

export default MapPin;