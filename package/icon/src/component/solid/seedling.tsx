
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `seedling` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/seedling?s=solid seedling}
 * @preview ![seedling](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02NCA5NkgwQzAgMjE5Ljc1IDEwMC4yNSAzMjAgMjI0IDMyMFY0NDhDMjI0IDQ2NS42IDIzOC40IDQ4MCAyNTYgNDgwSDI1NkMyNzMuNiA0ODAgMjg4IDQ2NS42IDI4OCA0NDhWMzIwQzI4OCAxOTYuMjg4IDE4Ny43MTIgOTYgNjQgOTZaTTQ0OCAzMkMzNjMuNzUgMzIgMjkwLjYyNSA3OC41IDI1Mi4yNSAxNDcuMjVDMjgwIDE3Ny4zNzUgMzAwLjUgMjE0LjEyNSAzMTEuMjUgMjU0Ljc1QzQyNCAyNDMuMTI1IDUxMiAxNDcuODc1IDUxMiAzMkg0NDhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Seedling(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M64 96H0C0 219.75 100.25 320 224 320V448C224 465.6 238.4 480 256 480H256C273.6 480 288 465.6 288 448V320C288 196.288 187.712 96 64 96ZM448 32C363.75 32 290.625 78.5 252.25 147.25C280 177.375 300.5 214.125 311.25 254.75C424 243.125 512 147.875 512 32H448Z" />
        </Icon>
    </>
}