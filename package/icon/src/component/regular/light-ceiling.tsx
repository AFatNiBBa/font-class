
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `light-ceiling` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/light-ceiling?s=regular light-ceiling}
 * @preview ![light-ceiling](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjAuMDIzIDQ0OEgxOTIuMDAyQzE5Mi4wMDIgNDgzLjM3NSAyMjAuNjMyIDUxMiAyNTYuMDEzIDUxMlMzMjAuMDIzIDQ4My4zNzUgMzIwLjAyMyA0NDhaTTAuMzQ1IDM3OS42MjVDLTIuNTMxIDM5OC43NSAxMi45NzIgNDE2IDMyLjQ3NSA0MTZINDc5LjU1QzQ5OS4wNTMgNDE2IDUxNC40MzEgMzk4Ljc1IDUxMS42ODEgMzc5LjYyNUM0OTUuMDUzIDI2My4yNSAzOTkuMjg3IDE3MiAyODAuMDE3IDE2MS4xMjVWMjRDMjgwLjAxNyAxMC43NDUgMjY5LjI3IDAgMjU2LjAxMyAwSDI1Ni4wMTNDMjQyLjc1NiAwIDIzMi4wMDkgMTAuNzQ1IDIzMi4wMDkgMjRWMTYxLjEyNUMxMTIuNzM5IDE3MiAxNi45NzIgMjYzLjI1IDAuMzQ1IDM3OS42MjVaTTUxLjM1MyAzNjhDNzMuNDgyIDI3NS42MjUgMTU4LjM3MSAyMDggMjU2LjAxMyAyMDhTNDM4LjU0MyAyNzUuNjI1IDQ2MC42NzIgMzY4SDUxLjM1M1oiLz48L3N2Zz4=|width=32|height=32)
 */
export default function LightCeiling(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M320.023 448H192.002C192.002 483.375 220.632 512 256.013 512S320.023 483.375 320.023 448ZM0.345 379.625C-2.531 398.75 12.972 416 32.475 416H479.55C499.053 416 514.431 398.75 511.681 379.625C495.053 263.25 399.287 172 280.017 161.125V24C280.017 10.745 269.27 0 256.013 0H256.013C242.756 0 232.009 10.745 232.009 24V161.125C112.739 172 16.972 263.25 0.345 379.625ZM51.353 368C73.482 275.625 158.371 208 256.013 208S438.543 275.625 460.672 368H51.353Z" />
        </Icon>
    </>
}