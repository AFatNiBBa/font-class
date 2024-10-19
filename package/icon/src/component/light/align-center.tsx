
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `align-center` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/align-center?s=light align-center}
 * @preview ![align-center](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNiAyMDhINDMyQzQ0MC44MDEgMjA4IDQ0OCAyMDAuODAxIDQ0OCAxOTJTNDQwLjgwMSAxNzYgNDMyIDE3NkgxNkM3LjE5OSAxNzYgMCAxODMuMTk5IDAgMTkyUzcuMTk5IDIwOCAxNiAyMDhaTTExMiA4MEgzMzZDMzQ0LjgwMSA4MCAzNTIgNzIuODAxIDM1MiA2NFMzNDQuODAxIDQ4IDMzNiA0OEgxMTJDMTAzLjE5OSA0OCA5NiA1NS4xOTkgOTYgNjRTMTAzLjE5OSA4MCAxMTIgODBaTTQzMiA0MzJIMTZDNy4xOTkgNDMyIDAgNDM5LjE5OSAwIDQ0OFM3LjE5OSA0NjQgMTYgNDY0SDQzMkM0NDAuODAxIDQ2NCA0NDggNDU2LjgwMSA0NDggNDQ4UzQ0MC44MDEgNDMyIDQzMiA0MzJaTTExMiAzMDRDMTAzLjE5OSAzMDQgOTYgMzExLjE5OSA5NiAzMjBTMTAzLjE5OSAzMzYgMTEyIDMzNkgzMzZDMzQ0LjgwMSAzMzYgMzUyIDMyOC44MDEgMzUyIDMyMFMzNDQuODAxIDMwNCAzMzYgMzA0SDExMloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function AlignCenter(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M16 208H432C440.801 208 448 200.801 448 192S440.801 176 432 176H16C7.199 176 0 183.199 0 192S7.199 208 16 208ZM112 80H336C344.801 80 352 72.801 352 64S344.801 48 336 48H112C103.199 48 96 55.199 96 64S103.199 80 112 80ZM432 432H16C7.199 432 0 439.199 0 448S7.199 464 16 464H432C440.801 464 448 456.801 448 448S440.801 432 432 432ZM112 304C103.199 304 96 311.199 96 320S103.199 336 112 336H336C344.801 336 352 328.801 352 320S344.801 304 336 304H112Z" />
        </Icon>
    </>
}