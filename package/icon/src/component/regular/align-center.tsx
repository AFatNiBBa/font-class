
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `align-center` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/align-center?s=regular align-center}
 * @preview ![align-center](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMjAgODhIMzI4QzM0MS4yNTUgODggMzUyIDc3LjI1NSAzNTIgNjRWNjRDMzUyIDUwLjc0NSAzNDEuMjU1IDQwIDMyOCA0MEgxMjBDMTA2Ljc0NSA0MCA5NiA1MC43NDUgOTYgNjRWNjRDOTYgNzcuMjU1IDEwNi43NDUgODggMTIwIDg4Wk00MjQgNDI0SDI0QzEwLjc0NSA0MjQgMCA0MzQuNzQ1IDAgNDQ4VjQ0OEMwIDQ2MS4yNTUgMTAuNzQ1IDQ3MiAyNCA0NzJINDI0QzQzNy4yNTUgNDcyIDQ0OCA0NjEuMjU1IDQ0OCA0NDhWNDQ4QzQ0OCA0MzQuNzQ1IDQzNy4yNTUgNDI0IDQyNCA0MjRaTTMyOCAzNDRDMzQxLjI1NSAzNDQgMzUyIDMzMy4yNTUgMzUyIDMyMFYzMjBDMzUyIDMwNi43NDUgMzQxLjI1NSAyOTYgMzI4IDI5NkgxMjBDMTA2Ljc0NSAyOTYgOTYgMzA2Ljc0NSA5NiAzMjBWMzIwQzk2IDMzMy4yNTUgMTA2Ljc0NSAzNDQgMTIwIDM0NEgzMjhaTTQyNCAxNjhIMjRDMTAuNzQ1IDE2OCAwIDE3OC43NDUgMCAxOTJWMTkyQzAgMjA1LjI1NSAxMC43NDUgMjE2IDI0IDIxNkg0MjRDNDM3LjI1NSAyMTYgNDQ4IDIwNS4yNTUgNDQ4IDE5MlYxOTJDNDQ4IDE3OC43NDUgNDM3LjI1NSAxNjggNDI0IDE2OFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function AlignCenter(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M120 88H328C341.255 88 352 77.255 352 64V64C352 50.745 341.255 40 328 40H120C106.745 40 96 50.745 96 64V64C96 77.255 106.745 88 120 88ZM424 424H24C10.745 424 0 434.745 0 448V448C0 461.255 10.745 472 24 472H424C437.255 472 448 461.255 448 448V448C448 434.745 437.255 424 424 424ZM328 344C341.255 344 352 333.255 352 320V320C352 306.745 341.255 296 328 296H120C106.745 296 96 306.745 96 320V320C96 333.255 106.745 344 120 344H328ZM424 168H24C10.745 168 0 178.745 0 192V192C0 205.255 10.745 216 24 216H424C437.255 216 448 205.255 448 192V192C448 178.745 437.255 168 424 168Z" />
        </Icon>
    </>
}