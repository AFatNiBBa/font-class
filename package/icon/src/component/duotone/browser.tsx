
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `browser` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/browser?s=duotone browser}
 * @preview ![browser](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTAgMjI0VjQxNkMwIDQ1MS4zNDYgMjguNjU0IDQ4MCA2NCA0ODBINDQ4QzQ4My4zNDYgNDgwIDUxMiA0NTEuMzQ2IDUxMiA0MTZWMjI0SDBaTTc2IDE2MEgxMTZDMTIyLjYyNSAxNjAgMTI4IDE1NC42MjUgMTI4IDE0OFYxMDhDMTI4IDEwMS4zNzUgMTIyLjYyNSA5NiAxMTYgOTZINzZDNjkuMzc1IDk2IDY0IDEwMS4zNzUgNjQgMTA4VjE0OEM2NCAxNTQuNjI1IDY5LjM3NSAxNjAgNzYgMTYwWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik00NDggMzJINjRDMjguNjU0IDMyIDAgNjAuNjU0IDAgOTZWMjI0SDUxMlY5NkM1MTIgNjAuNjU0IDQ4My4zNDYgMzIgNDQ4IDMyWk0xMjggMTQ4QzEyOCAxNTQuNjI1IDEyMi42MjUgMTYwIDExNiAxNjBINzZDNjkuMzc1IDE2MCA2NCAxNTQuNjI1IDY0IDE0OFYxMDhDNjQgMTAxLjM3NSA2OS4zNzUgOTYgNzYgOTZIMTE2QzEyMi42MjUgOTYgMTI4IDEwMS4zNzUgMTI4IDEwOFYxNDhaTTQ0OCAxNDhDNDQ4IDE1NC42MjUgNDQyLjYyNSAxNjAgNDM2IDE2MEgxNzJDMTY1LjM3NSAxNjAgMTYwIDE1NC42MjUgMTYwIDE0OFYxMDhDMTYwIDEwMS4zNzUgMTY1LjM3NSA5NiAxNzIgOTZINDM2QzQ0Mi42MjUgOTYgNDQ4IDEwMS4zNzUgNDQ4IDEwOFYxNDhaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Browser(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M0 224V416C0 451.346 28.654 480 64 480H448C483.346 480 512 451.346 512 416V224H0ZM76 160H116C122.625 160 128 154.625 128 148V108C128 101.375 122.625 96 116 96H76C69.375 96 64 101.375 64 108V148C64 154.625 69.375 160 76 160Z" />
            <path d="M448 32H64C28.654 32 0 60.654 0 96V224H512V96C512 60.654 483.346 32 448 32ZM128 148C128 154.625 122.625 160 116 160H76C69.375 160 64 154.625 64 148V108C64 101.375 69.375 96 76 96H116C122.625 96 128 101.375 128 108V148ZM448 148C448 154.625 442.625 160 436 160H172C165.375 160 160 154.625 160 148V108C160 101.375 165.375 96 172 96H436C442.625 96 448 101.375 448 108V148Z" />
        </Icon>
    </>
}