
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `dumpster` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/dumpster?s=light dumpster}
 * @preview ![dumpster](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NjAgMjU2SDUzMy4yNUw1MzYuODEyIDIyNEg1MDQuNzE5TDQ4My41MzEgNDE2SDkyLjQ2OUw3MS4yODEgMjI0SDM5LjA2Mkw0Mi42MjUgMjU2SDE2QzcuMTk5IDI1NiAwIDI2My4xOTkgMCAyNzJDMCAyODAuNzk5IDcuMTk5IDI4OCAxNiAyODhINDYuMjVMNjQgNDQ4VjQ2NEM2NCA0NzIuODM2IDcxLjE2NCA0ODAgODAgNDgwUzk2IDQ3Mi44MzYgOTYgNDY0VjQ0OEg0ODBWNDY0QzQ4MCA0NzIuODM2IDQ4Ny4xNjQgNDgwIDQ5NiA0ODBTNTEyIDQ3Mi44MzYgNTEyIDQ2NFY0NDhMNTI5Ljc1IDI4OEg1NjBDNTY4LjgwMSAyODggNTc2IDI4MC43OTkgNTc2IDI3MkM1NzYgMjYzLjE5OSA1NjguODAxIDI1NiA1NjAgMjU2Wk0xNiAxOTJINTYwQzU3MC4zNzUgMTkyIDU3OCAxNzkuNzUgNTc1LjUgMTY3LjEyNUw1NDMuNSA0Ny4xMjVDNTQxLjc1IDM4LjI1IDUzNS4yNSAzMiA1MjggMzJINDhDNDAuNzUgMzIgMzQuMjUgMzguMjUgMzIuNSA0Ny4xMjVMMC41IDE2Ny4xMjVDLTIgMTc5Ljc1IDUuNjI1IDE5MiAxNiAxOTJaTTUxNC4yNSA2NEw1NDEuMzc1IDE2MEg0NjIuNzVMNDQzLjUgNjRINTE0LjI1Wk0zMDQgNjRINDEwLjg3NUw0MzAuMTI1IDE2MEgzMDRWNjRaTTE2NS4xMjUgNjRIMjcyVjE2MEgxNDUuODc1TDE2NS4xMjUgNjRaTTYxLjc1IDY0SDEzMi41TDExMy4yNSAxNjBIMzQuNjI1TDYxLjc1IDY0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Dumpster(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M560 256H533.25L536.812 224H504.719L483.531 416H92.469L71.281 224H39.062L42.625 256H16C7.199 256 0 263.199 0 272C0 280.799 7.199 288 16 288H46.25L64 448V464C64 472.836 71.164 480 80 480S96 472.836 96 464V448H480V464C480 472.836 487.164 480 496 480S512 472.836 512 464V448L529.75 288H560C568.801 288 576 280.799 576 272C576 263.199 568.801 256 560 256ZM16 192H560C570.375 192 578 179.75 575.5 167.125L543.5 47.125C541.75 38.25 535.25 32 528 32H48C40.75 32 34.25 38.25 32.5 47.125L0.5 167.125C-2 179.75 5.625 192 16 192ZM514.25 64L541.375 160H462.75L443.5 64H514.25ZM304 64H410.875L430.125 160H304V64ZM165.125 64H272V160H145.875L165.125 64ZM61.75 64H132.5L113.25 160H34.625L61.75 64Z" />
        </Icon>
    </>
}