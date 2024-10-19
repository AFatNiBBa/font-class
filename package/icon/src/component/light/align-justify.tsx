
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `align-justify` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/align-justify?s=light align-justify}
 * @preview ![align-justify](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MzIgNDMySDE2QzcuMTk5IDQzMiAwIDQzOS4xOTkgMCA0NDhTNy4xOTkgNDY0IDE2IDQ2NEg0MzJDNDQwLjgwMSA0NjQgNDQ4IDQ1Ni44MDEgNDQ4IDQ0OFM0NDAuODAxIDQzMiA0MzIgNDMyWk0xNiA4MEg0MzJDNDQwLjgwMSA4MCA0NDggNzIuODAxIDQ0OCA2NFM0NDAuODAxIDQ4IDQzMiA0OEgxNkM3LjE5OSA0OCAwIDU1LjE5OSAwIDY0UzcuMTk5IDgwIDE2IDgwWk00MzIgMTc2SDE2QzcuMTk5IDE3NiAwIDE4My4xOTkgMCAxOTJTNy4xOTkgMjA4IDE2IDIwOEg0MzJDNDQwLjgwMSAyMDggNDQ4IDIwMC44MDEgNDQ4IDE5MlM0NDAuODAxIDE3NiA0MzIgMTc2Wk00MzIgMzA0SDE2QzcuMTk5IDMwNCAwIDMxMS4xOTkgMCAzMjBTNy4xOTkgMzM2IDE2IDMzNkg0MzJDNDQwLjgwMSAzMzYgNDQ4IDMyOC44MDEgNDQ4IDMyMFM0NDAuODAxIDMwNCA0MzIgMzA0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function AlignJustify(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M432 432H16C7.199 432 0 439.199 0 448S7.199 464 16 464H432C440.801 464 448 456.801 448 448S440.801 432 432 432ZM16 80H432C440.801 80 448 72.801 448 64S440.801 48 432 48H16C7.199 48 0 55.199 0 64S7.199 80 16 80ZM432 176H16C7.199 176 0 183.199 0 192S7.199 208 16 208H432C440.801 208 448 200.801 448 192S440.801 176 432 176ZM432 304H16C7.199 304 0 311.199 0 320S7.199 336 16 336H432C440.801 336 448 328.801 448 320S440.801 304 432 304Z" />
        </Icon>
    </>
}