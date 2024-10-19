
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `refrigerator` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/refrigerator?s=duotone refrigerator}
 * @preview ![refrigerator](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTAgMTkySDI4OFYxNjBIMFYxOTJaTTMyMCAxNjBWMTkySDM4NFYxNjBIMzIwWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0zMjAgMzY4QzMyMCAzNzYuODAxIDMxMi44MDEgMzg0IDMwNCAzODRTMjg4IDM3Ni44MDEgMjg4IDM2OFYxOTJIMFY0ODBDMCA0OTcuNjc0IDE0LjMyNiA1MTIgMzIgNTEySDM1MkMzNjkuNjc0IDUxMiAzODQgNDk3LjY3NCAzODQgNDgwVjE5MkgzMjBWMzY4Wk0zMjAgMEg2NEMyOC42NTQgMCAwIDI4LjY1NCAwIDY0VjE2MEgyODhWODBDMjg4IDcxLjE5OSAyOTUuMTk5IDY0IDMwNCA2NFMzMjAgNzEuMTk5IDMyMCA4MFYxNjBIMzg0VjY0QzM4NCAyOC42NTQgMzU1LjM0NiAwIDMyMCAwWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Refrigerator(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path opacity={.4} d="M0 192H288V160H0V192ZM320 160V192H384V160H320Z" />
            <path d="M320 368C320 376.801 312.801 384 304 384S288 376.801 288 368V192H0V480C0 497.674 14.326 512 32 512H352C369.674 512 384 497.674 384 480V192H320V368ZM320 0H64C28.654 0 0 28.654 0 64V160H288V80C288 71.199 295.199 64 304 64S320 71.199 320 80V160H384V64C384 28.654 355.346 0 320 0Z" />
        </Icon>
    </>
}