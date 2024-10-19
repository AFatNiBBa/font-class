
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `quote-left-round` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/quote-left-round?s=duotone quote-left-round}
 * @preview ![quote-left-round](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQwMCAyNTZDMzk0LjAwMiAyNTYgMzg4LjIzIDI1Ni44NTcgMzgyLjQ4NiAyNTcuNzY2TDM4NCAyNTZWMTkyQzM4NCAxNTYuNzUgNDEyLjc1IDEyOCA0NDggMTI4SDQ1NkM0NjkuMjUgMTI4IDQ4MCAxMTcuMjUgNDgwIDEwNFY1NkM0ODAgNDIuNzUgNDY5LjI1IDMyIDQ1NiAzMkg0NDhDMzU5LjYyNSAzMiAyODggMTAzLjYyNSAyODggMTkyVjM2OEMyODggNDI5Ljg1NSAzMzguMTQ1IDQ4MCA0MDAgNDgwUzUxMiA0MjkuODU1IDUxMiAzNjhTNDYxLjg1NSAyNTYgNDAwIDI1NloiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMTEyIDI1NkMxMDYuMDAyIDI1NiAxMDAuMjMgMjU2Ljg1NyA5NC40ODYgMjU3Ljc2Nkw5NiAyNTZWMTkyQzk2IDE1Ni43NSAxMjQuNzUgMTI4IDE2MCAxMjhIMTY4QzE4MS4yNSAxMjggMTkyIDExNy4yNSAxOTIgMTA0VjU2QzE5MiA0Mi43NSAxODEuMjUgMzIgMTY4IDMySDE2MEM3MS42MjUgMzIgMCAxMDMuNjI1IDAgMTkyVjM2OEMwIDQyOS44NTUgNTAuMTQ1IDQ4MCAxMTIgNDgwUzIyNCA0MjkuODU1IDIyNCAzNjhTMTczLjg1NSAyNTYgMTEyIDI1NloiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function QuoteLeftRound(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M400 256C394.002 256 388.23 256.857 382.486 257.766L384 256V192C384 156.75 412.75 128 448 128H456C469.25 128 480 117.25 480 104V56C480 42.75 469.25 32 456 32H448C359.625 32 288 103.625 288 192V368C288 429.855 338.145 480 400 480S512 429.855 512 368S461.855 256 400 256Z" />
            <path d="M112 256C106.002 256 100.23 256.857 94.486 257.766L96 256V192C96 156.75 124.75 128 160 128H168C181.25 128 192 117.25 192 104V56C192 42.75 181.25 32 168 32H160C71.625 32 0 103.625 0 192V368C0 429.855 50.145 480 112 480S224 429.855 224 368S173.855 256 112 256Z" />
        </Icon>
    </>
}