
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `ruler-vertical` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/ruler-vertical?s=regular ruler-vertical}
 * @preview ![ruler-vertical](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgNDY0VjQ4QzI1NiAyMS42IDIzNC40IDAgMjA4IDBINDhDMjEuNiAwIDAgMjEuNiAwIDQ4VjQ2NEMwIDQ5MC40IDIxLjYgNTEyIDQ4IDUxMkgyMDhDMjM0LjQgNTEyIDI1NiA0OTAuNCAyNTYgNDY0Wk00OCA0NjRWNDhIMjA4Vjk2SDE2MEMxNTEuMiA5NiAxNDQgMTAzLjIgMTQ0IDExMlYxMTJDMTQ0IDEyMC44IDE1MS4yIDEyOCAxNjAgMTI4SDIwOFYxOTJIMTYwQzE1MS4yIDE5MiAxNDQgMTk5LjIgMTQ0IDIwOFYyMDhDMTQ0IDIxNi44IDE1MS4yIDIyNCAxNjAgMjI0SDIwOFYyODhIMTYwQzE1MS4yIDI4OCAxNDQgMjk1LjIgMTQ0IDMwNFYzMDRDMTQ0IDMxMi44IDE1MS4yIDMyMCAxNjAgMzIwSDIwOFYzODRIMTYwQzE1MS4yIDM4NCAxNDQgMzkxLjIgMTQ0IDQwMFY0MDBDMTQ0IDQwOC44IDE1MS4yIDQxNiAxNjAgNDE2SDIwOFY0NjRINDhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function RulerVertical(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 256 512" {...props}>
            <path d="M256 464V48C256 21.6 234.4 0 208 0H48C21.6 0 0 21.6 0 48V464C0 490.4 21.6 512 48 512H208C234.4 512 256 490.4 256 464ZM48 464V48H208V96H160C151.2 96 144 103.2 144 112V112C144 120.8 151.2 128 160 128H208V192H160C151.2 192 144 199.2 144 208V208C144 216.8 151.2 224 160 224H208V288H160C151.2 288 144 295.2 144 304V304C144 312.8 151.2 320 160 320H208V384H160C151.2 384 144 391.2 144 400V400C144 408.8 151.2 416 160 416H208V464H48Z" />
        </Icon>
    </>
}