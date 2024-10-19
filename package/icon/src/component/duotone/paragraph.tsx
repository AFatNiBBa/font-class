
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `paragraph` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/paragraph?s=duotone paragraph}
 * @preview ![paragraph](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM4NCA5NlY0NDhDMzg0IDQ2NS42NzQgMzY5LjY3NCA0ODAgMzUyLjAwMiA0ODBIMzUxLjk5OEMzMzQuMzI2IDQ4MCAzMjAgNDY1LjY3NCAzMjAgNDQ4Vjk2SDM4NFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNDQ3Ljk5OSA2My45OThWNjRDNDQ3Ljk5OSA4MS42NzQgNDMzLjY3MyA5NiA0MTYuMDAxIDk2SDI4Ny45OTlWNDQ4QzI4Ny45OTkgNDY1LjY3NCAyNzMuNjczIDQ4MCAyNTYuMDAxIDQ4MEgyNTUuOTk3QzIzOC4zMjUgNDgwIDIyMy45OTkgNDY1LjY3NCAyMjMuOTk5IDQ0OFYzNTJIMTk4Ljg1OUMxMTUuMjg4IDM1MiA0MC42NjkgMjkwLjg5MyAzMi43NDkgMjA3LjY5OUMyMy42NjEgMTEyLjI2NiA5OC40NDUgMzIgMTkxLjk5OSAzMkg0MTYuMDAxQzQzMy42NzMgMzIgNDQ3Ljk5OSA0Ni4zMjYgNDQ3Ljk5OSA2My45OThaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Paragraph(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path class={generic.secondary} d="M384 96V448C384 465.674 369.674 480 352.002 480H351.998C334.326 480 320 465.674 320 448V96H384Z" />
            <path d="M447.999 63.998V64C447.999 81.674 433.673 96 416.001 96H287.999V448C287.999 465.674 273.673 480 256.001 480H255.997C238.325 480 223.999 465.674 223.999 448V352H198.859C115.288 352 40.669 290.893 32.749 207.699C23.661 112.266 98.445 32 191.999 32H416.001C433.673 32 447.999 46.326 447.999 63.998Z" />
        </Icon>
    </>
}