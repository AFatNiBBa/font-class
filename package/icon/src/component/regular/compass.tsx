
import { Icon } from "../../index";

/**
 * A component that renders the `compass` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/compass?s=regular compass}
 * @preview ![compass](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDY0IDI1NkEyMDggMjA4IDAgMSAwIDQ4IDI1NmEyMDggMjA4IDAgMSAwIDQxNiAwek0wIDI1NmEyNTYgMjU2IDAgMSAxIDUxMiAwQTI1NiAyNTYgMCAxIDEgMCAyNTZ6bTMwNi43IDY5LjFMMTYyLjQgMzgwLjZjLTE5LjQgNy41LTM4LjUtMTEuNi0zMS0zMWw1NS41LTE0NC4zYzMuMy04LjUgOS45LTE1LjEgMTguNC0xOC40bDE0NC4zLTU1LjVjMTkuNC03LjUgMzguNSAxMS42IDMxIDMxTDMyNS4xIDMwNi43Yy0zLjIgOC41LTkuOSAxNS4xLTE4LjQgMTguNHpNMjg4IDI1NmEzMiAzMiAwIDEgMCAtNjQgMCAzMiAzMiAwIDEgMCA2NCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Compass: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm306.7 69.1L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </Icon>
);

export default Compass;