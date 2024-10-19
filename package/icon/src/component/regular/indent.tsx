
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `indent` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/indent?s=regular indent}
 * @preview ![indent](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik05LjIxOSAzNTAuNUMxMS4zNzUgMzUxLjUgMTMuNjg4IDM1MiAxNiAzNTJDMTkuNjg4IDM1MiAyMy4zMTIgMzUwLjc1IDI2LjI1IDM0OC4yODFMMTIyLjI1IDI2OC4yODFDMTI1LjkwNiAyNjUuMjUgMTI4IDI2MC43NSAxMjggMjU2UzEyNS45MDYgMjQ2Ljc1IDEyMi4yNSAyNDMuNzE5TDI2LjI1IDE2My43MTlDMjEuNDY5IDE1OS43MTkgMTQuODQ0IDE1OC45MzcgOS4yMTkgMTYxLjVDMy41OTQgMTY0LjE1NiAwIDE2OS43ODEgMCAxNzZWMzM2QzAgMzQyLjIxOSAzLjU5NCAzNDcuODQ0IDkuMjE5IDM1MC41Wk00MjQgNDI0SDI0QzEwLjc0NiA0MjQgMCA0MzQuNzQ0IDAgNDQ4QzAgNDYxLjI1NCAxMC43NDYgNDcyIDI0IDQ3Mkg0MjRDNDM3LjI1NCA0NzIgNDQ4IDQ2MS4yNTQgNDQ4IDQ0OEM0NDggNDM0Ljc0NCA0MzcuMjU0IDQyNCA0MjQgNDI0Wk0yNCA4OEg0MjRDNDM3LjI1NCA4OCA0NDggNzcuMjU0IDQ0OCA2NEM0NDggNTAuNzQ0IDQzNy4yNTQgNDAgNDI0IDQwSDI0QzEwLjc0NiA0MCAwIDUwLjc0NCAwIDY0QzAgNzcuMjU0IDEwLjc0NiA4OCAyNCA4OFpNNDI0IDE2OEgyMTZDMjAyLjc0NiAxNjggMTkyIDE3OC43NDQgMTkyIDE5MkMxOTIgMjA1LjI1NCAyMDIuNzQ2IDIxNiAyMTYgMjE2SDQyNEM0MzcuMjU0IDIxNiA0NDggMjA1LjI1NCA0NDggMTkyQzQ0OCAxNzguNzQ0IDQzNy4yNTQgMTY4IDQyNCAxNjhaTTQyNCAyOTZIMjE2QzIwMi43NDYgMjk2IDE5MiAzMDYuNzQ0IDE5MiAzMjBDMTkyIDMzMy4yNTQgMjAyLjc0NiAzNDQgMjE2IDM0NEg0MjRDNDM3LjI1NCAzNDQgNDQ4IDMzMy4yNTQgNDQ4IDMyMEM0NDggMzA2Ljc0NCA0MzcuMjU0IDI5NiA0MjQgMjk2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Indent(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M9.219 350.5C11.375 351.5 13.688 352 16 352C19.688 352 23.312 350.75 26.25 348.281L122.25 268.281C125.906 265.25 128 260.75 128 256S125.906 246.75 122.25 243.719L26.25 163.719C21.469 159.719 14.844 158.937 9.219 161.5C3.594 164.156 0 169.781 0 176V336C0 342.219 3.594 347.844 9.219 350.5ZM424 424H24C10.746 424 0 434.744 0 448C0 461.254 10.746 472 24 472H424C437.254 472 448 461.254 448 448C448 434.744 437.254 424 424 424ZM24 88H424C437.254 88 448 77.254 448 64C448 50.744 437.254 40 424 40H24C10.746 40 0 50.744 0 64C0 77.254 10.746 88 24 88ZM424 168H216C202.746 168 192 178.744 192 192C192 205.254 202.746 216 216 216H424C437.254 216 448 205.254 448 192C448 178.744 437.254 168 424 168ZM424 296H216C202.746 296 192 306.744 192 320C192 333.254 202.746 344 216 344H424C437.254 344 448 333.254 448 320C448 306.744 437.254 296 424 296Z" />
        </Icon>
    </>
}