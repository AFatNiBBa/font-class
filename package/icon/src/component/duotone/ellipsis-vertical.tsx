
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ellipsis-vertical` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/ellipsis-vertical?s=duotone ellipsis-vertical}
 * @preview ![ellipsis-vertical](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTEyOCAyNTZDMTI4IDIyMC42MTEgOTkuMzc1IDE5MiA2NCAxOTJTMCAyMjAuNjExIDAgMjU2UzI4LjYyNSAzMjAgNjQgMzIwUzEyOCAyOTEuMzg5IDEyOCAyNTZaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTEyOCA2NEMxMjggMjguNjExIDk5LjM3NSAwIDY0IDBTMCAyOC42MTEgMCA2NFMyOC42MjUgMTI4IDY0IDEyOFMxMjggOTkuMzg5IDEyOCA2NFpNMTI4IDQ0OEMxMjggNDEyLjYxMSA5OS4zNzUgMzg0IDY0IDM4NFMwIDQxMi42MTEgMCA0NDhTMjguNjI1IDUxMiA2NCA1MTJTMTI4IDQ4My4zODkgMTI4IDQ0OFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
const EllipsisVertical: typeof Icon = x => (
    <Icon viewBox="0 0 128 512" {...x}>
        <path class={generic.secondary} d="M128 256C128 220.611 99.375 192 64 192S0 220.611 0 256S28.625 320 64 320S128 291.389 128 256Z" />
            <path d="M128 64C128 28.611 99.375 0 64 0S0 28.611 0 64S28.625 128 64 128S128 99.389 128 64ZM128 448C128 412.611 99.375 384 64 384S0 412.611 0 448S28.625 512 64 512S128 483.389 128 448Z" />
    </Icon>
);

export default EllipsisVertical;