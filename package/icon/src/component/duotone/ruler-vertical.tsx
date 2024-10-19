
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ruler-vertical` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/ruler-vertical?s=duotone ruler-vertical}
 * @preview ![ruler-vertical](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE2MCAxMTJDMTYwIDEyMC44MDEgMTY3LjIwMSAxMjggMTc2IDEyOEgyNTZWMTkySDE3NkMxNjcuMjAxIDE5MiAxNjAgMTk5LjE5OSAxNjAgMjA4UzE2Ny4yMDEgMjI0IDE3NiAyMjRIMjU2VjI4OEgxNzZDMTY3LjIwMSAyODggMTYwIDI5NS4xOTkgMTYwIDMwNFMxNjcuMjAxIDMyMCAxNzYgMzIwSDI1NlYzODRIMTc2QzE2Ny4yMDEgMzg0IDE2MCAzOTEuMTk5IDE2MCA0MDBTMTY3LjIwMSA0MTYgMTc2IDQxNkgyNTZWNDgwQzI1NiA0OTcuNiAyNDEuNiA1MTIgMjI0IDUxMkgzMkMxNC40IDUxMiAwIDQ5Ny42IDAgNDgwVjMyQzAgMTQuNCAxNC40IDAgMzIgMEgyMjRDMjQxLjYgMCAyNTYgMTQuNCAyNTYgMzJWOTZIMTc2QzE2Ny4yMDEgOTYgMTYwIDEwMy4xOTkgMTYwIDExMloiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMTc2IDk2QzE2Ny4yMDEgOTYgMTYwIDEwMy4xOTkgMTYwIDExMlMxNjcuMjAxIDEyOCAxNzYgMTI4SDI1NlY5NkgxNzZaTTE2MCA0MDBDMTYwIDQwOC44MDEgMTY3LjIwMSA0MTYgMTc2IDQxNkgyNTZWMzg0SDE3NkMxNjcuMjAxIDM4NCAxNjAgMzkxLjE5OSAxNjAgNDAwWk0xNjAgMzA0QzE2MCAzMTIuODAxIDE2Ny4yMDEgMzIwIDE3NiAzMjBIMjU2VjI4OEgxNzZDMTY3LjIwMSAyODggMTYwIDI5NS4xOTkgMTYwIDMwNFpNMTYwIDIwOEMxNjAgMjE2LjgwMSAxNjcuMjAxIDIyNCAxNzYgMjI0SDI1NlYxOTJIMTc2QzE2Ny4yMDEgMTkyIDE2MCAxOTkuMTk5IDE2MCAyMDhaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
const RulerVertical: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path class={generic.secondary} d="M160 112C160 120.801 167.201 128 176 128H256V192H176C167.201 192 160 199.199 160 208S167.201 224 176 224H256V288H176C167.201 288 160 295.199 160 304S167.201 320 176 320H256V384H176C167.201 384 160 391.199 160 400S167.201 416 176 416H256V480C256 497.6 241.6 512 224 512H32C14.4 512 0 497.6 0 480V32C0 14.4 14.4 0 32 0H224C241.6 0 256 14.4 256 32V96H176C167.201 96 160 103.199 160 112Z" />
            <path d="M176 96C167.201 96 160 103.199 160 112S167.201 128 176 128H256V96H176ZM160 400C160 408.801 167.201 416 176 416H256V384H176C167.201 384 160 391.199 160 400ZM160 304C160 312.801 167.201 320 176 320H256V288H176C167.201 288 160 295.199 160 304ZM160 208C160 216.801 167.201 224 176 224H256V192H176C167.201 192 160 199.199 160 208Z" />
    </Icon>
);

export default RulerVertical;