
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `folder` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/folder?s=duotone folder}
 * @preview ![folder](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUxMiAxNDRWMTkySDBWODBDMCA1My41IDIxLjUgMzIgNDggMzJIMjA4TDI3MiA5Nkg0NjRDNDkwLjUgOTYgNTEyIDExNy41IDUxMiAxNDRaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTUxMiAxOTJWNDMyQzUxMiA0NTguNSA0OTAuNSA0ODAgNDY0IDQ4MEg0OEMyMS41IDQ4MCAwIDQ1OC41IDAgNDMyVjE5Mkg1MTJaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Folder(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M512 144V192H0V80C0 53.5 21.5 32 48 32H208L272 96H464C490.5 96 512 117.5 512 144Z" />
            <path d="M512 192V432C512 458.5 490.5 480 464 480H48C21.5 480 0 458.5 0 432V192H512Z" />
        </Icon>
    </>
}