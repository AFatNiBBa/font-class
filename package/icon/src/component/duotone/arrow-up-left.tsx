
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-up-left` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-left?s=duotone arrow-up-left}
 * @preview ![arrow-up-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE1Mi41NjIgMTYwTDM1Ni4yODEgMzYzLjcxOUMzNzEuOTA2IDM3OS4zNDQgMzcxLjkwNiA0MDQuNjU2IDM1Ni4yODEgNDIwLjI4MVMzMTUuMzQ0IDQzNS45MDYgMjk5LjcxOSA0MjAuMjgxTDk2IDIxNi41NjJWMTYwSDE1Mi41NjJaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTk2IDE2MFYzMjhDOTYgMzUwLjA5NCA3OC4wOTQgMzY4IDU2IDM2OFMxNiAzNTAuMDk0IDE2IDMyOFYxMjBDMTYgOTcuOTA2IDMzLjkwNiA4MCA1NiA4MEgyNjRDMjg2LjA5NCA4MCAzMDQgOTcuOTA2IDMwNCAxMjBTMjg2LjA5NCAxNjAgMjY0IDE2MEg5NloiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
const ArrowUpLeft: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M152.562 160L356.281 363.719C371.906 379.344 371.906 404.656 356.281 420.281S315.344 435.906 299.719 420.281L96 216.562V160H152.562Z" />
            <path d="M96 160V328C96 350.094 78.094 368 56 368S16 350.094 16 328V120C16 97.906 33.906 80 56 80H264C286.094 80 304 97.906 304 120S286.094 160 264 160H96Z" />
    </Icon>
);

export default ArrowUpLeft;