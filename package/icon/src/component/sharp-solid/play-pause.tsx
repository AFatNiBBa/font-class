
import { Icon } from "../../index";

/**
 * A component that renders the `play-pause` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/play-pause?s=sharp-solid play-pause}
 * @preview ![play-pause](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzIwIDI1Nkw2NCA0NDggNjQgNjQgMzIwIDI1NnpNNDQ4IDk2bDAgMzIwIDAgMzItNjQgMCAwLTMyIDAtMzIwIDAtMzIgNjQgMCAwIDMyem0xMjggMGwwIDMyMCAwIDMyLTY0IDAgMC0zMiAwLTMyMCAwLTMyIDY0IDAgMCAzMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const PlayPause: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M320 256L64 448 64 64 320 256zM448 96l0 320 0 32-64 0 0-32 0-320 0-32 64 0 0 32zm128 0l0 320 0 32-64 0 0-32 0-320 0-32 64 0 0 32z" />
    </Icon>
);

export default PlayPause;