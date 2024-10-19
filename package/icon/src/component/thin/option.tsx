
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `option` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/option?s=thin option}
 * @preview ![option](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDQgNDMySDM4OC4xODhMMTM0LjU2MiA2Ny40MzhDMTMzLjA2MiA2NS4yODEgMTMwLjYyNSA2NCAxMjggNjRIOEMzLjU5NCA2NCAwIDY3LjU3OCAwIDcyUzMuNTk0IDgwIDggODBIMTIzLjgxMkwzNzcuNDM3IDQ0NC41NjJDMzc4LjkzOCA0NDYuNzE5IDM4MS4zNzUgNDQ4IDM4NCA0NDhINTA0QzUwOC40MDYgNDQ4IDUxMiA0NDQuNDIyIDUxMiA0NDBTNTA4LjQwNiA0MzIgNTA0IDQzMlpNMzI4IDgwSDUwNEM1MDguNDE4IDgwIDUxMiA3Ni40MTggNTEyIDcyUzUwOC40MTggNjQgNTA0IDY0SDMyOEMzMjMuNTgyIDY0IDMyMCA2Ny41ODIgMzIwIDcyUzMyMy41ODIgODAgMzI4IDgwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Option(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M504 432H388.188L134.562 67.438C133.062 65.281 130.625 64 128 64H8C3.594 64 0 67.578 0 72S3.594 80 8 80H123.812L377.437 444.562C378.938 446.719 381.375 448 384 448H504C508.406 448 512 444.422 512 440S508.406 432 504 432ZM328 80H504C508.418 80 512 76.418 512 72S508.418 64 504 64H328C323.582 64 320 67.582 320 72S323.582 80 328 80Z" />
        </Icon>
    </>
}