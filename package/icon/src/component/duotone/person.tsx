
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person?s=duotone person}
 * @preview ![person](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMTIgNDhhNDggNDggMCAxIDAgOTYgMCA0OCA0OCAwIDEgMCAtOTYgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTg4IDI1Ni45TDU5LjQgMzA0LjVjLTkuMSAxNS4xLTI4LjggMjAtNDMuOSAxMC45cy0yMC0yOC44LTEwLjktNDMuOWw1OC4zLTk3YzE3LjQtMjguOSA0OC42LTQ2LjYgODIuMy00Ni42bDI5LjcgMGMzMy43IDAgNjQuOSAxNy43IDgyLjMgNDYuNmw1OC4zIDk3YzkuMSAxNS4xIDQuMiAzNC44LTEwLjkgNDMuOXMtMzQuOCA0LjItNDMuOS0xMC45TDIzMiAyNTYuOSAyMzIgNDgwYzAgMTcuNy0xNC4zIDMyLTMyIDMycy0zMi0xNC4zLTMyLTMybDAtMTI4LTE2IDAgMCAxMjhjMCAxNy43LTE0LjMgMzItMzIgMzJzLTMyLTE0LjMtMzItMzJsMC0yMjMuMXoiLz48L3N2Zz4=|width=32|height=32)
 */
const Person: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M112 48a48 48 0 1 0 96 0 48 48 0 1 0 -96 0z" />
            <path d="M88 256.9L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6l29.7 0c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9 232 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-128-16 0 0 128c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-223.1z" />
    </Icon>
);

export default Person;