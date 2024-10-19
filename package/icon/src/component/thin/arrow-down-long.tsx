
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-down-long` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-long?s=thin arrow-down-long}
 * @preview ![arrow-down-long](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNTQuMzQ0IDUwOS42NTZDMTU3LjQ2OSA1MTIuNzgxIDE2Mi41MzEgNTEyLjc4MSAxNjUuNjU2IDUwOS42NTZMMzE3LjY1NiAzNTcuNjU2QzMxOS4yMTkgMzU2LjA5NCAzMjAgMzU0LjA2MiAzMjAgMzUyUzMxOS4yMTkgMzQ3LjkwNiAzMTcuNjU2IDM0Ni4zNDRDMzE0LjUzMSAzNDMuMjE5IDMwOS40NjkgMzQzLjIxOSAzMDYuMzQ0IDM0Ni4zNDRMMTY4IDQ4NC42ODhWOEMxNjggMy41OTQgMTY0LjQyMiAwIDE2MCAwUzE1MiAzLjU5NCAxNTIgOFY0ODQuNjg4TDEzLjY1NiAzNDYuMzQ0QzEwLjUzMSAzNDMuMjE5IDUuNDY5IDM0My4yMTkgMi4zNDQgMzQ2LjM0NFMtMC43ODEgMzU0LjUzMSAyLjM0NCAzNTcuNjU2TDE1NC4zNDQgNTA5LjY1NloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ArrowDownLong(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M154.344 509.656C157.469 512.781 162.531 512.781 165.656 509.656L317.656 357.656C319.219 356.094 320 354.062 320 352S319.219 347.906 317.656 346.344C314.531 343.219 309.469 343.219 306.344 346.344L168 484.688V8C168 3.594 164.422 0 160 0S152 3.594 152 8V484.688L13.656 346.344C10.531 343.219 5.469 343.219 2.344 346.344S-0.781 354.531 2.344 357.656L154.344 509.656Z" />
        </Icon>
    </>
}