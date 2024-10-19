
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `arrow-up-right` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-right?s=duotone arrow-up-right}
 * @preview ![arrow-up-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI4OCAxNjBWMjE2LjU2Mkw4NC4yODEgNDIwLjI4MUM2OC42NTYgNDM1LjkwNiA0My4zNDQgNDM1LjkwNiAyNy43MTkgNDIwLjI4MVMxMi4wOTQgMzc5LjM0NCAyNy43MTkgMzYzLjcxOUwyMzEuNDM3IDE2MEgyODhaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTEyMCAxNjBDOTcuOTA2IDE2MCA4MCAxNDIuMDk0IDgwIDEyMFM5Ny45MDYgODAgMTIwIDgwSDMyOEMzNTAuMDk0IDgwIDM2OCA5Ny45MDYgMzY4IDEyMFYzMjhDMzY4IDM1MC4wOTQgMzUwLjA5NCAzNjggMzI4IDM2OFMyODggMzUwLjA5NCAyODggMzI4VjE2MEgxMjBaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ArrowUpRight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path class={generic.secondary} d="M288 160V216.562L84.281 420.281C68.656 435.906 43.344 435.906 27.719 420.281S12.094 379.344 27.719 363.719L231.437 160H288Z" />
            <path d="M120 160C97.906 160 80 142.094 80 120S97.906 80 120 80H328C350.094 80 368 97.906 368 120V328C368 350.094 350.094 368 328 368S288 350.094 288 328V160H120Z" />
        </Icon>
    </>
}