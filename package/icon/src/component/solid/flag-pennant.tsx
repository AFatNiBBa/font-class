
import { Icon } from "../../index";

/**
 * A component that renders the `flag-pennant` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flag-pennant?s=solid flag-pennant}
 * @preview ![flag-pennant](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNjQgMzJDNjQgMTQuMyA0OS43IDAgMzIgMFMwIDE0LjMgMCAzMkwwIDQ4MGMwIDE3LjcgMTQuMyAzMiAzMiAzMnMzMi0xNC4zIDMyLTMybDAtMTI4TDQzMyAyMTMuNmM5LTMuNCAxNS0xMiAxNS0yMS42cy02LTE4LjItMTUtMjEuNkw2NCAzMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const FlagPennant: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32L0 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128L433 213.6c9-3.4 15-12 15-21.6s-6-18.2-15-21.6L64 32z" />
    </Icon>
);

export default FlagPennant;