
import { Icon } from "../../index";

/**
 * A component that renders the `text` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/text?s=solid text}
 * @preview ![text](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNjQgOTZsMCAzMmMwIDE3LjctMTQuMyAzMi0zMiAzMnMtMzItMTQuMy0zMi0zMkwwIDgwQzAgNTMuNSAyMS41IDMyIDQ4IDMybDE3NiAwIDE3NiAwYzI2LjUgMCA0OCAyMS41IDQ4IDQ4bDAgNDhjMCAxNy43LTE0LjMgMzItMzIgMzJzLTMyLTE0LjMtMzItMzJsMC0zMkwyNTYgOTZsMCAzMjAgNDggMGMxNy43IDAgMzIgMTQuMyAzMiAzMnMtMTQuMyAzMi0zMiAzMmwtMTYwIDBjLTE3LjcgMC0zMi0xNC4zLTMyLTMyczE0LjMtMzIgMzItMzJsNDggMCAwLTMyMEw2NCA5NnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Text: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 96l0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32L0 80C0 53.5 21.5 32 48 32l176 0 176 0c26.5 0 48 21.5 48 48l0 48c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32L256 96l0 320 48 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-160 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l48 0 0-320L64 96z" />
    </Icon>
);

export default Text;