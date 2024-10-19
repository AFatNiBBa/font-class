
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `toilet-paper-blank-under` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/toilet-paper-blank-under?s=duotone toilet-paper-blank-under}
 * @preview ![toilet-paper-blank-under](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQxNiAzODRIOTZDNDMgMzg0IDAgMjk4IDAgMTkyQzAgODYgNDMgMCA5NiAwSDQxNkMzNjMgMCAzMjAgODYgMzIwIDE5MkMzMjAgMjk4IDM2MyAzODQgNDE2IDM4NFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNDE2IDBDMzYzIDAgMzIwIDg2IDMyMCAxOTJDMzIwIDI3Ni4wMzUgMzQ3LjA2OCAzNDcuMzIgMzg0LjY3OCAzNzMuMzI4TDM4NC42NzggMzczLjMyOEMzOTQuNTA4IDM4MC4xMjcgNDA1LjAxOCAzODQgNDE2IDM4NEgxMjhWNDgwQzEyOCA0OTcuNjcyIDE0Mi4zMjYgNTEyIDE2MCA1MTJINDgwQzQ5Ny42NzQgNTEyIDUxMiA0OTcuNjcyIDUxMiA0ODBWMTkyQzUxMiA4NiA0NjkgMCA0MTYgMFpNMzg0IDE5MkMzODQgMTU2LjYyNSAzOTguMzc1IDEyOCA0MTYgMTI4UzQ0OCAxNTYuNjI1IDQ0OCAxOTJTNDMzLjYyNSAyNTYgNDE2IDI1NlMzODQgMjI3LjM3NSAzODQgMTkyWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ToiletPaperBlankUnder(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M416 384H96C43 384 0 298 0 192C0 86 43 0 96 0H416C363 0 320 86 320 192C320 298 363 384 416 384Z" />
            <path d="M416 0C363 0 320 86 320 192C320 276.035 347.068 347.32 384.678 373.328L384.678 373.328C394.508 380.127 405.018 384 416 384H128V480C128 497.672 142.326 512 160 512H480C497.674 512 512 497.672 512 480V192C512 86 469 0 416 0ZM384 192C384 156.625 398.375 128 416 128S448 156.625 448 192S433.625 256 416 256S384 227.375 384 192Z" />
        </Icon>
    </>
}