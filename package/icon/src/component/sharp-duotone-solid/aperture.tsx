
import { Icon, generic } from "../../index";

/**
 * A component that renders the `aperture` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/aperture?s=sharp-duotone-solid aperture}
 * @preview ![aperture](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmMwIDIyLjEgMi44IDQzLjUgOC4xIDY0bDE3NCAwTDU0LjIgOTguNUMyMC4yIDE0MS45IDAgMTk2LjYgMCAyNTZ6TTIyMC41IDUwOS42YzExLjYgMS42IDIzLjUgMi40IDM1LjUgMi40YzY5LjkgMCAxMzMuMi0yOCAxNzkuNC03My4zTDM0OC40IDI4OCAyMjAuNSA1MDkuNnpNMjM3LjUgMTYwbDI1NS45IDBDNDYzLjggODYuOSA0MDEuNCAzMC42IDMyNC41IDkuM0wyMzcuNSAxNjB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yNTYgMGMxMi4xIDAgMjMuOSAuOCAzNS41IDIuNEwxNjMuNiAyMjQgNzYuNiA3My4zQzEyMi44IDI4IDE4Ni4xIDAgMjU2IDB6TTE4Ny41IDUwMi43QzExMC42IDQ4MS40IDQ4LjIgNDI1LjEgMTguNiAzNTJsMjU1LjkgMC04NyAxNTAuN3ptMjcwLjMtODkuMkwzMjkuOSAxOTJsMTc0IDBjNS4zIDIwLjUgOC4xIDQxLjkgOC4xIDY0YzAgNTkuNC0yMC4yIDExNC4xLTU0LjIgMTU3LjV6Ii8+PC9zdmc+|width=32|height=32)
 */
const Aperture: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256c0 22.1 2.8 43.5 8.1 64l174 0L54.2 98.5C20.2 141.9 0 196.6 0 256zM220.5 509.6c11.6 1.6 23.5 2.4 35.5 2.4c69.9 0 133.2-28 179.4-73.3L348.4 288 220.5 509.6zM237.5 160l255.9 0C463.8 86.9 401.4 30.6 324.5 9.3L237.5 160z" />
            <path d="M256 0c12.1 0 23.9 .8 35.5 2.4L163.6 224 76.6 73.3C122.8 28 186.1 0 256 0zM187.5 502.7C110.6 481.4 48.2 425.1 18.6 352l255.9 0-87 150.7zm270.3-89.2L329.9 192l174 0c5.3 20.5 8.1 41.9 8.1 64c0 59.4-20.2 114.1-54.2 157.5z" />
    </Icon>
);

export default Aperture;