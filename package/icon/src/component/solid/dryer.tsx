
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `dryer` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/dryer?s=solid dryer}
 * @preview ![dryer](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMEg2NEMyOC42NTQgMCAwIDI4LjY1NCAwIDY0VjQ2NEMwIDQ5MC40IDIxLjYgNTEyIDQ4IDUxMkg0MDBDNDI2LjQgNTEyIDQ0OCA0OTAuNCA0NDggNDY0VjY0QzQ0OCAyOC42NTQgNDE5LjM0NiAwIDM4NCAwWk0xODQgNjRDMTk3LjI1IDY0IDIwOCA3NC43NSAyMDggODhTMTk3LjI1IDExMiAxODQgMTEyUzE2MCAxMDEuMjUgMTYwIDg4UzE3MC43NSA2NCAxODQgNjRaTTY0IDg4QzY0IDc0Ljc1IDc0Ljc1IDY0IDg4IDY0UzExMiA3NC43NSAxMTIgODhTMTAxLjI1IDExMiA4OCAxMTJTNjQgMTAxLjI1IDY0IDg4Wk0yMjQgNDQ4QzE0NC41MDQgNDQ4IDgwIDM4My40OTggODAgMzA0QzgwIDIyNC40OTggMTQ0LjUwNCAxNjAgMjI0IDE2MEMzMDMuNSAxNjAgMzY4IDIyNC40OTggMzY4IDMwNEMzNjggMzgzLjQ5OCAzMDMuNSA0NDggMjI0IDQ0OFpNMjI0IDE5MkMxNjcuNjQ4IDE5MiAxMjEuNDQ1IDIzMy44MDcgMTEzLjYxNyAyODhIMTg0QzE4OC40MTggMjg4IDE5MiAyOTEuNTgyIDE5MiAyOTZWMzEyQzE5MiAzMTYuNDE4IDE4OC40MTggMzIwIDE4NCAzMjBIMTEzLjYxN0MxMjEuNDQ1IDM3NC4xOTMgMTY3LjY0OCA0MTYgMjI0IDQxNkMyODUuODMyIDQxNiAzMzYgMzY1LjgzMiAzMzYgMzA0QzMzNiAyNDIuMTY2IDI4NS44MzIgMTkyIDIyNCAxOTJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Dryer(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M384 0H64C28.654 0 0 28.654 0 64V464C0 490.4 21.6 512 48 512H400C426.4 512 448 490.4 448 464V64C448 28.654 419.346 0 384 0ZM184 64C197.25 64 208 74.75 208 88S197.25 112 184 112S160 101.25 160 88S170.75 64 184 64ZM64 88C64 74.75 74.75 64 88 64S112 74.75 112 88S101.25 112 88 112S64 101.25 64 88ZM224 448C144.504 448 80 383.498 80 304C80 224.498 144.504 160 224 160C303.5 160 368 224.498 368 304C368 383.498 303.5 448 224 448ZM224 192C167.648 192 121.445 233.807 113.617 288H184C188.418 288 192 291.582 192 296V312C192 316.418 188.418 320 184 320H113.617C121.445 374.193 167.648 416 224 416C285.832 416 336 365.832 336 304C336 242.166 285.832 192 224 192Z" />
        </Icon>
    </>
}