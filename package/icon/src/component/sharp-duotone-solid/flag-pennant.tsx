
import { Icon, generic } from "../../index";

/**
 * A component that renders the `flag-pennant` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flag-pennant?s=sharp-duotone-solid flag-pennant}
 * @preview ![flag-pennant](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCAzMkw0NDggMTkyIDY0IDM1MiA2NCAzMnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTY0IDBsMCAzMiAwIDQ0OCAwIDMyTDAgNTEybDAtMzJMMCAzMiAwIDAgNjQgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const FlagPennant: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M64 32L448 192 64 352 64 32z" />
            <path d="M64 0l0 32 0 448 0 32L0 512l0-32L0 32 0 0 64 0z" />
    </Icon>
);

export default FlagPennant;