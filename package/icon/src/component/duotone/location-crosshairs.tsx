
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `location-crosshairs` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/location-crosshairs?s=duotone location-crosshairs}
 * @preview ![location-crosshairs](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1NiAxNjhDMjA3LjM3NSAxNjggMTY4IDIwNy4zNzUgMTY4IDI1NlMyMDcuMzc1IDM0NCAyNTYgMzQ0UzM0NCAzMDQuNjI1IDM0NCAyNTZTMzA0LjYyNSAxNjggMjU2IDE2OFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNDgwIDIyNEg0NDUuMTI1QzQzMS42MjUgMTQzLjYyNSAzNjguMzc1IDgwLjM3NSAyODggNjYuODc1VjMyQzI4OCAxNC4zMjcgMjczLjY3MyAwIDI1NiAwSDI1NkMyMzguMzI3IDAgMjI0IDE0LjMyNyAyMjQgMzJWNjYuODc1QzE0My42MjUgODAuMzc1IDgwLjM3NSAxNDMuNjI1IDY2Ljg3NSAyMjRIMzJDMTQuMzI3IDIyNCAwIDIzOC4zMjcgMCAyNTZWMjU2QzAgMjczLjY3MyAxNC4zMjcgMjg4IDMyIDI4OEg2Ni44NzVDODAuMzc1IDM2OC4zNzUgMTQzLjYyNSA0MzEuNjI1IDIyNCA0NDUuMTI1VjQ4MEMyMjQgNDk3LjY3MyAyMzguMzI3IDUxMiAyNTYgNTEySDI1NkMyNzMuNjczIDUxMiAyODggNDk3LjY3MyAyODggNDgwVjQ0NS4xMjVDMzY4LjM3NSA0MzEuNjI1IDQzMS42MjUgMzY4LjM3NSA0NDUuMTI1IDI4OEg0ODBDNDk3LjY3MyAyODggNTEyIDI3My42NzMgNTEyIDI1NlYyNTZDNTEyIDIzOC4zMjcgNDk3LjY3MyAyMjQgNDgwIDIyNFpNMjU2IDM4NEMxODUuMjUgMzg0IDEyOCAzMjYuNzUgMTI4IDI1NlMxODUuMjUgMTI4IDI1NiAxMjhTMzg0IDE4NS4yNSAzODQgMjU2UzMyNi43NSAzODQgMjU2IDM4NFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function LocationCrosshairs(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M256 168C207.375 168 168 207.375 168 256S207.375 344 256 344S344 304.625 344 256S304.625 168 256 168Z" />
            <path d="M480 224H445.125C431.625 143.625 368.375 80.375 288 66.875V32C288 14.327 273.673 0 256 0H256C238.327 0 224 14.327 224 32V66.875C143.625 80.375 80.375 143.625 66.875 224H32C14.327 224 0 238.327 0 256V256C0 273.673 14.327 288 32 288H66.875C80.375 368.375 143.625 431.625 224 445.125V480C224 497.673 238.327 512 256 512H256C273.673 512 288 497.673 288 480V445.125C368.375 431.625 431.625 368.375 445.125 288H480C497.673 288 512 273.673 512 256V256C512 238.327 497.673 224 480 224ZM256 384C185.25 384 128 326.75 128 256S185.25 128 256 128S384 185.25 384 256S326.75 384 256 384Z" />
        </Icon>
    </>
}