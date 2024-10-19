
import { Icon } from "../../index";

/**
 * A component that renders the `traffic-light` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/traffic-light?s=solid traffic-light}
 * @preview ![traffic-light](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNjQgMEMyOC43IDAgMCAyOC43IDAgNjRMMCAzNTJjMCA4OC40IDcxLjYgMTYwIDE2MCAxNjBzMTYwLTcxLjYgMTYwLTE2MGwwLTI4OGMwLTM1LjMtMjguNy02NC02NC02NEw2NCAwem05NiA0MTZhNDggNDggMCAxIDEgMC05NiA0OCA0OCAwIDEgMSAwIDk2em00OC0xNzZhNDggNDggMCAxIDEgLTk2IDAgNDggNDggMCAxIDEgOTYgMHptLTQ4LTgwYTQ4IDQ4IDAgMSAxIDAtOTYgNDggNDggMCAxIDEgMCA5NnoiLz48L3N2Zz4=|width=32|height=32)
 */
const TrafficLight: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M64 0C28.7 0 0 28.7 0 64L0 352c0 88.4 71.6 160 160 160s160-71.6 160-160l0-288c0-35.3-28.7-64-64-64L64 0zm96 416a48 48 0 1 1 0-96 48 48 0 1 1 0 96zm48-176a48 48 0 1 1 -96 0 48 48 0 1 1 96 0zm-48-80a48 48 0 1 1 0-96 48 48 0 1 1 0 96z" />
    </Icon>
);

export default TrafficLight;