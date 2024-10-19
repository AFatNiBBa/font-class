
import { Icon } from "../../index";

/**
 * A component that renders the `traffic-light` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/traffic-light?s=sharp-regular traffic-light}
 * @preview ![traffic-light](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDggNDhsMCAzMDRjMCA2MS45IDUwLjEgMTEyIDExMiAxMTJzMTEyLTUwLjEgMTEyLTExMmwwLTMwNEw0OCA0OHpNMCAwTDQ4IDAgMjcyIDBsNDggMCAwIDQ4IDAgMzA0YzAgODguNC03MS42IDE2MC0xNjAgMTYwUzAgNDQwLjQgMCAzNTJMMCA0OCAwIDB6TTE2MCA0MjRhNDggNDggMCAxIDEgMC05NiA0OCA0OCAwIDEgMSAwIDk2em00OC0xNjhhNDggNDggMCAxIDEgLTk2IDAgNDggNDggMCAxIDEgOTYgMHptLTQ4LTcyYTQ4IDQ4IDAgMSAxIDAtOTYgNDggNDggMCAxIDEgMCA5NnoiLz48L3N2Zz4=|width=32|height=32)
 */
const TrafficLight: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M48 48l0 304c0 61.9 50.1 112 112 112s112-50.1 112-112l0-304L48 48zM0 0L48 0 272 0l48 0 0 48 0 304c0 88.4-71.6 160-160 160S0 440.4 0 352L0 48 0 0zM160 424a48 48 0 1 1 0-96 48 48 0 1 1 0 96zm48-168a48 48 0 1 1 -96 0 48 48 0 1 1 96 0zm-48-72a48 48 0 1 1 0-96 48 48 0 1 1 0 96z" />
    </Icon>
);

export default TrafficLight;