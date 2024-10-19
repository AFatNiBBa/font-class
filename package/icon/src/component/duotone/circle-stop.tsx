
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `circle-stop` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-stop?s=duotone circle-stop}
 * @preview ![circle-stop](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1NiAxNkMxMjMuNDIgMTYgMTYgMTIzLjQxOCAxNiAyNTZDMTYgMzg4LjU4IDEyMy40MiA0OTYgMjU2IDQ5NlM0OTYgMzg4LjU4IDQ5NiAyNTZDNDk2IDEyMy40MTggMzg4LjU4IDE2IDI1NiAxNlpNMzUyIDMyOEMzNTIgMzQxLjE5OSAzNDEuMTk5IDM1MiAzMjggMzUySDE4NEMxNzAuODAxIDM1MiAxNjAgMzQxLjE5OSAxNjAgMzI4VjE4NEMxNjAgMTcwLjc5OSAxNzAuODAxIDE2MCAxODQgMTYwSDMyOEMzNDEuMTk5IDE2MCAzNTIgMTcwLjc5OSAzNTIgMTg0VjMyOFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMzUyIDMyOEMzNTIgMzQxLjE5OSAzNDEuMTk5IDM1MiAzMjggMzUySDE4NEMxNzAuODAxIDM1MiAxNjAgMzQxLjE5OSAxNjAgMzI4VjE4NEMxNjAgMTcwLjc5OSAxNzAuODAxIDE2MCAxODQgMTYwSDMyOEMzNDEuMTk5IDE2MCAzNTIgMTcwLjc5OSAzNTIgMTg0VjMyOFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function CircleStop(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M256 16C123.42 16 16 123.418 16 256C16 388.58 123.42 496 256 496S496 388.58 496 256C496 123.418 388.58 16 256 16ZM352 328C352 341.199 341.199 352 328 352H184C170.801 352 160 341.199 160 328V184C160 170.799 170.801 160 184 160H328C341.199 160 352 170.799 352 184V328Z" />
            <path d="M352 328C352 341.199 341.199 352 328 352H184C170.801 352 160 341.199 160 328V184C160 170.799 170.801 160 184 160H328C341.199 160 352 170.799 352 184V328Z" />
        </Icon>
    </>
}