
import { Icon } from "../../index";

/**
 * A component that renders the `explosion` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/explosion?s=sharp-solid explosion}
 * @preview ![explosion](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTQ0IDM2OEwwIDMyMGw4Mi4zIDk2IDExNS4yIDBjMTMuMi0zNy4zIDQ4LjctNjQgOTAuNS02NHM3Ny40IDI2LjcgOTAuNSA2NGwxMTUuMiAwTDU3NiAzMjAgNDMyIDM2OCA1NDQgMCAzMzYgMjk2IDMxMiAxMjhsLTQ4IDBMMjQwIDMwNCA5NiAxOTJsNDggMTc2ek0zMTIgMEwyNjQgMGwwIDI0IDAgNDggMCAyNCA0OCAwIDAtMjQgMC00OCAwLTI0ek0zMiA0NDhMMCA0NDhsMCA2NCAzMiAwIDUxMiAwIDMyIDAgMC02NC0zMiAwTDMyIDQ0OHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Explosion: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M144 368L0 320l82.3 96 115.2 0c13.2-37.3 48.7-64 90.5-64s77.4 26.7 90.5 64l115.2 0L576 320 432 368 544 0 336 296 312 128l-48 0L240 304 96 192l48 176zM312 0L264 0l0 24 0 48 0 24 48 0 0-24 0-48 0-24zM32 448L0 448l0 64 32 0 512 0 32 0 0-64-32 0L32 448z" />
    </Icon>
);

export default Explosion;