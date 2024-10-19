
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `van-shuttle` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/van-shuttle?s=duotone van-shuttle}
 * @preview ![van-shuttle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE2MCAzMjBDMTE1LjgxNiAzMjAgODAgMzU1LjgxNiA4MCA0MDBTMTE1LjgxNiA0ODAgMTYwIDQ4MFMyNDAgNDQ0LjE4NCAyNDAgNDAwUzIwNC4xODQgMzIwIDE2MCAzMjBaTTQ4MCAzMjBDNDM1LjgxNiAzMjAgNDAwIDM1NS44MTYgNDAwIDQwMFM0MzUuODE2IDQ4MCA0ODAgNDgwUzU2MCA0NDQuMTg0IDU2MCA0MDBTNTI0LjE4NCAzMjAgNDgwIDMyMFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNjI4Ljg3NSAyMTAuNjI1TDQ5NC4zOTEgNDkuMjY4QzQ4NS4yNzEgMzguMzI2IDQ3MS43NjIgMzIgNDU3LjUxOCAzMkg0OEMyMS42IDMyIDAgNTMuNiAwIDgwVjMzNkMwIDM2Mi40IDIxLjYgMzg0IDQ4IDM4NEg0OS42MTNDNTcuNDM4IDMyOS43OTEgMTAzLjYyNSAyODggMTYwIDI4OFMyNjIuNTYyIDMyOS43OTEgMjcwLjM4NyAzODRIMzY5LjYxM0MzNzcuNDM4IDMyOS43OTEgNDIzLjYyNSAyODggNDgwIDI4OFM1ODIuNTYyIDMyOS43OTEgNTkwLjM4NyAzODRINTkyQzYxOC40IDM4NCA2NDAgMzYyLjQgNjQwIDMzNlYyNDEuMzc1QzY0MCAyMzAuMTI1IDYzNiAyMTkuMjUgNjI4Ljg3NSAyMTAuNjI1Wk0xNjAgMTkySDY0Vjk2SDE2MFYxOTJaTTMyMCAxOTJIMjI0Vjk2SDMyMFYxOTJaTTM4NCAxOTJWOTZINDUwTDUzMCAxOTJIMzg0WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function VanShuttle(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path opacity={.4} d="M160 320C115.816 320 80 355.816 80 400S115.816 480 160 480S240 444.184 240 400S204.184 320 160 320ZM480 320C435.816 320 400 355.816 400 400S435.816 480 480 480S560 444.184 560 400S524.184 320 480 320Z" />
            <path d="M628.875 210.625L494.391 49.268C485.271 38.326 471.762 32 457.518 32H48C21.6 32 0 53.6 0 80V336C0 362.4 21.6 384 48 384H49.613C57.438 329.791 103.625 288 160 288S262.562 329.791 270.387 384H369.613C377.438 329.791 423.625 288 480 288S582.562 329.791 590.387 384H592C618.4 384 640 362.4 640 336V241.375C640 230.125 636 219.25 628.875 210.625ZM160 192H64V96H160V192ZM320 192H224V96H320V192ZM384 192V96H450L530 192H384Z" />
        </Icon>
    </>
}