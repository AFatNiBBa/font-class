
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `tablet` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/tablet?s=duotone tablet}
 * @preview ![tablet](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTAgMzg0VjQ0OEMwIDQ4My4zNDYgMjguNjU0IDUxMiA2NCA1MTJIMzg0QzQxOS4zNDYgNTEyIDQ0OCA0ODMuMzQ2IDQ0OCA0NDhWMzg0SDBaTTI4OCA0NDhDMjg4IDQ1Ni44MzcgMjgwLjgzNyA0NjQgMjcyIDQ2NEgxNzZDMTY3LjE2MyA0NjQgMTYwIDQ1Ni44MzcgMTYwIDQ0OFY0NDhDMTYwIDQzOS4xNjMgMTY3LjE2MyA0MzIgMTc2IDQzMkgyNzJDMjgwLjgzNyA0MzIgMjg4IDQzOS4xNjMgMjg4IDQ0OFY0NDhaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTQ0OCA2NFYzODRIMFY2NEMwIDI4LjY1MiAyOC42NTQgMCA2NCAwSDM4NEM0MTkuMzQ2IDAgNDQ4IDI4LjY1MiA0NDggNjRaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Tablet(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path opacity={.4} d="M0 384V448C0 483.346 28.654 512 64 512H384C419.346 512 448 483.346 448 448V384H0ZM288 448C288 456.837 280.837 464 272 464H176C167.163 464 160 456.837 160 448V448C160 439.163 167.163 432 176 432H272C280.837 432 288 439.163 288 448V448Z" />
            <path d="M448 64V384H0V64C0 28.652 28.654 0 64 0H384C419.346 0 448 28.652 448 64Z" />
        </Icon>
    </>
}