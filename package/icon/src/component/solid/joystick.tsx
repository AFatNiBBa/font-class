
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `joystick` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/joystick?s=solid joystick}
 * @preview ![joystick](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MTYgMzUySDEyOFYzMzZDMTI4IDMyNy4xMjUgMTIwLjg3NSAzMjAgMTEyIDMyMEg4MEM3MS4xMjUgMzIwIDY0IDMyNy4xMjUgNjQgMzM2VjM1MkgzMkMxNC4zNzUgMzUyIDAgMzY2LjM3NSAwIDM4NFY0ODBDMCA0OTcuNjI1IDE0LjM3NSA1MTIgMzIgNTEySDQxNkM0MzMuNjI1IDUxMiA0NDggNDk3LjYyNSA0NDggNDgwVjM4NEM0NDggMzY2LjM3NSA0MzMuNjI1IDM1MiA0MTYgMzUyWk0xOTIgMjE4Ljc1VjMyMEgyNTZWMjE4Ljc1QzMwMi4xMjUgMjA1IDMzNiAxNjIuNjI1IDMzNiAxMTJDMzM2IDUwLjEyNSAyODUuODc1IDAgMjI0IDBTMTEyIDUwLjEyNSAxMTIgMTEyQzExMiAxNjIuNjI1IDE0NS44NzUgMjA1IDE5MiAyMTguNzVaTTIwMCA0OEMyMTMuMjUgNDggMjI0IDU4Ljc1IDIyNCA3MlMyMTMuMjUgOTYgMjAwIDk2UzE3NiA4NS4yNSAxNzYgNzJTMTg2Ljc1IDQ4IDIwMCA0OFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Joystick(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M416 352H128V336C128 327.125 120.875 320 112 320H80C71.125 320 64 327.125 64 336V352H32C14.375 352 0 366.375 0 384V480C0 497.625 14.375 512 32 512H416C433.625 512 448 497.625 448 480V384C448 366.375 433.625 352 416 352ZM192 218.75V320H256V218.75C302.125 205 336 162.625 336 112C336 50.125 285.875 0 224 0S112 50.125 112 112C112 162.625 145.875 205 192 218.75ZM200 48C213.25 48 224 58.75 224 72S213.25 96 200 96S176 85.25 176 72S186.75 48 200 48Z" />
        </Icon>
    </>
}