
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `backward` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/backward?s=duotone backward}
 * @preview ![backward](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ1OS40OSA3MS40MDZMMjg4IDIxNC4yNzNWMjk3LjcyN0w0NTkuNDkgNDQwLjU5NEM0ODAuMTE3IDQ1Ny43MTYgNTExLjk5NiA0NDMuMzQzIDUxMS45OTYgNDE1Ljk3M1Y5Ni4wMjdDNTExLjk5NiA2OC42NTcgNDgwLjExNyA1NC4yODQgNDU5LjQ5IDcxLjQwNloiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMjQ0LjUzIDk2LjAyN1Y0MTUuOTczQzI0NC41MyA0NDMuMzQzIDIxMi42NTEgNDU3LjcxNiAxOTIuMDIzIDQ0MC41OTRMMCAyODAuNjIxQy0xNS4yNTIgMjY3Ljc0OCAtMTUuMjUyIDI0NC4yNTIgMCAyMzEuMzc5TDE5Mi4wMjMgNzEuNDA2QzIxMi42NTEgNTQuMjg0IDI0NC41MyA2OC42NTcgMjQ0LjUzIDk2LjAyN1oiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Backward(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M459.49 71.406L288 214.273V297.727L459.49 440.594C480.117 457.716 511.996 443.343 511.996 415.973V96.027C511.996 68.657 480.117 54.284 459.49 71.406Z" />
            <path d="M244.53 96.027V415.973C244.53 443.343 212.651 457.716 192.023 440.594L0 280.621C-15.252 267.748 -15.252 244.252 0 231.379L192.023 71.406C212.651 54.284 244.53 68.657 244.53 96.027Z" />
        </Icon>
    </>
}