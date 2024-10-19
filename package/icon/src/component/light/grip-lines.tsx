
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `grip-lines` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/grip-lines?s=light grip-lines}
 * @preview ![grip-lines](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MzIgMTc2SDE2QzcuMiAxNzYgMCAxODMuMiAwIDE5MlYxOTJDMCAyMDAuOCA3LjIgMjA4IDE2IDIwOEg0MzJDNDQwLjggMjA4IDQ0OCAyMDAuOCA0NDggMTkyVjE5MkM0NDggMTgzLjIgNDQwLjggMTc2IDQzMiAxNzZaTTQzMiAzMDRIMTZDNy4yIDMwNCAwIDMxMS4yIDAgMzIwVjMyMEMwIDMyOC44IDcuMiAzMzYgMTYgMzM2SDQzMkM0NDAuOCAzMzYgNDQ4IDMyOC44IDQ0OCAzMjBWMzIwQzQ0OCAzMTEuMiA0NDAuOCAzMDQgNDMyIDMwNFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function GripLines(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M432 176H16C7.2 176 0 183.2 0 192V192C0 200.8 7.2 208 16 208H432C440.8 208 448 200.8 448 192V192C448 183.2 440.8 176 432 176ZM432 304H16C7.2 304 0 311.2 0 320V320C0 328.8 7.2 336 16 336H432C440.8 336 448 328.8 448 320V320C448 311.2 440.8 304 432 304Z" />
        </Icon>
    </>
}