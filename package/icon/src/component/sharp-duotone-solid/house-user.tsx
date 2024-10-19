
import { Icon, generic } from "../../index";

/**
 * A component that renders the `house-user` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-user?s=sharp-duotone-solid house-user}
 * @preview ![house-user](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCAyNzJsLjEgMjQwIDQ0OC41IDAtLjUtMjI0Yy0uMS01LjMtLjEtMTAuNy0uMS0xNkM0MzcuMyAyMTAuNyAzNjIuNyAxNDkuMyAyODggODhDMjEzLjMgMTQ5LjMgMTM4LjcgMjEwLjcgNjQgMjcyek0xNzYgNDQ4bDMyLTk2IDE2MCAwIDMyIDk2LTIyNCAwek0zNTIgMjU2YTY0IDY0IDAgMSAxIC0xMjggMCA2NCA2NCAwIDEgMSAxMjggMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTAgMjQwTDI4OCAwIDU3NiAyNDBsMCAzMi02NCAwTDI4OCA4OCA2NCAyNzIgMCAyNzJsMC0zMnptMjI0IDE2YTY0IDY0IDAgMSAxIDEyOCAwIDY0IDY0IDAgMSAxIC0xMjggMHpNNDAwIDQ0OGwtMjI0IDAgMzItOTYgMTYwIDAgMzIgOTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const HouseUser: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M64 272l.1 240 448.5 0-.5-224c-.1-5.3-.1-10.7-.1-16C437.3 210.7 362.7 149.3 288 88C213.3 149.3 138.7 210.7 64 272zM176 448l32-96 160 0 32 96-224 0zM352 256a64 64 0 1 1 -128 0 64 64 0 1 1 128 0z" />
            <path d="M0 240L288 0 576 240l0 32-64 0L288 88 64 272 0 272l0-32zm224 16a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM400 448l-224 0 32-96 160 0 32 96z" />
    </Icon>
);

export default HouseUser;