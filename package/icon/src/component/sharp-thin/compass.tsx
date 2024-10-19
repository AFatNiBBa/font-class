
import { Icon } from "../../index";

/**
 * A component that renders the `compass` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/compass?s=sharp-thin compass}
 * @preview ![compass](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDE2YTI0MCAyNDAgMCAxIDEgMCA0ODAgMjQwIDI0MCAwIDEgMSAwLTQ4MHptMCA0OTZBMjU2IDI1NiAwIDEgMCAyNTYgMGEyNTYgMjU2IDAgMSAwIDAgNTEyem01MS40LTIwNC42TDE1My4zIDM1OC43bDUxLjQtMTU0LjEgMTU0LjEtNTEuNEwzMDcuNCAzMDcuNHptNTcuNy0xNzNMMTkyIDE5MiAxMzQuMyAzNjUgMTI4IDM4NGwxOS02LjNMMzIwIDMyMGw1Ny43LTE3MyA2LjMtMTktMTkgNi4zek0yNDAgMjU2YTE2IDE2IDAgMSAxIDMyIDAgMTYgMTYgMCAxIDEgLTMyIDB6bTQ4IDBhMzIgMzIgMCAxIDAgLTY0IDAgMzIgMzIgMCAxIDAgNjQgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Compass: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm51.4-204.6L153.3 358.7l51.4-154.1 154.1-51.4L307.4 307.4zm57.7-173L192 192 134.3 365 128 384l19-6.3L320 320l57.7-173 6.3-19-19 6.3zM240 256a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm48 0a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </Icon>
);

export default Compass;