
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `container-storage` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/container-storage?s=duotone container-storage}
 * @preview ![container-storage](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ4IDk2VjQxNkg1OTJWOTZINDhaTTExMiAzNjhWMTQ0SDE0NFYzNjhIMTEyWk0yMDggMzY4VjE0NEgyNDBWMzY4SDIwOFpNMzA0IDM2OFYxNDRIMzM2VjM2OEgzMDRaTTQwMCAzNjhWMTQ0SDQzMlYzNjhINDAwWk00OTYgMzY4VjE0NEg1MjhWMzY4SDQ5NloiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNTkyIDQxNkg0OEMzOS4yNSA0MTYgMzIgNDIzLjI1IDMyIDQzMlY0NjRDMzIgNDcyLjc1IDM5LjI1IDQ4MCA0OCA0ODBINTkyQzYwMC43NSA0ODAgNjA4IDQ3Mi43NSA2MDggNDY0VjQzMkM2MDggNDIzLjI1IDYwMC43NSA0MTYgNTkyIDQxNlpNNTkyIDMySDQ4QzM5LjI1IDMyIDMyIDM5LjI1IDMyIDQ4VjgwQzMyIDg4Ljc1IDM5LjI1IDk2IDQ4IDk2SDU5MkM2MDAuNzUgOTYgNjA4IDg4Ljc1IDYwOCA4MFY0OEM2MDggMzkuMjUgNjAwLjc1IDMyIDU5MiAzMloiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function ContainerStorage(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path opacity={.4} d="M48 96V416H592V96H48ZM112 368V144H144V368H112ZM208 368V144H240V368H208ZM304 368V144H336V368H304ZM400 368V144H432V368H400ZM496 368V144H528V368H496Z" />
            <path d="M592 416H48C39.25 416 32 423.25 32 432V464C32 472.75 39.25 480 48 480H592C600.75 480 608 472.75 608 464V432C608 423.25 600.75 416 592 416ZM592 32H48C39.25 32 32 39.25 32 48V80C32 88.75 39.25 96 48 96H592C600.75 96 608 88.75 608 80V48C608 39.25 600.75 32 592 32Z" />
        </Icon>
    </>
}