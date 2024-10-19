
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `arrow-left` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-left?s=light arrow-left}
 * @preview ![arrow-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDguMDA0IDI1NkM0NDguMDA0IDI2NC44NDQgNDQwLjg0OCAyNzIgNDMyLjAwNCAyNzJINjguMTc0TDIwMy44NDggNDIxLjI1QzIwOS43ODUgNDI3Ljc4MSAyMDkuMzAxIDQzNy45MDYgMjAyLjc3IDQ0My44NDRDMTk5LjcwNyA0NDYuNjI1IDE5NS44NDggNDQ4IDE5Mi4wMDQgNDQ4QzE4Ny42NiA0NDggMTgzLjMxNiA0NDYuMjUgMTgwLjE2IDQ0Mi43NUwyMC4xNiAyNjYuNzVDMTQuNjEzIDI2MC42NTYgMTQuNjEzIDI1MS4zNDQgMjAuMTYgMjQ1LjI1TDE4MC4xNiA2OS4yNUMxODYuMTI5IDYyLjY4OCAxOTYuMjU0IDYyLjI1IDIwMi43NyA2OC4xNTZDMjA5LjMwMSA3NC4wOTQgMjA5Ljc4NSA4NC4yMTkgMjAzLjg0OCA5MC43NUw2OC4xNzQgMjQwSDQzMi4wMDRDNDQwLjg0OCAyNDAgNDQ4LjAwNCAyNDcuMTU2IDQ0OC4wMDQgMjU2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ArrowLeft(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M448.004 256C448.004 264.844 440.848 272 432.004 272H68.174L203.848 421.25C209.785 427.781 209.301 437.906 202.77 443.844C199.707 446.625 195.848 448 192.004 448C187.66 448 183.316 446.25 180.16 442.75L20.16 266.75C14.613 260.656 14.613 251.344 20.16 245.25L180.16 69.25C186.129 62.688 196.254 62.25 202.77 68.156C209.301 74.094 209.785 84.219 203.848 90.75L68.174 240H432.004C440.848 240 448.004 247.156 448.004 256Z" />
        </Icon>
    </>
}