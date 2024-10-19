
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `mobile-screen` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/mobile-screen?s=duotone mobile-screen}
 * @preview ![mobile-screen](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTMwNCAwSDgwQzUzLjUgMCAzMiAyMS41IDMyIDQ4VjQ2NEMzMiA0OTAuNSA1My41IDUxMiA4MCA1MTJIMzA0QzMzMC41IDUxMiAzNTIgNDkwLjUgMzUyIDQ2NFY0OEMzNTIgMjEuNSAzMzAuNSAwIDMwNCAwWk0yNDAgNDQ4QzI0MCA0NTYuODM3IDIzMi44MzcgNDY0IDIyNCA0NjRIMTYwQzE1MS4xNjMgNDY0IDE0NCA0NTYuODM3IDE0NCA0NDhWNDQ4QzE0NCA0MzkuMTYzIDE1MS4xNjMgNDMyIDE2MCA0MzJIMjI0QzIzMi44MzcgNDMyIDI0MCA0MzkuMTYzIDI0MCA0NDhWNDQ4Wk0yODggMzg0SDk2VjY0SDI4OFYzODRaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTI4OCAzODRIOTZWNjRIMjg4VjM4NFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function MobileScreen(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path class={generic.secondary} d="M304 0H80C53.5 0 32 21.5 32 48V464C32 490.5 53.5 512 80 512H304C330.5 512 352 490.5 352 464V48C352 21.5 330.5 0 304 0ZM240 448C240 456.837 232.837 464 224 464H160C151.163 464 144 456.837 144 448V448C144 439.163 151.163 432 160 432H224C232.837 432 240 439.163 240 448V448ZM288 384H96V64H288V384Z" />
            <path d="M288 384H96V64H288V384Z" />
        </Icon>
    </>
}