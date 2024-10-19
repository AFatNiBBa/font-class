
import { Icon, generic } from "../../index";

/**
 * A component that renders the `image-landscape` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/image-landscape?s=sharp-duotone-solid image-landscape}
 * @preview ![image-landscape](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDY0TDAgNDQ4bDU3NiAwIDAtMzg0TDAgNjR6TTgwLjggMzg0YzQuMy01LjEgOC41LTEwLjIgMTIuOC0xNS40YzI2LjctMzIgNTMuMy02NCA4MC05NmM2LjEtNy40IDEyLjMtMTQuOCAxOC40LTIyLjFjNi4xIDcuNCAxMi4zIDE0LjggMTguNCAyMi4xYzcuOSA5LjUgMTUuOCAxOSAyMy43IDI4LjVjMjQuOS0zMy4yIDQ5LjgtNjYuMyA3NC42LTk5LjVjNi40LTguNSAxMi44LTE3LjEgMTkuMi0yNS42bDE5LjIgMjUuNkw0ODQgMzg0IDgwLjggMzg0ek0xOTIgMTkyYTMyIDMyIDAgMSAxIC02NCAwIDMyIDMyIDAgMSAxIDY0IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zMjggMTc2bDE5LjIgMjUuNkw0ODQgMzg0IDgwLjggMzg0bDEyLjgtMTUuNCA4MC05NkwxOTIgMjUwLjVsMTguNCAyMi4xIDIzLjcgMjguNSA3NC42LTk5LjVMMzI4IDE3NnoiLz48L3N2Zz4=|width=32|height=32)
 */
const ImageLandscape: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 64L0 448l576 0 0-384L0 64zM80.8 384c4.3-5.1 8.5-10.2 12.8-15.4c26.7-32 53.3-64 80-96c6.1-7.4 12.3-14.8 18.4-22.1c6.1 7.4 12.3 14.8 18.4 22.1c7.9 9.5 15.8 19 23.7 28.5c24.9-33.2 49.8-66.3 74.6-99.5c6.4-8.5 12.8-17.1 19.2-25.6l19.2 25.6L484 384 80.8 384zM192 192a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
            <path d="M328 176l19.2 25.6L484 384 80.8 384l12.8-15.4 80-96L192 250.5l18.4 22.1 23.7 28.5 74.6-99.5L328 176z" />
    </Icon>
);

export default ImageLandscape;