
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `clipboard-list-check` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/clipboard-list-check?s=regular clipboard-list-check}
 * @preview ![clipboard-list-check](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjAgNjRIMjcwLjM4N0MyNjIuOTczIDI3LjQ4NCAyMzAuNzAxIDAgMTkyIDBTMTIxLjAyNyAyNy40ODQgMTEzLjYxMyA2NEg2NEMyOC42NTQgNjQgMCA5Mi42NTYgMCAxMjhWNDQ4QzAgNDgzLjM0NCAyOC42NTQgNTEyIDY0IDUxMkgzMjBDMzU1LjM0NiA1MTIgMzg0IDQ4My4zNDQgMzg0IDQ0OFYxMjhDMzg0IDkyLjY1NiAzNTUuMzQ2IDY0IDMyMCA2NFpNMTkyIDQ4QzIwNS4yMzQgNDggMjE2IDU4Ljc2NiAyMTYgNzJTMjA1LjIzNCA5NiAxOTIgOTZTMTY4IDg1LjIzNCAxNjggNzJTMTc4Ljc2NiA0OCAxOTIgNDhaTTMzNiA0NDhDMzM2IDQ1Ni44MiAzMjguODIyIDQ2NCAzMjAgNDY0SDY0QzU1LjE3OCA0NjQgNDggNDU2LjgyIDQ4IDQ0OFYxMjhDNDggMTE5LjE4IDU1LjE3OCAxMTIgNjQgMTEySDgyLjI2NEM4MC45MzIgMTE3LjE0MSA4MCAxMjIuNDQxIDgwIDEyOFYxNDRDODAgMTUyLjgzNiA4Ny4xNjQgMTYwIDk2IDE2MEgyODhDMjk2LjgzNiAxNjAgMzA0IDE1Mi44MzYgMzA0IDE0NFYxMjhDMzA0IDEyMi40NDEgMzAzLjA2OCAxMTcuMTQxIDMwMS43MzYgMTEySDMyMEMzMjguODIyIDExMiAzMzYgMTE5LjE4IDMzNiAxMjhWNDQ4Wk0yODggMjU2SDE3NkMxNjcuMTU2IDI1NiAxNjAgMjYzLjE1NiAxNjAgMjcyUzE2Ny4xNTYgMjg4IDE3NiAyODhIMjg4QzI5Ni44NDQgMjg4IDMwNCAyODAuODQ0IDMwNCAyNzJTMjk2Ljg0NCAyNTYgMjg4IDI1NlpNMjg4IDM1MkgxNzZDMTY3LjE1NiAzNTIgMTYwIDM1OS4xNTYgMTYwIDM2OFMxNjcuMTU2IDM4NCAxNzYgMzg0SDI4OEMyOTYuODQ0IDM4NCAzMDQgMzc2Ljg0NCAzMDQgMzY4UzI5Ni44NDQgMzUyIDI4OCAzNTJaTTEwNCAzNDRDOTAuNzQ2IDM0NCA4MCAzNTQuNzQ2IDgwIDM2OFM5MC43NDYgMzkyIDEwNCAzOTJDMTE3LjI1NiAzOTIgMTI4IDM4MS4yNTQgMTI4IDM2OFMxMTcuMjU2IDM0NCAxMDQgMzQ0Wk0xMDggMjg4QzExMi4wOTQgMjg4IDExNi4xODggMjg2LjQzOCAxMTkuMzEyIDI4My4zMTJMMTY3LjMxMiAyMzUuMzEyQzE3My41NjIgMjI5LjA2MiAxNzMuNTYyIDIxOC45MzcgMTY3LjMxMiAyMTIuNjg4UzE1MC45MzcgMjA2LjQzOCAxNDQuNjg4IDIxMi42ODhMMTA4IDI0OS4zNzVMOTUuMzEyIDIzNi42ODhDODkuMDYyIDIzMC40MzggNzguOTM3IDIzMC40MzggNzIuNjg4IDIzNi42ODhTNjYuNDM4IDI1My4wNjMgNzIuNjg4IDI1OS4zMTJMOTYuNjg4IDI4My4zMTJDOTkuODEyIDI4Ni40MzggMTAzLjkwNiAyODggMTA4IDI4OFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ClipboardListCheck(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M320 64H270.387C262.973 27.484 230.701 0 192 0S121.027 27.484 113.613 64H64C28.654 64 0 92.656 0 128V448C0 483.344 28.654 512 64 512H320C355.346 512 384 483.344 384 448V128C384 92.656 355.346 64 320 64ZM192 48C205.234 48 216 58.766 216 72S205.234 96 192 96S168 85.234 168 72S178.766 48 192 48ZM336 448C336 456.82 328.822 464 320 464H64C55.178 464 48 456.82 48 448V128C48 119.18 55.178 112 64 112H82.264C80.932 117.141 80 122.441 80 128V144C80 152.836 87.164 160 96 160H288C296.836 160 304 152.836 304 144V128C304 122.441 303.068 117.141 301.736 112H320C328.822 112 336 119.18 336 128V448ZM288 256H176C167.156 256 160 263.156 160 272S167.156 288 176 288H288C296.844 288 304 280.844 304 272S296.844 256 288 256ZM288 352H176C167.156 352 160 359.156 160 368S167.156 384 176 384H288C296.844 384 304 376.844 304 368S296.844 352 288 352ZM104 344C90.746 344 80 354.746 80 368S90.746 392 104 392C117.256 392 128 381.254 128 368S117.256 344 104 344ZM108 288C112.094 288 116.188 286.438 119.312 283.312L167.312 235.312C173.562 229.062 173.562 218.937 167.312 212.688S150.937 206.438 144.688 212.688L108 249.375L95.312 236.688C89.062 230.438 78.937 230.438 72.688 236.688S66.438 253.063 72.688 259.312L96.688 283.312C99.812 286.438 103.906 288 108 288Z" />
        </Icon>
    </>
}